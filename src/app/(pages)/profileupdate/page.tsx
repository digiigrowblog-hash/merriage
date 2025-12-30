"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Edit from "./(profileComponent)/Edit";
import Preview from "./(profileComponent)/Preview";
import {
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function ProfileEditPage() {
  const [activeTab, setActiveTab] = useState<"Edit" | "Preview">("Edit");

  return (
    <main className="min-h-auto overflow-hidden">
      <section className="max-w-4xl mx-auto px-4 md:pb-24 pb-2 pt-6 md:pt-10">
        {/* previous Btn Icon */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/profile"
            className="text-sm font-semibold text-mustard-900 flex items-center gap-1"
          >
           
            <ChevronLeft className="w-4 h-4" />
             Profile
          </Link>
        </div>
        
        {/* tab for edit and preview */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-[1.1fr,0.9fr] gap-5 lg:gap-10"
        >
        <div className="w-full max-w-4xl mx-auto ">
          <div className="flex border-b border-gray-200 justify-around">
            <Tab
              label="Edit"
              isActive={activeTab === "Edit"}
              onClick={() => {
                setActiveTab("Edit");
              }}
            />
            <Tab
              label="Preview"
              isActive={activeTab === "Preview"}
              onClick={() => {
                setActiveTab("Preview");
              }}
            />
          </div>
          <div className="mt-4 md:p-2">
            {activeTab === "Edit" && <Edit />}
            {activeTab === "Preview" && <Preview />}
          </div>
        </div>
        </motion.div>
      </section>
    </main>
  );
}

function Tab({
  label,
  onClick,
  isActive,
}: {
  label: string;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex-1 py-3 text-sm font-medium text-center relative w-40
        ${isActive ? "text-red-400" : "text-gray-400"}
      `}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500" />
        )}
      </button>
    </div>
  );
}
