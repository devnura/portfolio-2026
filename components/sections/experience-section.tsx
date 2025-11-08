"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "PT. Bithealth Teknologi Pintar",
      position: "Software Engineer",
      period: "Mar 2023 – Present",
      location: "Remote",
      description: [
        "Designed and maintained healthcare systems with focus on scalability and performance",
        "Integrated Siloam Doctor App with hospital systems, improving accessibility and workflows",
        "Ensured code quality using SonarCloud & Snyk for security and maintainability",
        "Collaborated with cross-functional teams to deliver robust healthcare solutions"
      ]
    },
    {
      company: "PT. Nutech Integrasi (Telkom Group)",
      position: "Web Programmer",
      period: "Mar 2021 – Mar 2023",
      location: "Jakarta, Indonesia",
      description: [
        "Built and maintained web systems for transportation clients including KCI",
        "Developed CMS for KCI card management and online top-up services",
        "Integrated systems with ERP and warehouse management platforms",
        "Implemented payment gateway integrations for online transactions"
      ]
    },
    {
      company: "SMPN 2 Kuningan",
      position: "Web Programmer (Internship)",
      period: "Oct 2019 – Dec 2019",
      location: "Kuningan, Indonesia",
      description: [
        "Developed CBT (Computer-Based Test) Web System using CodeIgniter 4",
        "Designed and implemented MySQL database architecture",
        "Created intuitive user interface for students and administrators"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <div className="md:ml-16 bg-card border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {exp.position}
                        </h3>
                        <p className="text-lg text-muted-foreground font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
