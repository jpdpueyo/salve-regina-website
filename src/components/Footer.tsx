"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/classes", label: "Our Classes" },
  { href: "/teachers", label: "Teachers" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-200/80 via-blue-100 to-sky-200/70 text-dark relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-pink-300/40 to-transparent" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      {/* CTA Section */}
      <div className="relative mx-6 lg:mx-auto max-w-5xl z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-10 lg:p-14 text-center shadow-2xl"
        >
          {/* CTA gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-4xl font-heading font-bold text-white mb-4">
              Ready to Give Your Child the Best?
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto font-light">
              Join the Salve Regina family and nurture your child with Christian values and academic excellence.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-900/10">
              Start Enrollment
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11">
                <Image
                  src="/images/logo.png"
                  alt="Salve Regina"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-primary">Salve Regina</h4>
                <p className="text-[10px] text-dark/40 tracking-wider uppercase">School of Palawan Inc.</p>
              </div>
            </div>
            <p className="text-dark/50 text-sm leading-relaxed font-light">
              Nurturing dynamic, productive lifelong learners imbued with Christian values
              and relevant skills since 1993.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark/50 hover:text-pink-500 transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-pink-500" />
                </div>
                <div className="text-sm text-dark/50 font-light">
                  <p>(048) 433-5929</p>
                  <p>(048) 717-2482</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-pink-500" />
                </div>
                <span className="text-sm text-dark/50 font-light">salveregina_pal@yahoo.com.ph</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-pink-500" />
                </div>
                <span className="text-sm text-dark/50 font-light">
                  Miraflores Compound, United Homeowners, Bgy. Tiniguiban,
                  Puerto Princesa City, Palawan 5300
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-pink-500" />
                </div>
                <span className="text-sm text-dark/50 font-light">Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5 text-primary">Find Us</h4>
            <div className="rounded-2xl overflow-hidden h-44 border border-blue-100 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Salve+Regina+School+Puerto+Princesa+Palawan&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-200/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark/35 text-sm font-light">
            &copy; {new Date().getFullYear()} Salve Regina School of Palawan Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-dark/30 hover:text-pink-500 transition-colors duration-300">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-dark/30 hover:text-pink-500 transition-colors duration-300">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="text-dark/30 hover:text-pink-500 transition-colors duration-300">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
