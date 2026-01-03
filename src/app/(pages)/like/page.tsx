"use client";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Image from "next/image";
import { ChevronDown, ChevronUp, Sparkles, Zap } from "lucide-react";
import { useState, useRef } from "react";
import Images from "../profileupdate/(profileComponent)/(profileUiComponent)/Images";

export default function Like() {
  const [like, setLike] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleDown = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate card height dynamically based on viewport - adjusted for smaller mobile cards
      const cardHeight = window.innerWidth >= 1024 ? 320 : window.innerWidth >= 768 ? 300 : 260;
      const currentScroll = container.scrollTop;
      const nextPosition = currentScroll + cardHeight;

      container.scrollTo({
        top: nextPosition,
        behavior: "smooth",
      });
    }
  };

  const handleUp = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate card height dynamically based on viewport - adjusted for smaller mobile cards
      const cardHeight = window.innerWidth >= 1024 ? 320 : window.innerWidth >= 768 ? 300 : 260;
      const currentScroll = container.scrollTop;
      const prevPosition = Math.max(0, currentScroll - cardHeight);

      container.scrollTo({
        top: prevPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen max-w-full py-1 bg-[#fbfbfb]">
    

      <div className="flex mt-3 overflow-hidden">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden">
          <Header />
        </div>

        {/* Right content */}
        <div className="w-full  py-4 px-4">
          <h1 className="text-3xl text-red-600/50 font-bold mb-6 doppio-one-regular">
            Like you
          </h1>

          {like === 0 ? (
            // Empty state
            <div className="flex flex-col items-center justify-center py-20">
              <Image
                src={"/images/lik.png"}
                alt={"like"}
                width={300}
                height={300}
                className="w-48 max-w-md mx-auto object-contain drop-shadow-2xl"
              />
              <div className="text-center px-6 py-4 text-gray-800 mt-8">
                <h2 className="text-[20px] font-medium mb-2">
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
            // Likes list
            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-6 lg:gap-7 md:pb-0 pb-10">
              {/* Scroll buttons - Desktop only, justify-start */}
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

              {/* Images container */}
              <div
                className="flex-1 flex lg:flex-col flex-row items-center lg:items-start 
              justify-center lg:justify-start gap-0 lg:gap-4"
              >
                <h2 className="text-xl text-red-300">Recent Likes</h2>

                <div
                  ref={scrollContainerRef}
                  className="w-full gap-1 sm:gap-2 md:gap-4 lg:gap-8 max-w-none md:max-w-4xl flex lg:flex-col flex-row overflow-x-auto
                lg:overflow-y-auto max-h-[70vh] lg:max-h-[60vh] pb-4 lg:pb-0 pl-4 pr-4 lg:px-0
                snap-x snap-mandatory lg:snap-y lg:snap-mandatory scroll-smooth
                scrollbar-hide overscroll-x-contain"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    overscrollBehaviorX: 'contain',
                    scrollPaddingLeft: '1rem',
                    scrollPaddingRight: '1rem'
                  }}
                >
                  {/* Image Card 1 */}
                  <div
                    className="shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 h-64 snap-center lg:snap-start rounded-lg relative
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
                  <div className="shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 h-64 snap-center lg:snap-start rounded-lg relative shadow-lg">
                    <Image
                      fill
                      src={"/images/img1.png"}
                      alt="Like 2"
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

                  {/* Image Card 3 */}
                  <div className="shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 h-64 snap-center lg:snap-start rounded-lg relative shadow-lg">
                    <Image
                      fill
                      src={"/images/img1.png"}
                      alt="Like 3"
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
                </div>
              </div>

              {/* most Resent Likes */}

              <div className="flex-col w-full  mx-auto">
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
                  <div className="absolute top-0 w-full p-3 bg-[#fafaf8]  text-black z-20">
                    <span className="text-base font-medium Sans-serif ">
                      {" "}
                      Just felt cute might delete later
                    </span>
                  </div>
                  <span
                    className="z-30 absolute -bottom-1 left-4 w-44 h-auto 
                     rounded-full bg-red-50 px-3 py-1 text-xs font-medium
                      text-red-500  whitespace-nowrap shadow-lg"
                  >
                    Like You you voice pal
                  </span>

                  <div className="absolute bottom-5 right-8 flex items-center justify-center gap-2">
                    <button className="bg-white text-gray-400 font-medium px-2 py-1 rounded-md shadow-md">Accept</button>
                    <button className="bg-white text-red-400 font-medium px-2 py-1 rounded-md shadow-md">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}
