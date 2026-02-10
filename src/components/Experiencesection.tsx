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
        "Worked on data-centric web systems supporting internal operations, user management, and payment workflows, with emphasis on structured data handling and reporting readiness.",
      achievements: [
        "Designed and maintained structured databases for users, courses, and payment records",
        "Built internal admin dashboards to monitor enrollments, transactions, and activity trends",
        "Handled data validation, access control, and role-based permissions for operational data",
        "Optimized backend queries and APIs for faster and more reliable data retrieval",
      ],
      tech: ["SQL", "MongoDB", "React", "Node.js", "Stripe API"],
    },
    {
      company: "DreamKnot Creations",
      position: "Business Data Analyst Intern",
      period: "1 Aug 2025 – 31 Jan 2026",
      description:
        "Supported a small manufacturing business by organizing sales data, improving data structure, and generating simple reports to aid business decisions.",
      achievements: [
        "Worked with sales and revenue data exports to clean, structure, and validate records",
        "Created basic monthly reports highlighting revenue trends and product performance",
        "Helped design simple data schemas for storing orders, customers, and sales history",
        "Collaborated directly with business owners to understand data needs and reporting gaps",
      ],
      tech: ["Excel", "Power BI", "SQL", "Python (Basics)"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0b0c10]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Hands-on experience working with real-world systems, business data, and operational reporting.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    className="glass px-3 py-1 rounded-full text-sm text-blue-400 border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
