"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Pencil,
  ChevronRight,
  Plus,
  X,
  HeartHandshake,
  Sparkles,
  Check,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const initialUser = {
  name: "Arjun Mehta",
  age: 27,
  jobTitle: "Software Engineer",
  company: "Bengaluru · Remote",
  intent: "Serious relationship / Marriage",
  bio: "Building products by day, learning raag by night. Looking for a partner who values family, faith and fun weekends.",
  height: "5'10\"",
  religion: "Hindu",
  community: "Baniya",
  education: "B.Tech · Computer Science",
  hometown: "Jaipur, Rajasthan",
  interests: ["Startup nerd", "Classical music", "Chai dates", "Long drives"],
  location: "Vashi",
  familyPlan: "want it",
  drinking: "Sometimes",
  smoking: "Never",
  drug: "no",
  prompts: [
    {
      label: "Prompt 1",
      question: "A green flag I look for",
      answer: "Kindness to service staff and a soft spot for parents.",
    },
    {
      label: "Prompt 2",
      question: "On weekends you’ll find me",
      answer: "Exploring new coffee places or planning the next family trip.",
    },
    {
      label: "Prompt 3",
      question: "Together we could",
      answer: "Try every regional food festival across India.",
    },
  ],
};

const imgs = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
];
const Edit = () => {
  const [activeTab, setActiveTab] = useState<"Edit" | "Preview">("Edit");
  const [user, setUser] = useState(initialUser);
  return (
    <main className="min-h-screen ">
      <section className="max-w-4xl mx-auto px-2  pt-3 md:pt-10">
        {/* photo & images */}
        <h2 className="md:p-4 p-2 text-gray-400 font-bold text-xs md:text-base">
          Photo & Video
        </h2>
        <div className="rounded-xl  md:px-4">
          <div className="grid grid-cols-3 gap-3">
            {imgs.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={src}
                  alt={`photo-${index + 1}`}
                  fill
                  className="object-cover"
                />

                <button
                  className="absolute -top-1 -right-1 flex items-center gap-2 
                rounded-full bg-white px-1 py-1 text-xs md:text-sm font-semibold 
                text-mustard-900 shadow-lg hover:bg-white"
                >
                  <X className="w-3 h-3 text-black " />
                </button>

                <button
                  className="text-white absolute bottom-1 md:bottom-2 left-2 md:left-3 right-0  items-center 
                 md:px-2 md:py-1 px-1 py-0.5 rounded-full text-xs md:text-sm font-semibold 
                text-mustard-900 shadow-lg flex gap-1 md:gap-2 bg-black/60 md:w-20 w-16 h-5 md:h-6"
                >
                  <Check className="size-4 md:size-12" /> Prompt
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* info fill  */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-[1.1fr,0.9fr] gap-3 lg:gap-8 mt-6"
        >
          {/* RIGHT - ABOUT US , BASIC INFO */}
          <motion.div variants={item} className="space-y-4">
            {/* my vitals */}
            <h2 className="md:p-4 p-2 text-gray-400 font-bold text-xs md:text-base">
              My Vitals
            </h2>
            <motion.div
              variants={item}
              className="rounded-lg bg-white/95 backdrop-blur-sm  px-4 py-3 md:p-6 shadow-md border 
                border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600">
                  About me
                </p>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Pencil className="w-3 h-3" />
                  Edit
                </button>
              </div>
              <p className="text-sm md:text-base text-terracotta-800 leading-relaxed">
                {user.bio.length > 0 ? (
                  user.bio
                ) : (
                  <textarea
                    rows={3}
                    placeholder="Tell us about yourself"
                    value={user.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                    className="w-full  border-none rounded-md  
                    text-sm md:text-base text-terracotta-800 leading-relaxed"
                  />
                )}
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="rounded-lg bg-white/95 backdrop-blur-sm  px-4 py-3 md:p-6 shadow-md border 
                border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600">
                  Basics
                </p>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Pencil className="w-3 h-3" />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <Detail label="Name" value={user.name} />
                <Detail label="Religion" value={user.religion} />
                <Detail label="Height" value={user.height} />
                <Detail label="Age" value={user.age} />
                <Detail label="Location" value={user.location} />
                <Detail label="Education" value={user.education} />
                <Detail label="Hometown" value={user.hometown} />
                <Detail label="Family Plan" value={user.familyPlan} />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT –  Interests, Prompts */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="md:p-4 p-2 text-gray-400 font-bold text-xs md:text-base">
              My Virtues
            </h2>

            {/* Interests tags like Tinder */}
            <motion.div
              variants={item}
              className="rounded-lg bg-white/95 backdrop-blur-sm  px-4 py-3 md:p-6 shadow-md border 
                    border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600">
                  Interests & vibe
                </p>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((chip) => (
                  <button
                    key={chip}
                    className="inline-flex items-center gap-1 rounded-full bg-terracotta-100 px-3 py-1 text-xs font-medium text-terracotta-800"
                  >
                    {chip}
                    <X className="w-3 h-3 opacity-70" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Prompts like Hinge */}
            <motion.div
              variants={item}
              className="rounded-lg bg-white/95 backdrop-blur-sm  px-4 py-3 md:p-6 shadow-md border 
                    border-gray-200 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600">
                    Prompts(3)
                  </p>
                  <p className="text-xs text-terracotta-700 mt-2">
                    Add 3 strong answers to show your personality.
                  </p>
                </div>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  Change prompts
                </button>
              </div>

              {user.prompts.map((p) => (
                <div
                  key={p.label}
                  className="rounded-lg bg-white/95 backdrop-blur-sm  px-4 py-3 md:p-6 shadow-md border 
                    border-gray-200"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-terracotta-500">
                      {p.question}
                    </p>
                    <button className="text-[11px] font-semibold text-terracotta-700 flex items-center gap-1">
                      <Pencil className="w-3 h-3" />
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-mustard-900 leading-relaxed">
                    {p.answer}
                  </p>
                </div>
              ))}
            </motion.div>
            {/* Save button */}
            {/* <motion.div variants={item} className="pt-2">
              <button className="w-full inline-flex items-center justify-center gap-2 
              rounded-3xl bg-linear-to-r from-mustard-500 to-terracotta-500 
              font-semibold py-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition
              text-black">
                <Sparkles className="w-5 h-5" />
                Save changes & update matches
              </button>
            </motion.div> */}
          </motion.div>

          {/* RIGHT - DRINK , DRUG , SMOKING */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="md:p-4 p-2 text-gray-400 font-bold text-xs md:text-base">
              My Vices
            </h2>
            <motion.div
              variants={item}
              className="rounded-lg bg-white/95 backdrop-blur-sm  px-4 py-3 md:p-6 shadow-md border 
                    border-gray-200"
            >

              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600 mb-3">Drinking</h2>
              <div className="flex items-center justify-between mb-3 border-gray-100 border p-2 rounded-lg shadow-gray-md">
                <p className="text-xs font-semibold  uppercase text-gray-400">
                  {user.drinking}
                </p>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>

              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600 mb-3">Smoking</h2>
              <div className="flex items-center justify-between mb-3 border-gray-100 border p-2 rounded-lg shadow-gray-md">
                <p className="text-xs font-semibold  uppercase text-gray-400">
                  {user.smoking}
                </p>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>

              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-terracotta-600 mb-3">Drug</h2>
              <div className="flex items-center justify-between mb-3 border-gray-100 border p-2 rounded-lg shadow-gray-md">
                <p className="text-xs font-semibold  uppercase text-gray-400">
                  {user.drug}
                </p>
                <button className="text-xs font-semibold text-terracotta-700 flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  Add
                </button>
              </div>

            </motion.div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  );
};

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-300 bg-beige-50/80 px-3 py-2">
      <p className="text-[11px] uppercase tracking-[0.16em] text-terracotta-500 mb-1">
        {label}
      </p>
      <p className="text-xs font-medium text-mustard-900 leading-snug">
        {value}
      </p>
    </div>
  );
}

export default Edit;

