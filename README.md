# Muhammad Nuranggi Hermawan - Portfolio Website

A modern, fully responsive personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌗 **Dark/Light Mode** with next-themes
- ✨ **Smooth Animations** using Framer Motion
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- ♿ **Accessible** with semantic HTML
- 🎯 **SEO Optimized** with meta tags and Open Graph support
- 🧩 **shadcn/ui** components
- 🎭 **Resizable Navbar** inspired by Aceternity UI

## 📋 Sections

- **Hero** - Introduction with name, title, and social links
- **About** - Professional summary
- **Tech Stack** - Technologies and tools organized by category
- **Projects** - Featured project showcases
- **Experience** - Work history timeline
- **Education** - Academic background
- **Certifications** - Professional certifications
- **Contact** - Contact information and email link
- **Footer** - Copyright and social links

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4

### Libraries
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Theme Management:** next-themes
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🔨 Build for Production

### Local Build
```bash
# Build the application
npm run build

# Start the production server
npm start
```

### Docker Deployment 🐳

**Quick Start:**
```bash
# Build and start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

**Manual Docker Build:**
```bash
# Build image
docker build -t portfolio-nuranggi .

# Run container
docker run -d -p 3000:3000 --name portfolio portfolio-nuranggi
```

📖 **[Full Docker Deployment Guide](DOCKER-DEPLOYMENT.md)**

## 📁 Project Structure

```
portfolio-2026/
├── app/
│   ├── layout.tsx          # Root layout with metadata and theme provider
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── tech-stack-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── education-section.tsx
│   │   ├── certifications-section.tsx
│   │   └── contact-section.tsx
│   ├── resizable-navbar.tsx
│   ├── theme-provider.tsx
│   └── footer.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/                 # Static assets
├── components.json         # shadcn/ui configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit the content in each section component:
- `components/sections/hero-section.tsx` - Name, title, location, social links
- `components/sections/about-section.tsx` - Professional summary
- `components/sections/tech-stack-section.tsx` - Technologies and skills
- `components/sections/projects-section.tsx` - Project details
- `components/sections/experience-section.tsx` - Work history
- `components/sections/education-section.tsx` - Educational background
- `components/sections/certifications-section.tsx` - Certifications
- `components/sections/contact-section.tsx` - Contact information

### Modify Colors and Theme

Edit `app/globals.css` to customize the color scheme:
- Light mode colors in `:root`
- Dark mode colors in `.dark`

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy automatically

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

© 2025 Muhammad Nuranggi Hermawan. All rights reserved.

## 🔗 Links

- **GitHub:** [github.com/devnura](https://github.com/devnura)
- **LinkedIn:** [linkedin.com/in/nuranggi-hermawan](https://linkedin.com/in/nuranggi-hermawan/)
- **Email:** nuranggihermawan@gmail.com

---

Built with ❤️ using Next.js and modern web technologies.
