"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  LayoutDashboard,
  Code2,
  X,
  Sparkles,
} from "lucide-react";

type Category = "data" | "admin" | "web" | null;

const categories = [
  {
    id: "admin",
    title: "Admin Dashboards & Systems",
    description:
      "Advanced internal tools, decision systems, and data-driven platforms like Style.AI.",
    icon: LayoutDashboard,
  },
  {
    id: "data",
    title: "Data & Analytics",
    description:
      "Power BI dashboards, Excel decision systems, and SQL-based analysis for business insights.",
    icon: Database,
  },
  {
    id: "web",
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications including e-commerce platforms and client systems.",
    icon: Code2,
  },
];

const projects = [
  // ================= ADMIN / FLAGSHIP =================
  {
    title: "Style.AI — Data-Driven Recommendation System",
    description:
      "A scalable, data-driven recommendation and dashboard system built with structured data models and ML-ready architecture.",
    tech: ["SQL", "Data Modeling", "React", "Supabase"],
    image: "/styleai.jpg",
    link: "https://style-ai-smoky.vercel.app",
    type: "admin",
  },
  {
    title: "Recycling Production Line Manager Selection System",
    description:
      "Decision-support system using weighted criteria, structured scoring, and analytical logic to rank candidates.",
    tech: ["Excel", "Decision Modeling", "Data Analysis"],
    image: "/recycling-dashboard.jpg",
    link: "#", // add after deployment
    type: "admin",
  },

  // ================= DATA =================
  {
    title: "Sales & Inventory Dashboard",
    description:
      "Power BI dashboard tracking sales trends, inventory health, and KPIs to support data-driven decisions.",
    tech: ["Power BI", "SQL", "Business Metrics"],
    image: "/powerbi-dashboard.jpg",
    link: "#",
    type: "data",
  },

  // ================= WEB =================
  {
    title: "Student Course & Payment Management System",
    description:
      "Web-based platform with structured databases for managing enrollments, payments, and operational data.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/thecybervision.jpg",
    link: "https://cybervision-rajputsundrams-projects.vercel.app",
    type: "web",
  },
  {
    title: "Business E-commerce Platform",
    description:
      "E-commerce website with inventory handling, order tracking, and backend data management.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    image: "/dreamknot.jpg",
    link: "https://dreamknotcreations.com",
    type: "web",
  },
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(null);

  return (
    <section className="py-24 px-6 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-7xl md:text-8xl font-mono mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-mono">
            A curated selection of data-driven systems, dashboards, and full-stack
            applications solving real business problems.
          </p>
          <p className="text-3xl mt-16 font-bold text-muted-foreground max-w-3xl mx-auto uppercase font-mono">
 select the niche you wanna see projects of - 
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveCategory(cat.id as Category)}
                className="cursor-pointer glass-frosted p-8 rounded-xl border border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground">{cat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* EXPANDED PROJECT VIEW */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="glass-frosted p-10 rounded-xl border border-cyan-400/40 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-6 right-6 text-cyan-400 hover:text-white transition"
              >
                <X size={28} />
              </button>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.type === activeCategory)
                  .map((project) => (
                    <motion.div
                      key={project.title}
                      whileHover={{ y: -6 }}
                      className="rounded-xl overflow-hidden border border-blue-400/20 hover:border-cyan-400 transition-all duration-300"
                    >
                      <Link href={project.link} target="_blank">
                        <div className="h-44 relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-lg font-bold text-white">
                              {project.title}
                            </h4>
                            <Sparkles className="w-5 h-5 text-cyan-400 animate-float" />
                          </div>

                          <p className="text-sm text-muted-foreground mb-4">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2 py-1 border border-cyan-400/30 rounded text-cyan-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
