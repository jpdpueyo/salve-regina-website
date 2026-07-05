"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const classes = [
  {
    name: "SPED",
    description: "Special Education program tailored for children with unique learning needs.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    color: "from-blue-500 to-blue-700",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    name: "Kindergarten 1",
    description: "Foundation program developing early literacy, numeracy, and social skills.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    color: "from-green-500 to-green-700",
    accent: "bg-green-100 text-green-700",
  },
  {
    name: "Kindergarten 2",
    description: "Advanced preschool preparation for a smooth transition to elementary.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    color: "from-purple-500 to-purple-700",
    accent: "bg-purple-100 text-purple-700",
  },
  {
    name: "Grades 1-10",
    description: "Complete basic education with ICT-aided instruction and values formation.",
    schedule: "Mon-Fri",
    time: "7:30 AM - 4:00 PM",
    color: "from-amber-500 to-amber-700",
    accent: "bg-amber-100 text-amber-700",
  },
];

export function ClassesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-white" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Our Programs
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-3">
              Classes We Offer
            </h2>
          </div>
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors mt-4 md:mt-0"
          >
            View All Classes
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card overflow-hidden h-full">
                {/* Gradient header */}
                <div className={`h-3 bg-gradient-to-r ${cls.color}`} />

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cls.accent} mb-4`}>
                    {cls.name}
                  </span>

                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {cls.name}
                  </h3>

                  <p className="text-sm text-dark/60 mb-5 leading-relaxed">
                    {cls.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-dark/50">
                      <Calendar size={14} />
                      <span>{cls.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark/50">
                      <Clock size={14} />
                      <span>{cls.time}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors group/link"
                  >
                    Enroll Now
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
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
