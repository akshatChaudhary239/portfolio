"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-black/40 border-b border-cyan-500/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-cyan-400 text-xl sm:text-2xl font-mono font-bold tracking-widest"
        >
          PORTFOLIO
        </motion.h1>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex gap-8 text-cyan-300 font-mono text-sm"
        >
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Experience</li>
          <li className="hover:text-white cursor-pointer transition">Projects</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </motion.ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-cyan-400 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black/90 border-t border-cyan-500/30 backdrop-blur-md z-30 flex flex-col items-center gap-6 py-6 text-cyan-300 font-mono text-lg"
          >
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
