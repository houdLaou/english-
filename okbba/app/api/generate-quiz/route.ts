import { getQuiz } from "@/lib/quiz-bank"

export async function POST(req: Request) {
  const { topic, numQuestions, difficulty } = await req.json()

  if (!topic || typeof topic !== "string") {
    return Response.json({ error: "Topic is required" }, { status: 400 })
  }

  // Simulate AI generation delay for a realistic feel
  await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000))

  const quiz = getQuiz(topic, numQuestions || 5, difficulty || "medium")

  return Response.json({ quiz })
}
