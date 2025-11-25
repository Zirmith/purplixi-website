# Purplixi Launcher Website

A modern, responsive marketing website for the Purplixi Minecraft Launcher.

## 📁 Structure

```
purplixi-website/
├── index.html          # Landing page with hero, features, screenshots, download
├── changelog.html      # Full changelog with version history
├── docs.html           # Complete documentation and guides
├── 404.html           # 404 error page
├── css/
│   ├── main.css       # Main stylesheet with all components
│   └── animations.css # Animation utilities and effects
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Image assets (placeholder for now)
└── assets/            # Additional assets (icons, fonts, etc.)
```

## 🎨 Features

### Landing Page (index.html)
- **Hero Section**: Eye-catching hero with animated gradient orbs
- **Features Grid**: 6 feature cards showcasing launcher capabilities
- **Screenshots Gallery**: Visual preview of the launcher interface
- **Download Section**: Platform-specific download options
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Smooth Animations**: Scroll-triggered reveal animations

### Changelog Page (changelog.html)
- **Timeline Design**: Beautiful vertical timeline for version history
- **Version Markers**: Icon-based markers for each version
- **Latest Badge**: Highlight the most recent version
- **Expandable Changes**: Detailed change list for each version
- **Animated Entrance**: Staggered animations for timeline items

### Documentation Page (docs.html)
- **Sidebar Navigation**: Sticky sidebar with section links
- **Comprehensive Guides**: Installation, setup, features, and advanced usage
- **Code Examples**: Syntax-highlighted code blocks
- **Info/Warning Boxes**: Contextual alerts and tips
- **Tables**: Feature comparison and shortcut reference
- **Step-by-Step Instructions**: Numbered lists for procedures
- **FAQ Section**: Common questions and answers

## 🚀 Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, custom properties
- **Vanilla JavaScript**: No dependencies, lightweight
- **Remix Icons**: Beautiful icon library
- **Google Fonts**: Inter and Space Grotesk fonts

## 🎨 Design System

### Colors
- Primary: `#8b5cf6` (Purple)
- Secondary: `#3b82f6` (Blue)
- Accent: `#ec4899` (Pink)
- Background: Dark theme (`#0a0a0f`, `#13131a`, `#1a1a24`)

### Typography
- Headings: Space Grotesk (800, 700, 600)
- Body: Inter (400, 500, 600)
- Code: Monaco, Menlo (monospace)

### Components
- Buttons: Primary, Outline, Large
- Cards: Feature cards, Platform cards, Screenshot cards
- Forms: Text inputs, Selects
- Navigation: Fixed navbar with scroll effects
- Footer: Multi-column layout with social links

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ✨ Animations

### Page Load
- Hero content: Staggered slide-up animations
- Stats: Counter animation on scroll into view

### Scroll Effects
- Navbar: Background blur and shadow on scroll
- Sections: Reveal animations as they enter viewport
- Parallax: Gradient orbs move at different speeds

### Hover Effects
- Cards: Lift and glow effects
- Buttons: Scale and shadow enhancement
- Links: Underline animation

## 🔧 Customization

### Updating Content

**Features**: Edit the `.features-grid` section in `index.html`
**Changelog**: Add new version entries in `changelog.html`
**Documentation**: Expand sections in `docs.html`

### Styling

All colors and variables are defined in `:root` at the top of `main.css`:
```css
:root {
    --primary: #8b5cf6;
    --bg-primary: #0a0a0f;
    /* etc. */
}
```

### Adding Pages

1. Copy the structure from an existing page
2. Update navigation links in all pages
3. Add page-specific styles if needed

## 🌐 Deployment

### Static Hosting
Upload to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

### Build Steps
No build process required! Pure HTML, CSS, and JavaScript.

### SEO Optimization
- Meta tags included in all pages
- Semantic HTML structure
- Descriptive alt texts (add to images)
- Sitemap (create sitemap.xml)

## 📝 TODO

- [ ] Add real screenshots/images
- [ ] Create favicon and app icons
- [ ] Add meta tags for social sharing (Open Graph, Twitter Cards)
- [ ] Implement proper download links
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Optimize images (compress, WebP format)
- [ ] Add Google Analytics or privacy-friendly alternative
- [ ] Create blog section for news/updates
- [ ] Add search functionality to documentation

## 🔒 Best Practices

- ✅ Semantic HTML5
- ✅ Mobile-first responsive design
- ✅ Accessibility considerations
- ✅ Performance optimized (minimal dependencies)
- ✅ Cross-browser compatible
- ✅ SEO-friendly structure

## 📄 License

Created by MiniMax Agent for the Purplixi Launcher project.

---

## 🎯 Quick Start

1. **Open in Browser**: Simply open `index.html` in any modern browser
2. **Local Server** (optional): 
   ```bash
   python -m http.server 8000
   # Or
   npx serve
   ```
3. **Navigate**: Use the navigation menu to explore all pages

## 🐛 Known Issues

None currently. Report issues via GitHub.

## 🤝 Contributing

Feel free to suggest improvements or submit pull requests!

---

**Made with 💜 for the Minecraft community**
