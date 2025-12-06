"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";

const verified = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    location: "New York",
    profession: "Software Engineer",
    image: "/images/img1.png",
    verified: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    location: "LosAngeles",
    profession: "Doctor",
    image: "/images/img2.png",
    verified: true,
  },
  {
    id: 3,
    name: "Riya Johnson",
    age: 25,
    location: "Chicago",
    profession: "Graphic Designer",
    image: "/images/img3.png",
    verified: true,
  },
  {
    id: 4,
    name: "Rike Brown",
    age: 30,
    location: "Houston",
    Profession: "Fashion Designer",
    image: "/images/img4.png",
    verified: true,
  },
  {
    id: 5,
    name: "David Lee",
    age: 27,
    location: "Phoenix",
    profession: "Chef",
    image: "/images/img5.png",
    verified: true,
  },
  {
    id: 6,
    name: "Nilesh Lee",
    age: 27,
    location: "Phoenix",
    profession: "Architecture",
    image: "/images/img6.png",
    verified: true,
  },
];



const Matching = () => {
  const [activeTab, setActiveTab] = useState("matches");
  return (
    <section className="py-24">
      <div className="container mx-auto px-3 lg:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="md:text-4xl text-xl font-bold text-center text-mustard-900 mb-16"
        >
          <span
            className="bg-white/80 backdrop-blur-sm rounded-2xl 
           md:px-4 px-3 py-1 shadow-xl"
          >
            Perfect Matches Waiting
          </span>
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
          {verified.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group h-full bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden 
                shadow-xl hover:shadow-2xl border border-teal-100 hover:border-mustard-200 
                transition-all duration-300"
            >
              <div
                className="h-[550px] bg-linear-to-br from-terracotta-100 to-beige-100 relative 
                overflow-hidden group-hover:scale-110 transition-transform"
              >
                <Image
                  src={item.image}
                  alt="Profile"
                  fill
                  className="object-cover rounded-t-2xl group-hover:brightness-110"
                />
                <div
                  className="absolute top-4 right-4 bg-mustard-500/90 text-white px-3 py-1 
                  rounded-full text-sm font-semibold"
                >
                  95% Match
                </div>

                <div className="absolute bottom-0 left-0 right-0
                 bg-white/95 backdrop-blur-sm flex flex-col gap-3 rounded-t-3xl 
                 shadow-2xl p-6 mx-4 mb-4">
                  <div className="flex items-start justify-start gap-2 mb-3">
                    <div className="w-5 h-4 bg-mustard-500 rounded-full flex items-center justify-center -mt-0.5">
                      <BadgeCheck className="w-4 h-3 text-teal-500" />
                    </div>
                    <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-mustard-900 mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-teal-800 text-sm mb-4 font-medium">
                    {item.profession} • {item.age} • {item.location}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xl font-bold text-mustard-600 flex items-center gap-2">
                      <Heart
                        className="w-5 h-5 cursor-pointer"
                        
                      />
                      Connect
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-linear-to-r from-mustard-500 to-terracotta-500 text-white rounded-2xl hover:shadow-xl transition-all duration-200"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Matching;
