"use client"

import { Scale } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const sections = [
  {
    title: "1. Introduction",
    content: [
      "Welcome to Underdogs Trading Collective (\u201Cwe,\u201D \u201Cus,\u201D or \u201Cour\u201D). By accessing or using our website, community platforms, educational materials, and related services (collectively, the \u201CServices\u201D), you agree to be bound by these Terms & Conditions.",
      "Please read these Terms carefully before using our Services. If you do not agree with any part of these Terms, you should not access or use our Services.",
      "These Terms constitute a legally binding agreement between you and Underdogs Trading Collective. We reserve the right to update these Terms at any time, and your continued use of the Services constitutes acceptance of any modifications.",
    ],
  },
  {
    title: "2. Educational Purpose Only",
    content: [
      "All content provided by Underdogs Trading Collective \u2014 including but not limited to market analysis, trade ideas, educational resources, live discussions, and community commentary \u2014 is strictly for educational and informational purposes.",
      "Nothing provided through our Services constitutes financial advice, investment advice, trading advice, or any other form of professional advice. We are not registered financial advisors, broker-dealers, or investment consultants.",
      "Any trading decisions you make are entirely your own. You should always consult with a qualified financial professional before making any investment or trading decisions.",
    ],
  },
  {
    title: "3. Risk Disclosure",
    content: [
      "Trading in financial markets involves substantial risk of loss and is not suitable for every individual. The value of investments and the income derived from them can go down as well as up. You may lose more than your initial investment.",
      "Past performance of any trading strategy, methodology, or individual discussed within the collective is not indicative of future results. Markets are inherently unpredictable, and no system or educational approach can eliminate risk.",
      "You acknowledge that you are fully aware of the risks associated with trading and that you are solely responsible for any financial outcomes resulting from your trading activities.",
    ],
  },
  {
    title: "4. User Responsibilities",
    content: [
      "As a member or user of our Services, you agree to:",
    ],
    list: [
      "Conduct your own research and due diligence before making any financial decisions.",
      "Use the information provided through our Services at your own risk and discretion.",
      "Maintain the confidentiality of your account credentials and not share access with third parties.",
      "Comply with all applicable laws and regulations in your jurisdiction related to trading and financial activities.",
      "Not misrepresent your experience, qualifications, or results within the community.",
      "Provide accurate information when creating an account or interacting with our Services.",
    ],
  },
  {
    title: "5. No Guarantees of Results",
    content: [
      "Underdogs Trading Collective makes no representations, warranties, or guarantees regarding the accuracy, completeness, or reliability of any information provided through our Services.",
      "We do not guarantee that you will achieve any particular financial results, profits, or returns by using our educational materials or participating in our community. Individual results will vary based on numerous factors including \u2014 but not limited to \u2014 market conditions, experience, risk tolerance, and capital allocation.",
      "Testimonials or case studies shared within the community represent individual experiences and are not indicative of typical results.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, Underdogs Trading Collective, its founders, educators, moderators, affiliates, and partners shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from:",
    ],
    list: [
      "Your use of or reliance on any content, analysis, or educational material provided through our Services.",
      "Any trading or investment decisions made based on information obtained through our platform.",
      "Any losses, damages, or costs resulting from your participation in financial markets.",
      "Any interruptions, errors, or omissions in our Services or content.",
      "Unauthorized access to or alteration of your data or transmissions.",
    ],
    afterList: [
      "Your use of the Services is entirely at your own risk. Our total liability, if any, shall not exceed the amount you have paid for our Services in the twelve months preceding the claim.",
    ],
  },
  {
    title: "7. Community Conduct",
    content: [
      "We are committed to maintaining a respectful, constructive, and professional community environment. All members and users agree to adhere to the following standards of conduct:",
    ],
    list: [
      "Treat all community members with respect and professionalism.",
      "Do not share or distribute proprietary content, educational materials, or trade ideas outside the community without express written permission.",
      "Do not engage in harassment, discrimination, hate speech, or any form of abusive behavior.",
      "Do not promote or distribute unauthorized financial products, schemes, or solicitations.",
      "Do not post misleading claims about trading results or guaranteed outcomes.",
      "Do not attempt to manipulate, spam, or disrupt community channels or discussions.",
    ],
    afterList: [
      "We reserve the right to remove content and restrict access to users who violate these guidelines, at our sole discretion.",
    ],
  },
  {
    title: "8. Intellectual Property",
    content: [
      "All content, materials, branding, logos, graphics, educational resources, and proprietary methodologies provided through Underdogs Trading Collective are protected by intellectual property laws and remain the exclusive property of Underdogs Trading Collective.",
      "You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any of our content without prior written consent.",
      "Limited personal use of educational materials is permitted solely for your own learning purposes and may not be shared, resold, or redistributed in any form.",
    ],
  },
  {
    title: "9. Account Termination",
    content: [
      "We reserve the right to suspend or terminate your access to our Services at any time, with or without cause, and with or without notice. Grounds for termination may include, but are not limited to:",
    ],
    list: [
      "Violation of these Terms & Conditions or community conduct guidelines.",
      "Sharing or redistributing proprietary content without authorization.",
      "Engaging in behavior that is harmful to the community or its members.",
      "Providing false or misleading information during registration or use of Services.",
    ],
    afterList: [
      "Upon termination, your right to access the Services will cease immediately. Any provisions of these Terms that by their nature should survive termination shall remain in effect.",
    ],
  },
  {
    title: "10. Changes to Terms",
    content: [
      "Underdogs Trading Collective reserves the right to modify, update, or replace these Terms & Conditions at any time. Material changes will be communicated through our website or community channels.",
      "Your continued use of the Services following the posting of revised Terms constitutes your acceptance of those changes. We encourage you to review these Terms periodically.",
      "The date of the most recent revision will always be indicated at the top of this page.",
    ],
  },
  {
    title: "11. Contact Information",
    content: [
      "If you have any questions, concerns, or requests regarding these Terms & Conditions, please reach out to us through our official channels:",
    ],
    list: [
      "Discord \u2014 discord.gg/SzQnbVrE73",
      "X (Twitter) \u2014 @UnderdogsTrades",
      "Instagram \u2014 @underdogstrading",
    ],
    afterList: [
      "We aim to respond to all inquiries in a timely and professional manner.",
    ],
  },
]

export function TermsContent() {
  const heading = useAnimateOnScroll()
  const body = useAnimateOnScroll({ delay: 120 })

  return (
    <section className="relative flex-1 pt-32 pb-28 md:pt-40 md:pb-36 bg-[hsl(var(--hero-bg))]">
      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        {/* Hero heading */}
        <div
          ref={heading.ref}
          className="mx-auto max-w-xl text-center"
          style={heading.style}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-1.5 backdrop-blur-sm">
            <Scale className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Legal
            </span>
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Last updated — February 12, 2026
          </p>
        </div>

        {/* Content body */}
        <div
          ref={body.ref}
          className="mt-16 space-y-12"
          style={body.style}
        >
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>

              <div className="mt-4 space-y-3">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.list && (
                <ul className="mt-4 space-y-2 pl-5">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-left-4 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.afterList &&
                section.afterList.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
