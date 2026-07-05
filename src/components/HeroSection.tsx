"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, Award, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-light border border-secondary/20 rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <GraduationCap size={16} />
              <span>Nurturing Excellence Since 1993</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-6">
              Where Faith Meets{" "}
              <span className="gradient-text">Academic Excellence</span>
            </h1>

            <p className="text-lg text-dark/60 leading-relaxed mb-8 max-w-lg">
              Salve Regina School of Palawan nurtures dynamic, productive lifelong learners
              imbued with Christian values and relevant skills for the 21st century.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-primary/20 text-primary rounded-full font-semibold hover:bg-primary/5 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary/10"
            >
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary">30+</h3>
                <p className="text-sm text-dark/50 mt-1">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary">500+</h3>
                <p className="text-sm text-dark/50 mt-1">Students Enrolled</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary">24+</h3>
                <p className="text-sm text-dark/50 mt-1">Dedicated Teachers</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6 col-span-2"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">K-12 Education</h3>
                <p className="text-sm text-dark/60">
                  Complete SPED, Kindergarten, and Grades 1-10 programs aligned with national standards.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">Christian Values</h3>
                <p className="text-xs text-dark/60">Faith-based nurturing environment</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">Expert Faculty</h3>
                <p className="text-xs text-dark/60">Passionate educators guiding growth</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6 col-span-2"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Holistic Development</h3>
                <p className="text-sm text-dark/60">
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
