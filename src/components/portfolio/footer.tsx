
"use client";

import React from "react";
import { Terminal, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tighter">
              M.DALAI<span className="text-accent">_</span>
            </span>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium italic">
              "The best way to predict the future is to invent it."
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              © {currentYear} Handcrafted with <Heart className="w-4 h-4 text-accent fill-accent" /> by Manoranjan Dalai
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
              Built with MERN Stack Principles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
