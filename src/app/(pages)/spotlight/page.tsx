"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Rose,
  Users,
  Calendar,
  Lock,
  TicketCheck,
  Pencil,
  Sparkles,
  Zap,
} from "lucide-react";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  const [lock, setLock] = useState(false);
  const handleCarnival = ()=>{
    router.push("/carnivalFest");
  }
  return (
    <div className="min-h-screen max-w-full py-1">
      <Footer />

      <div className="flex mt-12">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden">
          <Header />
        </div>

        {/* Right content */}
        <div className="w-full md:w-full max-h-full mt-4">
          <h1 className="text-3xl text-red-600/50    px-4 font-bold ">
            SpotLight
          </h1>

          <div className=" max-w-lg w-full mt-4 px-2 mx-auto">
            <div
              className="relative flex justify-center max-w-lg w-full  backdrop-blur-md
             bg-red-300 rounded-3xl"
            >
              <Image
                src={"/images/room.png"}
                alt={"room"}
                width={400}
                height={400}
                className="object-cover w-full max-w-120 h-md py-3 rounded-3xl md:px-0 px-2"
              />
              {/* unlock button */}
              <motion.div
                className="absolute left-4 top-32 right-4 rounded-full px-3 py-2 flex items-center justify-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="backdrop-blur-md bg-white/20 border border-white/40 rounded-full shadow-lg flex items-center justify-center gap-2 overflow-hidden"
                  animate={{
                    padding: lock ? "0.25rem" : "1rem 1.5rem", // Expands when unlocked
                    minWidth: lock ? "2.5rem" : "12rem",
                    height: lock ? "2.5rem" : "3rem",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    padding: { duration: 0.3 },
                    minWidth: { duration: 0.35 },
                    height: { duration: 0.3 },
                  }}
                >
                  {/* Lock/Plus Icon Animation */}
                  <AnimatePresence mode="wait">
                    {lock ? (
                      <motion.div
                        key="lock"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="shrink-0"
                      >
                        <Lock className="w-8 h-8 text-white bg-red-500/30 rounded-full p-1" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -180 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="shrink-0"
                      >
                        <Plus onClick={handleCarnival} className="w-8 h-8 text-white bg-red-500/30 rounded-full p-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Text Reveal Animation */}
                  <AnimatePresence>
                    {!lock && (
                      <motion.span
                        key="text"
                        initial={{
                          width: 0,
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          width: "auto",
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          width: 0,
                          opacity: 0,
                          x: -10,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.15, // Starts after icon
                          ease: "easeOut",
                        }}
                        className="text-white font-bold text-sm sm:text-base md:text-lg road-rage-regular whitespace-nowrap overflow-hidden"
                      >
                        Join the Magic Now
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* one is icon */}
              <div className="absolute  flex-col  items-center justify-center space-y-2 bottom-16">
                <button className="backdrop-blur-md bg-white/20 border border-white/40 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-lg">
                  <Rose className="w-6 h-6 text-pink-100" />
                  <span className="text-white font-semibold sm:text-lg text-xs">
                    Carnival Night Special
                  </span>
                </button>

                <div className="flex justify-center ">
                  <span
                    className="backdrop-blur-md bg-white/20 border border-white/40 rounded-full
                 px-3 py-1 text-xs text-white font-semibold shadow-lg"
                  >
                    🔴 Live Event
                  </span>
                </div>
              </div>

              {/* note part */}
              <div
                className="justify-center items-center absolute flex bottom-5  backdrop-blur-md bg-white/20 border border-white/40 
              rounded-full px-2 py-1 text-xs text-white font-semibold shadow-lg gap-3"
              >
                <div className="bg-pink-400 px-2 md:py-1 py-2 rounded-2xl flex justify-center items-center gap-1">
                  <Pencil className="md:size-3 size-2" />
                  <span className="text-xs  hidden md:block">Note</span>
                </div>

                <span className="md:text-base text-xs text-justify">
                  We'r Here to help you to find the perfect partner
                </span>
              </div>
            </div>
          </div>

          <div className="flex-col items-center justify-start px-7 space-y-4 pt-5 road-rage-regular">
            <div
              className="flex md:max-w-md w-full px-3 py-2  bg-pink-400
              rounded-3xl gap-2 items-center justify-center mx-auto"
            >
              <Sparkles strokeWidth={1.65} className="text-white" />
              <span className="text-lg text-white road-rage-regular ">Upgrade to FindMe+</span>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}
