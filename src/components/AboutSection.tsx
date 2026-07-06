"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Star, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Awesome Teachers",
    description: "Dedicated educators passionate about nurturing every child's potential with love and expertise.",
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Curriculum aligned with K-12 national and international benchmarks for world-class education.",
    gradient: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    bg: "from-emerald-50 to-teal-50",
  },
  {
    icon: Star,
    title: "Best Programs",
    description: "ICT-aided curriculum with PVMGO integration and 21st century learning methodologies.",
    gradient: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
    bg: "from-amber-50 to-orange-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Student Support",
    description: "Child-friendly, safe, and nurturing environment for every learner to thrive and grow.",
    gradient: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/20",
    bg: "from-pink-50 to-rose-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function AboutSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-pink-50/40 to-white">
      {/* Luxury divider */}
      <div className="luxury-divider w-full absolute top-0" />

      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-100/30 via-blue-50/20 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6 leading-tight">
            Welcome to{" "}
            <span className="gradient-text">Salve Regina School</span>
          </h2>
          <p className="text-dark/45 leading-relaxed text-lg font-light">
            We provide a family-oriented education where God&apos;s love and Mary&apos;s wisdom
            are generously shared, developing holistic learners for the future.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="luxury-card p-8 text-center group cursor-pointer"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl ${feature.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
              >
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary-light transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-dark/45 leading-relaxed">{feature.description}</p>

              {/* Bottom accent line */}
              <div className={`h-0.5 w-0 bg-gradient-to-r ${feature.gradient} mx-auto mt-6 group-hover:w-12 transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
