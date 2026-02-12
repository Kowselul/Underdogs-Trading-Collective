"use client"

import { useRef, useCallback, type MouseEvent as ReactMouseEvent } from "react"
import { Users } from "lucide-react"
import { motion, useInView } from "framer-motion"

/* ─── Social icons (small, inline) ─── */
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

/** Per-member social links — only these will be shown on hover */
const memberSocials: Record<string, Array<{ label: string; href: string; icon: typeof DiscordIcon }>> = {
  "Kregar":       [{ label: "Instagram", href: "https://www.instagram.com/inkkreate/", icon: InstagramIcon }],
  "VortexLegion": [{ label: "Instagram", href: "https://www.instagram.com/vortexlegion__/", icon: InstagramIcon }],
  "CRYPTONOMY":   [{ label: "Instagram", href: "https://www.instagram.com/cryptonomy.invo/", icon: InstagramIcon }],
  "0x744k":       [{ label: "Instagram", href: "https://www.instagram.com/anyuon.akol/", icon: InstagramIcon }],
  "Darpan":       [{ label: "Instagram", href: "https://www.instagram.com/darpan.et/", icon: InstagramIcon }, { label: "X", href: "https://x.com/Darpaniumm", icon: XIcon }],
  "Kowse":        [{ label: "Instagram", href: "https://www.instagram.com/bocanci_iulian/", icon: InstagramIcon }],
  "ReflexX":      [{ label: "Instagram", href: "https://www.instagram.com/refflex_777", icon: InstagramIcon }],
}

/* ─── Member data by group ─── */
const head = ["CRYPTONOMY"]

const ownersAndLeads = [
  "Bones",
  "James Hunter",
  "ReflexX",
  "Rayhan",
  "Kregar",
  "Mujahid",
  "Kowse",
]

const membersList = [
  "akqxz",
  "APX",
  "Pipsthetrader",
  "enigma",
  "AvarixTrading",
  "fortyseven",
  "John cude",
  "Bullmaster",
  "Prateek",
  "VortexLegion",
  "Insider",
  "Darpan",
  "Danien Satori",
  "0x744k",
]

/* ─── Helpers ─── */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

/** Simple string hash → deterministic gradient per name */
function nameToGradient(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h1 = ((hash & 0xff) % 360)
  const h2 = (h1 + 40 + (((hash >> 8) & 0xff) % 30)) % 360
  const h3 = (h1 + 160 + (((hash >> 16) & 0xff) % 60)) % 360
  return `linear-gradient(135deg, hsl(${h1} 50% 35%), hsl(${h2} 45% 28%), hsl(${h3} 40% 22%))`
}

/* ─── Animation variants ─── */
const cardEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: cardEase,
    },
  }),
}

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cardEase },
  },
}

/* ─── MemberCard ─── */
type CardTier = "head" | "lead" | "member"

function MemberCard({
  name,
  index,
  tier,
}: {
  name: string
  index: number
  tier: CardTier
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      const spot = spotlightRef.current
      if (!card || !spot) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      spot.style.background = `radial-gradient(320px circle at ${x}px ${y}px, ${
        tier === "member"
          ? "hsla(34,14%,53%,0.06)"
          : "hsla(34,14%,53%,0.10)"
      }, transparent 70%)`
    },
    [tier],
  )

  const handleMouseLeave = useCallback(() => {
    const spot = spotlightRef.current
    if (spot) spot.style.background = "transparent"
  }, [])

  const isGlow = tier === "head" || tier === "lead"

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative flex flex-col rounded-2xl border p-6 pb-8 backdrop-blur-md overflow-visible ${
        isGlow
          ? "border-white/[0.08] bg-white/[0.04] shadow-[0_0_40px_-12px_hsla(34,14%,53%,0.25)]"
          : "border-white/[0.06] bg-white/[0.03]"
      }`}
    >
      {/* Spotlight overlay */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-10 transition-[background] duration-300"
      />

      {/* Glow border accent for leadership tiers */}
      {isGlow && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/[0.12]" />
      )}

      {/* Avatar — mesh gradient */}
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl shadow-inner"
        style={{ background: nameToGradient(name) }}
      >
        <span className="text-sm font-bold tracking-wider text-white/70">
          {getInitials(name)}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-foreground">
        {name}
      </h3>

      {/* Spacer to push socials to bottom so all cards are equal height */}
      <div className="mt-auto" />

      {/* Social icons — fade in on card hover (only linked socials) */}
      <div className="mt-3 flex items-center gap-1 h-7">
        {memberSocials[name]?.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted-foreground/30 opacity-0 translate-y-1 transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground group-hover:opacity-100 group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 50}ms` }}
            aria-label={`${name} ${social.label}`}
          >
            <social.icon className="h-3.5 w-3.5 shrink-0" />
          </a>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          isGlow
            ? "bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60 group-hover:opacity-100"
            : "bg-accent/0 opacity-0 group-hover:bg-accent/30 group-hover:opacity-100"
        }`}
      />
    </motion.div>
  )
}

/* ─── Section heading ─── */
function SectionHeading({ label, title }: { label: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={headingVariants}
      className="mb-10"
    >
      <span className="text-[11px] font-semibold tracking-[0.2em] text-accent/60 uppercase">
        {label}
      </span>
      <h2 className="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-12 bg-gradient-to-r from-accent/40 to-transparent" />
    </motion.div>
  )
}

/* ─── Animated grid wrapper ─── */
function MemberSection({
  label,
  title,
  names,
  tier,
}: {
  label: string
  title: string
  names: string[]
  tier: CardTier
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className="mt-20 first:mt-16">
      <SectionHeading label={label} title={title} />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {names.map((name, i) => (
          <MemberCard key={name} name={name} index={i} tier={tier} />
        ))}
      </motion.div>
    </div>
  )
}

/* ─── Page component ─── */
export function MembersGrid() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" })

  return (
    <section className="relative flex-1 pt-32 pb-28 md:pt-40 md:pb-36 bg-[hsl(var(--hero-bg))]">
      {/* Top & bottom gradient fades for soft section blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Page heading */}
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={headingVariants}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <Users className="h-3.5 w-3.5 text-accent" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Our Team
            </span>
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Collective
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The traders behind underdogs. Each member brings unique experience
            and perspective to our community.
          </p>
        </motion.div>

        {/* Grouped sections */}
        <MemberSection label="Founder" title="Head of Underdogs" names={head} tier="head" />
        <MemberSection label="Leadership" title="Owners & Leads" names={ownersAndLeads} tier="lead" />
        <MemberSection label="Community" title="Members" names={membersList} tier="member" />
      </div>
    </section>
  )
}
