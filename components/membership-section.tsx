"use client"

import { CreditCard, Check, ArrowRight, Users, BookOpen, BarChart3, Shield, MessageSquare } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const benefits = [
  { icon: Users, text: "Full access to the UTC community" },
  { icon: BookOpen, text: "Structured mentorship sessions led by ReflexX" },
  { icon: BarChart3, text: "Trade breakdowns and analysis discussions" },
  { icon: Shield, text: "Risk management and execution frameworks" },
  { icon: MessageSquare, text: "Accountability and community interaction" },
]

export function MembershipSection() {
  const heading = useAnimateOnScroll()
  const card = useAnimateOnScroll({ delay: 150 })

  return (
    <section className="relative flex-1 pt-32 pb-28 md:pt-40 md:pb-36 bg-[hsl(var(--hero-bg))]">
      {/* Top & bottom gradient fades for soft section blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(34_14%_53%/0.04)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div
          ref={heading.ref}
          className="mx-auto max-w-xl text-center"
          style={heading.style}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-1.5 backdrop-blur-sm">
            <CreditCard className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Membership
            </span>
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Invest in Your Development
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            For traders who are serious about improving — not looking for signals
            or shortcuts, but committed to building real skill through structure,
            mentorship, and discipline.
          </p>
        </div>

        {/* Pricing card */}
        <div
          ref={card.ref}
          className="mx-auto mt-16 max-w-md"
          style={card.style}
        >
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
            {/* Card header */}
            <div className="border-b border-border/30 px-8 pt-8 pb-6 text-center">
              <span className="text-[11px] font-bold tracking-widest text-accent/70 uppercase">
                Core Plan
              </span>
              <h2 className="mt-2 text-xl font-bold text-foreground">
                Underdogs Core
              </h2>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  $50
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="px-8 py-6">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground/80">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="px-8 pb-8">
              <a
                href="https://whop.com/underdogs-trading-collective/underdogs-trading-collective-f4/?utm_source=store_page&funnelId=store_5f30788c-1311-45a3-88dc-14ae877c2988"
                className="group/btn relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-accent to-accent/80 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_hsl(34_14%_53%/0.2)] transition-all duration-300 hover:shadow-[0_0_40px_hsl(34_14%_53%/0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/5 to-white/10" />
                <span className="relative">Buy Now</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
