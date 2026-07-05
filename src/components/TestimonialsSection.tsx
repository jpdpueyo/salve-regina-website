"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Salve Regina has been our family's blessing. Our children have grown not just academically, but spiritually and personally.",
    name: "Maria Santos",
    role: "Parent",
  },
  {
    quote:
      "The teachers here truly care about every student. They go above and beyond to make learning exciting and meaningful.",
    name: "Roberto Cruz",
    role: "Parent",
  },
  {
    quote:
      "I learned to be a leader and always strive for excellence. Salve Regina prepared me well for high school and beyond.",
    name: "Angela Reyes",
    role: "Alumni",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-cream-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-secondary font-medium text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-3">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 relative"
            >
              <Quote className="text-secondary/30 absolute top-6 right-6" size={32} />
              <p className="text-dark/70 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-heading font-semibold text-primary">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-dark/50">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
