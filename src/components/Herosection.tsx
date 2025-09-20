"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

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
          className="text-cyan-400 text-2xl font-mono font-bold tracking-widest"
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
          className="md:hidden text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-2/3 h-full bg-black/90 border-l border-cyan-500/30 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-8 text-cyan-300 font-mono text-lg"
          >
            <motion.a whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(false)} className="cursor-pointer">
              About
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(false)} className="cursor-pointer">
              Experience
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(false)} className="cursor-pointer">
              Projects
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(false)} className="cursor-pointer">
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroScanner = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Futuristic Full-section Block Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.07)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none z-0" />

      {/* Cyan glow aura across whole section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute inset-0 bg-cyan-500/20 blur-3xl"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-12 flex-1 relative z-10">
        {/* Left Side - Text Analysis */}
        <div className="z-10 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-5xl tracking-widest">
              PERSON DETECTED
            </span>
          </motion.div>

          {/* Scanning Intro */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight"
          >
            <span className="text-cyan-400"></span> Akshat
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, staggerChildren: 0.5 }}
            className="space-y-2 font-mono text-lg sm:text-xl text-cyan-300"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              ▸ Profile Detected: Full Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              ▸ Specialization: AI / ML Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              ▸ Status: Available for Work
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side - Image Scanner */}
        <div className="relative flex items-center justify-center mt-10 md:mt-0">
          {/* Scanning Line */}
          <motion.div
            animate={{ y: ["-3000%", "3000%"] }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75"
          />

          {/* User Image with Next.js Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative w-72 sm:w-96 rounded-xl border border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.6)] overflow-hidden"
          >
            <Image
              src="/Akku.jpg" // file should be inside /public
              alt="Akshat"
              width={400}
              height={400}
              className="object-cover rounded-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroScanner;
