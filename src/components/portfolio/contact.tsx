
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Linkedin, href: "#", label: "Linkedin" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
                Let's <span className="text-primary italic">Connect_</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-12">
                Interested in collaborating or have a role that fits my profile? 
                Reach out and let's build something extraordinary.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 glass rounded-2xl group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold">manoranjan.dalai@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 glass rounded-2xl group-hover:bg-secondary transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">Phone</p>
                    <p className="text-lg font-bold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-4 glass rounded-2xl group-hover:bg-accent transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bold">Pune, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-4 glass rounded-full hover:scale-110 hover:shadow-neon-teal hover:border-primary transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                    <Input className="bg-white/5 border-white/10 h-12 focus:border-primary focus:ring-primary rounded-xl" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                    <Input className="bg-white/5 border-white/10 h-12 focus:border-primary focus:ring-primary rounded-xl" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input className="bg-white/5 border-white/10 h-12 focus:border-primary focus:ring-primary rounded-xl" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea className="bg-white/5 border-white/10 min-h-[150px] focus:border-primary focus:ring-primary rounded-xl" placeholder="How can I help you?" />
                </div>
                <Button className="w-full h-14 bg-primary text-black font-bold text-lg rounded-xl hover:bg-primary/90 shadow-neon-teal transition-all group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
