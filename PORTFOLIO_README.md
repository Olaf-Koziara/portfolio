# Apple-Inspired Portfolio

A minimalist, high-performance portfolio website built with Next.js 15+, featuring Apple-like design aesthetics, smooth Framer Motion animations, and full internationalization support (English/Polish).

## ✨ Features

- **🎨 Apple-Inspired Design** - Clean, minimalist interface with generous whitespace and refined typography
- **🌐 Internationalization** - Full i18n support with Polish and English languages using next-intl
- **🌙 Dark Mode** - Beautiful dark theme that respects system preferences with manual toggle
- **✨ Smooth Animations** - Framer Motion powered animations with subtle fade-ins and scroll effects
- **⚡ Performance Optimized** - SSG/SSR, optimized images, minimal bundle size, lazy loading
- **📱 Fully Responsive** - Works perfectly on all devices from mobile to desktop
- **♿ Accessible** - Semantic HTML, proper ARIA labels, keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Main layout with nav & footer
│   │   └── page.tsx       # Home page composition
│   ├── globals.css        # Global styles & theme variables
│   └── layout.tsx         # Root layout
├── components/
│   ├── sections/          # Main page sections
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── LanguageSwitcher.tsx
│   ├── ThemeToggle.tsx
│   └── ThemeProvider.tsx
├── i18n/
│   ├── request.ts         # i18n configuration
│   └── routing.ts         # Locale routing setup
├── types/
│   └── portfolio.ts       # TypeScript interfaces
└── middleware.ts          # next-intl middleware

messages/
├── en.json                # English translations
└── pl.json                # Polish translations
```

## 🎨 Customization

### Update Personal Information

Edit the translation files in `/messages/`:

- `/messages/en.json` - English content
- `/messages/pl.json` - Polish content

Update:

- Your name
- Role/title
- Projects (name, description, stack, URLs)
- Experience timeline
- About section
- Contact information

### Modify Tech Stack

Edit `/src/types/portfolio.ts`:

```typescript
export const techStack: Skill[] = [
  { name: "Your Technology", category: "Category" },
  // Add more...
];
```

### Change Colors

Edit theme variables in `/src/app/globals.css`:

```css
:root {
  --accent: #0071e3; /* Primary accent color */
  --accent-hover: #0077ed; /* Hover state */
  /* ... other colors */
}

.dark {
  --accent: #2997ff; /* Dark mode accent */
  /* ... other dark mode colors */
}
```

### Add New Sections

1. Create a new component in `/src/components/sections/`
2. Import and add it to `/src/app/[locale]/page.tsx`
3. Add translations to both `/messages/en.json` and `/messages/pl.json`

## 🌐 Language Support

The portfolio supports English (default) and Polish. URLs are automatically prefixed:

- `/en` - English version
- `/pl` - Polish version

The middleware automatically detects the user's preferred language.

## 🌙 Dark Mode

Dark mode:

- Respects system preferences on first visit
- Can be toggled manually via the theme toggle button
- Preference is saved to localStorage
- Smooth transitions between themes

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🛠 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Internationalization:** next-intl
- **Font:** System fonts (Apple-like stack)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using Next.js and Apple-inspired design principles**
