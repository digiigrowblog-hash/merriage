"use client";

import {
  CalendarHeart,
  Crown,
  Infinity,
  MessageCircleMore,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function YearlySubscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-2 py-3 bg-red-400/10 space-y-4">
      {/* Close Button */}
      <motion.button
        type="button"
        className="relative inline-flex items-center justify-center rounded-full p-2 focus:outline-none"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-red-500/20 blur-sm"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.1, 0.9] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/30 via-transparent to-red-500/40 mix-blend-screen pointer-events-none" />
        <Link href="/profile">
        <X className="relative size-5 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]" />
        </Link>
        
      </motion.button>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden max-w-lg mx-auto">
        <Image
          src="/images/marriage.png"
          alt="Premium Match"
          width={800}
          height={500}
          className="h-[120px] w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-red-400/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-2xl font-semibold mb-2">
            Find<span className="font-light">Me</span> Premium
          </h2>
          <p className="text-white text-sm">
            Designed for seriously marriage‑minded members who want maximum visibility and time to find the right partner without pressure. 
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="max-w-lg mx-auto rounded-2xl border-2 border-black shadow-md p-5 relative bg-white">
        {/* Badge */}
        <span className="absolute -top-3 left-6 bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <Crown size={12} /> Best Value
        </span>

        {/* Header */}
        <h1 className="text-xl font-semibold mb-2">
          12-Month Premium Match Plan
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Designed for members who are serious about marriage and want maximum
          visibility, time, and savings.
        </p>

        {/* Price */}
        <div className="mb-1">
          <span className="text-3xl font-bold">₹2999</span>
          <span className="text-sm text-gray-500"> / year</span>
        </div>
        <p className="text-xs text-green-600 mb-6">
          Lowest cost per month • Best savings
        </p>

        {/* Features */}
        <ul className="space-y-3 text-sm mb-6">
          <Feature
            text="3x more exposure in search & daily recommendations all year"
          />
          <Feature2
            text="All advanced filters: lifestyle, family, income, education"
          />
          <Feature3
            text="Unlimited chats with higher contact-view limits"
          />
          <Feature4
            text="Priority support & early access to special match events"
          />
        </ul>

        {/* CTA */}
        <button className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-900 transition">
          Go Premium for 12 Months
        </button>

        {/* Footer copy */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Ideal for serious long-term partner search with maximum confidence
        </p>
      </div>
    </div>
  );
}

/* ---------- Feature Rows (same icons, reused) ---------- */

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Infinity size={20} color="#af2b65ff" strokeWidth={2.25} />
      <span>{text}</span>
    </li>
  );
}

function Feature2({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Star size={20} color="#af2b65ff" strokeWidth={2.25} />
      <span>{text}</span>
    </li>
  );
}

function Feature3({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <MessageCircleMore size={20} color="#af2b65ff" strokeWidth={2.25} />
      <span>{text}</span>
    </li>
  );
}

function Feature4({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CalendarHeart size={20} color="#af2b65ff" strokeWidth={2.25} />
      <span>{text}</span>
    </li>
  );
}
