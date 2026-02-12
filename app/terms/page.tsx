import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms-content"

export const metadata = {
  title: "Underdogs | Terms & Conditions",
  description:
    "Terms & Conditions for the Underdogs Trading Collective. Read our policies on educational content, risk disclosure, and community conduct.",
}

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  )
}
