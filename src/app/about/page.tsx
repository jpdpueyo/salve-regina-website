"use client";

import { motion } from "framer-motion";
import { CoreValuesSection } from "@/components/CoreValuesSection";
import { BookOpen, Eye, Target } from "lucide-react";

const historyData = [
  { year: "1993", event: "Mary Mediatrix Child Formation Center was born with 10 students in a balcony.", students: 10 },
  { year: "1995", event: "Grew to 44 students with addition of a teacher aide.", students: 44 },
  { year: "1996", event: "Transferred to current site. Began opening Grade 1.", students: 69 },
  { year: "1998", event: "144 students enrolled. Purchased first computer for instruction.", students: 144 },
  { year: "2000", event: "Expanded to 360 students with 15 teachers. New 3-room structure added.", students: 360 },
  { year: "2002", event: "First elementary graduation. 521 students enrolled.", students: 521 },
  { year: "2008", event: "Established with 20 computer units and full K-10 program.", students: 500 },
  { year: "Today", event: "Continuing to provide quality affordable education with Christian values.", students: 500 },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            Discover our journey of faith, excellence, and commitment to nurturing young minds since 1993.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-dark/60 mb-4">
                Salve Regina School of Palawan Inc. commits to:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <span className="text-dark/70 text-sm leading-relaxed">
                    Foster and strengthen Christian harmony and collaboration among all stakeholders in a
                    family-oriented, child-friendly, safe and nurturing environment where God&apos;s love
                    and Mary&apos;s wisdom are generously shared.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <span className="text-dark/70 text-sm leading-relaxed">
                    Holistic, cognitive, and excellent development of children regardless of gender and
                    socio-economic status.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <span className="text-dark/70 text-sm leading-relaxed">
                    Integrate and align consistently the PVMGO into the ICT-aided curriculum supportive
                    of K-12 Standards, national and global development goals, and the 4 C&apos;s of
                    21st Century Learning.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-secondary" size={28} />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-dark/60 mb-4">
                Salve Regina School of Palawan Inc. envisions to develop dynamic productive lifelong
                learners imbued with:
              </p>
              <ul className="space-y-3">
                {["Christian values", "Relevant skills", "Competencies", "Responsible citizenship", "Resilience to changes in global learning"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-dark/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValuesSection />

      {/* History Timeline */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-3">
              A Legacy of <span className="gradient-text">Growth</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            {historyData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass-card p-6 inline-block">
                    <span className="text-secondary font-heading font-bold text-xl">{item.year}</span>
                    <p className="text-dark/70 text-sm mt-2 leading-relaxed">{item.event}</p>
                    {item.students && item.year !== "Today" && (
                      <span className="inline-block mt-2 text-xs bg-primary/5 text-primary px-2 py-1 rounded-full">
                        {item.students} students
                      </span>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-4 h-4 bg-secondary rounded-full border-4 border-cream shadow-lg shrink-0 z-10" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20" />
    </>
  );
}
