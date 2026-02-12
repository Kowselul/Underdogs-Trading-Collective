"use client"

import { CreditCard } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export function MembershipsPlaceholder() {
  const heading = useAnimateOnScroll()
  const card = useAnimateOnScroll({ delay: 150 })

  return (
    <section className="relative flex-1 pt-32 pb-28 md:pt-40 md:pb-36 bg-[hsl(var(--hero-bg))]">
      {/* Top & bottom gradient fades for soft section blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div
          ref={heading.ref}
          className="mx-auto max-w-xl text-center"
          style={heading.style}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-1.5 backdrop-blur-sm">
            <CreditCard className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Memberships
            </span>
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Membership Plans
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Membership details and pricing will be added soon. Stay tuned.
          </p>
        </div>

        {/* Coming soon card */}
        <div
          ref={card.ref}
          className="mx-auto mt-16 max-w-md rounded-2xl border border-border/50 bg-card/50 p-10 text-center backdrop-blur-sm"
          style={card.style}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
            <CreditCard className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mt-6 text-lg font-semibold text-card-foreground">
            Coming Soon
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We&apos;re working on our membership plans. Check back later for
            pricing, features, and how to join the collective.
          </p>
        </div>
      </div>
    </section>
  )
}
