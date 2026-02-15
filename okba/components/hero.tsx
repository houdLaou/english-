import Link from "next/link"
import { Brain, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
          <Sparkles className="h-4 w-4" />
          <span>AI-Powered Education</span>
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">Generate Quizzes</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Instantly with AI
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Transform any topic into an interactive quiz in seconds. Our AI-powered platform
          demonstrates how artificial intelligence can revolutionize the way we learn and assess knowledge.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/quiz">
            <Button size="lg" className="gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              <Brain className="h-5 w-5" />
              Generate a Quiz
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg" className="gap-2 px-8">
              Learn How It Works
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: "Topics Supported", value: "Any Subject" },
            { label: "Generation Time", value: "< 10 seconds" },
            { label: "Question Types", value: "Multiple Choice" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card/50 px-6 py-4 backdrop-blur-sm">
              <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
