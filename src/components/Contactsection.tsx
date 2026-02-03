"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_akkuchaudhary",
      handle: "_akkuchaudhary",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/akshat-chaudhary",
      handle: "Akshat chaudhary",
      color: "from-blue-700 to-blue-500",
    },
    {
      name: "Email",
      icon: Mail,
      url: "chaudharyakshat239@gmail.com",
      handle: "Akshat",
      color: "from-cyan-500 to-blue-400",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "+91 9350637421",
      handle: "Akshat",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let&apos;s collaborate and create futuristic, cutting-edge solutions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-strong p-6 rounded-xl neon-border hover:glow-blue group transition-all duration-300 block"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center glow-primary`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyber-blue transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.handle}
                    </p>
                  </div>

                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    className="text-cyber-blue transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:john.doe@email.com"
            className="glass-strong px-8 py-5 rounded-xl text-lg font-semibold neon-border hover:glow-blue flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" /> Send Message
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="+91 9350637421"
            className="glass-strong px-8 py-5 rounded-xl text-lg font-semibold border border-cyber-blue/30 hover:border-cyber-blue hover:glow-blue flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Let&apos;s Connect
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            Crafted with futuristic technology and passion.
          </p>
        </motion.div>
      </div>

      {/* Futuristic Background Effects */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-48 h-48 border border-electric-blue/20 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24 w-40 h-40 border border-neon-cyan/20 rounded-lg pointer-events-none"
      />
    </section>
  );
};

export default ContactSection;
