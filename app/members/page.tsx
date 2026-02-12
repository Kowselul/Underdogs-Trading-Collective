import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MembersGrid } from "@/components/members-grid"

export const metadata = {
  title: "Underdogs | Members",
  description: "Meet the traders behind the underdogs trading collective.",
}

export default function MembersPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <MembersGrid />
      <Footer />
    </main>
  )
}
