"use client";

import Header from "@/components/mainHeaderFooter/HeaderMain";
import { Settings2, X, Settings, Pencil, BadgeCheck, Rose } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import MonthlySubscription from "../monthlySubscription/page";
// import YearlySubscription from "../yearlySubscription/page";

const tabs = ["1m-subscription", "12m-subscription"] as const;

export default function Setting() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("1m-subscription");
  return (
    <div className="min-h-screen max-w-full">
      {/* header part */}
      <div className="flex items-center justify-between mt-2 md:p-4 p-3">
        <Image
          src="/images/2.png"
          alt="logo"
          width={100}
          height={100}
          className="md:w-48 md:h-10 w-24 h-5 object-cover "
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
        <div className="w-34 h-34 relative flex items-center md:justify-start justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-[#FF5F6B] flex items-center justify-center">
            <div className="w-30 h-30 rounded-full border-3 border-white overflow-hidden">
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
        bg-gradient-to-br from-rose-200 via-pink-200 to-rose-200
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

      <Header />
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
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500" />
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
        className="h-[220px] w-full object-cover grayscale"
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
        className="h-[220px] w-full object-cover grayscale"
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
