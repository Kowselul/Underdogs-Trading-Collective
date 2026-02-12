"use client"

import { useState, useRef, useCallback } from "react"
import { CreditCard, Check, ArrowRight, ChevronDown } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

/* ─── Tier data ─── */
interface Tier {
  name: string
  price: string | null
  priceLabel?: string
  description: string
  highlights: string[]
  expandedDescription: string
  benefits: string[]
  qualification?: { heading: string; items: Array<string | { label: string; href: string }> }
  featured?: boolean
  buyHref: string
}

const tiers: Tier[] = [
  {
    name: "UTC Exclusive",
    price: null,
    priceLabel: "Free — Qualification Based",
    description: "Structured environment for serious trader development.",
    highlights: [
      "Focused trading discussion channels",
      "Access to private Underdogs resources",
      "Exclusive community events and giveaways",
      "Private live trading stage",
    ],
    expandedDescription:
      "Access to a structured, reduced-noise trading environment designed for serious development. Qualify through community engagement and gain access to focused channels, collaborative reviews, private resources, and exclusive events.",
    benefits: [
      "Focused trading discussion channels",
      "Collaborative setup reviews",
      "Access to private Underdogs trading resources and frameworks",
      "Exclusive community events and giveaways",
      "Private live trading stage",
    ],
    qualification: {
      heading: "Qualification Requirements",
      items: [
        { label: "Join our Discord community", href: "https://discord.gg/SzQnbVrE73" },
        "7 days minimum community activity",
        { label: "Follow Underdogs on Involio", href: "https://involio.com/underdogs" },
        "Create a trading account or complete a funded challenge using partner links",
        "Invite two members",
      ],
    },
    buyHref: "",
  },
  {
    name: "Underdogs Lite",
    price: "$25",
    description: "Instant access + recorded mentorship content.",
    highlights: [
      "Instant UTC Exclusive access",
      "Recorded mentorship session archive",
      "Risk management workshops",
      "Weekly educational updates",
    ],
    expandedDescription:
      "Skip the qualification process and get immediate UTC Exclusive access. Includes a full library of recorded mentorship sessions covering trade breakdowns, risk management frameworks, and execution strategies. Weekly educational updates and community accountability channels keep you on track between sessions.",
    benefits: [
      "Instant UTC Exclusive access",
      "Full archive of recorded mentorship sessions",
      "Structured trade breakdown library",
      "Risk management workshops",
      "Weekly educational updates",
      "Community accountability channels",
    ],
    buyHref:
      "https://whop.com/underdogs-trading-collective/?utm_source=store_page",
  },
  {
    name: "Underdogs Core",
    price: "$50",
    featured: true,
    description: "Live mentorship + full execution refinement.",
    highlights: [
      "Live group mentorship sessions",
      "Real-time trade breakdowns",
      "Advanced risk management frameworks",
      "Priority Q&A access",
    ],
    expandedDescription:
      "Complete access to everything in Underdogs Lite plus live group mentorship sessions where you can engage directly with educators in real time. Includes execution refinement sessions focused on improving your entries, exits, and risk management under live market conditions. Priority Q&A ensures your questions get addressed first, and the full recorded archive lets you revisit any session.",
    benefits: [
      "Instant UTC Exclusive access",
      "Live group mentorship sessions",
      "Real-time trade breakdown discussions",
      "Execution refinement sessions",
      "Advanced risk management frameworks",
      "Priority Q&A access",
      "Full recorded archive access",
    ],
    buyHref:
      "https://whop.com/underdogs-trading-collective/underdogs-trading-collective-f4/?utm_source=store_page&funnelId=store_5f30788c-1311-45a3-88dc-14ae877c2988",
  },
]

