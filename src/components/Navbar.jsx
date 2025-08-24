

"use client";

import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Features", id: "features" },
  { label: "Get APP", id: "app" },
  { label: "Why Us", id: "why-us" },
  { label: "Contacts", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = item.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[100px] sm:w-[300px] md:w-[70%] lg:w-[90%] max-w-4xl"
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 shadow-lg gap-6">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative text-white transition-all duration-300 ${
              activeSection === item.id
                ? "after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-white after:rounded-full after:shadow-[0_0_10px_3px_rgba(255,255,255,0.8)] after:animate-pulse"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {item.label}
          </motion.a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-lg">
        <span className="text-white font-bold text-lg hidden sm:block">FOODIE</span>
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.8 }}
          className="text-white text-2xl"
        >
          {menuOpen ? (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
              <HiX />
            </motion.div>
          ) : (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 0 }}>
              <HiMenu />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden mt-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg flex flex-col gap-4 px-6 py-4"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className={`relative text-white transition-all duration-300 ${
                  activeSection === item.id
                    ? "after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-white after:rounded-full after:shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
