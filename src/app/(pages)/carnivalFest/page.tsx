"use client"
import React from "react"
import AllMember from "../spotlight/(spotlightComponents)/AllMember"
import { ChevronLeft } from "lucide-react"


export default function CarnivalFest(){
    return(
        <div  className="min-h-auto max-w-full ">
            <div className="flex justify-start items-center gap-1 px-2">
                <ChevronLeft className="size-6"/>
                <p className="text-2xl font-bold">Carnival Fest</p>
            </div>
            <div className="px-4 max-w-6xl mx-auto bg-pink-300 ">
                <div className="md:w-[20%]  ">
                    <AllMember/>
                </div>
                <div className="md:w-[80%] ">
                    
                </div>

            </div>
            


        </div>
    )

}