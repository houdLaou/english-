import Image from "next/image"
import Link from "next/link"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/esi-logo.png"
            alt="ESI Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight text-foreground">
              QuizAI
            </span>
            <span className="text-xs text-muted-foreground">by ESI Students</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Generate Quiz
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Team
          </Link>
        </nav>
        <Link href="/quiz">
          <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">Start Quiz</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}
