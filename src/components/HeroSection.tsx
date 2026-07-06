"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Award, Heart, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Luxurious animated background */}
      <div className="absolute inset-0">
        {/* Main gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-pink-50/40 to-blue-100/50" />

        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-pink-200/60 to-pink-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/50 to-sky-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-pink-100/40 via-blue-50/20 to-transparent rounded-full"
        />

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] w-3 h-3 bg-pink-300 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[15%] w-2 h-2 bg-blue-300 rounded-full opacity-50"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[30%] w-4 h-4 bg-pink-200 rounded-full opacity-30"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-blue-50 border border-pink-100/50 rounded-full px-5 py-2.5 text-sm font-medium mb-8 shadow-sm"
            >
              <Sparkles size={16} className="text-pink-500" />
              <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                Nurturing Excellence Since 1993
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-dark leading-[1.1] mb-8">
              Salve Regina{" "}
              <br />
              <span className="gradient-text text-shadow-luxury">School, Inc.</span>
            </h1>

            <p className="text-lg text-dark/50 leading-relaxed mb-10 max-w-lg font-light">
              Salve Regina School of Palawan nurtures dynamic, productive lifelong learners
              imbued with Christian values and relevant skills for the 21st century.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2.5 text-base">
                Begin Your Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-4 border-2 border-pink-200/60 text-dark/70 rounded-full font-semibold hover:bg-pink-50/50 hover:border-pink-300/60 transition-all duration-300"
              >
                Discover More
              </Link>
            </div>

            {/* Stats with luxury styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gradient-to-r from-transparent via-pink-100 to-transparent"
            >
              {[
                { number: "30+", label: "Years of Excellence" },
                { number: "500+", label: "Students Enrolled" },
                { number: "24+", label: "Expert Teachers" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                >
                  <h3 className="text-4xl font-heading font-bold gradient-text">{stat.number}</h3>
                  <p className="text-xs text-dark/40 mt-2 tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Premium Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-100/30 via-transparent to-blue-100/30 rounded-[2rem] blur-xl" />

            <div className="grid grid-cols-2 gap-5 relative">
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="luxury-card p-7 col-span-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                  <GraduationCap className="text-white" size={26} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">K-12 Education</h3>
                <p className="text-sm text-dark/50 leading-relaxed">
                  Complete SPED, Kindergarten, and Grades 1-10 programs aligned with national standards.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="luxury-card p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-pink-500/20">
                  <Heart className="text-white" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">Christian Values</h3>
                <p className="text-xs text-dark/45 leading-relaxed">Faith-based nurturing environment</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="luxury-card p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                  <Users className="text-white" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">Expert Faculty</h3>
                <p className="text-xs text-dark/45 leading-relaxed">Passionate educators guiding growth</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="luxury-card p-7 col-span-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-violet-500/20">
                  <Award className="text-white" size={26} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">Holistic Development</h3>
                <p className="text-sm text-dark/50 leading-relaxed">
                  Nurturing mind, body, and spirit with 21st-century competencies and resilience.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
