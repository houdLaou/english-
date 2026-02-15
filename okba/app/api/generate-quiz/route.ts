import { generateText, Output } from "ai"
import { z } from "zod"

export const maxDuration = 60

const quizSchema = z.object({
  title: z.string().describe("A descriptive title for the quiz"),
  questions: z
    .array(
      z.object({
        id: z.number().describe("Question number starting from 1"),
        question: z.string().describe("The quiz question text"),
        options: z
          .array(z.string())
          .describe("Exactly 4 answer options labeled A, B, C, D"),
        correctAnswer: z
          .number()
          .describe("Index (0-3) of the correct answer in the options array"),
        explanation: z
          .string()
          .describe("Brief explanation of why the correct answer is right"),
      })
    )
    .describe("Array of quiz questions"),
})

export async function POST(req: Request) {
  const { topic, numQuestions, difficulty } = await req.json()

  const { output } = await generateText({
    model: "openai/gpt-4o-mini",
    output: Output.object({
      schema: quizSchema,
    }),
    prompt: `Generate a quiz about "${topic}" with exactly ${numQuestions || 5} multiple-choice questions at ${difficulty || "medium"} difficulty level.

Requirements:
- Each question should have exactly 4 options
- Questions should be educational and factually accurate
- The explanation should be concise but informative
- Make sure the questions cover different aspects of the topic
- Difficulty level: ${difficulty || "medium"} (easy = basic recall, medium = understanding, hard = analysis and application)
- Write everything in English`,
  })

  return Response.json({ quiz: output })
}
