"use client";

import { ChevronLeft, ThumbsDown, Zap, LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function MatchPreference() {
  return (
    <div className="min-h-screen md:max-w-md max-w-full">
      {/* back button with title */}
      <div
        className="left-0 right-0 top-0 z-50 w-full bg-white p-2 
          py-3 px-3 border-b-1 border-red-50"
      >
        <div className="flex space-x-2">
          <Link href="/home">
            <ChevronLeft className="size-4 stroke-3 mt-2 cursor-pointer " />
          </Link>
          <h1 className=" sm:text-xl text-lg font-bold text-black">
            Matching Preferences
          </h1>
        </div>
      </div>

      {/* free preferences */}
      <div className="flex-col px-2">
        <h1 className="rhodium-libre-regular mt-3 text-xl font-semibold text-gray-300">
          Member Preferences
        </h1>

        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">My neighbourhood</h2>
          <span className="text-red-300 text-sm ">Vashi</span>
        </div>

        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">Max Distance</h2>
          <span className="text-red-300 text-sm ">24 km</span>
        </div>

        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">Age range</h2>
          <span className="text-red-300 text-sm ">26 - 28</span>
        </div>

        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">Religion</h2>
          <span className="text-red-300 text-sm ">Hindu</span>
        </div>
      </div>

      {/* paid preference */}
      <div className="flex-col px-2">
        <h1 className="rhodium-libre-regular mt-3 text-xl font-semibold text-gray-300">
          Subscriber Preferences
        </h1>

        <div
          className="px-2 py-3 rounded-lg  gap-3 
          bg-gradient-to-br from-rose-200 via-pink-200 to-rose-200
          flex justify-between items-center mb-1"
        >
          <div
            className="relative 
        shadow-md bg-white px-6 py-1  rounded-full"
          >
            <Zap
              className="size-5 -top-1 -right-1  
              text-pink-900
                absolute"
            />
            <span
              className="
                text-pink-700 text-lg font-semibold"
            >
              Update
            </span>
          </div>

          <div className="px-1">
            <span className="text-sm font-medium">
              Subscribe for more filter option & get more chances
            </span>
          </div>
        </div>

        {/* With lock icon */}
        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Height</h2>
            <span className="text-red-300 text-sm">open to all</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        {/* Reusable row without icon */}
        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Children</h2>
            <span className="text-red-300 text-sm">24 km</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Family plans</h2>
            <span className="text-red-300 text-sm">Yes</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Drug</h2>
            <span className="text-red-300 text-sm">NO</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Smoking</h2>
            <span className="text-red-300 text-sm">No</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Drinking</h2>
            <span className="text-red-300 text-sm">Sometimes</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Education</h2>
            <span className="text-red-300 text-sm">M.tech</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
          <div className="flex flex-col">
            <h2 className="font-bold">Cast</h2>
            <span className="text-red-300 text-sm">Brahmin</span>
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>
      </div>

    </div>
  );
}
