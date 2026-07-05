"use client";

import { motion } from "framer-motion";
import { Sparkles, RefreshCw, Crown, Heart, Trophy } from "lucide-react";

const values = [
  {
    letter: "S",
    name: "Spirituality",
    description: "Rooted in faith, guided by God's love and Mary's wisdom in all we do.",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    letter: "A",
    name: "Adaptability",
    description: "Embracing change and innovation to prepare for a dynamic world.",
    icon: RefreshCw,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    letter: "L",
    name: "Leadership",
    description: "Developing confident leaders who serve with integrity and compassion.",
    icon: Crown,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    letter: "V",
    name: "Virtue",
    description: "Cultivating moral character and responsible citizenship in every student.",
    icon: Heart,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    letter: "E",
    name: "Excellence",
    description: "Pursuing the highest standards in academics, arts, and personal growth.",
    icon: Trophy,
    gradient: "from-emerald-500 to-green-600",
  },
];

export function CoreValuesSection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">
            Our Foundation
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-3 mb-4 text-white">
            Core Values — <span className="text-secondary">SALVE</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Our values spell SALVE — guiding every aspect of how we nurture, teach,
            and inspire our students to become the best version of themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center h-full hover:bg-white/10 transition-all duration-300">
                {/* Large letter */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-heading font-bold text-2xl">
                    {value.letter}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {value.name}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
