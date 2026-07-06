"use client";

import { motion } from "framer-motion";

const values = [
  {
    letter: "S",
    name: "Spirituality",
    description: "Rooted in faith, guided by God's love and Mary's wisdom in all we do.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "shadow-violet-500/30",
  },
  {
    letter: "A",
    name: "Adaptability",
    description: "Embracing change and innovation to prepare for a dynamic world.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glow: "shadow-blue-500/30",
  },
  {
    letter: "L",
    name: "Leadership",
    description: "Developing confident leaders who serve with integrity and compassion.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glow: "shadow-amber-500/30",
  },
  {
    letter: "V",
    name: "Virtue",
    description: "Cultivating moral character and responsible citizenship in every student.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    glow: "shadow-rose-500/30",
  },
  {
    letter: "E",
    name: "Excellence",
    description: "Pursuing the highest standards in academics, arts, and personal growth.",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    glow: "shadow-emerald-500/30",
  },
];

export function CoreValuesSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-pink-100/70 via-pink-50 to-rose-100/60">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6 text-dark leading-tight">
            Core Values — <span className="gradient-text">SALVE</span>
          </h2>
          <p className="text-dark/50 leading-relaxed text-lg font-light">
            Our values spell SALVE — guiding every aspect of how we nurture, teach,
            and inspire our students to become the best version of themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-7 text-center h-full hover:bg-white/90 hover:border-pink-100 shadow-sm hover:shadow-lg transition-all duration-500">
                {/* Glowing letter */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-5 shadow-xl ${value.glow} group-hover:shadow-2xl transition-shadow duration-500`}
                >
                  <span className="text-white font-heading font-bold text-3xl">
                    {value.letter}
                  </span>
                </motion.div>

                <h3 className="font-heading font-semibold text-lg text-dark mb-3">
                  {value.name}
                </h3>
                <p className="text-sm text-dark/45 leading-relaxed">
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
