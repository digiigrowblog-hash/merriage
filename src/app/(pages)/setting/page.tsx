"use client";

import { BadgeCheck, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Toggle } from "@/components/ui/Toggle";
import InputField from "@/components/ui/InputField";

export default function Setting() {
  const [hideProfile, setHideProfile] = useState(false);
  const [lastActive, setLastActive] = useState(false);
  const [valueChange, setValueChange] = useState("");
  const setValueChangeFunction = (value: string | number) => {
    setValueChange(value.toString());
  };
  return (
    <div className="relative min-h-screen md:max-w-md max-w-full">
      <div className="right-0 left-0 top-0 h-10 z-30 bg-white/60 absolute fixed" />
      {/* back button with title */}
      <div
        className="left-0 right-0 top-0 z-50 w-full bg-white p-2 
          py-3 px-3 border-b-1  border-red-100"
      >
        <div className="flex space-x-2">
          <Link href="/profile">
            <ChevronLeft className="size-4 stroke-3 mt-2 cursor-pointer " />
          </Link>
          <h1 className=" sm:text-xl text-lg font-bold text-black mx-auto">
            Settings
          </h1>
        </div>
      </div>
     {/* safety */}
      <>
        <div className="space-y-3 mt-6 p-2">
          {/* profile name */}
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">Profile</h1>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">Hide Profile</h1>
                <p className="text-sm text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
              <Toggle checked={hideProfile} onChange={setHideProfile} />
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">Last Active</h1>
                <p className="text-sm text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
              <Toggle checked={lastActive} onChange={setLastActive} />
            </div>
          </div>
        </div>
      </>
      {/* verification */}
      <>
        <div className="space-y-3 mt-2 p-2">
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">Safety</h1>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">Block List</h1>
                <p className="text-sm text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1 className="text-gray-400">PAN Verification</h1>
                <p className="text-sm text-black">
                  Hide your profile from other users and when you ready then
                  unhide it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex p-1">
            <div className="border-b-1 border-red-100 flex-col justify-between items-center w-full">
              <div className=" flex gap-1">
                <h1 className="text-gray-400">Selfie Verification</h1>
                <BadgeCheck
                  size={23}
                  strokeWidth={2.25}
                  className=" fill-blue-500 text-white"
                />
              </div>
              <p className="text-sm text-black">
                Hide your profile from other users and when you ready then
                unhide it.
              </p>
            </div>
          </div>
        </div>
      </>
      {/* phone and email */}
      <>
        <div className="space-y-3 mt-2 p-2">
          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">Phone & Email</h1>
            </div>
          </div>

          <div className="flex-col p-1 space-y-3">
            <div className="border-b-1 border-red-100 flex gap-2 items-center w-full">
              <input type="tel" placeholder="936xxxxxx" 
                className="border-none focus:border-none focus:ring-0 outline-none mb-1 mb-1"
              />
              <BadgeCheck
                size={23}
                strokeWidth={2.25}
                className=" fill-blue-500 text-white"
              />
            </div>

            <div className="border-b-1 border-red-100 flex gap-2 items-center w-full">
              <input type="email" placeholder="email@gmail.com" 
                className="border-none focus:border-none focus:ring-0 outline-none mb-1 mb-1"
              />
              <BadgeCheck
                size={23}
                strokeWidth={2.25}
                className=" fill-blue-500 text-white"
              />
            </div>
          </div>
        </div>
      </>
      {/* Legal */}
      <>
        <div className="space-y-3 mt-2 p-2">
         <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className="text-gray-400 mb-1 text-base font-medium">Legal</h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className=" mb-1 text-base">Term of Service</h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className=" mb-1 text-base">Privacy</h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className=" mb-1 text-base">Licences</h1>
            </div>
          </div>

          <div className="flex-col p-1">
            <div className="border-b-1 border-red-100">
              <h1 className=" mb-1 text-base">Downlode my data</h1>
            </div>
          </div>  
         </div>
      </>
    {/* remove or logout */}
      <>
      <div className="space-y-3 mt-5 p-2 border-b-1 border-t-1 border-red-100 mx-auto">
         <div className="text-center">
            <button className="font-medium ">LogOut</button>
         </div>
      </div>

      <div className="space-y-3 mt-3 p-2 border-b-1 border-t-1 border-red-100 mb-5">
         <div className="text-center">
            <button className="font-medium">Delete account</button>
         </div>
      </div>

      </>
    </div>
  );
}
