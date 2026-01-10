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
  Ticket,
  Info,
} from "lucide-react";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  const [lock, setLock] = useState(false);
  const handleCarnival = () => {
    router.push("/carnivalFest");
  };
  return (
    <div className="min-h-screen max-w-full py-1">
      <div className="flex md:mt-4">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden mt-2">
          <Header />
        </div>

        <div className="w-full md:w-full max-h-full mt-4 h-full  md:pb-0 pb-16">
          <h1 className="text-3xl text-[#fd4f87]    px-4 font-bold ">
            SpotLight
          </h1>
          <div className="grid md:grid-cols-2  grid-cols-1 md:gap-1">
            <div className=" max-w-lg w-full mt-4 px-2 mx-auto">
              <div
                className="relative flex justify-center max-w-lg w-full  backdrop-blur-md
              bg-[#feb4cc] rounded-3xl"
              >
                <Image
                  src={"/images/room.png"}
                  alt={"room"}
                  width={300}
                  height={300}
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
                          <Plus
                            onClick={handleCarnival}
                            className="w-8 h-8 text-white bg-red-500/30 rounded-full p-1"
                          />
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
                <div className="absolute  flex-col  items-center justify-center space-y-2 bottom-5">
                  <button
                    className="backdrop-blur-md bg-white/20 border border-white/40 rounded-2xl 
                  md:px-4 md:py-2 px-2 py-1 flex items-center gap-3 shadow-lg"
                  >
                    <Rose className="md:w-6 md:h-6 w-4 h-4 text-pink-100" />
                    <span className="text-white font-semibold sm:text-lg text-xs">
                      Carnival Night Special
                    </span>
                  </button>

                  <div className="flex justify-center ">
                    <span
                      className="backdrop-blur-md bg-white/20 border border-white/40 rounded-full
                  md:px-3 md:py-1 px-2 py-0.5 text-xs text-white font-semibold shadow-lg"
                    >
                      🔴 Live Event
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="max-w-lg w-full mt-4  mx-auto flex-col items-center 
            px-2 py-1 justify-center rounded-xl space-y-4"
            >
              {/* member ship cart */}
              <div
                className=" items-center  flex  backdrop-blur-md 
                 px-2 py-1 text-xs text-white font-semibold  space-y-3"
              >
                {/* notice heading */}
                <div className="flex justify-center items-center gap-4">
                  <div
                    className="bg-pink-400 px-2 md:py-1 py-2 rounded-2xl flex justify-center 
                items-center gap-1"
                  >
                    <Pencil className="md:size-3 size-2" />
                    <span className="text-xs  hidden md:block">Note</span>
                  </div>

                  <span className="md:text-base text-xs text-justify text-black">
                    We'r Here to help you to find the perfect partner
                  </span>
                </div>
              </div>
              {/* notice subject */}

              <div
                className="bg-linear-to-r from-pink-100 to-rose-100 rounded-2xl p-6 
              shadow-xl border-2 border-pink-200/50"
              >
                <h4 className="text-xl font-bold text-pink-700 mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-pink-500" />
                  Festival Info
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed bg-white/60 rounded-xl p-4">
                  Carnival festival is available every Saturday and Sunday
                  evening for premium members. Join the live room, meet new
                  couples, and enjoy romantic games and matching sessions. Also
                  we provide couple who want to attend the festival{" "}
                </p>
              </div>

              {/* membership */}

              <div
                className="flex md:max-w-md w-full px-3 py-2  bg-pink-400
                rounded-3xl gap-2 items-center justify-center mx-auto"
              >
                <Sparkles strokeWidth={1.65} className="text-white" />
                <span className="text-lg text-white road-rage-regular ">
                  Upgrade to FindMe+
                </span>
              </div>

              {/* special coupon 49rupee only for carnival festival */}

              <div
                className="flex md:max-w-md w-full px-3 py-2  bg-[#fc1d65]
                rounded-3xl gap-2 items-center justify-center mx-auto "
              >
                <Ticket strokeWidth={1.65} className="text-white" />
                <span className="text-lg text-white road-rage-regular">
                  Carnival Festival Coupon ₹49
                </span>
              </div>
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
