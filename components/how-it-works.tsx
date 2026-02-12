"use client"

import { UserPlus, BookOpen, BarChart3 } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Join the Collective",
    description:
      "Sign up and get instant access to our community of traders. No gatekeeping — just real people sharing real setups.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Learn & Develop",
    description:
      "Access educational resources, live sessions, and mentorship. Build the skills and discipline that separate winners from the rest.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Trade with Confidence",
    description:
      "Apply what you've learned with the backing of a supportive community. Share ideas, get feedback, and grow together.",
  },
]

function StepCard({ step, index, total }: { step: typeof steps[number]; index: number; total: number }) {
  const anim = useAnimateOnScroll({ delay: index * 150 })
  return (
    <div
      ref={anim.ref}
      className="group relative text-center"
      style={anim.style}
    >
      {/* Step number */}
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/5">
        <step.icon className="h-6 w-6 text-accent" />
      </div>

      {/* Step label */}
      <span className="text-[11px] font-bold tracking-widest text-accent/60 uppercase">
        Step {step.step}
      </span>

      <h3 className="mt-2 text-base font-semibold text-card-foreground">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>

      {/* Connector line (between steps, hidden on last) */}
      {index < total - 1 && (
        <div className="absolute top-7 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-border/40 to-border/10 md:block" />
      )}
    </div>
  )
}

export function HowItWorks() {
  const heading = useAnimateOnScroll()

  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div
          ref={heading.ref}
          className="mx-auto max-w-xl text-center"
          style={heading.style}
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            Getting Started
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Three simple steps to go from solo trader to part of something bigger.
          </p>
        </div>

        {/* Steps */}
        <div
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
