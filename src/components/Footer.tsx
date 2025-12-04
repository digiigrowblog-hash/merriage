"use client";

import Link from "next/link";
import { Heart, Instagram, Facebook, Phone, Mail } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs"; // r3f scene

export default function Footer() {
  return (
    <>
    
    <footer className="relative bg-linear-to-t from-[#3a2520] via-[#4b3027] to-[#4b3027]">
        <div className="pointer-events-none  inset-x-0 top-0 h-40 opacity-80 overflow-hidden">
        <FloatingOrbs />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 lg:px-8">
        {/* top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#d45b4a] shadow-md">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-[0.18em] uppercase">
                FinD<span className="text-[#f3c871]">Me</span>
              </span>
            </div>
            <p className="text-sm text-white/70">
              Modern Indian matchmaking where warm tradition meets contemporary,
              app‑first experience.
            </p>
            <p className="text-xs text-white/50">
              Built for 25–35 year olds who want curated, verified and
              value‑aligned matches.
            </p>
          </div>

          {/* Links */}
          <div className="grid flex-1 gap-10 text-sm md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#f3c871]">
                Explore
              </h4>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="/match" className="hover:text-white">
                    Match
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-white">
                    Premium
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/distance" className="hover:text-white">
                    Distance Match
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#f3c871]">
                Company
              </h4>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="hover:text-white">
                    Safety & Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#f3c871]">
                Connect
              </h4>
              <ul className="space-y-2 text-white/75">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+919999999999" className="hover:text-white">
                    +91 99 9999 9999
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hello@findme.in" className="hover:text-white">
                    hello@findme.in
                  </a>
                </li>
                <li className="flex items-center gap-3 pt-1">
                  <a
                    href="#"
                    className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white/10 p-2 hover:bg-white/20"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FinDMe. All rights reserved.</p>
          <p className="flex gap-3">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
