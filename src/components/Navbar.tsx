"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/teachers", label: "Teachers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Premium top bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary via-primary-light to-primary text-white/90 text-sm py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+63484335929" className="flex items-center gap-2 hover:text-pink-200 transition-colors duration-300">
              <Phone size={13} />
              <span className="font-light">(048) 433-5929</span>
            </a>
            <a href="mailto:salveregina_pal@yahoo.com.ph" className="flex items-center gap-2 hover:text-pink-200 transition-colors duration-300">
              <Mail size={13} />
              <span className="font-light">salveregina_pal@yahoo.com.ph</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin size={13} />
            <span className="font-light">Miraflores Compound, Puerto Princesa City, Palawan</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] border-b border-pink-100/30"
            : "bg-white/70 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Salve Regina School"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-heading font-bold text-primary leading-tight group-hover:text-primary-light transition-colors duration-300">
                Salve Regina
              </h1>
              <p className="text-[11px] text-dark/40 tracking-wider uppercase">School of Palawan Inc.</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2.5 text-sm font-medium text-dark/55 hover:text-primary transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-all duration-400 group-hover:w-3/4" />
              </Link>
            ))}
            <Link href="/contact" className="ml-6 btn-secondary text-sm !py-2.5 !px-6">
              Enroll Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-primary hover:bg-pink-50 rounded-xl transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/98 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-heading font-semibold text-dark/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/contact" className="btn-secondary mt-4">
                  Enroll Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
