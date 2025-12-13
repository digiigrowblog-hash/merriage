import React from "react";
import { MessageSquare, Heart, Settings, Sparkles } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-2xl">
      <div className="max-w-4xl mx-auto px-4 py-1">
        <div className="flex justify-around items-center gap-2 text-sm">
          <button
            className="flex flex-col items-center py-3 px-3.5 rounded-full transition-all 
      duration-200 hover:bg-red-100 active:bg-red-200"
          >
            <div className="w-6 h-6 mb-1  rounded-full  ">
              <Image 
              width={10}
              height={10} 
              alt={"p"} 
              src={"/images/p.png"}  
              className="size-9"/>
            </div>
          </button>

          <button
            className="flex flex-col items-center py-3 px-3.5"
          >
            <div className="w-6 h-6 mb-1  rounded-full  ">
              <Heart className="text-red-400 size-9"/>
            </div>
          </button>

          <button
            className="flex flex-col items-center py-3 px-3.5 "
          >
            <div className="w-6 h-6 mb-1  rounded-full  ">
              <Sparkles  className="text-red-400 size-9" />
            </div>
          </button>

          <button
            className="flex flex-col items-center py-3 px-3.5 "
          >
            <div className="w-6 h-6 mb-1">
              <MessageSquare  className="text-red-400 size-9" />
            </div>
          </button>

          <button
            className="flex flex-col items-center py-3 px-3.5 "
          >
            <div className="w-6 h-6 mb-1">
              <Settings   className="text-red-400 size-9" />
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Header;
