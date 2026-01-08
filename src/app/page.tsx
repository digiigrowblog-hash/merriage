"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"
import Hero from "@/components/homeComponents/Hero"
import SuccessRate from "@/components/homeComponents/SuccessRate"
import Matching from "@/components/homeComponents/Matching"
import CTA from "@/components/homeComponents/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  const [activeTab, setActiveTab] = useState("matches")


  return (
    <div className="min-h-screen bg-linear-to-br from-[#ffe6ee] via-[#fd81ab] to-[#fd4f89] overflow-hidden"
>
     
      {/* Hero Section */}
      <Hero/>

      <div className="relative z-20">
        {/* Stats Section */}
         <SuccessRate/>

        {/* Matching Tabs */}
         <Matching/>

        {/* CTA Section */}
        <CTA/>
        <Footer/>
      </div>

    </div>
  )
}
