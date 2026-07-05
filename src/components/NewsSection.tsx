"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Enrollment for School Year 2025-2026 Now Open",
    excerpt: "Secure your child's spot in our SPED, Kindergarten, and Grade school programs.",
    date: "June 15, 2025",
    category: "Enrollment",
  },
  {
    title: "Annual Foundation Day Celebration",
    excerpt: "Celebrating 30+ years of nurturing excellence and Christian values in Palawan.",
    date: "March 10, 2025",
    category: "Events",
  },
  {
    title: "Students Shine in Regional Academic Competition",
    excerpt: "Our students brought home medals in Math, Science, and English categories.",
    date: "February 22, 2025",
    category: "Achievement",
  },
];

export function NewsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">
              Latest Updates
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-3">
              School News & Events
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors mt-4 md:mt-0"
          >
            View All News
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card overflow-hidden group"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-dark/40 mb-3">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-dark/60 line-clamp-2 mb-4">{post.excerpt}</p>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  Read More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
