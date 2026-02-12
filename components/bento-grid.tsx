"use client"

import {
  BarChart3,
  BookOpen,
  GraduationCap,
  LineChart,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

/* ─── pill data for the top card ─── */
const analysisPills = [
  { label: "Technical Analysis", icon: LineChart },
  { label: "Market Structure", icon: BarChart3 },
  { label: "Risk Management", icon: Shield },
  { label: "Trade Psychology", icon: TrendingUp },
  { label: "Weekly Outlooks", icon: Zap },
  { label: "Trade Reviews", icon: BookOpen },
]

export function BentoGrid() {
  const heading = useAnimateOnScroll()
  const card0 = useAnimateOnScroll({ delay: 0 })
  const card1 = useAnimateOnScroll({ delay: 120 })
  const card2 = useAnimateOnScroll({ delay: 240 })

  return (
    <section className="relative py-28 md:py-36 bg-[hsl(var(--hero-bg))]">
      {/* Top & bottom gradient fades for soft section blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div
          ref={heading.ref}
          className="mx-auto mb-16 max-w-xl text-center"
          style={heading.style}
        >
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            What You Get
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Trade Better
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tools, education, and community — all in one place.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* ── Card 1: Tools & Platforms (large, spans 2 cols) ── */}
          <div
            ref={card0.ref}
            className="group relative col-span-1 overflow-hidden rounded-3xl border border-border/40 bg-[hsl(var(--hero-bg))] p-8 md:p-10 lg:col-span-2"
            style={card0.style}
          >
            {/* Tool pills with fade */}
            <div className="relative mb-8">
              {/* Fade overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[hsl(var(--hero-bg))] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[hsl(var(--hero-bg))] to-transparent" />

              <div className="flex flex-wrap items-center justify-center gap-3 px-6">
                {analysisPills.map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 rounded-xl border border-border/30 bg-card/60 px-4 py-2.5 shadow-sm shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
                  >
                    <pill.icon className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium text-foreground/80">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex items-center gap-2 text-muted-foreground/50 mb-3">
              <BarChart3 className="h-3.5 w-3.5" />
              <span className="text-[11px] font-medium tracking-widest uppercase">
                Analysis
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Market Analysis &amp; Trade Frameworks
              <span className="ml-2 inline-block text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Structured market analysis, detailed trade breakdowns, risk management
              frameworks, and educational insights to sharpen your edge.
            </p>
          </div>

          {/* ── Card 2: Education ── */}
          <div
            ref={card1.ref}
            className="group relative overflow-hidden rounded-3xl border border-border/40 bg-[hsl(var(--hero-bg))] p-8 md:p-10"
            style={card1.style}
          >
            {/* Visual element */}
            <div className="mb-8 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                <GraduationCap className="h-9 w-9 text-accent" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground/50 mb-3">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="text-[11px] font-medium tracking-widest uppercase">
                Education
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Structured Learning
              <span className="ml-2 inline-block text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Courses, live sessions, and mentorship from experienced traders.
              Learn at your own pace.
            </p>
          </div>

          {/* ── Card 4: Community (spans 2 cols) ── */}
          <div
            ref={card2.ref}
            className="group relative overflow-hidden rounded-3xl border border-border/40 bg-[hsl(var(--hero-bg))] p-8 md:p-10 lg:col-span-2"
            style={card2.style}
          >
            {/* Visual: community icon */}
            <div className="mb-8 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                <Users className="h-9 w-9 text-accent" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground/50 mb-3">
              <Users className="h-3.5 w-3.5" />
              <span className="text-[11px] font-medium tracking-widest uppercase">
                Community
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Active Trading Community
              <span className="ml-2 inline-block text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Join a growing community of traders sharing setups, analysis, and accountability.
              Trade together, grow together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
