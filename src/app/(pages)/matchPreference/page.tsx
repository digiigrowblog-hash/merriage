"use client"

import { X } from "lucide-react"
import Link from "next/link"

export default function MatchPreference(){
    return(
        <div className="min-h-screen max-w-full">
          <div className="left-0 right-0 top-0 z-50 w-full bg-white p-2 shadow-md 
          py-3 px-3 border-b-2">
            <div className="flex space-x-2">
               <Link href="/home"> 
               <X  className="size-4 stroke-3 mt-1 cursor-pointer "/>
               </Link>
                <h1 className="marko-one-regular sm:text-xl text-lg font-bold text-black">Matching Preferences</h1>
            </div>

          </div>

            hello from dating preference
        </div>
    )

}