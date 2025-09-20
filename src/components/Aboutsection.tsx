"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Database, Rocket } from "lucide-react";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern tech.",
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Exploring machine learning and AI-driven solutions.",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Designing robust server architectures and APIs.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pushing the boundaries with futuristic tech ideas.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Circuit Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-9xl font-mono font-bold mb-6 gradient-text tracking-wide">
            About Me
          </h2>
          <p className="text-lg font-mono text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a futuristic Full Stack Developer exploring AI/ML possibilities. I
            combine creative design with cutting-edge technology to build scalable,
            intelligent solutions that feel straight out of tomorrow.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid font-mono md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-frosted p-6 rounded-xl border border-cyan-400/30 hover:border-purple-500 hover:shadow-[0_0_20px_rgb(128,0,255)] group transition-all duration-300"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="mb-4 flex justify-center"
                >
                  <Icon className="w-12 h-12 text-cyan-400 group-hover:text-purple-500 transition-colors duration-300" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-white tracking-wide">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
