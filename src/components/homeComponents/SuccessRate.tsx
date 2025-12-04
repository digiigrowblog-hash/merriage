"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

const SuccessRate = () => {

      const stats = [
    { num: "50K+", label: "Happy Couples", icon: Heart },
    { num: "10L+", label: "Profiles", icon: Users },
    { num: "98%", label: "Success Rate", icon: CheckCircle }
  ]

  return (
          <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-linear-to-b from-beige-50 to-terracotta-50 border border-teal-100"
            >
              <stat.icon className="w-16 h-16 text-mustard-500 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">{stat.num}</div>
              <div className="text-lg text-mustard-800">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default SuccessRate