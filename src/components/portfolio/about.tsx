
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Users, Code2, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Experience", value: "1+", icon: Briefcase, color: "text-primary" },
  { label: "Projects", value: "15+", icon: Code2, color: "text-secondary" },
  { label: "Clients", value: "10+", icon: Users, color: "text-accent" },
  { label: "Skills", value: "20+", icon: Award, color: "text-primary" },
];

const timeline = [
  {
    year: "Present",
    title: "Startek",
    role: "Current Professional Role",
    description: "Contributing technical expertise in a fast-paced corporate environment for over a year.",
    icon: Briefcase,
    color: "bg-primary",
  },
  {
    year: "2023",
    title: "NULLCLASS",
    role: "Ex-Intern",
    description: "Intensive training and hands-on experience with MERN stack development projects.",
    icon: Award,
    color: "bg-secondary",
  },
  {
    year: "2023",
    title: "Parul University",
    role: "Ex-Graduate (MCA)",
    description: "Advanced Master's degree in Computer Applications with a focus on core software engineering principles.",
    icon: GraduationCap,
    color: "bg-accent",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
              My <span className="text-primary italic">Story_</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
              I am a driven MERN stack developer with a passion for building scalable, 
              high-performance web applications. My journey started at Parul University, 
              sharpened during my internship at NULLCLASS, and is currently thriving at Startek. 
              I blend technical rigor with a data-driven mindset to solve complex problems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => (
                <Card key={idx} className="glass border-white/5 hover:border-white/10 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <m.icon className={`w-8 h-8 mb-4 ${m.color}`} />
                    <span className="text-3xl font-bold text-white mb-1">{m.value}</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest">{m.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Timeline */}
          <div className="relative pl-8 border-l border-white/10 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Connector Dot */}
                <div className={`absolute -left-[45px] top-0 w-8 h-8 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-background`}>
                  <item.icon className="w-4 h-4 text-black" />
                </div>
                
                <div className="glass p-6 rounded-2xl border border-white/5">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-secondary font-medium mb-4">{item.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
