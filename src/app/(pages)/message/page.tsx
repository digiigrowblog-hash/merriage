import Header from "@/components/mainHeaderFooter/HeaderMain";
import Footer from "@/components/mainHeaderFooter/FooterMain";
import Image from "next/image";
import { Flame, Sparkle, Sparkles, Zap } from "lucide-react";

export default function Like() {
  return (
    <div className="min-h-screen max-w-full py-1">
      <Footer />

      <div className="flex mt-12 overflow-hidden  ">
        {/* Left header */}
        <div className="w-full md:w-auto max-h-full lg:block hidden">
          <Header />
        </div>

        {/* Right content */}
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
      </div>
      <div className="w-full lg:hidden block">
        <Header />
      </div>
    </div>
  );
}

