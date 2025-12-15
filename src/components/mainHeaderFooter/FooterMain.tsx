import React from "react";
import { RollerCoaster, Settings2, ChevronUp } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="left-0 right-0 top-0 fixed z-50 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-2xl">
      <div className="flex max-w-4xl mx-auto px-1 py-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full">
          <div className="flex-shrink-0 flex gap-1 px-2 py-1 ">
            <Link href="/matchPreference">
              <Settings2 className="rotate-90" />
            </Link>
          </div>

          <div className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600">
            <h1>Height</h1>
            <ChevronUp className="size-5" />
          </div>

          <div className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600">
            <h1>Age</h1>
            <ChevronUp className="size-5" />
          </div>

          <div className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600">
            <h1>Active Today</h1>
            <ChevronUp className="size-5" />
          </div>

          <div className="flex-shrink-0 flex gap-1 px-2 py-1 rounded-full border border-gray-600">
            <h1>Verified</h1>
            <ChevronUp className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
