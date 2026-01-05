"use client";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PropmtUI from "../profileupdate/(profileComponent)/(profileUiComponent)/PropmtUI";
import UserInfoUI from "../profileupdate/(profileComponent)/(profileUiComponent)/UserInfoUI";
import Images from "../profileupdate/(profileComponent)/(profileUiComponent)/Images";

export default function Like() {
  const [like, setLike] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerXRef = useRef<HTMLDivElement>(null);
  const profileScrollRef = useRef<HTMLDivElement>(null);
  const [likePerson, setLikePerson] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  useEffect(() => {
    if (likePerson) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [likePerson]);

  const handleScroll = (direction: "next" | "prev") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    // Desktop (lg and above): vertical scroll
    if (window.innerWidth >= 1024) {
      const cardHeight = 320; // same as before
      const currentScroll = container.scrollTop;
      const offset = direction === "next" ? cardHeight : -cardHeight;

      container.scrollTo({
        top: Math.max(0, currentScroll + offset),
        behavior: "smooth",
      });
      return;
    }
  };

  const handleScrollX = (direction: "nextX" | "prevX") => {
    // mb and mobile (lg below): horizontal scroll
    if (!scrollContainerXRef.current) return;

    const container = scrollContainerXRef.current;
    const cardWidth = container?.clientWidth; // full-width card on mobile
    const currentScrollX = container?.scrollLeft;
    const offsetX = direction === "nextX" ? cardWidth : -cardWidth;

    container.scrollTo({
      left: Math.max(0, currentScrollX + offsetX),
      behavior: "smooth",
    });
  };

  const handleDown = () => handleScroll("next");
  const handleUp = () => handleScroll("prev");
  const handleLeft = () => handleScrollX("prevX");
  const handleRight = () => handleScrollX("nextX");

  return (
    <div className="min-h-screen max-w-full py-1 bg-[#fbfbfb]">
      <div className="flex lg:mt-3 mt-0 overflow-hidden">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-auto lg:block hidden mt-6">
          <Header />
        </div>

        {/* Right content */}
        <div className="w-full py-4 px-4">
          {/* title */}
          <h1 className="text-3xl text-red-600/50 font-bold mb-6 doppio-one-regular">
            Likes
          </h1>
          {/* logic if 0 like then empty content show  or it is one then main div show*/}
          {like === 0 ? (
            // Empty state
            <div className="flex flex-col items-center justify-center py-12">
              <Image
                src={"/images/lik.png"}
                alt={"like"}
                width={300}
                height={300}
                className="w-70 md:w-52 max-w-md mx-auto object-contain drop-shadow-2xl"
              />
              <div className="text-center px-6 py-4 text-gray-800 mt-8">
                <h2 className="text-[20px] font-medium ">
                  NO Like yet - We're here to help
                </h2>
                <h2 className="text-xs text-gray-400">
                  We can get you seen by more dater, sooner
                </h2>
              </div>
              <div className="flex flex-col items-center space-y-4 pt-8 road-rage-regular">
                <div className="w-full max-w-md px-3 py-2 border border-[#d3a633] rounded-3xl gap-2 items-center justify-center flex">
                  <Sparkles strokeWidth={1.75} className="text-[#daa727]" />
                  <span className="text-lg">Upgrade to FindMe+</span>
                </div>
                <div className="w-full max-w-md px-3 py-2 bg-gray-400 text-white rounded-3xl gap-2 items-center justify-center flex">
                  <Zap strokeWidth={1.75} />
                  <span className="text-lg">Boost Your Profile</span>
                </div>
              </div>
            </div>
          ) : (
            // like div state
            <div className=" flex flex-col lg:flex-row lg:items-start items-center gap-2 lg:gap-7 ">
              {/* Scroll buttons - Desktop only */}
              <div className="hidden lg:flex flex-col items-start gap-4 mt-8">
                <button
                  onClick={handleUp}
                  className="w-10 h-10 rounded-full bg-[#eee6e6] flex items-center justify-center hover:bg-[#e0dcdc] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronUp className="size-5 " />
                </button>
                <button
                  onClick={handleDown}
                  className="w-10 h-10 rounded-full bg-[#eee6e6] flex items-center justify-center hover:bg-[#e0dcdc] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronDown className="size-5" />
                </button>
              </div>

              {/* recent likes */}
              <h2 className="text-xl text-red-300">Recent Likes</h2>

              {/*pc screen Images container */}
              <div
                className="flex-1 lg:block hidden lg:flex-col  items-center lg:items-start 
                justify-center lg:justify-start gap-0 lg:gap-4 relative"
              >
                <div
                  ref={scrollContainerRef}
                  className="w-full gap-1 sm:gap-2 md:gap-4 lg:gap-8 max-w-none md:max-w-4xl flex lg:flex-col flex-row overflow-x-auto
                  lg:overflow-y-auto max-h-[70vh] lg:max-h-[60vh] pb-4 lg:pb-0 pl-4 pr-4 lg:px-0
                  snap-x snap-mandatory lg:snap-y lg:snap-mandatory scroll-smooth
                  scrollbar-hide overscroll-x-contain relative"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    overscrollBehaviorX: "contain",
                    scrollPaddingLeft: "1rem",
                    scrollPaddingRight: "1rem",
                  }}
                >
                  {/* Image Card 1 */}
                  <div
                    className="shrink-0 w-full sm:w-64 md:w-72 lg:w-80 h-64 snap-center lg:snap-start rounded-lg relative
                    shadow-lg"
                  >
                    <Image
                      fill
                      src={"/images/img1.png"}
                      alt="Like 1"
                      className="object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div className="absolute top-0 w-full p-3 bg-[#fafaf8]/90 backdrop-blur-sm text-black z-20">
                      <span className="text-xs font-medium">
                        Just felt cute might delete later
                      </span>
                    </div>
                    <span className="absolute -bottom-3 left-4 w-44 h-auto rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500 z-20 whitespace-nowrap shadow-lg">
                      Like You you voice pal
                    </span>
                  </div>

                  {/* Image Card 2 */}
                  <div
                    className="shrink-0 w-full sm:w-64 md:w-72 lg:w-80 h-64 snap-center lg:snap-start rounded-lg relative
                    shadow-lg"
                  >
                    <Image
                      fill
                      src={"/images/img1.png"}
                      alt="Like 1"
                      className="object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div className="absolute top-0 w-full p-3 bg-[#fafaf8]/90 backdrop-blur-sm text-black z-20">
                      <span className="text-xs font-medium">
                        Just felt cute might delete later
                      </span>
                    </div>
                    <span className="absolute -bottom-3 left-4 w-44 h-auto rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500 z-20 whitespace-nowrap shadow-lg">
                      Like You you voice pal
                    </span>
                  </div>
                  {/* 3rd one */}
                  <div
                    className="shrink-0 w-full sm:w-64 md:w-72 lg:w-80 h-64 snap-center lg:snap-start rounded-lg relative
                    shadow-lg"
                  >
                    <Image
                      fill
                      src={"/images/img1.png"}
                      alt="Like 1"
                      className="object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div className="absolute top-0 w-full p-3 bg-[#fafaf8]/90 backdrop-blur-sm text-black z-20">
                      <span className="text-xs font-medium">
                        Just felt cute might delete later
                      </span>
                    </div>
                    <span className="absolute -bottom-3 left-4 w-44 h-auto rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500 z-20 whitespace-nowrap shadow-lg">
                      Like You you voice pal
                    </span>
                  </div>
                  {/* end */}
                </div>
              </div>

              <div className="lg:hidden relative w-full">
                {/* Mobile left button / right button */}

                {like === 1 ? (
                  " "
                ) : (
                  <button
                    onClick={handleLeft}
                    className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-xl border border-gray-200/30"
                  >
                    <ChevronLeft className="size-6 text-red-300/50" />
                  </button>
                )}

                {like === 1 ? (
                  " "
                ) : (
                  <button
                    onClick={handleRight}
                    className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-xl border border-gray-200/30"
                  >
                    <ChevronRight className="size-6 text-red-300/50" />
                  </button>
                )}

                {/* mobile screen Images container */}
                <div
                  ref={scrollContainerXRef}
                  className="lg:hidden relative w-full h-[65vh] flex items-center
                  overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar bg-[#fbfbfb] shadow-[#fbfbfb] "
                >
                  {/* Image Cards - Full width, perfect snap */}
                  <div
                    className="shrink-0 w-full h-[65vh] snap-center rounded-2xl
                    relative  border-4 border-white/50 box-border 
                    overflow-hidden"
                  >
                    <Image
                      fill
                      src="/images/img2.png"
                      alt="Like 2"
                      className="object-cover rounded-2xl"
                      priority
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md   z-20">
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">
                        Loving this vibe today 🌟
                      </span>
                    </div>
                    <span className="absolute bottom-4 left-6 w-[85%] bg-gradient-to-r from-red-50/90 to-pink-50/90 px-4 py-2 rounded-full text-xs font-bold text-red-600 z-20 shadow-2xl border border-red-200/50 backdrop-blur-sm">
                      Like You you voice pal ✨
                    </span>

                    <div
                      onClick={() => setLikePerson(!likePerson)}
                      className="absolute top-4  right-0  w-20  rounded-full z-50"
                    >
                      <Image
                        src={"/images/img4.png"}
                        alt="likeperson"
                        width={300}
                        height={300}
                        className="object-cover w-12  rounded-full active:bg-black/90 "
                      />
                    </div>
                  </div>
{/* 
                  <div
                    className="shrink-0 w-full h-[65vh] snap-center rounded-2xl
                    relative shadow-2xl border-4 border-white/50 box-border 
                    overflow-hidden"
                  >
                    <Image
                      fill
                      src="/images/img3.png"
                      alt="Like 2"
                      className="object-cover rounded-2xl"
                      priority
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md  shadow-lg z-20">
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">
                        Loving this vibe today 🌟
                      </span>
                    </div>
                    <span className="absolute bottom-4 left-6 w-[85%] bg-gradient-to-r from-red-50/90 to-pink-50/90 px-4 py-2 rounded-full text-xs font-bold text-red-600 z-20 shadow-2xl border border-red-200/50 backdrop-blur-sm">
                      I like your smile ✨
                    </span>
                  </div> */}

                  {/* <div
                    className="shrink-0 w-full h-[65vh] snap-center rounded-2xl
                    relative shadow-2xl border-4 border-white/50 box-border 
                    overflow-hidden"
                  >
                    <Image
                      fill
                      src="/images/img2.png"
                      alt="Like 2"
                      className="object-cover rounded-2xl"
                      priority
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md  shadow-lg z-20">
                      <span className="text-sm font-semibold text-gray-800 block leading-tight">
                        Loving this vibe today 🌟
                      </span>
                    </div>
                    <span className="absolute bottom-4 left-6 w-[85%] bg-gradient-to-r from-red-50/90 to-pink-50/90 px-4 py-2 rounded-full text-xs font-bold text-red-600 z-20 shadow-2xl border border-red-200/50 backdrop-blur-sm">
                      Like You you voice pal ✨
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Most Recent Likes */}
              <div className="lg:block hidden flex-col w-full mx-auto">
                <div
                  className="relative max-w-md w-full aspect-square overflow-hidden rounded-md 
                  mx-auto shadow-lg border border-gray-200"
                >
                  <Image
                    src="/images/img1.png"
                    alt="img"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 w-full p-3 bg-[#fafaf8] text-black z-20">
                    <span className="text-base font-medium Sans-serif ">
                      Just felt cute might delete later
                    </span>
                  </div>
                  <span
                    className="z-30 absolute -bottom-1 left-4 w-44 h-auto 
                    rounded-full bg-red-50 px-3 py-1 text-xs font-medium
                    text-red-500 whitespace-nowrap shadow-lg"
                  >
                    Like You you voice pal
                  </span>

                  <div className="absolute bottom-5 right-8 flex items-center justify-center gap-2">
                    <button className="bg-white text-gray-400 font-medium px-2 py-1 rounded-md shadow-md">
                      Accept
                    </button>
                    <button className="bg-white text-red-400 font-medium px-2 py-1 rounded-md shadow-md">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {likePerson && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Top nav (always visible) */}
          <div className="sticky top-0 z-30 bg-white border-b">
            <div className="flex items-center gap-2 p-4">
              <button onClick={() => setLikePerson(false)}>
                <ChevronLeft className="size-6 text-red-300" />
              </button>
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>
          </div>

          {/* Profile content */}
          <div className="px-4">
            {/* Sticky name section */}
            <div className="sticky top-[56px] z-20 bg-white py-3 w-full">
              <div className="flex justify-center items-center gap-1">
                <h1 className="text-lg font-bold">Rahul</h1>
                <BadgeCheck
                  size={27}
                  strokeWidth={2.25}
                  className="fill-blue-500 text-white"
                />
              </div>
            </div>

            {/* Scrollable content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4 pb-10"
            >
              <div className="flex-col justify-center inset-0  gap-1 ">
                <div className="flex  items-center gap-1">
                <h1 className="text-lg font-bold">Rahul</h1>
                <BadgeCheck
                  size={27}
                  strokeWidth={2.25}
                  className="fill-blue-500 text-white"
                />
                </div>
                <span className="text-sm text-red-400">active now</span>
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

          <button className=""></button>
          {/* <button className="absolute"><Check /></button> */}
        </div>
      )}

      {/* Mobile Header */}
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}
