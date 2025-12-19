"use client";

import { CalendarHeart, CheckCircle, Infinity, MessageCircleMore, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useRouter , useSearchParams} from "next/navigation";

import { motion } from "framer-motion";

export default function MonthlySubscriptionPage() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const subscriptionId = searchParams.get("from")!;
  const membershipPage = searchParams.get("membership")!
  const handleSubscription = () => {
    // Priority: membership > from > default
    const redirectTo = membershipPage || subscriptionId || "/home";
    router.push(redirectTo);
  };
  return (
    <div className="min-h-screen bg-gray-50 px-2 py-3 bg-red-400/10 space-y-4">
      <motion.button
        type="button"
        className="relative inline-flex items-center justify-center rounded-full p-2 focus:outline-none"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* red sparkle / shine behind X */}
        <motion.span
          className="absolute inset-0 rounded-full bg-red-500/20 blur-sm"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.1, 0.9] }}
          transition={{
            duration: 1.2,
           repeat: Number.MAX_SAFE_INTEGER,
            ease: "easeInOut",
          }}
        />

        {/* subtle inner red shine */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/30 
        via-transparent to-red-500/40 mix-blend-screen pointer-events-none" />

        {/* the X icon itself */}
        <button onClick={handleSubscription}>
        <X className="relative size-5 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]" />
        </button>
      </motion.button>

      <div className="relative rounded-2xl overflow-hidden max-w-lg mx-auto ">
        <Image
          src="/images/dating.png"
          alt="Get more"
          width={800}
          height={500}
          className="h-[120px] w-full object-cover grayscale"
        />
        <div
          className="absolute inset-0 bg-red-400/40 flex flex-col items-center 
      justify-center text-center px-4"
        >
          <h2 className="text-white text-2xl font-semibold mb-2">
            Find<span className="font-light">Me</span>
          </h2>
          <p className="text-white text-sm mb-6">
            Profiles shown in your daily recommendations <b>2x</b> better
            visibility on busy evenings/weekends.
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto  rounded-2xl border shadow-sm p-5 relative">
        {/* Badge */}
        <span className="absolute -top-3 left-6 bg-black text-white text-xs px-3 py-1 rounded-full">
          Most Popular Starter
        </span>

        {/* Header */}
        <h1 className="text-xl font-semibold mb-2">1-Month Smart Match Pass</h1>
        <p className="text-sm text-gray-600 mb-4">
          Kick-start your partner search with priority visibility and smarter
          daily matches.
        </p>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-bold">₹199</span>
          <span className="text-sm text-gray-500"> / month</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 text-sm mb-6">
          <Feature text="2x more profiles in daily recommendations and Unlimited swipes" />
          <Feature2 text="Extra filters: education, profession, community, city" />
          <Feature3 text="Send more interests & chat with serious members" />
          <Feature4 text="Highlighted profile during busy evenings & weekends" />
        </ul>

        {/* CTA */}
        <button className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-900 transition">
          Continue with 1-Month
        </button>

        {/* Footer copy */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Perfect if you want to test the waters and get quicker responses
        </p>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Infinity size={20} color="#af2b65ff" strokeWidth={2.25} className="text-green-600 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}


function Feature2({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <Star size={20} color="#af2b65ff" strokeWidth={2.25} 
      className="text-green-600 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}


function Feature3({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <MessageCircleMore size={20} color="#af2b65ff" strokeWidth={2.25}  className="text-green-600 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function Feature4({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <CalendarHeart size={20} color="#af2b65ff" strokeWidth={2.25} 
      className="text-green-600 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
