"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Info, Quote, BadgeCheck } from "lucide-react";
import UserInfoUI from "./(profileUiComponent)/UserInfoUI";
import PropmtUI from "./(profileUiComponent)/PropmtUI";
import Images from "./(profileUiComponent)/Images";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const user = {
  name: "Arjun Mehta",
  age: 27,
  jobTitle: "Software Engineer",
  company: "Bengaluru · Remote",
  intent: "Serious relationship / Marriage",
  bio: "Building products by day, learning raag by night. Looking for a partner who values family, faith and fun weekends.",
  height: "5'10\"",
  religion: "Hindu",
  community: "Baniya",
  education: "B.Tech · Computer Science",
  hometown: "Jaipur, Rajasthan",
  interests: ["Startup nerd", "Classical music", "Chai dates", "Long drives"],
  prompts: [
    {
      label: "Prompt 1",
      question: "A green flag I look for",
      answer: "Kindness to service staff and a soft spot for parents.",
    },
    {
      label: "Prompt 2",
      question: "On weekends you’ll find me",
      answer: "Exploring new coffee places or planning the next family trip.",
    },
    {
      label: "Prompt 3",
      question: "Together we could",
      answer: "Try every regional food festival across India.",
    },
  ],
  photos: [
    "/images/profile-main.jpg",
    "/images/profile-2.jpg",
    "/images/profile-3.jpg",
    "/images/profile-4.jpg",
    "/images/profile-5.jpg",
    "/images/profile-6.jpg",
  ],
};
export default function Preview() {
  return (
    <main className="min-h-screen flex justify-center ">
      <div className="w-full lg:max-w-4xl md:max-w-xl max-w-90 mx-auto px-3 sm:px-4 md:px-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-2 pb-0"
        >
          <div className="flex items-center  mt-4">
            <h1 className=" px-1  text-lg font-bold road-range-regular">Ridhhi Sharma</h1>
            <BadgeCheck
              size={27}
              strokeWidth={2.25}
              className="mt-1 fill-blue-500 text-white"
            />

          </div>
          
          <Images />
          <PropmtUI />
          <UserInfoUI />
          <Images />
          <Images />
          <PropmtUI />
          <Images />
          <PropmtUI />
          <Images />
        </motion.div>
      </div>
    </main>
  );
}
