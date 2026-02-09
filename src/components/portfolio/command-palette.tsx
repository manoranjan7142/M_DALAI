
"use client";

import React, { useEffect, useState } from "react";
import { 
  Command, 
  Terminal, 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Search,
  Zap
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const actions = [
  { icon: Terminal, name: "Home", shortcut: "H", href: "#top" },
  { icon: User, name: "About Me", shortcut: "A", href: "#about" },
  { icon: Zap, name: "Skills", shortcut: "S", href: "#skills" },
  { icon: Code, name: "Projects", shortcut: "P", href: "#projects" },
  { icon: Briefcase, name: "Experience", shortcut: "E", href: "#experience" },
  { icon: Mail, name: "Contact", shortcut: "C", href: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-0 bg-black/80 backdrop-blur-2xl border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center gap-3 p-6 border-b border-white/5">
          <Search className="w-6 h-6 text-muted-foreground" />
          <input 
            autoFocus
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-lg placeholder:text-muted-foreground"
          />
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase">
            Esc
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Quick Actions</p>
          {actions.map((action) => (
            <a
              key={action.name}
              href={action.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <action.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">{action.name}</span>
              </div>
              <div className="text-[10px] font-bold px-2 py-0.5 rounded border border-white/10 text-muted-foreground uppercase">
                {action.shortcut}
              </div>
            </a>
          ))}
        </div>

        <div className="p-4 border-t border-white/5 bg-white/[0.02]">
          <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <span>Navigating: Manoranjan's Portfolio</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Status: Live
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
