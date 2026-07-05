# Salve Regina School of Palawan Inc. — Official Website

A modern, animated school website built with Next.js, Tailwind CSS, and Framer Motion. Redesigned from a legacy HTML/Bootstrap site into a luxurious, responsive web experience with smooth animations and a pink & blue color theme.

---

## About the School

**Salve Regina School of Palawan Inc. (SRSI)** is a private educational institution located in Puerto Princesa City, Palawan, Philippines. Founded in 1993 as "Mary Mediatrix Child Formation Center" with just 10 students, the school has grown to serve 500+ students with 24+ dedicated teachers offering SPED, Kindergarten, and Grades 1-10 programs.

**Core Values (SALVE):**
- **S**pirituality
- **A**daptability
- **L**eadership
- **V**irtue
- **E**xcellence

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework with App Router, SSG |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero section, features, classes preview, core values, testimonials, news |
| `/about` | Mission, vision, core values (SALVE), animated history timeline |
| `/classes` | All programs (SPED, K1, K2, Grades 1-10) with details |
| `/teachers` | Faculty directory with profile cards |
| `/events` | School events with status badges (ongoing, upcoming, past) |
| `/blog` | News & announcements grid |
| `/contact` | Contact form, info cards, embedded Google Map |

---

## Design Features

- **Glass-morphism cards** with backdrop blur effects
- **Gradient text** and gradient accent headers
- **Framer Motion animations** — fade, slide, zoom, spring hover effects
- **Scroll-triggered reveals** on all sections
- **Floating background orbs** with CSS keyframe animations
- **Responsive mobile menu** with staggered animation
- **Sticky navbar** with scroll-aware transparency
- **Pink & Blue color theme** matching the school's identity
- **Playfair Display + Inter** font pairing for a premium feel

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/salve-regina-website.git
cd salve-regina-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Serve the production build
npm run start
```

---

## Project Structure

```
salve-regina-new/
├── public/
│   ├── images/          # School logo and static images
│   └── favicon.png      # Browser favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout (navbar + footer)
│   │   ├── page.tsx     # Homepage
│   │   ├── globals.css  # Global styles & theme variables
│   │   ├── about/       # About page
│   │   ├── classes/     # Classes page
│   │   ├── teachers/    # Teachers page
│   │   ├── events/      # Events page
│   │   ├── blog/        # News page
│   │   └── contact/     # Contact page
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav with mobile menu
│   │   ├── Footer.tsx           # Footer with CTA banner
│   │   ├── HeroSection.tsx      # Homepage hero
│   │   ├── AboutSection.tsx     # Features grid
│   │   ├── ClassesSection.tsx   # Classes carousel preview
│   │   ├── CoreValuesSection.tsx # SALVE values display
│   │   ├── TestimonialsSection.tsx # Testimonial cards
│   │   └── NewsSection.tsx      # Latest news preview
│   └── lib/
│       └── utils.ts     # Utility functions (cn helper)
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS with Tailwind
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies & scripts
```

---

## Customization

### Changing Colors

Edit the theme variables in `src/app/globals.css`:

```css
@theme {
  --color-primary: #2563eb;       /* Blue — main brand color */
  --color-primary-light: #3b82f6; /* Lighter blue */
  --color-secondary: #ec4899;     /* Pink — accent color */
  --color-secondary-light: #f472b6;
  --color-cream: #fdf2f8;         /* Background tint */
}
```

### Adding Images

Place images in `public/images/` and reference them as `/images/filename.ext` in components.

### Updating Content

All page content (school info, teacher names, events, blog posts) is stored directly in the page components under `src/app/`. Edit the data arrays at the top of each file.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint for code quality |

---

## Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended) — `vercel deploy`
- **Netlify** — supports Next.js via adapter
- **Docker** — use the Next.js standalone output
- **Static export** — add `output: 'export'` to `next.config.ts` for static hosting

---

## Contact Information

- **Phone:** (048) 433-5929 / (048) 717-2482
- **Email:** salveregina_pal@yahoo.com.ph
- **Address:** Miraflores Compound, United Homeowners, Bgy. Tiniguiban, Puerto Princesa City, Palawan 5300

---

## License

This project is proprietary to Salve Regina School of Palawan Inc.
