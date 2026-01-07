import { Heart, Pin } from "lucide-react";
import React from "react";

const PropmtUI = () => {
  return (
    <div className="relative md:max-w-md w-full mx-auto py-3 ">
      <div className="border border-gray-100 shadow-sm shadow-gray-200 rounded-3xl">
        <div className="  max-w-xl mx-auto flex-col items-center  shadow-gray-md rounded-2xl p-8">
          <h2 className="text-sm font-medium text-black80 pb-1">
            I hype my self
          </h2>
          <span className="md:text-3xl text-xl font-semibold  Sans-serif text-black">
            By listening to the right music, I can improve my focus and
            productivity.
          </span>
        </div>
        <div
          className="absolute bottom-8 right-3 w-12 h-12 bg-white rounded-full 
         flex items-center justify-center shadow-lg"
        >
          <Heart
            className="size-8 text-red-200 active:fill-red-400
                    hover:fill-red-400 hover:stroke-red-400 "
            strokeWidth={2.9}
          />
        </div>
        <div className="absolute w-3 h-2.5 bottom-10 right-6.25 rotate-1 bg-white py-1"></div>
      </div>
    </div>
  );
};

export default PropmtUI;
