"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const teachers = [
  {
    name: "Teacher Cely",
    role: "Founder & Head Teacher",
    department: "Administration",
    bio: "The visionary founder who started with 10 students in 1993 and built Salve Regina into what it is today.",
  },
  {
    name: "Ms. Amanda Kern",
    role: "SPED Teacher",
    department: "Special Education",
    bio: "Specialized in individualized learning plans for children with unique educational needs.",
  },
  {
    name: "Ms. Gypsy Hardinge",
    role: "Kindergarten Teacher",
    department: "Pre-School",
    bio: "Creates joyful learning experiences that build strong foundations for young learners.",
  },
  {
    name: "Ms. Margje Jutten",
    role: "Kindergarten 2 Teacher",
    department: "Pre-School",
    bio: "Ensures smooth transitions from kindergarten to elementary through engaging activities.",
  },
  {
    name: "Mr. Carlos Rivera",
    role: "Math & Science Teacher",
    department: "Elementary",
    bio: "Makes complex concepts accessible through hands-on experiments and real-world applications.",
  },
  {
    name: "Ms. Faith Santos",
    role: "English & Filipino Teacher",
    department: "Elementary",
    bio: "Passionate about developing strong communication skills and love for reading.",
  },
  {
    name: "Mr. Daniel Cruz",
    role: "ICT Teacher",
    department: "Technology",
    bio: "Integrates modern technology into learning, preparing students for the digital age.",
  },
  {
    name: "Ms. Grace Reyes",
    role: "Values Education Teacher",
    department: "Character Formation",
    bio: "Nurtures spiritual growth and moral development aligned with Christian values.",
  },
];

const colors = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600",
  "from-fuchsia-500 to-pink-600",
];

export default function TeachersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
          >
            Our Teachers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            Meet our dedicated educators who inspire, guide, and nurture every student with passion and care.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group text-center"
              >
                {/* Avatar placeholder */}
                <div className={`h-48 bg-gradient-to-br ${colors[index % colors.length]} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 text-5xl font-heading font-bold">
                      {teacher.name.split(" ").pop()?.[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-secondary text-sm font-medium mt-1">{teacher.role}</p>
                  <span className="inline-block mt-2 text-xs bg-primary/5 text-primary/70 px-2 py-1 rounded-full">
                    {teacher.department}
                  </span>
                  <p className="text-xs text-dark/50 mt-3 leading-relaxed">{teacher.bio}</p>

                  <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-dark/5">
                    <a href="#" className="text-dark/30 hover:text-secondary transition-colors">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20" />
    </>
  );
}
