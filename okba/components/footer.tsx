import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/esi-logo.png"
            alt="ESI Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-heading text-lg font-bold text-foreground">
            QuizAI
          </span>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          An English project at the Higher National School of Computer Science (ESI)
          demonstrating AI's potential in education.
        </p>
        <div className="text-xs text-muted-foreground">
          {'2025 ESI QuizAI - Built with AI for Education'}
        </div>
      </div>
    </footer>
  )
}
