"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

const Matching = () => {
    const [activeTab, setActiveTab] = useState("matches")
  return (
          <section className="py-24">
        <div className="container mx-auto px-3 lg:px-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:text-4xl text-xl font-bold text-center text-mustard-900 mb-16"
          >
           <span className="bg-white/80 backdrop-blur-sm rounded-2xl 
           md:px-4 px-3 py-1 shadow-xl">Perfect Matches Waiting</span>   
          </motion.h2>
          
          <div className="flex justify-center mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-xl">
              {["matches", "verified", "premium"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`md:px-8 md:py-3 px-5 py-2 rounded-xl font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-linear-to-r from-mustard-500 to-terracotta-500 text-orange-600 shadow-md"
                      : "text-teal-800 hover:text-mustard-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Profile Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden 
                shadow-xl hover:shadow-2xl border border-teal-100 hover:border-mustard-200 
                transition-all duration-300"
              >
                <div className="h-64 bg-linear-to-br from-terracotta-100 to-beige-100 relative 
                overflow-hidden group-hover:scale-105 transition-transform">
                  <Image 
                    src={`/images/img${i + 1}.png`}
                    alt="Profile"
                    fill
                    className="object-cover rounded-t-2xl group-hover:brightness-110"
                  />
                  <div className="absolute top-4 right-4 bg-mustard-500/90 text-white px-3 py-1 
                  rounded-full text-sm font-semibold">
                    95% Match
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-mustard-500 rounded-full"></div>
                    <span className="text-teal-700 font-semibold text-sm uppercase tracking-wide">Verified</span>
                  </div>
                  <h3 className="text-2xl font-bold text-mustard-900 mb-1">Priya Sharma</h3>
                  <p className="text-teal-800 mb-4">Software Engineer • 28 • Mumbai</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-mustard-600">₹ Connect</span>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-linear-to-r from-mustard-500 to-terracotta-500 text-white rounded-2xl hover:shadow-lg"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Matching