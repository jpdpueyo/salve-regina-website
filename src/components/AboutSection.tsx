"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Star, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Awesome Teachers",
    description: "Dedicated educators passionate about nurturing every child's potential.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Curriculum aligned with K-12 national and international benchmarks.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Star,
    title: "Best Programs",
    description: "ICT-aided curriculum with PVMGO integration and 21st century learning.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Student Support",
    description: "Child-friendly, safe, and nurturing environment for every learner.",
    color: "bg-purple-100 text-purple-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-3 mb-4">
            Welcome to{" "}
            <span className="gradient-text">Salve Regina School</span>
          </h2>
          <p className="text-dark/60 leading-relaxed">
            We provide a family-oriented education where God&apos;s love and Mary&apos;s wisdom
            are generously shared, developing holistic learners for the future.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 text-center group cursor-pointer"
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
