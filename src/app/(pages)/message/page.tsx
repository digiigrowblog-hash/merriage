"use client";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Image from "next/image";
import { Flame, Sparkle, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

export default function Like() {
  const [matches, setMatches] = useState(1);
  const [messageBox, setMessageBox] = useState(false);
  return (
    <div className="min-h-auto max-w-full py-1 overflow-hidden">
      <Footer />

      <div className="flex mt-12 overflow-hidden  ">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden">
          <Header />
        </div>

        {/* Right content */}
        {matches === 0 ? (
          <div className="w-full md:w-full   py-4 ">
            <h1 className="text-3xl text-red-600/50 font-bold   px-4 doppio-one-regular">
              Matches
            </h1>
            <div className="flex-col items-center justify-center relative">
              {/* Decorative elements around image */}

              <Image
                src={"/images/message.png"}
                alt={"like"}
                width={300}
                height={300}
                className="relative z-10 w-full max-w-md mx-auto sm:w-64 md:w-52 rotate-6 object-contain drop-shadow-2xl"
              />
              <div className="flex-col justify-center items-center px-6 py-4 text-justify text-gray-800">
                <h2 className="text-center text-[20px] font-medium">
                  NO talk yet - We'r here to help
                </h2>
                <h2 className="text-center text-xs text-gray-400">
                  We can get you seen by more dater, sooner
                </h2>
              </div>

              <div className="flex-col items-center justify-start px-7 space-y-4 pt-5 road-rage-regular">
                <div
                  className="flex md:max-w-md w-full px-3 py-2 border border-[#d3a633] 
              rounded-3xl gap-2 items-center justify-center mx-auto"
                >
                  <Sparkles strokeWidth={1.75} className="text-[#daa727]" />
                  <span className="text-lg ">Upgrade to FindMe+</span>
                </div>
                <div
                  className="relative flex w-full md:max-w-md px-3 py-2 bg-[#e9b6be] text-white
              rounded-3xl gap-2 items-center justify-center mx-auto"
                >
                  <Zap strokeWidth={1.75} className="" />
                  <span className="text-lg text-white">Boost Your Profile</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full md:w-full py-4">
            <h1 className="text-3xl text-red-600/50 font-bold  mb-2 px-4 doppio-one-regular ">
              Matches
            </h1>
            <div className="flex-col items-center space-y-2">
              {/* one msg */}
              <div
                onClick={() => setMessageBox(!messageBox)}
                className="p-2 border-y border-y-gray-100 group  relative flex items-center gap-3  hover:bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-xl transition-all duration-200  hover:shadow-sm hover:-translate-y-0.5"
              >
                {/* Profile Image with Online Status */}
                <div className="relative shrink-0">
                  <Image
                    width={56}
                    height={56}
                    src="/images/img1.png"
                    alt="Profile"
                    className="w-14 h-14 rounded-2xl ring-2 ring-white/50 shadow-md object-cover"
                  />
                  {/* Online Status Ring */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-3 border-white rounded-full ring-2 ring-green-400/50 animate-pulse" />
                </div>

                {/* Message Preview */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 ">
                    <h3 className=" font-bold text-sm text-gray-900 truncate road-rage-regular-bold max-w-[140px]">
                      Radha Jha
                    </h3>
                    <span className="text-xs text-gray-500 font-medium">
                      2m ago
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate leading-tight">
                    Hey! Saw your profile and would love to chat 😊
                  </p>
                </div>

                {/* Smart Notification Badge */}
                <div className="relative flex-shrink-0 ml-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-ping opacity-75" />
                  <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-red-500 border-3 border-white shadow-lg rounded-full group-hover:scale-110 transition-transform">
                    <span className="text-xs font-bold text-white drop-shadow-sm road-rage-regular-bold">
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* dummy */}
              <div className="p-2 border-y border-y-gray-100 group  relative flex items-center gap-3  hover:bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-xl transition-all duration-200  hover:shadow-sm hover:-translate-y-0.5">
                {/* Profile Image with Online Status */}
                <div className="relative shrink-0">
                  <Image
                    width={56}
                    height={56}
                    src="/images/img2.png"
                    alt="Profile"
                    className="w-14 h-14 rounded-2xl ring-2 ring-white/50 shadow-md object-cover"
                  />
                  {/* Online Status Ring */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-3 border-white rounded-full ring-2 ring-green-400/50 animate-pulse" />
                </div>

                {/* Message Preview */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 ">
                    <h3 className=" font-bold text-sm text-gray-900 truncate road-rage-regular-bold max-w-[140px]">
                      Sejal singh
                    </h3>
                    <span className="text-xs text-gray-500 font-medium">
                      5m ago
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate leading-tight">
                    Hey! Saw your profile and would love to chat 😊
                  </p>
                </div>

                {/* Smart Notification Badge */}
                <div className="relative flex-shrink-0 ml-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-ping opacity-75" />
                  <div className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-red-500 border-3 border-white shadow-lg rounded-full group-hover:scale-110 transition-transform">
                    <span className="text-xs font-bold text-white drop-shadow-sm road-rage-regular-bold">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Box */}


      </div>
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}


