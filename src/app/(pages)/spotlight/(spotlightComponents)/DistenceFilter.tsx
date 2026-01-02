import { Search } from "lucide-react";
import React from "react";
import Notification from "./Notification";

const members = [
    { id:1 , name: "John Doe", image: "/images/profile1.jpg" },
    { id:2 , name: "Jane Doe", image: "/images/profile2.jpg"},
    { id:3 , name: "John Doe", image: "/images/profile3.jpg" },
     { id:4 , name: "John Doe5", image: "/images/profile4.jpg" },
      { id:5 , name: "John Doe4", image: "/images/profile5.jpg" },
]

const DistenceFilter = ({isClicked , setIsClicked}:{
  isClicked:boolean,
  setIsClicked:(value:boolean)=>void
}) => {
  return (
    <div
      className="md:block hidden flex-col justify-between items-center lg:col-span-1 space-y-3 
      p-4  backdrop-blur-xl rounded-2xl 
      lg:sticky lg:top-4 h-fit "
    >
      <h2 className="md:text-2xl text-lg text-center font-bold bg-linear-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-2">
        Filter you Heart✨
      </h2>
      <div className=" flex justify-center space-x-3 md:items-center space-y-3 md:space-y-0">
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search members..."
            className="w-full pl-10 pr-4 py-2.5 bg-pink-50 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 text-sm"
          />
        </div>

        <div className="flex gap-1 ">
          <button
            className="w-full flex items-center justify-between px-3 py-2.5 
            bg-linear-to-r from-pink-500/10 to-rose-500/10 border border-pink-200/50 rounded-xl
             hover:from-pink-500/20 text-sm font-medium text-pink-800 hover:shadow-md transition-all"
          >
            Age{" "}
            <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-xs">
              18-30
            </span>
          </button>
          <button
            className="w-full flex items-center justify-between px-3 py-2.5 
            bg-linear-to-r from-pink-500/10 to-rose-500/10 border border-pink-200/50 rounded-xl
             hover:from-pink-500/20 text-sm font-medium text-pink-800 hover:shadow-md transition-all"
          >
            Distance{" "}
            <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-xs">
              18km
            </span>
          </button>
        </div>

        <div className=" border-pink-100 ">
          <button
            className="w-full py-2.5 px-4 bg-gray-200/80 hover:bg-gray-300
             text-sm text-gray-700 rounded-xl transition-all font-medium"
          >
            Clear All
          </button>
        </div>
        <Notification isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      
    </div>
  );
}; 

export default DistenceFilter;
