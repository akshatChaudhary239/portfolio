"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";

type CaseStudy = {
  title: string;
  overview: string;
  problem: string[];
  approach: string[];
  tools: string[];
  images: string[];
  insights: string[];
  github?: string;
};

const caseStudyData: Record<string, CaseStudy> = {

  "sales-inventory-dashboard": {
    title: "Sales & Inventory Dashboard",
    overview:
      "This project focuses on helping small businesses track sales performance, inventory health, and key KPIs using an interactive dashboard.",
    problem: [
      "No centralized view of sales and inventory",
      "Manual tracking using spreadsheets",
      "Difficulty identifying trends and stock issues",
    ],
    approach: [
      "Cleaned and structured raw sales and inventory data",
      "Defined key business KPIs",
      "Built interactive dashboards with filters and drill-downs",
    ],
    tools: ["Power BI", "SQL", "Excel"],
    images: [
      "/powerbi-dashboard.jpg",
      "/powerbi-filters.jpg",
      "/powerbi-trends.jpg",
    ],
    insights: [
      "Identified top-performing products and slow-moving inventory",
      "Highlighted seasonal sales trends",
      "Enabled faster decision-making through visual KPIs",
    ],
    github: "https://github.com/your-username/sales-inventory-dashboard",
  },
};

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);

  const data = caseStudyData[slug];

  if (!data) {
    return <div className="text-white p-10">Case study not found.</div>;
  }

  return (
    <section className="min-h-screen bg-[#0b0c10] px-6 py-20">
      <div className="max-w-5xl mx-auto glass-frosted p-10 rounded-xl border border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,255,0.3)]">
        {/* Back */}
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-white"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {data.title}
        </motion.h1>

        {/* Overview */}
        <p className="text-muted-foreground mb-10 leading-relaxed">
          {data.overview}
        </p>

        {/* Sections */}
        <div className="grid gap-10">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
              Problem
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {data.problem.map((p: string) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
              Approach
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {data.approach.map((a: string) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          {/* Dashboard Images */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              Dashboard Preview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.images.map((img: string) => (
                <div
                  key={img}
                  className="relative h-56 rounded-lg overflow-hidden border border-cyan-400/30"
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
              Key Insights
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {data.insights.map((i: string) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          {/* GitHub */}
          {data.github && (
            <div className="pt-6 border-t border-cyan-400/20">
              <Link
                href={data.github}
                target="_blank"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-white"
              >
                <Github size={18} /> View on GitHub
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
