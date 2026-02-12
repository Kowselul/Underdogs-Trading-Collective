"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Members", href: "/members" },
  { label: "Memberships", href: "/memberships" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-out",
          scrolled ? "max-w-5xl px-4 pt-3" : "max-w-full px-0 pt-0"
        )}
      >
        <nav
          className={cn(
            "transition-all duration-500 ease-out",
            scrolled
              ? "rounded-2xl bg-[hsl(213_15%_13%/0.75)] shadow-lg shadow-black/20 backdrop-blur-xl border border-[hsl(213_9%_25%/0.4)]"
              : "rounded-none bg-transparent shadow-none backdrop-blur-none border border-transparent"
          )}
        >
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo + brand */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="underdogs logo"
                width={44}
                height={44}
                className="h-[44px] w-[44px] object-contain invert"
                priority
              />
              <span className="text-[15px] font-bold tracking-[-0.01em] text-foreground/95">
                Underdogs
              </span>
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                    pathname === link.href
                      ? "text-foreground bg-[hsl(213_9%_25%/0.5)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-[hsl(213_9%_25%/0.3)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side spacer for balance + mobile toggle */}
            <div className="flex items-center">
              <div className="hidden w-[100px] md:block" />

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 bg-background/98 backdrop-blur-sm transition-all duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-1 px-6 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                pathname === link.href
                  ? "text-foreground bg-[hsl(213_9%_25%/0.5)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-[hsl(213_9%_25%/0.3)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
