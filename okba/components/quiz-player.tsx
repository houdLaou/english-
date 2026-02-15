"use client"

import { useState } from "react"
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { QuizData } from "@/components/quiz-form"
import { cn } from "@/lib/utils"

interface QuizPlayerProps {
  quiz: QuizData
  onReset: () => void
}

export function QuizPlayer({ quiz, onReset }: QuizPlayerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + (hasAnswered ? 1 : 0)) / quiz.questions.length) * 100

  function handleSelectAnswer(index: number) {
    if (hasAnswered) return
    setSelectedAnswer(index)
    setHasAnswered(true)
    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  function handleNext() {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setHasAnswered(false)
    } else {
      setIsFinished(true)
    }
  }

  if (isFinished) {
    const percentage = Math.round((score / quiz.questions.length) * 100)
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <Trophy className="h-12 w-12 text-primary" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground">Quiz Complete!</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          {"Here's how you did:"}
        </p>

        <div className="mt-8 grid w-full max-w-sm gap-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-4xl font-bold text-primary">{percentage}%</p>
            <p className="text-sm text-muted-foreground">Score</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-2xl font-bold text-success">{score}</p>
              <p className="text-sm text-muted-foreground">Correct</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-2xl font-bold text-destructive">
                {quiz.questions.length - score}
              </p>
              <p className="text-sm text-muted-foreground">Incorrect</p>
            </div>
          </div>
        </div>

        <Button onClick={onReset} className="mt-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
          <RotateCcw className="h-4 w-4" />
          Generate Another Quiz
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
          <span className="font-medium text-foreground">
            Score: {score}/{currentQuestion + (hasAnswered ? 1 : 0)}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-heading text-xl font-semibold leading-relaxed text-foreground">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswer
          const isSelected = index === selectedAnswer

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={hasAnswered}
              className={cn(
                "flex items-center gap-4 rounded-xl border p-4 text-left transition-all",
                !hasAnswered &&
                  "cursor-pointer border-border bg-card hover:border-primary/50 hover:bg-primary/5",
                hasAnswered && isCorrect && "border-success bg-success/10",
                hasAnswered && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                hasAnswered && !isCorrect && !isSelected && "border-border bg-card opacity-50"
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold",
                  !hasAnswered && "bg-muted text-foreground",
                  hasAnswered && isCorrect && "bg-success text-success-foreground",
                  hasAnswered && isSelected && !isCorrect && "bg-destructive text-destructive-foreground",
                  hasAnswered && !isCorrect && !isSelected && "bg-muted text-muted-foreground"
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span
                className={cn(
                  "flex-1 text-sm font-medium",
                  hasAnswered && isCorrect && "text-foreground",
                  hasAnswered && isSelected && !isCorrect && "text-foreground",
                  hasAnswered && !isCorrect && !isSelected && "text-muted-foreground"
                )}
              >
                {option}
              </span>
              {hasAnswered && isCorrect && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
              )}
              {hasAnswered && isSelected && !isCorrect && (
                <XCircle className="h-5 w-5 shrink-0 text-destructive" />
              )}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {hasAnswered && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm font-semibold text-primary">Explanation</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {hasAnswered && (
        <Button
          onClick={handleNext}
          className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          {currentQuestion < quiz.questions.length - 1 ? (
            <>
              Next Question
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <>
              See Results
              <Trophy className="h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  )
}
