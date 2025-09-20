"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com", name: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/in/johndoe", name: "LinkedIn" },
    { icon: Github, url: "https://github.com/johndoe", name: "Github" },
    { icon: Mail, url: "mailto:john.doe@email.com", name: "Email" },
  ];

  return (
    <footer className="relative bg-dark-surface text-white py-16 overflow-hidden">
      {/* Background glow circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-64 h-64 border border-electric-blue/20 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-48 h-48 border border-neon-cyan/20 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">John Doe</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting futuristic web applications and AI-powered solutions. Stay connected and explore the digital frontier with me.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 gradient-text">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-cyber-blue transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyber-blue transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-cyber-blue transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-cyber-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 gradient-text">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyber-blue to-electric-purple hover:glow-blue transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-electric-blue/30 pt-6 text-center text-muted-foreground">
          <p>© 2024 John Doe. All rights reserved. Crafted with futuristic tech and passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
