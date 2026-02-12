import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BentoGrid } from "@/components/bento-grid"
import { HowItWorks } from "@/components/how-it-works"
import { CtaBanner } from "@/components/cta-banner"
// import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <HowItWorks />
      <CtaBanner />
      {/* <Newsletter /> */}
      <Footer />
    </main>
  )
}
