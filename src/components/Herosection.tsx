"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroScanner = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.07)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none z-0" />

      {/* Cyan glow aura */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute inset-0 bg-cyan-500/20 blur-3xl"
      />

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-12 py-16 flex-1 relative z-10 gap-10">
        {/* Left Side - Info */}
        <div className="z-10 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-2xl sm:text-4xl tracking-widest">
              PERSON DETECTED
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="text-3xl sm:text-5xl font-extrabold leading-tight"
          >
            <span className="text-cyan-400">Akshat</span>
          </motion.h1>

          {/* Info Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, staggerChildren: 0.3 }}
            className="space-y-3 font-mono text-base sm:text-lg text-cyan-300"
          >
            <motion.p>▸ Profile: Full Stack Developer</motion.p>
            <motion.p>▸ Specialization: AI / ML Engineer</motion.p>
            <motion.p>▸ Status: Available for Work</motion.p>
            <motion.p>▸ Experience: 3+ Years Coding</motion.p>
            <motion.p>▸ Location: India</motion.p>
          </motion.div>

          {/* Futuristic badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            {["React.js", "Next.js", "Node.js", "MongoDB", "TensorFlow", "Docker"].map(
              (skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + i * 0.2 }}
                  className="border border-cyan-400/50 rounded-lg px-3 py-2 text-sm sm:text-base text-cyan-300 font-mono text-center shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                >
                  {skill}
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Right Side - Image with Scanner */}
        <div className="relative flex items-center justify-center mt-6 md:mt-0">
          {/* Glow circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-cyan-500/20 blur-3xl"
          />

          {/* Scanning line */}
          <motion.div
            animate={{ y: ["-3000%", "3000%"] }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
          />

          {/* User Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="relative w-64 sm:w-80 rounded-xl border border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.6)] overflow-hidden"
          >
            <Image
              src="/Akku.jpg"
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
