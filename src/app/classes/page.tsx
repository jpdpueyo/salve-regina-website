"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, Users, ArrowRight } from "lucide-react";

const allClasses = [
  {
    name: "SPED (Special Education)",
    description: "A dedicated program providing individualized instruction for children with unique learning needs. Our trained SPED teachers create adaptive learning environments to help each child reach their full potential.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    ageGroup: "3-7 years",
    color: "from-rose-500 to-pink-600",
    features: ["Individualized Learning Plans", "Trained SPED Teachers", "Small Class Size", "Parent Involvement"],
  },
  {
    name: "Kindergarten 1",
    description: "Our foundation program introduces young learners to the joy of education through play-based activities, early literacy, numeracy, and social development in a nurturing environment.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    ageGroup: "4-5 years",
    color: "from-blue-500 to-indigo-600",
    features: ["Play-Based Learning", "Early Literacy", "Social Skills", "Creative Arts"],
  },
  {
    name: "Kindergarten 2",
    description: "Advanced preschool preparation that builds on K1 foundations, ensuring students are fully ready for the transition to elementary with confidence and strong academic skills.",
    schedule: "Mon-Fri",
    time: "8:00 AM - 11:00 AM",
    ageGroup: "5-6 years",
    color: "from-emerald-500 to-teal-600",
    features: ["Reading Readiness", "Math Foundations", "Science Exploration", "Values Formation"],
  },
  {
    name: "Grade 1-3 (Primary)",
    description: "Building strong foundations in reading, writing, mathematics, and values. Students develop critical thinking and a love for learning through engaging, ICT-aided instruction.",
    schedule: "Mon-Fri",
    time: "7:30 AM - 4:00 PM",
    ageGroup: "6-9 years",
    color: "from-amber-500 to-orange-600",
    features: ["Strong Literacy Focus", "Math Mastery", "ICT Integration", "Character Building"],
  },
  {
    name: "Grade 4-6 (Intermediate)",
    description: "Deepening knowledge across all subject areas while developing research skills, leadership, and preparing students for the challenges of junior high school.",
    schedule: "Mon-Fri",
    time: "7:30 AM - 4:00 PM",
    ageGroup: "9-12 years",
    color: "from-violet-500 to-purple-600",
    features: ["Advanced Academics", "Research Skills", "Leadership Programs", "Sports & Arts"],
  },
  {
    name: "Grade 7-10 (Junior High)",
    description: "Comprehensive junior high school education aligned with K-12 standards, developing competent and values-driven students ready for senior high and beyond.",
    schedule: "Mon-Fri",
    time: "7:30 AM - 4:00 PM",
    ageGroup: "12-16 years",
    color: "from-cyan-500 to-blue-600",
    features: ["K-12 Aligned", "Computer Literacy", "Career Guidance", "Community Service"],
  },
];

export default function ClassesPage() {
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
            Our Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            From SPED to Grade 10, we offer comprehensive programs nurturing every stage of your child&apos;s growth.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allClasses.map((cls, index) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group"
              >
                {/* Color header */}
                <div className={`h-2 bg-gradient-to-r ${cls.color}`} />

                <div className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {cls.name}
                  </h3>
                  <p className="text-sm text-dark/60 leading-relaxed mb-5">
                    {cls.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-5 pb-5 border-b border-dark/5">
                    <div className="flex items-center gap-2 text-sm text-dark/50">
                      <Calendar size={14} className="text-secondary" />
                      <span>{cls.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark/50">
                      <Clock size={14} className="text-secondary" />
                      <span>{cls.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-dark/50">
                      <Users size={14} className="text-secondary" />
                      <span>Age: {cls.ageGroup}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {cls.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        <span className="text-xs text-dark/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    Inquire Now
                    <ArrowRight size={14} />
                  </Link>
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
