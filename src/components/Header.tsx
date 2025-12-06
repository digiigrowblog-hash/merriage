"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"

const navLinks = [
  { href: "/match", label: "Match" },
  { href: "/premium", label: "Premium" },
  { href: "/about", label: "About Us" },
  { href: "/distance", label: "Distance" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))

  return (
    <header className="lexend-headers fixed inset-x-0 top-0 z-40 
    bg-linear-to-b from-[#f3b886]/95 to-[#e89b7c]/80 backdrop-blur-md 
    border-b border-white/20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between 
      px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full 
          bg-white/90 shadow-md">
            <Heart className="h-5 w-5 text-[#d45b4a]" />
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-[0.18em] 
          uppercase text-white">
            FinD<span className="text-[#4d2b22]">Me</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm font-medium text-white/90 
        md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "relative text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-white"
                  : "text-white/80 hover:text-white transition"
              }
            >
              <p className="">{link.label}</p>
            </Link>
          ))}

          <Link
             href={`/signup`}
            
            className="rounded-full bg-white/95 px-5 py-2 text-xs font-semibold 
            uppercase tracking-wide text-[#c45340] shadow-md hover:bg-white"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/15 bg-linear-to-b from-[#f3b886] to-[#e89b7c] text-sm text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  "py-2 " +
                  (isActive(link.href) ? "font-semibold text-white" : "text-white/90")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/signup`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white/95 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-[#c45340] shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}