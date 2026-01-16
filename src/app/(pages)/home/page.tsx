"use client";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import { BadgeCheck, Check, ChevronLeft, Ellipsis, Undo2, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Images from "../profileupdate/(profileComponent)/(profileUiComponent)/Images";
import PropmtUI from "../profileupdate/(profileComponent)/(profileUiComponent)/PropmtUI";
import UserInfoUI from "../profileupdate/(profileComponent)/(profileUiComponent)/UserInfoUI";

export default function Home() {
  const ellipsisRef = useRef<HTMLButtonElement>(null);
  const profileScrollRef = useRef<HTMLDivElement>(null);

  const [likePerson, setLikePerson] = useState(false);
  const [ellipsisOpen, setEllipsisOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  useEffect(() => {
    const container = profileScrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 60) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [likePerson]);
  return (
    <div className="min-h-screen max-w-full py-1">
      <div className="flex ">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden mt-6 z-20">
          <Header />
        </div>

        {/* Right content */}
        <div ref={profileScrollRef} className="fixed inset-0  overflow-y-auto "
        >
          <Footer />
          {/* Top nav (always visible) */}
          <div
            className={`sticky top-0 z-30 bg-white flex items-center justify-between px-4 py-2
            transition-all duration-300 ease-in-out ${
              showSticky
                ? "opacity-100 translate-y-0 backdrop-blur-md"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }

          `}
          >
            {/* left: back*/}
            <div className="flex items-center gap-2">
              <button >
                
              </button>
            </div>
            {/* middle: name + badge */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <h1 className="text-lg font-bold">MonaLisa</h1>
                <BadgeCheck
                  size={24}
                  strokeWidth={2.25}
                  className="fill-blue-500 text-white"
                />
              </div>
            </div>
            {/* right: menu */}
            <button
              ref={ellipsisRef}
              className="relative hover:bg-gray-400"
              onClick={(e) => {
                e.stopPropagation();
                setEllipsisOpen(!ellipsisOpen);
              }}
            >
              <Ellipsis strokeWidth={2.25} className="text-gray-400" />
            </button>

            {ellipsisOpen && (
              <div className="absolute  right-0 top-10 w-32 bg-white rounded-lg shadow-lg">
                <ul className="flex-col justify-end p-2 w-auto h-auto">
                  <li className="px-4 py-2 hover:bg-gray-100  text-sm font-medium">
                    Remove
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 text-red-400 text-sm font-medium">
                    Report
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                    Block
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile content */}
          <div className="px-4 md:flex md:justify-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4 pb-10"
            >
              <div className="flex-col justify-center inset-0  gap-1 relative">
                <div className="flex justify-between items-center">
                <div className=" flex  items-center gap-1">
                  <h1 className="text-lg font-bold">MonaLisa</h1>
                  <BadgeCheck
                    size={27}
                    strokeWidth={2.25}
                    className="fill-blue-500 text-white"
                  />
                </div>
                <Undo2 className="text-black size-6 md:size-8" />
                </div>
                <span className="text-sm text-[#fd4f87]">active now</span>
              </div>

              <Images />
              <PropmtUI />
              <UserInfoUI />
              <Images />
              <Images />
              <PropmtUI />
              <Images />
              <PropmtUI />
              <Images />
            </motion.div>
          </div>

          <div
            className="fixed  w-full md:left-1/3 left-4 bottom-20 z-20 
          flex  justify-start items-center"
          >
            <button className=" bg-[#ffffff] rounded-full p-2 shadow-xl">
              <X className="size-9" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}
