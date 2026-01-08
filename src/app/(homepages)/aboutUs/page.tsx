"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Brain, Users, Sparkles, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const focusAreas = [
  {
    step: "01",
    title: "Modern First Impressions",
    desc: "What actually works in bios, prompts, and photos for Indian singles today.",
  },
  {
    step: "02",
    title: "Better Matches",
    desc: "How values, language, and family expectations shape long‑term compatibility.",
  },
  {
    step: "03",
    title: "Real Connections",
    desc: "What turns a right swipe into real conversations, dates, and relationships.",
  },
  {
    step: "04",
    title: "Avoiding Burnout",
    desc: "How to keep dating healthy, respectful, and drama‑free for everyone.",
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ffe6ee] via-[#fd81ab] to-[#fd4f89]">
      <Header />

      {/* Mission – left heading, right copy */}
      <section className="px-4 lg:px-20 pt-24 pb-16 bg-[#feb4cc]/95 text-gray-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.4fr,1fr] gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold tracking-[0.18em] uppercase text-terracotta-500 mb-6"
            >
              FinDMe Labs · The Mission
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-mustard-900 leading-tight rhodium-libre-regular"
            >
              Getting{" "}
              <span className="inline-block">
                modern{" "}
                <span className="relative">
                  matchmaking
                  <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-2 border-[3px] border-terracotta-500/80 rounded-full translate-y-1" />
                </span>
              </span>{" "}
              down to an art.
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-base md:text-lg text-terracotta-800 leading-relaxed alike-angular-regular"
          >
            <p className="mb-4">
              When FinDMe says it is built for serious relationships, it means
              it. FinDMe Labs studies how new‑generation Indians actually date —
              from the first like to the roka ceremony.
            </p>
            <p>
              We combine data, culture, and real stories to fine‑tune every
              screen, so your next first date can move confidently towards a
              forever match, not endless swiping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research hero: text left, image / visual right */}
      <section className="px-4 lg:px-20 py-20 bg-gradient-to-r from-white/80 via-beige-50/80 to-white/70 text-gray-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold tracking-[0.18em] uppercase text-terracotta-500 mb-4"
            >
              FinDMe Labs
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold text-mustard-900 mb-6 rhodium-libre-regular"
            >
              Research to help you find love — the Indian way.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-terracotta-800 leading-relaxed alike-angular-regular"
            >
              Our team blends psychology, tech, and desi lived experiences to
              understand what makes a match feel right — shared values, family
              comfort, and personal chemistry.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background image */}
            <Image
              src="/images/coupleLab.avif" // put your image in /public/images
              alt="Couple talking on a date"
              fill
              priority
              className="object-cover"
            />

            {/* Soft gradient overlay on top of image */}
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta-300/40 via-mustard-200/40 to-rose-200/40" />

            {/* Bottom-left info pill */}
            <div className="absolute inset-0 flex items-end justify-start p-6">
              <div className="bg-white/85 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                <Brain className="w-6 h-6 text-terracotta-600" />
                <span className="text-sm font-semibold text-mustard-900">
                  10K+ conversations analysed for deeper insights
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus / What the team researches */}
      <section className="px-4 lg:px-20 py-24 bg-[#ffe6ee] text-gray-700">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold tracking-[0.18em] uppercase text-terracotta-500 mb-4"
          >
            The Focus
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold text-mustard-900 mb-4 rhodium-libre-regular"
          >
            What the FinDMe Labs team studies.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base md:text-lg text-terracotta-800 mb-10 alike-angular-regular"
          >
            We look at the full journey of Indian daters — from creating a
            profile to meeting families — so we can design features that reduce
            noise and increase meaningful, long‑term matches.
          </motion.p>

          <div className="grid md:grid-cols-4 gap-10 pt-6">
            {focusAreas.map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="flex flex-col gap-3"
              >
                <span className="text-4xl md:text-5xl text-terracotta-600 rhodium-libre-regular">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-mustard-900">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-terracotta-700 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Small CTA bar like “designed to be deleted” */}
      <section className="px-4 lg:px-20 py-20 bg-gradient-to-r from-[#feb4cc] via-[#fd81ab] to-[#fd4f89] text-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-terracotta-700 mb-3">
              Designed for forever, not endless swipes
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-mustard-900 rhodium-libre-regular">
              FinDMe is built to be celebrated, not re‑installed.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-white text-mustard-900 font-semibold px-8 py-4 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
            >
              Join FinDMe <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center bg-transparent border border-white/70 text-white font-semibold px-8 py-4 rounded-3xl hover:bg-white/10 transition-all duration-300 text-base"
            >
              About the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
