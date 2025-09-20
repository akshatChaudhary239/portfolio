"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Calendar } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "CyberVision",
      position: "Full Stack Developer Intern",
      period: "2023 - Present",
      description:
        "Developed a comprehensive student course and payment management website using modern technologies.",
      achievements: [
        "Built responsive course management system",
        "Integrated secure payment processing",
        "Implemented user authentication & authorization",
        "Optimized database queries for performance",
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    },
    {
      company: "Freelance Projects",
      position: "Web Developer",
      period: "2022 - Present",
      description:
        "Created custom websites for clients including e-commerce and business solutions.",
      achievements: [
        "Delivered 15+ successful projects",
        "Specialized in carpet company e-commerce platform",
        "Maintained 100% client satisfaction",
        "Implemented SEO best practices",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "WordPress"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development and projects shaping my expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 to-cyan-400/50"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative mb-20 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
              } md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_20px_rgb(0,255,255)] border-4 border-[#0b0c10]"
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
                className="glass-frosted p-8 rounded-xl border border-blue-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgb(0,255,255)] group transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mt-1"
                  >
                    <Building className="w-8 h-8 text-blue-400" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-white">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-3 py-1 rounded-full text-sm text-blue-400 border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
