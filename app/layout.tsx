import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Underdogs | Home",
  description:
    "Built by Underdogs. Driven by Discipline. A trading community focused on education, risk management, and long-term consistency.",
  icons: {
    icon: "/pngpage.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#222831",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
