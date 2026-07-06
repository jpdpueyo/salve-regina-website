"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Salve Regina has been our family's blessing. Our children have grown not just academically, but spiritually and personally.",
    name: "Maria Santos",
    role: "Parent",
    rating: 5,
  },
  {
    quote:
      "The teachers here truly care about every student. They go above and beyond to make learning exciting and meaningful.",
    name: "Roberto Cruz",
    role: "Parent",
    rating: 5,
  },
  {
    quote:
      "I learned to be a leader and always strive for excellence. Salve Regina prepared me well for high school and beyond.",
    name: "Angela Reyes",
    role: "Alumni",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle luxury bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-pink-50/50 to-blue-50/40" />
      <div className="absolute top-0 w-full luxury-divider" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mt-3 leading-tight">
            Voices from Our <span className="gradient-text">Community</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="luxury-card p-9 relative"
            >
              {/* Decorative quote */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl flex items-center justify-center">
                <Quote className="text-pink-300" size={20} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-dark/60 leading-relaxed mb-8 italic font-light text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-pink-100/50">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-dark text-sm">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-dark/40">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
