"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Siloam Doctor App",
      description: "Integration with hospital systems improving accessibility and workflows for healthcare professionals and patients.",
      technologies: ["React.js", "TypeScript", "REST API", "Healthcare Systems"],
      impact: "Enhanced doctor-patient communication and streamlined medical workflows"
    },
    {
      title: "Web Admin & Analytics Platform",
      description: "Comprehensive data management platform with advanced analytics capabilities and intuitive user interface.",
      technologies: ["Vue.js", "Adonis.js", "React.js", "Tailwind CSS"],
      impact: "Centralized data management with real-time analytics and reporting"
    },
    {
      title: "KCI Card Management System",
      description: "Digitized KMT Cards and integrated with ERP & warehouse systems for seamless card lifecycle management.",
      technologies: ["PHP", "Laravel", "MySQL", "ERP Integration"],
      impact: "Streamlined card issuance and management for transportation services"
    },
    {
      title: "Online Top-up Service for KMT Cards",
      description: "Enabled convenient online top-ups for commuters, eliminating the need for physical reload stations.",
      technologies: ["PHP", "Laravel", "Payment Gateway", "MySQL"],
      impact: "Improved user experience with 24/7 online top-up availability"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Impact:</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
