import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const Images = () => {
  return (
    <div className="w-full relative ">
      <div
        className="relative max-w-md w-full aspect-square overflow-hidden rounded-md 
  mx-auto shadow-lg "
      >
        <Image src="/images/img1.png" alt="img" fill className="object-cover" />
        <div className="absolute top-0 w-full p-3 bg-[#fafaf8]  text-black z-20">
          <span className="text-base font-medium Sans-serif ">
            {" "}
            Just felt cute might delete later
          </span>
        </div>
         <div className="absolute bottom-8 right-3 w-12 h-12 bg-white rounded-full 
         flex items-center justify-center shadow-lg">
          <Heart className="size-8 text-red-200 active:fill-red-400
          hover:fill-red-400 hover:stroke-red-400 " strokeWidth={2.90} />
         
         </div>
          <div className="absolute w-3 h-2 bottom-10.5 right-6.25 rotate-1 bg-white py-1"></div>
         
      </div>
    </div>
  );
};

export default Images;
