"use client";

import Header from "@/components/mainHeaderFooter/HeaderMain";
import { useRouter } from "next/navigation";
import {
  Settings2,
  X,
  Settings,
  Pencil,
  BadgeCheck,
  Rose,
  Plus,
} from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["1m-subscription", "12m-subscription"] as const;

export default function Setting() {
  const router =  useRouter ()
  const handleProfile = ()=>{
    router.push("/profileupdate")
  }

  const handlecarnival = () => {
    alert("Carnival event added to your calendar!");
  }
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("1m-subscription");
  return (
    <div
      className="min-h-screen max-w-full
    flex flex-col lg:flex-row bg-linear-to-br from-rose-50/30 via-pink-50/20 to-orange-50/10"
    >
      {/* header part */}
      <div className="w-full lg:w-[10%] max-w-full lg:block hidden"><Header/></div>

      <div  className="w-full lg:w-[40%] max-w-full mx-auto ">

        <div  className="flex items-center justify-between mt-2 md:p-4 p-3 ">
         
          <Image
            src="/images/2.png"
            alt="logo"
            width={100}
            height={100}
            className="md:w-48 md:h-10 w-24 h-5 object-cover cursor-pointer "
            
          />

          <div className="flex md:gap-3 gap-2">
            <Link href="/matchPreference?from=/profile">
              <Settings2 className="rotate-90" />
            </Link>

            <Link href="/setting">
              <Settings />
            </Link>
          </div>
        </div>
        

        {/* profile shows */}
        <div className="flex flex-col md:items-start md:justify-start items-center justify-center mx-auto relative md:px-8">
          {/* Avatar */}
          <div onClick={handleProfile} className="cursor-pointer w-34 h-34 relative flex items-center md:justify-start justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-[#FF5F6B] flex items-center justify-center">
              <div className="w-30 h-30 rounded-full border-3 border-white overflow-hidden ">
                <Image
                  src="/images/img1.png"
                  alt="personLogo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-gray-100 w-5 h-5 rounded-full flex items-center justify-center z-10">
              <Pencil size={12} strokeWidth={3.2} className="text-red-400" />
            </div>
          </div>

          {/* Name + badge */}
          <div className="flex gap-1 mt-2 md:self-start self-center">
            <h1 className="text-2xl font-bold">MonaLisa</h1>
            <BadgeCheck
              size={27}
              strokeWidth={2.25}
              className="mt-1 fill-blue-500 text-white"
            />
          </div>
        </div>

        {/* Subscription */}

        <div className="w-full max-w-md mx-auto md:mx-0">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <Tab
              label="1M Subscription"
              isActive={activeTab === "1m-subscription"}
              onClick={() => setActiveTab("1m-subscription")}
            />
            <Tab
              label="12M Subscription"
              isActive={activeTab === "12m-subscription"}
              onClick={() => setActiveTab("12m-subscription")}
            />
          </div>

          {/* Content */}
          <div className="mt-4 p-2">
            {activeTab === "1m-subscription" && <MonthlySubscription />}
            {activeTab === "12m-subscription" && <YearlySubscription />}
          </div>
        </div>

        {/* Weekend carnival */}
        <div className="w-full max-w-md mx-auto md:mx-0 mt-4 px-2 mb-20">
          <div className="flex p-1 border border-gray-300 rounded-2xl bg-white gap-3">
            {/* Rose Icon */}
            <div
              className="
        w-12 h-12 rounded-full relative
        bg-linear-to-br from-rose-200 via-pink-200 to-rose-200
        shadow-md ring-2 ring-rose-200/60
        flex items-center justify-center
      "
            >
              <Rose
                size={28}
                strokeWidth={2.25}
                className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              />

              {/* Count Badge */}
              <div
                className="
          absolute -top-1 -right-1
          bg-white text-rose-600
          w-5 h-5 rounded-full
          flex items-center justify-center
          text-xs font-semibold
          shadow-sm
        "
              >
                <span className="bg-pink-400 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white">
                  1
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-base font-semibold">Weekend Carnival</h2>
              <p className="text-gray-500 text-xs font-medium">
                Find the perfect night for your partner
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] max-w-full h-screen px-2 py-4 mx-auto">
        {/* Top heading bar */}
        <div className="relative bg-red-400/40 rounded-xl border border-pink-200 px-5 py-3 shadow-lg overflow-hidden">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

          <div className="relative flex items-center justify-between gap-3">
            {/* left: title + subtitle */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-rose-100 font-semibold">
                Weekend special
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold text-rose-900/60 drop-shadow-sm">
                Carnival <span className="text-rose-900/60">Festival</span>
              </h1>
              <p className="text-xs md:text-sm text-rose-50/90 mt-1">
                Live matching • Music • Lights • Fun nights
              </p>
            </div>

            {/* right: glass pill with icon */}
            <div className="backdrop-blur-xl bg-white/15 border border-white/40 rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
              <span
                className="inline-flex h-6 w-6 items-center justify-center 
      rounded-full bg-violet-500/20 text-[10px] font-bold text-white shadow"
              >
                Sat
              </span>
              <span
                className="inline-flex h-6 w-6 items-center justify-center 
      rounded-full bg-pink-500/20 text-[10px] font-bold text-white shadow"
              >
                Sun
              </span>
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                8 PM - 12 AM
              </span>
            </div>
          </div>
        </div>

        {/* Main carnival card */}
        <div className="mt-4 bg-red-400/40 rounded-xl p-3">
          <div className="relative w-full h-72 rounded-xl overflow-hidden">
            {/* Your carnival image */}
            <Image
              src="/images/carnivalFest.png" // put your file in public/images/ as carnivalFest.jpg
              alt="Carnival couple"
              fill
              className="object-cover"
            />

            {/* Glass overlay with icon + title */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

            <motion.div
              className="absolute left-4 bottom-28 right-4 rounded-full px-3 py-2 flex items-center justify-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4 }}
            >
              <button onClick={handlecarnival} className="backdrop-blur-md bg-white/20 border border-white/40 rounded-full px-1 py-1 shadow-lg">
                <Plus className="w-8 h-8 text-white bg-red-500/30 rounded-full p-1" />
              </button>
            </motion.div>

            <div className="absolute left-4 bottom-4 right-4 flex  items-center justify-between ">
              <div className="backdrop-blur-md bg-white/20 border border-white/40 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg">
                <Rose className="w-6 h-6 text-pink-100" />
                <span className="text-white font-semibold sm:text-lg text-xs">
                  Carnival Night Special
                </span>
              </div>

              <div className="backdrop-blur-md bg-white/20 border border-white/40 rounded-full px-3 py-1 text-xs text-white font-semibold shadow-lg">
                LIVE EVENT
              </div>
            </div>
          </div>

          {/* Text content under image */}
          <div className="mt-4 bg-white/70 rounded-xl p-4 border border-pink-100">
            <h2 className="text-lg font-semibold text-pink-700">
              Weekend Carnival Festival
            </h2>
            <p className="text-sm text-pink-800 mt-1">
              Carnival festival is available every Saturday and Sunday evening
              for premium members. Join the live room, meet new couples, and
              enjoy romantic games and matching sessions.
            </p>
          </div>
        </div>

      </div>

      <div className="w-full lg:hidden block">
        <Header />
      </div>
      
    </div>
  );
}

function Tab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 text-sm font-medium text-center relative
        ${isActive ? "text-red-400" : "text-gray-400"}
      `}
    >
      {label}

      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500" />
      )}
    </button>
  );
}

// 2x more profiles shown in your daily recommendations
function MonthlySubscription() {
  return (
    <div className="relative rounded-2xl overflow-hidden ">
      <Image
        src="/images/dating.png"
        alt="Get more"
        width={800}
        height={500}
        className="h-55 w-full object-cover grayscale"
      />
      <div
        className="absolute inset-0 bg-red-400/40 flex flex-col items-center 
      justify-center text-center px-6"
      >
        <h2 className="text-white text-2xl font-semibold mb-2">
          Find<span className="font-light">Me</span>
        </h2>
        <p className="text-white text-sm mb-6">
          Profiles shown in your daily recommendations <b>2x</b> better
          visibility on busy evenings/weekends.
        </p>
        <Link
          href={"/monthlySubscription?from=/profile"}
          className="bg-white px-8 py-3 rounded-full text-sm font-medium"
        >
          Upgrade
        </Link>
      </div>
    </div>
  );
}

function YearlySubscription() {
  return (
    <div className="relative rounded-2xl overflow-hidden ">
      <Image
        src="/images/marriage.png"
        alt="Get more"
        width={800}
        height={500}
        className="h-55 w-full object-cover grayscale"
      />
      <div
        className="absolute inset-0 bg-red-400/40 flex flex-col items-center 
      justify-center text-center px-6"
      >
        <h2 className="text-white text-2xl font-semibold mb-2">
          Find<span className="font-light">Me</span>
        </h2>
        <p className="text-white text-sm mb-6">
          Designed for seriously marriage‑minded members who want maximum
          visibility and time to find the right partner without pressure.
        </p>
        <Link
          href="/yearlySubscription"
          className="bg-white px-8 py-3 rounded-full text-sm font-medium"
        >
          Upgrade
        </Link>
      </div>
    </div>
  );
}
