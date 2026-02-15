import { Brain, Zap, BookOpen, Target, RefreshCw, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Generated Questions",
    description:
      "Leveraging advanced language models to create relevant, well-structured quiz questions on any topic.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description:
      "Get a complete quiz with multiple-choice questions generated in seconds, not hours.",
  },
  {
    icon: BookOpen,
    title: "Any Subject",
    description:
      "From computer science to literature, generate quizzes across any academic domain or topic.",
  },
  {
    icon: Target,
    title: "Adjustable Difficulty",
    description:
      "Choose the difficulty level and number of questions to match your learning needs.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Variations",
    description:
      "Generate fresh quizzes every time, ensuring unique learning experiences with each attempt.",
  },
  {
    icon: Users,
    title: "Built for Education",
    description:
      "Designed to support students and educators in creating effective assessment materials.",
  },
]

export function Features() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            How AI Supports Education
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our prototype demonstrates the potential of AI in creating educational
            content quickly and accurately.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
