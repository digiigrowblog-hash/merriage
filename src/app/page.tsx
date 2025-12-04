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
    <div className="min-h-screen bg-linear-to-br from-[#f3c871] via-[#f3b886] to-[#e89b7c]"
>
     
      {/* Hero Section */}
      <Hero/>

      {/* Stats Section */}
       <SuccessRate/>

      {/* Matching Tabs */}
       <Matching/>

      {/* CTA Section */}
      <CTA/>
      <Footer/>

    </div>
  )
}
