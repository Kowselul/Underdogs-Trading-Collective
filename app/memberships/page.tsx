import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MembershipSection } from "@/components/membership-section"

export const metadata = {
  title: "Underdogs | Membership",
  description: "Membership plans for the underdogs trading collective.",
}

export default function MembershipsPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <MembershipSection />
      <Footer />
    </main>
  )
}
