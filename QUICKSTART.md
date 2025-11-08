# Quick Start Guide

## 🚀 Getting Started

Your portfolio website is ready! Follow these simple steps:

### 1. Start the Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### 2. View Your Portfolio

Open your browser and navigate to http://localhost:3000 to see your portfolio with:

- ✅ Responsive navigation with theme toggle
- ✅ Hero section with your name and social links
- ✅ About section with professional summary
- ✅ Tech stack organized by categories
- ✅ Featured projects showcase
- ✅ Work experience timeline
- ✅ Education details
- ✅ Certifications
- ✅ Contact section
- ✅ Footer with social links

### 3. Test Features

**Theme Toggle:**
- Click the sun/moon icon in the navbar or footer
- Switch between light and dark modes
- Theme preference is saved automatically

**Responsive Design:**
- Resize your browser window
- Test on mobile, tablet, and desktop sizes
- Mobile menu appears on small screens

**Navigation:**
- Click navbar links to scroll to sections
- Smooth scroll animations included

### 4. Customize Content

Edit these files to update your information:

**Personal Info:**
- `components/sections/hero-section.tsx` - Update name, location, social links
- `components/sections/about-section.tsx` - Modify your bio
- `components/sections/contact-section.tsx` - Change email address

**Professional Content:**
- `components/sections/tech-stack-section.tsx` - Add/remove technologies
- `components/sections/projects-section.tsx` - Update project details
- `components/sections/experience-section.tsx` - Modify work history
- `components/sections/education-section.tsx` - Change education info
- `components/sections/certifications-section.tsx` - Add/remove certificates

**Branding:**
- `components/resizable-navbar.tsx` - Update logo (MNH)
- `app/layout.tsx` - Modify SEO metadata
- `components/footer.tsx` - Update copyright year

### 5. Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

### 6. Deploy

**Option 1: Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository on vercel.com
3. Deploy automatically

**Option 2: Other Platforms**
- Build the project (`npm run build`)
- Deploy the `.next` folder to any Node.js hosting

## 📱 Testing Checklist

- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px - 1024px)
- [ ] Mobile view (320px - 767px)
- [ ] Light mode theme
- [ ] Dark mode theme
- [ ] Navigation links work
- [ ] Social links open correctly
- [ ] Mobile menu functions
- [ ] Animations are smooth
- [ ] All sections display properly

## 🎨 Color Customization

Edit `app/globals.css` to change colors:

```css
:root {
  --primary: 0 0% 9%;        /* Main brand color */
  --secondary: 0 0% 96.1%;   /* Secondary color */
  --accent: 0 0% 96.1%;      /* Accent color */
  /* ... more colors */
}
```

## 🔧 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm run dev
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

## 🎉 You're All Set!

Your portfolio is live at http://localhost:3000

Start customizing and make it uniquely yours!
