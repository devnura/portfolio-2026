"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/devnura", 
      label: "GitHub",
      username: "@devnura"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/nuranggi-hermawan/", 
      label: "LinkedIn",
      username: "nuranggi-hermawan"
    },
    { 
      icon: Mail, 
      href: "mailto:nuranggihermawan@gmail.com", 
      label: "Email",
      username: "nuranggihermawan@gmail.com"
    },
  ]

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">South Jakarta, Indonesia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            Muhammad Nuranggi{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hermawan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-semibold mb-6"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Designing and developing scalable web systems with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <a href="/CV_MUHAMMAD_NURANGGI_HERMAWAN.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-full bg-secondary group-hover:bg-accent transition-colors">
                  <social.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{social.username}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
