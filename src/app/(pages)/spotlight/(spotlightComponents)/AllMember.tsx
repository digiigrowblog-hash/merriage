// components/spotlight/(spotlightComponents)/AllMemberCard.tsx - UPDATED
"use client";
import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";
import Notification from "./Notification";

interface Member {
  id: number;
  name: string;
  image: string;
  online: boolean;
  premium: boolean;
 
}

interface Props {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
  setPitch: (value: boolean) => void;
  pitch: boolean;
}

interface AllMemberCardProps extends Props {
  members: Member[];
  onMessageClick: (member: Member) => void;
}

const AllMemberCard: React.FC<AllMemberCardProps> = ({
  members,
  onMessageClick,
  isClicked,
  setIsClicked,
  setPitch,
  pitch
}) => {
  return (
    <div className="md:col-span-1 space-y-3 px-1 py-4 bg-white/70 backdrop-blur-xl 
    rounded-2xl border border-pink-200/50 shadow-xl 
    md:sticky lg:top-4 lg:max-h-125 md:h-96 flex flex-col w-auto">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-pink-700 flex items-center gap-2 px-2">
          All Hearts Welcome ✨
        </h3>
        <span className="md:hidden block">
          {" "}
          <Notification isClicked={isClicked} setIsClicked={setIsClicked} />
        </span>
      </div>

      <div className="relative px-2">
        <div className="md:hidden block">
          {isClicked && (
            <div className="z-50 absolute  h-52 max-w-sm overflow-auto right-2 top-0 rounded-lg ">
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
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search members..."
          className="w-full pl-10 pr-4 py-2.5 bg-pink-50 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 text-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-1 px-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between bg-pink-50/70 border border-pink-100 rounded-2xl px-3 py-2.5 hover:bg-pink-100/70 transition-all cursor-pointer group"
          >
            {/* left: img + text */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform"
                />
                {member.online && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                )}
                {member.premium && (
                  <div className="absolute -top-0.5 -right-0.5 bg-linear-to-r from-amber-400 to-yellow-400 text-[9px] font-bold px-1 py-0.5 rounded-full shadow-sm">
                    PRO
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-gray-800 truncate">
                  {member.name}
                </p>
                <p className="text-[10px] text-gray-500">
                  Online {member.online ? "Now" : "2h ago"}
                </p>
              </div>
            </div>

            {/* right: small buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPitch(!pitch)
                }}
                className="px-2 py-1 flex items-center justify-center rounded-xl bg-linear-to-r from-pink-500 to-rose-500 text-white text-[10px] shadow-sm hover:shadow-md transition-all"
              >
                Pitch
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMessageClick(member); // Callback to parent
                }}
                className="px-2 py-1 flex items-center justify-center rounded-xl bg-white border border-pink-200 hover:bg-pink-50 text-[10px] shadow-sm hover:shadow-md transition-all ml-1"
              >
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMemberCard;
