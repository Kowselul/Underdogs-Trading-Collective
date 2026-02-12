"use client"

import { Shield, GraduationCap, Users } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const values = [
  {
    icon: Shield,
    title: "Risk First. Always.",
    description:
      "We protect capital before chasing profits. Every trade starts with a plan.",
  },
  {
    icon: GraduationCap,
    title: "Learn by Doing.",
    description:
      "No hand-holding — we share setups, review losses, and grow through real experience.",
  },
  {
    icon: Users,
    title: "Stronger Together.",
    description:
      "Accountability, feedback, and support from traders who actually care about your progress.",
  },
]

function ValueCard({ value, delay }: { value: typeof values[number]; delay: number }) {
  const anim = useAnimateOnScroll({ delay })
  return (
    <div
      ref={anim.ref}
      className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30 hover:bg-card/50"
      style={anim.style}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
        <value.icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-card-foreground">
          {value.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {value.description}
        </p>
      </div>
    </div>
  )
}

export function About() {
  const left = useAnimateOnScroll()

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div ref={left.ref} style={left.style}>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Story
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Clarity Over Noise. Discipline Over Hype.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              In a space often driven by emotion and exaggeration, we built a
              collective grounded in structure and accountability.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Underdogs brings together traders committed to education, risk
              management, and consistent execution. We focus on refining
              process, strengthening mindset, and building skill over time.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Because real progress isn&apos;t loud — it&apos;s disciplined.
            </p>
          </div>

          {/* Right: value cards */}
          <div className="flex flex-col gap-4">
            {values.map((value, i) => (
              <ValueCard key={value.title} value={value} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
