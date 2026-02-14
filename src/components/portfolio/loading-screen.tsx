"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const avatar = PlaceHolderImages.find(img => img.id === "avatar-manoranjan");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((v) => (v >= 100 ? 100 : v + 1));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="mb-8 relative">
          <div className="p-1 rounded-full glass border-2 border-primary/20 shadow-neon-teal overflow-hidden w-24 h-24 flex items-center justify-center">
            {avatar && (
              <Image 
                src={avatar.imageUrl}
                alt="Manoranjan Dalai"
                width={96}
                height={96}
                className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            )}
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full"
          />
        </div>

        <div className="text-center space-y-4">
          <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden relative border border-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary shadow-neon-teal"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-primary tracking-[0.5em] uppercase">
              System.init({progress}%)
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest animate-pulse">
              Authenticating Credentials...
            </span>
          </div>
        </div>
      </motion.div>

      {/* Terminal Lines Decor */}
      <div className="absolute bottom-12 left-12 font-mono text-[9px] text-primary/30 space-y-1 hidden md:block">
        <p>INIT_CORE_PORTFOLIO_V2.0</p>
        <p>STATUS: OPTIMIZING_ASSETS</p>
        <p>ENCRYPTION: AES_256_ACTIVE</p>
      </div>
      
      <div className="absolute top-12 right-12 font-mono text-[9px] text-secondary/30 text-right hidden md:block">
        <p>LOC: BANGALORE_IN</p>
        <p>DEV: M.DALAI</p>
        <p>LINK: STABLE</p>
      </div>
    </motion.div>
  );
}
