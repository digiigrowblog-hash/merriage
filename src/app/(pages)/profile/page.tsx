"use client";

import Header from "@/components/mainHeaderFooter/HeaderMain";
import { Settings2, X , Settings} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Setting() {
  return (
    <div className="min-h-screen max-w-full">

      <div className="flex items-center justify-between border-b-2 border-gray-200 p-4">
        <Image src="/images/2.png" alt="logo" width={100} height={100} 
        className="w-48 h-10 object-cover "/>
        
        <div className="flex">
          <Link href="/matchPreference">
            <Settings2 className="rotate-90" />
          </Link>

          <Link href="/setting ">
            <Settings />
          </Link>
        </div>

      </div>

      <Header />
    </div>
  );
}
