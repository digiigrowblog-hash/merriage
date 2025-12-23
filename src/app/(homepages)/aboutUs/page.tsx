// app/aboutUs/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Users, CheckCircle, ArrowRight, BadgeCheck, Award } from "lucide-react";
import Header from "@/components/Header"; // Adjust path to your Header

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Heart,
    title: "Matrimony Platform",
    desc: "Our in-house FinDMe app connects hearts with smart matching & verified profiles.",
  },
  {
    icon: Users,
    title: "Digital Marketing",
    desc: "Grow your brand with targeted campaigns, SEO, and social media strategies.",
  },
  {
    icon: Award,
    title: "Web Development",
    desc: "Modern Next.js apps, e-commerce, and custom platforms built to scale.",
  },
  {
    icon: CheckCircle,
    title: "Graphics Design",
    desc: "Branding, logos, and wedding creatives that capture your unique story.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#f3c871] via-[#f3b886] to-[#e89b7c] overflow-hidden">
      <Header />
      


      {/* Who We Are */}
      <section className="py-24 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-mustard-900 mb-6 leading-tight">
              Digiigrow: <span className="bg-gradient-to-r from-mustard-600 to-terracotta-600 bg-clip-text text-transparent">
                Creators of FinDMe
              </span>
            </h2>
            <div className="space-y-6 text-terracotta-800 text-lg leading-relaxed">
              <p>
                We blend digital expertise with heartfelt matchmaking to create FinDMe – a platform 
                that respects tradition while embracing modern love stories.
              </p>
              <p>
                From full-stack development to targeted marketing, our team builds products and 
                services that help people and businesses find their perfect match.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center bg-gradient-to-r from-mustard-500 to-terracotta-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Our Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-terracotta-100 to-beige-100 rounded-3xl p-8 shadow-2xl border border-mustard-100">
              <div className="grid grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-mustard-200"
                  >
                    <service.icon className="w-10 h-10 text-terracotta-600 group-hover:scale-110 transition-transform mb-3" />
                    <h3 className="font-bold text-mustard-900 text-lg mb-2">{service.title}</h3>
                    <p className="text-terracotta-700 text-sm leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 lg:px-20 bg-white/30 backdrop-blur-sm rounded-4xl mx-8 lg:mx-20 -mt-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center bg-gradient-to-r from-mustard-500 to-terracotta-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl mb-8">
              <BadgeCheck className="w-5 h-5 mr-2" />
              Built with Love in India
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-mustard-900 mb-8">
              From Digital Agency to <span className="bg-gradient-to-r from-terracotta-600 to-mustard-600 bg-clip-text text-transparent">Matchmakers</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  step: "01",
                  title: "Digital Roots",
                  desc: "Started as full-stack agency building websites, apps & marketing campaigns.",
                },
                {
                  step: "02", 
                  title: "Observed Pain",
                  desc: "Saw families struggling with outdated, cluttered matrimony platforms.",
                },
                {
                  step: "03",
                  title: "Built FinDMe",
                  desc: "Created modern, verified, culturally-aware matchmaking solution.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group p-8 rounded-3xl bg-gradient-to-b from-white/80 to-beige-50 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-mustard-100 hover:border-terracotta-200 transition-all duration-500 hover:-translate-y-4"
                >
                  <div className="w-12 h-12 text-gray-200 bg-gradient-to-r from-mustard-500 to-terracotta-500 
                  rounded-2xl flex items-center justify-center  font-bold text-xl mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl text-mustard-900 mb-4">{item.title}</h3>
                  <p className="text-terracotta-700 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-20 mt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-mustard-500 via-terracotta-500 to-mustard-600 rounded-4xl p-16 shadow-3xl"
        >
          <motion.div variants={itemVariants}>
            <Heart className="w-20 h-20 text-white mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Find Your Match?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands finding love through our verified, modern matrimony platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-mustard-900 font-bold px-12 py-5 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg"
              >
                Get Started Free
              </Link>
              <Link
                href="/premium"
                className="border-2 border-white/50 text-white font-bold px-12 py-5 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg"
              >
                View Premium
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
