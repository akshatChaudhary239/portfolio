"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Calendar } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "The Cyber Vision",
      position: "Data-Oriented Full Stack Developer Intern",
      period: "1 Jan 2025 – 1 Apr 2025",
      description:
        "Worked on data-centric web systems supporting internal operations, user management, and payment workflows with a focus on structured data handling.",
      achievements: [
        "Designed and maintained structured databases for users, courses, and payment records",
        "Built internal admin dashboards to monitor enrollments, transactions, and activity trends",
        "Implemented data validation and role-based access control for operational data",
        "Optimized backend queries and APIs for faster and more reliable data retrieval",
      ],
      tech: ["SQL", "MongoDB", "React", "Node.js", "Stripe API"],
    },
    {
      company: "DreamKnot Creations",
      position: "Business Data Analyst Intern",
      period: "1 Aug 2025 – 31 Jan 2026",
      description:
        "Supported a small manufacturing business by organizing sales data, improving data structure, and generating simple reports to assist business decisions.",
      achievements: [
        "Worked with sales and revenue data exports to clean, structure, and validate records",
        "Prepared basic monthly reports highlighting revenue trends and product performance",
        "Designed simple schemas for storing orders, customers, and sales history",
        "Collaborated with business owners to understand reporting needs and data gaps",
      ],
      tech: ["Excel", "Power BI", "SQL", "Python (Basics)"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Experience working with real-world systems, structured data, and business reporting.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 to-cyan-400/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative mb-20 w-full md:w-1/2 pl-12"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_20px_rgb(0,255,255)] border-4 border-[#0b0c10]"
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-frosted p-8 rounded-xl border border-blue-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgb(0,255,255)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Building className="w-8 h-8 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-400">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-white">
                    Key Contributions:
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-3 py-2 rounded-full text-sm text-blue-400 border border-blue-400/30"
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
