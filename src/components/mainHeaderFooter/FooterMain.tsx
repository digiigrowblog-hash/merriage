"use client";
import React, { useState } from "react";
import { RollerCoaster, Settings2, ChevronUp } from "lucide-react";
import Link from "next/link";
import { HeightPopup } from "../smallComponent/Height";
import { AgeRangePopup } from "../smallComponent/Age";
const Footer = () => {
  const [heightCm, setHeightCm] = useState<number | null>(null);
  const [showHeightPopup, setShowHeightPopup] = useState(false);

  const [minAge, setMinAge] = useState<number | null>(21);
  const [maxAge, setMaxAge] = useState<number | null>(28);
  const [showAgePopup, setShowAgePopup] = useState(false);

  return (
    <>
    <div className="w-auto h-auto bg-red-400"> 
      <div className="flex-col justify-center items-center">
        
      </div>
    </div>

    <div className="left-0 right-0 top-0 fixed z-50 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-2xl">
      <div className="flex max-w-4xl mx-auto px-1 py-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full">
          <div className="flex-shrink-0 flex gap-1 px-2 py-1 ">
            <Link href="/matchPreference">
              <Settings2 className="rotate-90" />
            </Link>
          </div>

          {/* height */}
          <div
            onClick={() => setShowHeightPopup(true)}
            className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600"
          >
            <button type="button">
              <HeightPopup
                open={showHeightPopup}
                value={heightCm}
                onClose={() => setShowHeightPopup(false)}
                onChange={setHeightCm}
                className="bg-black/0 top-40"
              />
            </button>
            <h1>Height</h1>
            <ChevronUp
              className={`size-5 ${
                showHeightPopup ? "rotate-180" : "rotate-0"
              } `}
            />
          </div>

          {/* Age */}
          <div
            onClick={() => setShowAgePopup(true)}
            className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600"
          >
            <h1>Age</h1>
            <button type="button">
              <AgeRangePopup
                open={showAgePopup}
                minAge={minAge}
                maxAge={maxAge}
                onClose={() => setShowAgePopup(false)}
                onChange={(min, max) => {
                  setMinAge(min);
                  setMaxAge(max);
                  
                }}
                className="top-48"
              />
            </button>
            <ChevronUp className={`size-5 ${showAgePopup ? "rotate-180" : "rotate-0"}`} />
          </div>
           
           {/* active today */}
          <div className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600">
            <h1>Active Today</h1>
            <ChevronUp className="size-5" />
          </div>
          
          {/* verified */}
          <div className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600">
            <h1>Verified</h1>
            <ChevronUp className="size-5" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
