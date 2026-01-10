"use client";
import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import {
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Ellipsis,
  Heart,
  Info,
  Sparkles,
  UserCheck,
  X,
  Zap,
} from "lucide-react";

import { User, Image as ImageIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PropmtUI from "../profileupdate/(profileComponent)/(profileUiComponent)/PropmtUI";
import UserInfoUI from "../profileupdate/(profileComponent)/(profileUiComponent)/UserInfoUI";
import Images from "../profileupdate/(profileComponent)/(profileUiComponent)/Images";

const sampleProfiles = [
  {
    id: 1,
    name: "Priyesh Sharma",
    age: 21,
    image: "/images/nc1.jpg",
    isVerified: true,
  },
  {
    id: 2,
    name: "Rahul mishra",
    age: 26,
    image: "/images/nc2.jpg",
    isVerified: false,
  },
  {
    id: 3,
    name: "Aaman Khan",
    age: 23,
    image: "/images/nc3.jpg",
    isVerified: true,
  },
  {
    id: 4,
    name: "Vikram Singh",
    age: 25,
    image: "/images/nc4.jpg",
    isVerified: true,
  },
  {
    id: 5,
    name: "Nihu Gupta",
    age: 27,
    image: "/images/nc5.jpg",
    isVerified: false,
  },
  {
    id: 6,
    name: "Raj Srimani",
    age: 26,
    image: "/images/nc6.jpg",
    isisVerified: false,
  },
  {
    id: 7,
    name: "Nihu Gupta",
    age: 27,
    image: "/images/nc5.jpg",
    isVerified: false,
  },
  {
    id: 8,
    name: "Raj Srimani",
    age: 26,
    image: "/images/nc6.jpg",
    isisVerified: false,
  },
  {
    id: 9,
    name: "Nihu Gupta",
    age: 27,
    image: "/images/nc5.jpg",
    isVerified: false,
  },
  {
    id: 10,
    name: "Raj Srimani",
    age: 26,
    image: "/images/nc6.jpg",
    isisVerified: false,
  },
];

export default function Like() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerXRef = useRef<HTMLDivElement>(null);
  const profileScrollRef = useRef<HTMLDivElement>(null);
  const ellipsisRef = useRef<HTMLButtonElement>(null);
  const [like, setLike] = useState(2);
  const [likePerson, setLikePerson] = useState(false);
  const [ellipsisOpen, setEllipsisOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      e.stopPropagation();
      if (
        ellipsisOpen &&
        ellipsisRef.current &&
        !ellipsisRef.current.contains(e.target as Node)
      ) {
        setEllipsisOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ellipsisOpen]);

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

  const handleDown = () => handleScroll("next");
  const handleUp = () => handleScroll("prev");

  return (
    <div className="min-h-screen max-w-full py-1 bg-[#fbfbfb]">
      <div className="flex lg:mt-3 mt-0 overflow-hidden">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-auto lg:block hidden mt-6">
          <Header />
        </div>
        {/* Right content */}
        <div className="w-full py-4 md:px-4 pl-3">
          {/* title */}
          <h1 className=" text-3xl  text-[#fd4f87] font-bold mb-2 doppio-one-regular">
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
            <div className=" gap-2 md:gap-7 md:grid md:grid-cols-2">
              <div className="space-y-3 p-2">
                {/* recent likes */}
                <h2 className="hidden text-xl text-pink-200 font-medium md:flex gap-1  items-center">
                  Recent <Heart className="fill-[#fd4f87]" />
                </h2>
                {/*Images container */}
                <div
                  ref={scrollContainerRef}
                  className="md:flex hidden w-full md:gap-4 md:max-w-4xl overflow-x-auto max-w-[70vh]  
                  snap-x snap-mandatory lg:snap-y lg:snap-mandatory scroll-smooth
                  scrollbar-hide overscroll-x-contain relative border-l-3 border-l-[#fc1d65] py-2 rounded-xl"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    overscrollBehaviorX: "contain",
                    scrollPaddingLeft: "1rem",
                    scrollPaddingRight: "1rem",
                  }}
                >
                  {/* Image Card  */}
                  <ImagesCarousel
                    setLikePerson={setLikePerson}
                    likePerson={likePerson}
                  />
                </div>
                {/* Scroll buttons */}
                <div className="hidden md:flex  items-start  gap-4 mt-8">
                  <button
                    onClick={handleUp}
                    className="w-10 h-10 rounded-full bg-[#eee6e6] flex items-center justify-center hover:bg-[#e0dcdc] 
                  transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {<ChevronLeft className="size-5" />}
                  </button>
                  <button
                    onClick={handleDown}
                    className="w-10 h-10 rounded-full bg-[#eee6e6] flex items-center justify-center hover:bg-[#e0dcdc] 
                  transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {<ChevronRight className="size-5" />}
                  </button>
                </div>

                {/* Most Recent Likes  in pc right side part*/}
                <div className="md:block hidden flex-col w-full mx-auto">
                  <ImageSingleCard
                    setLikePerson={setLikePerson}
                    likePerson={likePerson}
                  />
                </div>
              </div>

              {like > 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(255, 182, 193, 0.3)",
                  }}
                  className="hidden md:block w-full max-w-md mx-auto p-6 bg-linear-to-br from-pink-50 via-white to-purple-50 rounded-2xl border border-pink-100 shadow-xl backdrop-blur-sm"
                >
                  {/* Icon Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-linear-to-r from-pink-400 to-purple-400 rounded-2xl shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Matching Partner Found!
                      </h2>
                      <p className="text-xs text-pink-500 font-medium">
                        Click profile to view details
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-pink-50">
                      <Heart className="w-5 h-5 text-pink-500 shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        89% Compatibility Score
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-pink-50">
                      <UserCheck className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">
                        Verified Profile • Same City
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm border border-pink-50">
                      <Info className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        Explore shared interests, chat, and connect with your
                        perfect match.
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
                  >
                    View Profile Details
                  </motion.button>
                </motion.div>
              ) : (
                <div className="md:block hidden">
                  <LikeYouProfile
                    profileScrollRef={profileScrollRef}
                    showSticky={showSticky}
                    setLikePerson={setLikePerson}
                    container={container}
                    ellipsisOpen={ellipsisOpen}
                    setEllipsisOpen={setEllipsisOpen}
                    ellipsisRef={ellipsisRef}
                    likePerson={likePerson}
                  />
                </div>
              )}

              {/* mobile view  */}
              {
                <div className="md:hidden relative w-full space-y-2">
                  <h2
                    className="flex text-xl text-pink-200 font-medium 
            md:hidden  gap-1  items-center"
                  >
                    Recent <Heart className="fill-[#fd4f87]" />
                  </h2>
                  {/* mobile screen Images container */}
                  <div className="lg:hidden w-full h-screen  ">
                    {/* top scroll more like */}
                    {like > 1 && (
                      <div
                        ref={scrollContainerXRef}
                        className="md:hidden relative  flex items-center  overflow-x-auto snap-x snap-mandatory 
                  scroll-smooth no-scrollbar bg-[#fbfbfb] shadow-[#fbfbfb] gap-3  pl-4 border-l-3
                    border-l-[#fc1d65] py-2 rounded-xl "
                      >
                        {/* Image Cards - Full width, perfect snap */}

                        <ImagesCarousel
                          setLikePerson={setLikePerson}
                          likePerson={likePerson}
                        />
                      </div>
                    )}
                    {/* bottom 1 recent like */}
                    <div className="w-full ">
                      <ImageSingleCard
                        setLikePerson={setLikePerson}
                        likePerson={likePerson}
                      />
                    </div>
                  </div>
                </div>
              }
            </div>
          )}
        </div>
      </div>

      {likePerson && (
        <div
          ref={profileScrollRef}
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
        >
          {/* Top nav (always visible) */}

          <div
            className={`sticky top-0 z-30 bg-white flex items-center justify-between px-4 py-2
            transition-all duration-300 ease-in-out ${
              showSticky
                ? "opacity-100 translate-y-0 shadow-md backdrop-blur-md"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }

          `}
          >
            {/* left: back*/}
            <div className="flex items-center gap-2">
              <button onClick={() => setLikePerson(false)}>
                <ChevronLeft className="size-6 text-red-300" />
              </button>
            </div>
            {/* middle: name + badge */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <h1 className="text-lg font-bold">Jeez</h1>
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
              <div className="flex-col justify-center inset-0  gap-1 ">
                <div className=" flex  items-center gap-1">
                  <h1 className="text-lg font-bold">Jezz</h1>
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

          <div
            className="fixed  md:gap-124 w-full px-4 bottom-1/3 z-50 
          flex md:justify-center justify-between items-center"
          >
            <button className=" bg-[#ffffff] rounded-full p-2 shadow-xl">
              <X className="size-9" strokeWidth={2.4} />
            </button>
            <button className=" bg-[#ffffff] rounded-full p-2 shadow-xl">
              <Check className="size-8" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      )}
      {/* Mobile Header */}
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}

