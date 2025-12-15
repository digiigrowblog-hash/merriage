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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 
    backdrop-blur-md border-t border-gray-200 shadow-2xl">
      <div className="max-w-4xl mx-auto px-1 py-1">
        <nav className="flex justify-around items-center gap-2 text-sm">
          {HeaderPath.map((item) =>{
            const isActive = pathName === item.href;
            return(
            <Link
              href={item.href}
              key={item.id}
              className={`flex flex-col items-center py-2 px-3.5 rounded-full transition-all duration-200
               `}
            >
              <div className="w-6 h-6 ">
                {item.label === "Home" && (
                  <Image
                    width={10}
                    height={10}
                    alt={"p"}
                    src={"/images/p.png"}
                    className={`size-9 ${isActive ? "grayscale-0" : "grayscale"}`}
                  />
                )}

                {item.label === "Like" && (
                    <Heart
                      className={`size-7 ${
                        isActive ? "fill-red-400 stroke-red-200" : "stroke-gray-600"
                      }`}
                    />
                )}

                {item.label === "Spotlight" && (
                  <Sparkles
                    className={`size-6 ${
                      isActive ? "fill-red-400 stroke-red-200" : "stroke-gray-600"
                    }`}
                  />
                )}

                {item.label === "Message" && (
                  <MessageSquare
                    className={`size-6 ${
                      isActive ? "fill-red-400 stroke-red-200" : "stroke-gray-600"
                    }`}
                  />
                )}

                {item.label === "Profile" && (
                  <Settings
                    className={`size-6 ${
                      isActive ? "fill-red-400 stroke-red-200" : "stroke-gray-600"
                    }`}
                  />
                )}
              </div>

            </Link>
            )
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;
