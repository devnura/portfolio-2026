"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <Card className="border-2">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                I am Muhammad Nuranggi Hermawan, proficient at implementing web development 
                and core backend tasks including <span className="text-foreground font-semibold">REST API Development</span>, 
                <span className="text-foreground font-semibold"> 3rd party integrations</span>, and working with various 
                frameworks, operating systems, and programming languages. I am passionate about building 
                scalable, efficient, and user-friendly web applications that solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
