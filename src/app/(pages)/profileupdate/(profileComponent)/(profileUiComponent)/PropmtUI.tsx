import { Heart, Pin } from "lucide-react";
import React from "react";

const PropmtUI = () => {
  return (
    <div className="relative max-w-2xl mx-auto p-3 ">
      <div className="border border-gray-100 shadow-gray-200 rounded-3xl">
        <div className="  max-w-xl mx-auto flex-col items-center  shadow-gray-md rounded-2xl p-4">
          <h2 className="text-lg font-bold text-gray-500 road-rage-regular">
            I hype my self
          </h2>
          <span className="md:text-base text-xs Sans-serif ">
            By listening to the right music, I can improve my focus and
            productivity.
          </span>
        </div>
        <div className="flex justify-end px-3 py-1 rounded-full">
          <Heart className="size-8 text-red-300 active:fill-red-500 hover:fill-red-500 hover:stroke-red-500" />
        </div>
        <Pin strokeWidth={2.25} className="absolute top-1 left-3 rotate-x-45 text-red-300" />
      </div>
    </div>
  );
};

export default PropmtUI;
