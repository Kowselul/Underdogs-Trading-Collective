"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const section = useAnimateOnScroll()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      ref={section.ref}
      className="relative py-20 md:py-28"
      style={section.style}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(34_14%_53%/0.04)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-xl px-6 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-1.5 backdrop-blur-sm">
          <Mail className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Newsletter
          </span>
        </div>

        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Stay in the Loop
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          Get trading insights, updates, and community news straight to your
          inbox. No spam, ever.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm outline-none transition-colors duration-300 focus:border-accent/50 focus:ring-1 focus:ring-accent/25"
          />
          <button
            type="submit"
            className="rounded-xl bg-accent/90 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>

        {/* Feedback message */}
        <div
          className={`mt-4 text-sm transition-all duration-300 ${submitted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        >
          <p className="text-accent">
            Newsletter coming soon! We&apos;ll let you know when it&apos;s ready.
          </p>
        </div>

        <p className="mt-4 text-[11px] text-muted-foreground/40">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
