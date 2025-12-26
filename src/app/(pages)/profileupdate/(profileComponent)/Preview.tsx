"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Info, Quote } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const user = {
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
  photos: [
    "/images/profile-main.jpg",
    "/images/profile-2.jpg",
    "/images/profile-3.jpg",
    "/images/profile-4.jpg",
    "/images/profile-5.jpg",
    "/images/profile-6.jpg",
  ],
};

export default function Preview() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      {/* Centered card like real swipe profile */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full  bg-black text-white overflow-hidden shadow-2xl"
      >
        {/* PHOTO STACK (swipe-style, 6 images in vertical scroll) */}
        <div className=" w-full ">
          {user.photos.map((src, index) => (
            <motion.div
              key={src}
              variants={item}
              className="relative h-[520px] snap-start"
            >
              <Image
                src={src}
                alt={`${user.name} photo ${index + 1}`}
                fill
                className="object-cover"
              />

              {/* gradient at bottom for text legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* TOP BADGE only on first photo */}
              {index === 0 && (
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-black/70 backdrop-blur px-3 py-1 text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    FinDMe Preview
                  </span>
                </div>
              )}

              {/* NAME + AGE + JOB on first photo */}
              {index === 0 && (
                <div className="absolute bottom-5 left-4 right-4 flex flex-col gap-1">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <h1 className="text-3xl font-semibold">
                        {user.name}, {user.age}
                      </h1>
                      <p className="text-sm text-white/80 mt-1">
                        {user.jobTitle} · {user.company}
                      </p>
                    </div>
                    <span className="rounded-2xl bg-white/15 px-3 py-1 text-[11px] font-medium border border-white/20">
                      {user.intent}
                    </span>
                  </div>

                  {/* Basic chips like Tinder badges */}
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <Chip>{user.height}</Chip>
                    <Chip>{user.religion}</Chip>
                    <Chip>{user.community}</Chip>
                    <Chip>{user.education}</Chip>
                    <Chip>{user.hometown}</Chip>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* INFO PANEL (slides up like hinge “more info”) */}
        <motion.div
          variants={item}
          className="bg-white text-mustard-900 px-4 pt-4 pb-5 space-y-4"
        >
          {/* About / Bio */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Info className="w-4 h-4 text-terracotta-500" />
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-terracotta-600">
                About
              </p>
            </div>
            <p className="text-sm text-terracotta-800 leading-relaxed">
              {user.bio}
            </p>
          </div>

          {/* Interests */}
          {user.interests.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-terracotta-600 mb-2">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full bg-terracotta-100 px-3 py-1 text-[11px] font-medium text-terracotta-800"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Prompts – optional (only show those with answer) */}
          {user.prompts.some((p) => p.answer?.trim()) && (
            <div className="space-y-3 pt-1">
              {user.prompts
                .filter((p) => p.answer?.trim())
                .map((p) => (
                  <div
                    key={p.label}
                    className="rounded-2xl border border-mustard-100 bg-beige-50/90 p-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Quote className="w-4 h-4 text-terracotta-500" />
                      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-terracotta-600">
                        {p.question}
                      </p>
                    </div>
                    <p className="text-sm text-mustard-900 leading-relaxed">
                      {p.answer}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 border border-white/25 px-2.5 py-1">
      <span className="text-[11px] font-medium text-white">{children}</span>
    </span>
  );
}
