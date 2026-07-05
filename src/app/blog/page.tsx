"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "Enrollment for School Year 2025-2026 Now Open",
    excerpt: "Secure your child's spot in our SPED, Kindergarten, and Grade school programs. Early bird discounts and flexible payment plans available for all levels.",
    date: "June 15, 2025",
    author: "Admin",
    category: "Enrollment",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Annual Foundation Day Celebration Highlights",
    excerpt: "Celebrating 30+ years of nurturing excellence and Christian values in Palawan. A day filled with performances, awards, and community spirit.",
    date: "March 16, 2025",
    author: "Admin",
    category: "Events",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Students Shine in Regional Academic Competition",
    excerpt: "Our students brought home medals in Mathematics, Science, and English categories at the regional academic olympics.",
    date: "February 22, 2025",
    author: "Admin",
    category: "Achievement",
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "New ICT Laboratory Inaugurated",
    excerpt: "State-of-the-art computer laboratory with 30 new units opens to enhance digital literacy across all grade levels.",
    date: "January 10, 2025",
    author: "Admin",
    category: "Facilities",
    color: "from-purple-400 to-violet-600",
  },
  {
    title: "Christmas Outreach Program Success",
    excerpt: "Students and teachers spread Christmas joy to underprivileged communities in Bgy. Tiniguiban through gift-giving and caroling.",
    date: "December 20, 2024",
    author: "Admin",
    category: "Community",
    color: "from-rose-400 to-pink-600",
  },
  {
    title: "Teachers Complete Professional Development Workshop",
    excerpt: "Faculty members attended a week-long seminar on modern pedagogical approaches and ICT-integrated teaching strategies.",
    date: "November 15, 2024",
    author: "Admin",
    category: "Faculty",
    color: "from-cyan-400 to-blue-600",
  },
];

export default function BlogPage() {
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
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            Stay informed about the latest happenings, achievements, and announcements from our school community.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group"
              >
                {/* Image placeholder with gradient */}
                <div className={`h-48 bg-gradient-to-br ${post.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-heading font-bold">
                      {post.category[0]}
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-dark/80 flex items-center gap-1">
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-dark/40 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-dark/60 line-clamp-3 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors group/link"
                  >
                    Read More
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20" />
    </>
  );
}
