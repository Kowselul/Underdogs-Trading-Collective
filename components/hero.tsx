"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[hsl(var(--hero-bg))]">
      {/* Animated grid background */}
      <div
        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${loaded ? "opacity-[0.03]" : "opacity-0"}`}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--hero-bg))_75%)]" />

      {/* Large watermark logo behind text */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-[2000ms] ease-out ${loaded ? "opacity-[0.04] scale-100" : "opacity-0 scale-90"}`}
      >
        <Image
          src="/logo.png"
          alt=""
          width={800}
          height={800}
          className="h-[60vh] max-h-[700px] w-auto object-contain invert blur-[1px]"
          priority
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Heading */}
        <h1
          className={`text-balance text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-300 ease-out sm:text-5xl md:text-6xl lg:text-7xl ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Built by Underdogs.
          <br />
          <span className="text-accent">Driven by Discipline.</span>
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-[500] ease-out md:text-lg ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          A collective of traders committed to structured education, risk
          management, and long-term consistency. No hype. Just process.
        </p>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[hsl(var(--background))]" />

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[800] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground/50 transition-colors duration-300 hover:text-muted-foreground"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
