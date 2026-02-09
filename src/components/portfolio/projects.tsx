
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, Code, Globe, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "MERN Stack", "SaaS", "Data Analytics"];

const projects = [
  {
    title: "CloudVault SaaS",
    category: "SaaS",
    image: "https://picsum.photos/seed/vault/800/600",
    description: "A secure cloud storage platform with enterprise-level encryption and real-time collaboration.",
    tags: ["React", "Node.js", "AWS", "Socket.io"],
    github: "#",
    live: "#"
  },
  {
    title: "AnalyticsPro Dashboard",
    category: "Data Analytics",
    image: "https://picsum.photos/seed/dash/800/600",
    description: "Comprehensive data visualization suite for retail businesses to track KPIs and growth.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "EcoShop MERN",
    category: "MERN Stack",
    image: "https://picsum.photos/seed/shop/800/600",
    description: "A full-featured ecommerce marketplace with Stripe integration and admin dashboard.",
    tags: ["MongoDB", "Express", "React", "Redux"],
    github: "#",
    live: "#"
  },
  {
    title: "NexGen ERP",
    category: "SaaS",
    image: "https://picsum.photos/seed/erp/800/600",
    description: "Enterprise resource planning tool for small manufacturing units to manage inventory.",
    tags: ["React", "Express", "Firebase", "Ant Design"],
    github: "#",
    live: "#"
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Selected <span className="text-accent italic">Works_</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From architecture to deployment, here's a look at some of the complex systems I've built.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                activeCategory === cat 
                ? "bg-primary text-black border-primary shadow-neon-teal" 
                : "bg-white/5 border-white/10 text-muted-foreground hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint="project screenshot"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-primary hover:text-black">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full bg-white/10 border-white/20 hover:bg-primary hover:text-black">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-black">{project.category}</Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary/70 border border-primary/20 px-2 py-0.5 rounded bg-primary/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
