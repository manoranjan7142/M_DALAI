
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  Server, 
  Layout, 
  Code, 
  ShieldCheck, 
  BarChart4,
  Zap,
  Globe
} from "lucide-react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from "recharts";

const skillData = [
  { subject: 'React.js', A: 95, fullMark: 100 },
  { subject: 'Node.js', A: 85, fullMark: 100 },
  { subject: 'MongoDB', A: 80, fullMark: 100 },
  { subject: 'Express', A: 90, fullMark: 100 },
  { subject: 'Data Analytics', A: 75, fullMark: 100 },
  { subject: 'Tech Support', A: 85, fullMark: 100 },
];

const techCards = [
  { 
    name: "MongoDB", 
    level: "Advanced", 
    icon: Database, 
    color: "text-[#47A248]",
    description: "NoSQL database management & optimization."
  },
  { 
    name: "Express.js", 
    level: "Intermediate", 
    icon: Server, 
    color: "text-[#ffffff]",
    description: "Middleware and API architecture expert."
  },
  { 
    name: "React.js", 
    level: "Expert", 
    icon: Layout, 
    color: "text-primary",
    description: "Dynamic frontend systems & hooks pattern."
  },
  { 
    name: "Node.js", 
    level: "Advanced", 
    icon: Code, 
    color: "text-[#339933]",
    description: "Server-side logic and high performance."
  },
  { 
    name: "Data Analytics", 
    level: "Professional", 
    icon: BarChart4, 
    color: "text-secondary",
    description: "Excel, SQL, & visualization tools."
  },
  { 
    name: "Tech Support", 
    level: "Specialist", 
    icon: ShieldCheck, 
    color: "text-accent",
    description: "1+ year experience at Startek solving bugs."
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              MERN Stack & <br /> <span className="text-secondary italic">Beyond_</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground font-light text-lg">
            Mastering the full lifecycle of web applications with modern architecture and data-driven insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Radar Chart Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass rounded-3xl p-8 flex items-center justify-center min-h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#00FFD1"
                  fill="#00FFD1"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill Cards Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {techCards.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 glass rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${tech.color}`}>
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-1 rounded">
                    {tech.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
