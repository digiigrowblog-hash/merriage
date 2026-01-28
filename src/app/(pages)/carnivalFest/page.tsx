// pages/spotlight/CarnivalFest.tsx (Page) - MOBILE PERFECTED
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, Filter, Search, X } from "lucide-react";
import Link from "next/link";
import DistenceFilter from "../spotlight/(spotlightComponents)/DistenceFilter";
import AllMemberCard from "../spotlight/(spotlightComponents)/AllMember";
import Messagebox from "../spotlight/(spotlightComponents)/Messagebox";

interface User {
  id: number;
  name: string;
  image: string;
  online: boolean;
  premium: boolean;
}

interface MessageboxProps {
  selectedUser: User | null;
  onClose: () => void;
  className?: string;
}

export default function CarnivalFest() {
  const [isClicked, setIsClicked] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [pitch, setPitch] = useState(false);

  const [showMessageBox, setShowMessageBox] = useState(false); // Controls mobile layout

  const members = [
    {
      id: 1,
      name: "Rahul Jha",
      image: "/images/img1.png",
      online: true,
      premium: false,
    },
    {
      id: 2,
      name: "Priya Sharma",
      image: "/images/img2.png",
      online: false,
      premium: false,
    },
    {
      id: 3,
      name: "Amisha Kumar",
      image: "/images/img3.png",
      online: true,
      premium: false,
    },
    {
      id: 4,
      name: "Anshika Kumari",
      image: "/images/img4.png",
      online: true,
      premium: false,
    },
  ];

  const handleMessageClick = (member: User) => {
    setSelectedUser(member);
    setShowMessageBox(true); // Hide users, show chat
  };

  const closeMessageBox = () => {
    setShowMessageBox(false);
    setSelectedUser(null); // Reset selection
  };

  return (
    <div className="min-h-auto w-full bg-linear-to-br from-pink-50 to-rose-50 relative over ">

      {/* Header */}
      <div className="flex items-center  gap-2 px-4 pt-4 pb-2  bg-white/80 backdrop-blur-sm">
        <Link href="/spotlight">
          <ChevronLeft className="size-6 text-pink-600" />
        </Link>
        <h1 className="text-2xl font-bold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent flex-1">
          Carnival Fest
        </h1>
        {/* Mobile Back Button (when chat open) */}
        {showMessageBox && (
          <button
            onClick={closeMessageBox}
            className="lg:hidden p-2 hover:bg-pink-100 rounded-xl transition-all"
          >
            <X className="w-6 h-6 text-pink-600" />
          </button>
        )}
      </div>

      {/* Distance Filter */}
      <DistenceFilter isClicked={isClicked} setIsClicked={setIsClicked} />

      {/* DESKTOP: 20/80 Layout */}
      <div
        className=" hidden md:grid px-3 sm:px-4 max-w-7xl mx-auto grid-cols-1
       lg:grid-cols-5 md:grid-cols-2 mt-5 gap-4 pb-20 lg:pb-8"
      >
        <AllMemberCard
          members={members}
          onMessageClick={handleMessageClick}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          setPitch={setPitch}
          pitch={pitch}
        />

        <div className="lg:col-span-4 ">
          <Messagebox selectedUser={selectedUser} />
          {isClicked && (
            <div
              className="z-50 absolute h-52 max-w-sm overflow-auto no-scrollbar
             md:right-48 lg:right-96 top-40 rounded-lg "
            >
              <div className="flex flex-col gap-2 bg-pink-200 p-2">
                <div className="flex items-center gap-2 bg-pink-100 p-2 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <button className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-xs truncate">
                    hello how are you guys!
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-pink-100 p-2 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <button className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-xs truncate">
                    hello how are you guys!
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-pink-100 p-2 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <button className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-xs truncate">
                    hello how are you guys!
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-pink-100 p-2 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <button className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-xs truncate">
                    hello how are you guys!
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-pink-100 p-2 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <button className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-xs truncate">
                    hello how are you guys!
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* MOBILE: Fullscreen Layout */}
      <div className="md:hidden w-full px-3 sm:px-4  max-w-7xl mx-auto mt-5 ">
        {/* Users List (Hide when chat open) */}
        {!showMessageBox && (
          <div className="w-full">
            <AllMemberCard
              members={members}
              onMessageClick={handleMessageClick}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              pitch={pitch}
              setPitch={setPitch}
            />
          </div>
        )}

        {/* Message Box (Fullscreen when open) */}
        {showMessageBox && selectedUser && (
          <div className="w-full">
            <Messagebox selectedUser={selectedUser} />
          </div>
        )}
      </div>

      {/* Mobile Filter Button (Only show when users visible) */}
      {!showMessageBox && (
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-14 h-14 bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-2xl hover:shadow-pink-500/25 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <Filter className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Mobile Filter Overlay */}
      {filterOpen && !showMessageBox && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex justify-end p-4">
          <div className="w-full mx-auto max-w-sm bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 border-b border-pink-100">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl text-pink-700">Filters ✨</h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="p-2 hover:bg-pink-100 rounded-xl transition-all"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Scrollable Content - Equal Y Spacing */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 py-8">
              {/* Search */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search members..."
                    className="w-full pl-10 pr-4 py-2.5 bg-pink-50 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 text-sm"
                  />
                </div>
              </div>
              Filter Options
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Preferences
                </label>
                <div className="space-y-3 pt-2">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-200/50 rounded-xl hover:from-pink-500/15 hover:to-rose-500/15 text-sm font-medium text-pink-800 hover:shadow-md transition-all h-14">
                    Age{" "}
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                      18-30
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-200/50 rounded-xl hover:from-pink-500/15 hover:to-rose-500/15 text-sm font-medium text-pink-800 hover:shadow-md transition-all h-14">
                    Distance{" "}
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      18km
                    </span>
                  </button>
                  {/* <button className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-pink-500/5 to-rose-500/5 border border-pink-200/50 rounded-xl hover:from-pink-500/15 hover:to-rose-500/15 text-sm font-medium text-pink-800 hover:shadow-md transition-all h-14">
                    Online Now{" "}
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  </button> */}
                </div>
              </div>
              {/* Action Buttons - Bottom Aligned */}
              <div className="pt-4 border-t border-pink-100 space-y-3 mt-auto">
                <button className="w-full py-3 px-4 bg-gray-200/80 hover:bg-gray-200 text-sm text-gray-700 rounded-xl transition-all font-medium shadow-sm hover:shadow-md h-12">
                  Clear All
                </button>
                {/* <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-sm rounded-xl transition-all font-semibold shadow-lg hover:shadow-xl h-12 flex items-center justify-center">
                  Apply Filters (127+ matches)
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* pitch info */}
      {pitch && (
        <div className="max-w-sm h-auto z-50 px-2.5 py-1.5 bg-pink-200 shadow-lg rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="flex-col items-center bg-white justify-center rounded-xl px-4 py-2">
            <h1 className=" text-sm text-justify px-2">
              "Hii Sid👋 I'm interested in you! Would you love to connect for a
              chat?"
            </h1>
            <div className="flex gap-2 items-center justify-center px-2 py-2">
              <button className="hover:bg-pink-600 bg-pink-500 text-white px-4 py-2 rounded-md">
                Send
              </button>
              <button
                className="hover:bg-pink-400 bg-pink-300 text-white px-4 py-2 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setPitch(!pitch);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
