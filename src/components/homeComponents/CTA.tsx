"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const CTA = () => {
  return (
         <section className=" py-24 bg-white/50 backdrop-blur-sm   ">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className=""
          >
            <h2 className="text-4xl text-[#7e022a] md:text-5xl font-bold text-mustard-900 mb-6 rhodium-libre-regular">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-[#190008] mb-12 max-w-2xl mx-auto rosarivo-regular">
              Join thousands finding their perfect match. Free registration, verified profiles.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-linear-to-r from-mustard-500 via-terracotta-500 to-mustard-600
               text-white px-16 py-6 rounded-3xl font-bold text-xl 
               transition-all duration-300 flex items-center gap-3 mx-auto"
            >
             <p className="flex gap-2 px-5 py-2 bg-[#ffe6ee] items-center
              rounded-3xl text-[#b0023b] text-sm md:text-base rosarivo-regular"> <Link href="/signup">Create Free Profile </Link>
                <ArrowRight className="md:w-6 md:h-6 w-5 h-5 md:mt-1" /></p>
              
            </motion.button>
          </motion.div>
        </div>
      </section>
  )
}

export default CTA