interface Props {
  setLikePerson: (value: boolean) => void;
  likePerson: boolean;
}

interface LikeYouProfileProps {
  likePerson: boolean;
  profileScrollRef: React.RefObject<HTMLDivElement>;
  showSticky: boolean;
  setLikePerson: (value: boolean) => void;
  container: any;
  ellipsisOpen: boolean;
  setEllipsisOpen: (value: boolean) => void;
  ellipsisRef: React.RefObject<HTMLButtonElement>;
}

function ImagesCarousel({ setLikePerson, likePerson }: Props) {
  return (
    <>
      {sampleProfiles.map((profile, index) => {
        return (
          <div
            onClick={() => setLikePerson(!likePerson)}
            key={index}
            className="shrink-0  snap-center relative box-border  w-20 h-24 overflow-hidden"
          >
            <Image
              fill
              src={profile.image}
              alt="Like 2"
              className="object-cover rounded-md"
              priority
            />
            <div className="bg-black/40 absolute top-0 left-0 w-full h-full z-10 rounded-md"></div>
            <span className="absolute  left-1 text-sm  font-medium  text-white z-20">
              {profile.name[0].toUpperCase()}
            </span>
            {profile.isVerified && (
              <span className="absolute top-0  right-0 font-medium  z-20">
                <BadgeCheck
                  size={27}
                  strokeWidth={2.25}
                  className="size-4 fill-blue-500 text-white"
                />
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}

function ImageSingleCard({ setLikePerson, likePerson }: Props) {
  return (
    <div className="mt-6 px-8 py-4 relative">
      <div className="w-full max-w-xl mx-auto ">
        <Image
          src="/images/nc7.jpg"
          alt="Like 2"
          width={1200}
          height={1200}
          className="w-full h-80 object-cover rounded-md"
        />
      </div>
      <span
        className="absolute bottom-1 left-6 w-auto bg-linear-to-r from-[#fd4f87]/80 to-[#fd81a9] px-5 py-2.75 rounded-r-2xl
                    text-xs font-bold text-black z-20 shadow-2xl border-red-200/50 backdrop-blur-sm"
      >
        {" "}
        you look really ethereal ✨
      </span>

      <div
        onClick={() => setLikePerson(!likePerson)}
        className="absolute bottom-0  -left-1  w-12   rounded-full z-50 p-1"
      >
        <Image
          src={"/images/img4.png"}
          alt="likeperson"
          width={1200}
          height={1200}
          className="object-cover w-12  border border-red-200 rounded-full active:bg-black/90"
        />
      </div>
    </div>
  );
}

function LikeYouProfile({
  likePerson,
  profileScrollRef,
  showSticky,
  setLikePerson,
  container,
  ellipsisOpen,
  setEllipsisOpen,
  ellipsisRef,
}: LikeYouProfileProps) {
  return (
    <div>
      {likePerson && (
        <div
          ref={profileScrollRef}
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
        >
          {/* Top nav (always visible) */}

          <div
            className={`sticky top-0 z-30 bg-white flex items-center justify-between px-4 py-2
            transition-all duration-300 ease-in-out ${
              showSticky
                ? "opacity-100 translate-y-0 shadow-md backdrop-blur-md"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } `}
          >
            {/* left: back*/}
            <div className="flex items-center gap-2">
              <button onClick={() => setLikePerson(false)}>
                <ChevronLeft className="size-6 text-red-300" />
              </button>
            </div>
            {/* middle: name + badge */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <h1 className="text-lg font-bold">Jeez</h1>
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
              <div className="flex-col justify-center inset-0  gap-1 ">
                <div className=" flex  items-center gap-1">
                  <h1 className="text-lg font-bold">Jezz</h1>
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

          <div
            className="fixed  md:gap-124 w-full px-4 bottom-1/3 z-50 
          flex md:justify-center justify-between items-center"
          >
            <button className=" bg-[#ffffff] rounded-full p-2 shadow-xl">
              <X className="size-9" strokeWidth={2.4} />
            </button>
            <button className=" bg-[#ffffff] rounded-full p-2 shadow-xl">
              <Check className="size-8" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
