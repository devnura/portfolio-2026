"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Let&apos;s Work Together</CardTitle>
                <CardDescription className="text-base">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Email me at</p>
                  <a
                    href="mailto:nuranggihermawan@gmail.com"
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    nuranggihermawan@gmail.com
                  </a>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="mailto:nuranggihermawan@gmail.com">
                      <Send className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                </div>

                <div className="pt-2">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a href="/CV_MUHAMMAD_NURANGGI_HERMAWAN_2025.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-center text-sm text-muted-foreground">
                    Based in <span className="font-semibold text-foreground">South Jakarta, Indonesia</span>
                    <br />
                    Available for remote opportunities worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
