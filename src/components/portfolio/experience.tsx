
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Startek",
    role: "Process Specialist / Tech Support",
    location: "Pune, India",
    period: "Feb 2024 - Present",
    description: "Handling technical processes, troubleshooting infrastructure issues, and maintaining operational workflows for high-value clients.",
    achievements: ["Consistent top performer", "Resolved 500+ complex technical tickets", "Optimized process workflow"]
  },
  {
    company: "NULLCLASS",
    role: "Full Stack Developer Intern",
    location: "Remote",
    period: "Jun 2023 - Nov 2023",
    description: "Developed and deployed multiple full-stack applications using MERN stack. Focused on clean code and RESTful API architecture.",
    achievements: ["Built 3 live projects", "Improved database queries by 30%", "Mentored junior interns"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
              Professional <br /> <span className="text-primary italic">Timeline_</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A brief overview of my professional path, moving from intensive learning to corporate excellence.
            </p>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Certifications</h4>
              <a 
                href="https://learn.microsoft.com/en-us/users/manoranjandalai-6045/credentials/1fcfa1cb67490fb4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 glass rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <Award className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Microsoft Certified</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">View Credential</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://learn.microsoft.com/en-us/users/manoranjandalai-6045/credentials/1fcfa1cb67490fb4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 glass rounded-xl border border-white/5 hover:border-secondary/30 transition-all group"
              >
                <Award className="w-5 h-5 text-secondary" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Google Skills</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">View Credential</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          <div className="md:w-2/3 space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group glass p-8 rounded-3xl border border-white/5 hover:border-secondary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
