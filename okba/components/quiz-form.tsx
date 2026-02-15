"use client"

import { useState, useEffect } from "react"
import { Brain, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface QuizFormProps {
  onQuizGenerated: (quiz: QuizData) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  suggestedTopic?: string
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface QuizData {
  title: string
  questions: QuizQuestion[]
}

export function QuizForm({ onQuizGenerated, isLoading, setIsLoading, suggestedTopic }: QuizFormProps) {
  const [topic, setTopic] = useState("")

  useEffect(() => {
    if (suggestedTopic) {
      setTopic(suggestedTopic)
    }
  }, [suggestedTopic])
  const [numQuestions, setNumQuestions] = useState("5")
  const [difficulty, setDifficulty] = useState("medium")

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    if (!topic.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          numQuestions: parseInt(numQuestions),
          difficulty,
        }),
      })

      if (!response.ok) throw new Error("Failed to generate quiz")

      const data = await response.json()
      onQuizGenerated(data.quiz)
    } catch (error) {
      console.error("Error generating quiz:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleGenerate} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="topic" className="text-sm font-medium text-foreground">
          Quiz Topic
        </Label>
        <Input
          id="topic"
          placeholder="e.g., World War II, Photosynthesis, Python Programming..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="h-12 border-border bg-background text-foreground placeholder:text-muted-foreground"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="numQuestions" className="text-sm font-medium text-foreground">
            Number of Questions
          </Label>
          <Select value={numQuestions} onValueChange={setNumQuestions}>
            <SelectTrigger className="h-12 border-border bg-background text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3 Questions</SelectItem>
              <SelectItem value="5">5 Questions</SelectItem>
              <SelectItem value="10">10 Questions</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty" className="text-sm font-medium text-foreground">
            Difficulty Level
          </Label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="h-12 border-border bg-background text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading || !topic.trim()}
        className="h-12 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Generating Quiz...
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5" />
            Generate Quiz with AI
          </>
        )}
      </Button>
    </form>
  )
}
