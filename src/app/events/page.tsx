"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Enrollment Period - SY 2025-2026",
    date: "June 1 - July 15, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "School Office",
    description: "Secure your child's slot for the upcoming school year. Early bird discounts available.",
    status: "Ongoing",
    color: "border-l-green-500",
  },
  {
    title: "Foundation Day Celebration",
    date: "March 15, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "School Campus",
    description: "Annual celebration commemorating the founding of Salve Regina School with performances, games, and awards.",
    status: "Upcoming",
    color: "border-l-blue-500",
  },
  {
    title: "Science & Technology Fair",
    date: "February 20, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "School Gymnasium",
    description: "Students showcase their innovative projects and scientific discoveries.",
    status: "Upcoming",
    color: "border-l-purple-500",
  },
  {
    title: "Parents-Teachers Conference",
    date: "January 25, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Respective Classrooms",
    description: "Regular conference to discuss student progress and academic performance.",
    status: "Upcoming",
    color: "border-l-amber-500",
  },
  {
    title: "Christmas Program & Recollection",
    date: "December 18, 2024",
    time: "8:00 AM - 12:00 PM",
    location: "School Campus",
    description: "End-of-year celebration with student performances and spiritual reflection.",
    status: "Past",
    color: "border-l-rose-500",
  },
  {
    title: "Campus Clean-Up & Outreach",
    date: "November 10, 2024",
    time: "7:00 AM - 12:00 PM",
    location: "Community",
    description: "Community service activity where students learn responsibility and care for the environment.",
    status: "Past",
    color: "border-l-teal-500",
  },
];

export default function EventsPage() {
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
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-xl mx-auto"
          >
            Stay updated with our school activities, celebrations, and community events.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`glass-card p-6 lg:p-8 border-l-4 ${event.color}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-semibold text-xl">{event.title}</h3>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          event.status === "Ongoing"
                            ? "bg-green-100 text-green-700"
                            : event.status === "Upcoming"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <p className="text-sm text-dark/60 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex items-center gap-1.5 text-sm text-dark/50">
                        <Calendar size={14} className="text-secondary" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-dark/50">
                        <Clock size={14} className="text-secondary" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-dark/50">
                        <MapPin size={14} className="text-secondary" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-secondary transition-colors shrink-0">
                    Details <ArrowRight size={14} />
                  </button>
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