/* ─── Component ─── */
export function MembershipSection() {
  const heading = useAnimateOnScroll()
  const cards = useAnimateOnScroll({ delay: 150 })
  const [expandedTier, setExpandedTier] = useState<string | null>(null)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const handleToggle = useCallback((tierName: string, isCurrentlyExpanded: boolean) => {
    if (isCurrentlyExpanded) {
      setExpandedTier(null)
    } else {
      setExpandedTier(tierName)
      // Wait for expansion animation to start, then scroll
      setTimeout(() => {
        cardRefs.current[tierName]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 80)
    }
  }, [])

  return (
    <section className="relative flex-1 pt-32 pb-28 md:pt-40 md:pb-36 bg-[hsl(var(--hero-bg))]">
      {/* Gradient fades */}
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

        {/* Pricing grid */}
        <div
          ref={cards.ref}
          className="mx-auto mt-16 grid max-w-5xl items-start gap-6 md:grid-cols-3"
          style={cards.style}
        >
          {tiers.map((tier) => {
            const isExpanded = expandedTier === tier.name

            return (
              <div
                key={tier.name}
                ref={(el) => { cardRefs.current[tier.name] = el }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  tier.featured
                    ? "border-accent/40 bg-card/60 hover:border-accent/60"
                    : "border-border/50 bg-card/50 hover:border-border/80"
                }`}
              >
                {/* Card header */}
                <div className="border-b border-border/30 px-6 pt-7 pb-5 text-center">
                  {tier.featured && (
                    <span className="mb-2 inline-block text-[10px] font-semibold tracking-widest text-accent/70 uppercase">
                      Primary
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-foreground">
                    {tier.name}
                  </h2>
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    {tier.price ? (
                      <>
                        <span className="text-3xl font-bold tracking-tight text-foreground">
                          {tier.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / month
                        </span>
                      </>
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        {tier.priceLabel}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
                    {tier.description}
                  </p>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-6 py-5">
                  {/* Condensed highlights (always visible) */}
                  <ul className="space-y-3">
                    {tier.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-accent/10">
                          <Check className="h-2.5 w-2.5 text-accent" />
                        </div>
                        <span className="text-[13px] leading-relaxed text-foreground/80">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded section */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-5 space-y-5">
                        {/* Detailed description */}
                        <div className="rounded-lg border border-border/20 bg-muted/15 px-4 py-3.5">
                          <p className="text-[13px] leading-relaxed text-muted-foreground">
                            {tier.expandedDescription}
                          </p>
                        </div>

                        {/* Full benefits */}
                        <div>
                          <h3 className="mb-3 text-xs font-semibold tracking-wide text-foreground/60 uppercase">
                            Full Benefits
                          </h3>
                          <ul className="space-y-2.5">
                            {tier.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-2.5">
                                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-accent/10">
                                  <Check className="h-2.5 w-2.5 text-accent" />
                                </div>
                                <span className="text-[13px] leading-relaxed text-foreground/80">
                                  {b}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Qualification subsection */}
                        {tier.qualification && (
                          <div className="rounded-lg border border-border/30 bg-muted/20 px-4 py-4">
                            <h3 className="text-xs font-semibold tracking-wide text-foreground/70 uppercase">
                              {tier.qualification.heading}
                            </h3>
                            <ul className="mt-3 space-y-2.5">
                              {tier.qualification.items.map((q) => {
                                const label = typeof q === "string" ? q : q.label
                                const href = typeof q === "string" ? null : q.href
                                return (
                                  <li
                                    key={label}
                                    className="flex items-start gap-2.5"
                                  >
                                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-border/40">
                                      <Check className="h-2.5 w-2.5 text-muted-foreground" />
                                    </div>
                                    {href ? (
                                      <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[13px] leading-relaxed text-accent/80 underline underline-offset-2 decoration-accent/30 hover:text-accent hover:decoration-accent/60 transition-colors"
                                      >
                                        {label}
                                      </a>
                                    ) : (
                                      <span className="text-[13px] leading-relaxed text-muted-foreground">
                                        {label}
                                      </span>
                                    )}
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* CTAs */}
                  <div className="mt-6 space-y-2.5">
                    {tier.buyHref && (
                      <a
                        href={tier.buyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                          tier.featured
                            ? "bg-gradient-to-b from-accent to-accent/80 text-white"
                            : "bg-foreground/[0.08] text-foreground hover:bg-foreground/[0.12]"
                        }`}
                      >
                        <span>Buy Now</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                      </a>
                    )}
                    <button
                      onClick={() => handleToggle(tier.name, isExpanded)}
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-border/40 px-5 py-2.5 text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:border-border/70 hover:text-foreground"
                    >
                      <span>
                        {isExpanded ? "Hide Details" : "View Details"}
                      </span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
