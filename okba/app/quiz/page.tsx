"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuizForm } from "@/components/quiz-form"
import { QuizPlayer } from "@/components/quiz-player"
import type { QuizData } from "@/components/quiz-form"
import { Brain, BookOpen, Lightbulb } from "lucide-react"

export default function QuizPage() {
  const [quiz, setQuiz] = useState<QuizData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedTopic, setSuggestedTopic] = useState("")

  function handleReset() {
    setQuiz(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 py-12">
        <div className="mx-auto max-w-2xl">
          {!quiz ? (
            <>
              {/* Form Header */}
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                  Generate Your Quiz
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Enter a topic and let AI create a custom quiz for you
                </p>
              </div>

              {/* Quiz Generation Form */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <QuizForm
                  onQuizGenerated={setQuiz}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  suggestedTopic={suggestedTopic}
                />
              </div>

              {/* Loading state with animated tips */}
              {isLoading && (
                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-primary">Did you know?</p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground">
                          AI models can analyze vast amounts of educational content to create
                          well-structured questions that test different levels of understanding,
                          from basic recall to critical analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <LoadingPulse />
                </div>
              )}

              {/* Example topics */}
              {!isLoading && (
                <div className="mt-8">
                  <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
                    Try these topics
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Machine Learning",
                      "The Solar System",
                      "World History",
                      "Data Structures",
                      "Climate Change",
                      "Shakespeare",
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSuggestedTopic(t)}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Quiz Header */}
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {quiz.title}
                </h1>
                <p className="mt-2 text-muted-foreground">
                  {quiz.questions.length} questions - Good luck!
                </p>
              </div>

              {/* Quiz Player */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <QuizPlayer quiz={quiz} onReset={handleReset} />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function LoadingPulse() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary" style={{ animationDelay: "600ms" }} />
    </div>
  )
}
