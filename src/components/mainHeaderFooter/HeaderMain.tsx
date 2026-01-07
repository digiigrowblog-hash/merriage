"use client";
import React, { useState } from "react";
import { MessageSquare, Heart, Settings, Sparkles } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderPath = [
  { id: 1, href: "/home", label: "Home" },
  { id: 2, href: "/like", label: "Like" },
  { id: 3, href: "/message", label: "Message" },
  { id: 5, href: "/spotlight", label: "Spotlight" },
  { id: 4, href: "/profile", label: "Profile" },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="w-20 h-auto hidden lg:block ">
        <div className="flex-col justify-center items-center w-auto  ">
          <nav className="flex-col justify-around items-center gap-2 text-sm p-2 rounded-sm">
            {HeaderPath.map((item) => {
              const isActive = pathName === item.href;
              return (
                <>
                  <Link
                    href={item.href}
                    key={item.id}
                    className={` flex-col items-center py-2 px-3.5 rounded-full transition-all duration-200
               `}
                  >
                    <div className="w-6 h-6 ">
                      {item.label === "Home" && (
                        <Image
                          width={10}
                          height={10}
                          alt={"p"}
                          src={"/images/p.png"}
                          className={`size-9 ${
                            isActive ? "grayscale-0" : "grayscale"
                          }`}
                        />
                      )}

                      {item.label === "Like" && (
                        <Heart
                          className={`size-7 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                      )}

                      {item.label === "Spotlight" && (
                        <Sparkles
                          className={`size-6 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                      )}

                      {item.label === "Message" && (
                        <MessageSquare
                          className={`size-6 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                      )}

                      {item.label === "Profile" && (
                        <Settings
                          className={`size-6 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                      )}
                    </div>
                  </Link>
                  <p
                    className={` font-semibold ${
                      isActive ? "text-red-400" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </p>
                </>
              );
            })}
          </nav>
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 
      backdrop-blur-md border-t border-gray-200 shadow-2xl lg:hidden block"
      >
        <div className="max-w-4xl mx-auto px-1 py-1">
          <nav className="flex justify-around items-center gap-2 text-sm">
            {HeaderPath.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`flex flex-col items-center py-2 px-3.5 rounded-full transition-all duration-200
               `}
                >
                  <div className="w-6 h-6 ">
                    {item.label === "Home" && (
                      <div className="relative">
                        <Image
                          width={10}
                          height={10}
                          alt={"p"}
                          src={"/images/p.png"}
                          className={`size-9 ${
                            isActive ? "grayscale-0" : "grayscale"
                          }`}
                        />
                        {/* <div
                          className="absolute -top-1 left-4  w-5 h-5  rounded-full   text-center text-white
                       border-white border-2 bg-red-400 "
                        ></div> */}
                      </div>
                    )}

                    {item.label === "Like" && (
                      <div className="relative">
                        <Heart
                          className={`size-7  ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                        <div
                          className="absolute -top-1 left-4  w-7 h-7  rounded-full   text-center text-white
                       border-white border-2 bg-red-400 "
                        >
                          <span className="text-xs flex justify-center py-1">1</span>
                        </div>
                      </div>
                    )}

                    {item.label === "Spotlight" && (
                      <div className="relative">
                        <Sparkles
                          className={`size-6 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                        <div
                          className="absolute -top-1 left-4  w-5 h-5  rounded-full   text-center text-white
                       border-white border-2 bg-red-400 "
                        ></div>
                      </div>
                    )}

                    {item.label === "Message" && (
                      <div className="relative">
                        <MessageSquare
                          className={`size-6 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                        {/* <div
                          className="absolute -top-1 left-4  w-7 h-7  rounded-full   text-center text-white
                       border-white border-2 bg-red-400 "
                        >
                          <span className="text-xs flex justify-center py-1">13</span>
                        </div> */}
                      </div>
                    )}

                    {item.label === "Profile" && (
                      <div className="relative">
                        <Settings
                          className={`size-6 ${
                            isActive
                              ? "fill-red-400 stroke-red-200"
                              : "stroke-gray-600"
                          }`}
                        />
                        <div
                          className="absolute -top-1 left-4  w-5 h-5  rounded-full   text-center text-white
                       border-white border-2 bg-red-400 "
                        ></div>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
