"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MandalaCanvas from "@/components/animationComponents/Mandala";
import Header from "../Header";
import { Heart, Users, Star, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ✅ LAYER 1: Mandala Background (z-0) - FIRST IN DOM */}
      <div className="fixed top-1/2 -translate-y-1/2 flex justify-center items-center
       -right-32.5 md:-right-50 lg:-right-67.5 xl:-right-80 pointer-events-none z-0">
        <div className="h-125 w-125 md:h-150 md:w-150 lg:h-162.5 lg:w-162.5">
          <MandalaCanvas />
        </div>
      </div>

      <section className="relative min-h-[80vh] overflow-hidden 
      bg-linear-to-t from-[#fd81ab] via-[#feb4cc] to-[#feb4cc]">
        {/* ✅ LAYER 2: Header (z-50) */}
        <Header />

        {/* ✅ LAYER 3: Main Content (z-[60]) */}
        <div className="mx-auto flex max-w-6xl items-center px-6 pt-28 pb-16 gap-10 relative z-30">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-1 flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full z-60"
          >
            {/* Text Content - z-[70] */}
            <motion.div 
              variants={itemVariants}
              className="text-center lg:text-left max-w-lg lg:max-w-md space-y-6 lg:order-2 z-70"
            >
              <motion.span variants={itemVariants} className="inline-flex items-center bg-[#ffe6ee] backdrop-blur-sm rounded-2xl px-4 py-2 shadow-xl border border-white/50 z-70">
                <Sparkles className="w-4 h-4 mr-2 text-[#fc1d67]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-[#190009]/90 kotta-one-regular">
                  Find Your Life Partner
                </span>
              </motion.span>

              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-bold bg-linear-to-r from-[#fd4f89] via-[#fd4f89] to-[#e2034b] bg-clip-text 
              text-transparent leading-tight z-70 ">
                Discover Your <br />
                <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl  ">Perfect</span> <br />
                <span className="bg-linear-to-r from-[#fd4f89] via-[#fd4f89] to-[#e2034b] bg-clip-text ">Match</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#190009]/90 leading-relaxed 
              max-w-md mx-auto lg:mx-0 z-70 alike-angular-regular">
                Join <span className="font-semibold text-[#fd4f89] ">5K+</span> successful 
                matches. Verified profiles, smart matching, and modern Indian matrimony.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4 z-70">
                <div className="alike-angular-regular flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/50 z-70">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#fd4f89]">5K+</div>
                    <div className="text-xs uppercase text-[#190009]/90 tracking-wide">Happy Couples</div>
                  </div>
                  {/* <Heart className="w-8 h-8 text-[#e89b7c] z-70" /> */}
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#fd4f89]">100%</div>
                    <div className="text-xs uppercase text-[#190009]/90 tracking-wide">Verified</div>
                  </div>
                </div>

                <Link href="/login"><motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="alike-angular-regular bg-linear-to-r from-[#fd4f89]/60 to-[#fd81ab]/60 text-[#ffe6ee] font-bold px-8 py-4 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg lg:text-xl tracking-wide uppercase z-80"
                >
                  Welcome back
                </motion.button></Link>
              </motion.div>
            </motion.div>

            {/* ✅ BRIDE CARD CONTAINER - z-[65] */}
            <motion.div variants={itemVariants} className="lg:order-1 lg:block hidden relative lg:-right-8 xl:-right-12 z-65">
              {/* Glow Ring - z-[55] */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="pointer-events-none absolute -left-12 -top-8 w-95 h-120 lg:w-112.5 lg:h-137.5 rounded-full bg-linear-to-r from-white/30 to-white/10 blur-3xl shadow-2xl z-55"
              />

              {/* ✅ BRIDE IMAGE CARD - z-[65] */}
              <motion.div
                initial={{ y: 40, opacity: 0, rotateX: 10 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                whileHover={{ 
                  y: -12, 
                  rotateX: -5,
                  boxShadow: "0 40px 100px rgba(212, 91, 74, 0.4)",
                  scale: 1.02
                }}
                className="relative w-[320px] h-100 lg:w-105 lg:h-130 bg-linear-to-br from-white/20 to-white/10 backdrop-blur-xl shadow-2xl rounded-3xl lg:rounded-r-3xl border border-white/40 overflow-hidden z-65"
              >
                {/* ✅ IMAGE ITSELF - z-[75] - HIGHEST IN CARD */}
                <Image
                  src="/images/heros.png"
                  alt="Modern Indian Bride"
                  fill
                  priority
                  className="object-cover  rounded-3xl lg:rounded-r-3xl hover:brightness-110 transition-all duration-700 z-75"
                  style={{ zIndex: 75 }}
                />
                
                {/* Gradient Overlay - z-[70] */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent rounded-3xl lg:rounded-r-3xl z-70" />
                
                {/* Floating Hearts - z-[72] */}
                {/* <div className="absolute top-6 right-6 flex gap-1 z-80">
                  <Heart className="w-5 h-5 text-white/90 animate-pulse" />
                  <Heart className="w-4 h-4 text-white/70 animate-pulse" style={{animationDelay: '0.2s'}} />
                  <Star className="w-4 h-4 text-[#f3b886] animate-twinkle" />
                </div> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
