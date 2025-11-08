"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  Cloud
} from "lucide-react"

export function TechStackSection() {
  const techStack = [
    {
      category: "Languages",
      icon: Code2,
      items: ["JavaScript", "TypeScript", "PHP", "Go"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frameworks",
      icon: Layers,
      items: ["Laravel", "Express.js", "React.js", "Vue.js"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["Docker", "Git", "GitLab CI/CD", "SonarCloud", "Snyk"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Cloud & Methodology",
      icon: Cloud,
      items: ["AWS (EC2, ECS, ECR, RDS, Secret Manager)", "Agile", "Scrum"],
      color: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stack.color}`}>
                    <stack.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                    {stack.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
