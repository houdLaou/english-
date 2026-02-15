import { User } from "lucide-react"

const teamMembers = [
  {
    name: "Soltani Okba",
    initials: "SO",
  },
  {
    name: "Merzougui Mohammed Abdeldjalil",
    initials: "MM",
  },
  {
    name: "Bouazza Ahmed Abdelkader",
    initials: "BA",
  },
  {
    name: "Laouaoudja Houd",
    initials: "LH",
  },
]

export function Team() {
  return (
    <section id="team" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            The Team
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Meet the Developers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            ESI students passionate about leveraging AI to improve education.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-heading text-xl font-bold">{member.initials}</span>
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">ESI Student</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
