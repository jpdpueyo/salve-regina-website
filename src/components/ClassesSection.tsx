"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";

const classes = [
  {
    name: "SPED",
    description: "Special Education program tailored for children with unique learning needs.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    gradient: "from-rose-500 to-pink-600",
    shadow: "shadow-rose-500/20",
    accent: "bg-rose-50 text-rose-600 border-rose-100",
  },
  {
    name: "Kindergarten 1",
    description: "Foundation program developing early literacy, numeracy, and social skills.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    accent: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    name: "Kindergarten 2",
    description: "Advanced preschool preparation for a smooth transition to elementary.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
    accent: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    name: "Grades 1-10",
    description: "Complete basic education with ICT-aided instruction and values formation.",
    schedule: "Mon-Fri",
    time: "7:30 AM - 4:00 PM",
    gradient: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
    accent: "bg-amber-50 text-amber-600 border-amber-100",
  },
];

export function ClassesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/80 via-blue-100/60 to-sky-100/80" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
              Our Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Classes We <span className="gradient-text">Offer</span>
            </h2>
          </div>
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors mt-6 md:mt-0 group"
          >
            View All Classes
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="luxury-card overflow-hidden h-full">
                {/* Premium gradient header */}
                <div className={`h-2 bg-gradient-to-r ${cls.gradient}`} />

                <div className="p-7">
                  <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold border ${cls.accent} mb-5`}>
                    <Sparkles size={10} className="inline mr-1 -mt-0.5" />
                    {cls.name}
                  </span>

                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:gradient-text transition-all duration-300">
                    {cls.name}
                  </h3>

                  <p className="text-sm text-dark/45 mb-6 leading-relaxed font-light">
                    {cls.description}
                  </p>

                  <div className="space-y-2.5 mb-6 pb-6 border-b border-pink-50">
                    <div className="flex items-center gap-2.5 text-sm text-dark/40">
                      <Calendar size={14} className="text-pink-400" />
                      <span>{cls.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-dark/40">
                      <Clock size={14} className="text-blue-400" />
                      <span>{cls.time}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors group/link"
                  >
                    Enroll Now
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1.5 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
