import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Nuranggi Hermawan | Software Engineer",
  description: "Software Engineer specializing in web development, REST API development, and 3rd party integrations. Experienced with Laravel, React, Vue.js, and modern web technologies.",
  keywords: ["Software Engineer", "Web Developer", "Full Stack Developer", "React", "Laravel", "TypeScript", "JavaScript", "Muhammad Nuranggi Hermawan"],
  authors: [{ name: "Muhammad Nuranggi Hermawan" }],
  openGraph: {
    title: "Muhammad Nuranggi Hermawan | Software Engineer",
    description: "Software Engineer specializing in web development, REST API development, and 3rd party integrations.",
    type: "website",
    locale: "en_US",
    url: "https://nuranggihermawan.com",
    siteName: "Muhammad Nuranggi Hermawan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nuranggi Hermawan | Software Engineer",
    description: "Software Engineer specializing in web development and modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
