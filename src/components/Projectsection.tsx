"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Student Course Management",
      description:
        "A comprehensive platform for managing student courses and payments with modern UI/UX.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/thecybervision.jpg",
      category: "Web Application",
      status: "Live",
      link: "https://cybervision-rajputsundrams-projects.vercel.app ", // ✅ Add your link here
    },
    
    {
      title: "Carpet Company Website",
      description:
        "E-commerce platform for a carpet company with inventory management and online ordering.",
      tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image: "/dreamknot.jpg",
      category: "E-commerce",
      status: "Live",
      link: "https://dreamknotcreations.com",
    },
    
    {
      title: "Digital agency",
      description:
        "Collaborative project management platform with real-time updates and team features.",
      tech: ["Vue.js", "Express", "Socket.io", "Redis"],
      image: "/bytebloom-1.jpg",
      category: "Productivity",
      status: "Live",
      link: "https://bytebloom3-asoo.vercel.app",
    },
    {
      title: "Online-book reader",
      description:
        "Data visualization platform for weather patterns using machine learning predictions.",
      tech: ["React", "D3.js", "Python", "AWS"],
      image: "/bookshala.jpg",
      category: "Data Science",
      status: "Live",
      link: "https://bookshala-2.vercel.app ",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 px-6 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl font-mono md:text-8xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed">
            A showcase of my latest work spanning web development, AI/ML, and
            innovative digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glass-frosted rounded-xl overflow-hidden border border-blue-400/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgb(0,255,255)] transition-all duration-300"
            >
              <Link href={project.link} target="_blank">
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/50 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`glass px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Live"
                          ? "text-green-400 border-green-400/30"
                          : project.status === "In Progress"
                          ? "text-yellow-400 border-yellow-400/30"
                          : "text-blue-400 border-blue-400/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass px-3 py-1 rounded-full text-xs text-blue-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <Sparkles className="w-5 h-5 text-cyan-400 animate-float" />
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="glass px-2 py-1 rounded text-xs text-cyan-300 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
