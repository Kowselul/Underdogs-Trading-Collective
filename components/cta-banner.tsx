"use client"

import { ArrowRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export function CtaBanner() {
  const section = useAnimateOnScroll()

  return (
    <section
      ref={section.ref}
      className="relative py-24 md:py-32 bg-[hsl(var(--hero-bg))]"
      style={section.style}
    >
      {/* Top & bottom gradient fades for soft section blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(34_14%_53%/0.06)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to Join the Pack?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Stop trading alone. Join a community of disciplined traders who push
          each other to be better, every single day.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://discord.gg/SzQnbVrE73"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-b from-accent to-accent/80 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_24px_hsl(34_14%_53%/0.25)] transition-all duration-300 hover:shadow-[0_0_40px_hsl(34_14%_53%/0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Inner glow overlay */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-white/10" />
            <span className="relative">Join the Collective</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
