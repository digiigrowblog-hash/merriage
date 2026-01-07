"use client";

import {
  CalendarHeart,
  MessageCircleMore,
  Star,
  X,
  Crown,
  Infinity,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import HeaderMain from "@/components/mainHeaderFooter/HeaderMain";
import Header from "@/components/Header";

export default function SubscriptionComparisonPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subscriptionId = searchParams.get("from") || "";
  const membershipPage = searchParams.get("membership") || "";;

  const handleSubscription = (plan: "monthly" | "yearly") => {
    const redirectTo = membershipPage || subscriptionId || "/home";
    router.push(redirectTo);
  };

  const plans = [
    {
      id: "monthly",
      title: "1-Month Smart Match Pass",
      subtitle: "Kick-start your partner search",
      price: "₹199",
      period: "/ month",
      badge: "Most Popular Starter",
      image: "/images/dating.png",
      features: [
        "2x more profiles in daily recommendations and Unlimited swipes",
        "Extra filters: education, profession, community, city",
        "Send more interests & chat with serious members",
        "Highlighted profile during busy evenings & weekends",
      ],
      footer:
        "Perfect if you want to test the waters and get quicker responses",
      cta: "Continue with 1-Month",
    },
    {
      id: "yearly",
      title: "12-Month Premium Match Plan",
      subtitle: "Designed for serious marriage-minded members",
      price: "₹2999",
      period: "/ year",
      badge: "Best Value",
      image: "/images/marriage.png",
      savings: "Lowest cost per month • Best savings",
      features: [
        "3x more exposure in search & daily recommendations all year",
        "All advanced filters: lifestyle, family, income, education",
        "Unlimited chats with higher contact-view limits",
        "Priority support & early access to special match events",
      ],
      footer:
        "Ideal for serious long-term partner search with maximum confidence",
      cta: "Go Premium for 12 Months",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        .sparkle-glow {
          animation: sparkle 1.2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-[#f3c871] via-[#f3b886] to-[#e89b7c]">
        {/* ✅ Header with proper spacing */}
        <Header />

        <div className="pt-24 pb-12 px-4 space-y-8 bg-white/70">
          {" "}
          {/* pt-24 for header space */}
          {/* Close Button - Centered Top */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              type="button"
              className="relative inline-flex items-center justify-center rounded-full
               p-3 focus:outline-none shadow-lg hover:shadow-xl transition-all duration-300 z-50"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500/20 to-pink-500/20 blur-sm sparkle-glow" />
              <X className="relative size-6 text-rose-500 drop-shadow-lg z-10" />
            </motion.button>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            {/* DESKTOP: Side-by-side */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  index={index}
                  onSubscribe={() => handleSubscription(plan.id as any)}
                />
              ))}
            </div>

            {/* MOBILE: Stacked */}
            <div className="md:hidden space-y-8">
              {plans.map((plan, index) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  index={index}
                  onSubscribe={() => handleSubscription(plan.id as any)}
                  mobile
                />
              ))}
            </div>

            {/* Mobile Tab Switcher */}
            <div className="md:hidden flex justify-center mt-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-xl flex border border-white/50">
                {plans.map((plan, i) => (
                  <button
                    key={plan.id}
                    className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex-1 ${
                      i === 0
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md"
                        : "text-rose-600 hover:text-rose-700 bg-white/50 hover:bg-white"
                    }`}
                  >
                    {plan.badge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface PlanCardProps {
  plan: any;
  index: number;
  onSubscribe: () => void;
  mobile?: boolean;
}

function PlanCard({ plan, index, onSubscribe, mobile }: PlanCardProps) {
  const getIcon = (index: number) => {
    const icons = [Infinity, Star, MessageCircleMore, CalendarHeart];
    const IconComponent = icons[index % icons.length];
    return (
      <IconComponent
        size={20}
        className="text-rose-500 drop-shadow-sm"
        strokeWidth={2.5}
      />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 backdrop-blur-xl ${
        plan.id === "yearly"
          ? "border-rose-500/60 bg-gradient-to-br from-rose-50/95 to-pink-50/95"
          : "border-pink-500/40 bg-white/95"
      } hover:shadow-3xl hover:-translate-y-2 transition-all duration-500`}
    >
      {/* Badge */}
      <span
        className="absolute -top-2 left-1/2 -translate-x-1/2 
      bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs 
      px-4 py-2 rounded-full font-semibold shadow-lg z-10 flex 
      items-center gap-1 border border-white/30"
      >
        {plan.id === "yearly" && <Crown size={14} />}
        {plan.badge}
      </span>

      {/* Hero Image */}
      <div className="relative h-32 overflow-hidden">
        <Image
          src={plan.image}
          alt={plan.title}
          fill
          className="object-cover grayscale hover:brightness-110 transition-all duration-500"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-red-500/50
         via-red-400/50 to-transparent flex flex-col items-center justify-center 
         text-center px-4 text-white"
        >
          <h2 className="text-2xl font-bold mb-1 drop-shadow-lg">
            Find<span className="font-light">Me</span>{" "}
            {plan.id === "yearly" ? "Premium" : ""}
          </h2>
          <p className="text-sm max-w-[200px] leading-tight drop-shadow-md">
            {plan.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 md:p-8 ${mobile ? "pb-12" : "pb-8"} space-y-6`}>
        {/* Title */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {plan.title}
          </h1>
          <p className="text-sm text-gray-700">{plan.subtitle}</p>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-baseline">
            <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {plan.price}
            </span>
            <span className="text-sm text-gray-500 ml-2">{plan.period}</span>
          </div>
          {plan.savings && (
            <p className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium w-fit border border-emerald-200">
              {plan.savings}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {plan.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">{getIcon(i)}</div>
              <span className="text-sm text-gray-700 leading-relaxed flex-1">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          onClick={onSubscribe}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white 
          py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold shadow-xl hover:shadow-2xl 
          transition-all duration-300 border border-rose-500/30"
        >
          {plan.cta}
        </motion.button>

        {/* Footer */}
        <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed px-2">
          {plan.footer}
        </p>
      </div>
    </motion.div>
  );
}
