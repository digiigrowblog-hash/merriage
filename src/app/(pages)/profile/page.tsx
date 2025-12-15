"use client";

import Header from "@/components/mainHeaderFooter/HeaderMain";
import { Settings2, X, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Setting() {
  return (
    <div className="min-h-screen max-w-full">
      <div className="flex items-center justify-between  p-3">
        <Image
          src="/images/2.png"
          alt="logo"
          width={100}
          height={100}
          className="md:w-48 md:h-10 w-24 h-5 object-cover "
        />

        <div className="flex gap-2">
          <Link href="/matchPreference">
            <Settings2 className="rotate-90" />
          </Link>

          <Link href="/setting">
            <Settings />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mt-5">
        <div className="w-32 h-32 rounded-full border-2 border-[#FF5F6B] overflow-hidden">
          <Image
            src="/images/img1.png"
            alt="personLogo"
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <Header />
    </div>
  );
}
