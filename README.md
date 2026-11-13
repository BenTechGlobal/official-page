# CodingHamme — Technology Education & Digital Solutions Website

**Brand:** CodingHamme by BenTech Digital Solutions  
**Slogan:** Learn. Practise. Build. Secure. Grow.  
**Tagline:** Empowering Digital Skills. Building Technology Careers.

A premium, fully responsive, animated, frontend-only website built with semantic HTML5, modern CSS3, and vanilla JavaScript (ES6+). No frameworks required. Works offline after download.

---

## Project Structure

```
CodingHamme/
├── index.html              # Homepage (all main sections)
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── courses.html
│   ├── resources.html
│   ├── contact.html
│   └── privacy-policy.html
├── css/
│   └── styles.css          # Complete design system & responsive styles
├── js/
│   ├── config.js           # ★ Central configuration (edit this first)
│   ├── app.js              # Main app logic, form handling, dynamic content
│   ├── animations.js       # Scroll reveals, header, counters, mobile menu
│   ├── slider.js           # Affiliate horizontal slider
│   └── quiz.js             # Interactive practice quiz demo
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
├── README.md
└── LICENSE.txt
```

---

## Quick Start (Local)

1. Download and extract the ZIP.
2. Open the folder in **Visual Studio Code**.
3. Open `index.html` in a browser (double-click or right-click → Open with Live Server if installed).
4. No build step, no npm install, no API keys required for basic use.

Optional: Install the VS Code extension **Live Server** for auto-reload while editing.

---

## Configuration (Most Important File)

Edit **`js/config.js`** to update:

| Setting | Purpose |
|---------|---------|
| `brand.email`, `brand.phone`, `brand.whatsapp` | Contact details |
| `brand.engineerWhatsapp` | Gadget repair engineer WhatsApp |
| `social.*` | Facebook, Instagram, LinkedIn, YouTube, TikTok, Twitter URLs |
| `community.*` | WhatsApp group/channel, Facebook group |
| `forms.*` | Google Forms URLs for registration/enquiries |
| `practiceExamPlatform` | Link to your existing practice exam platform |
| `affiliates[]` | Partner brand names, descriptions, URLs, logo initials |
| `courses.*` | Course lists under cybersecurity / programming / emerging |
| `blogPosts[]` | Sample blog cards (title, category, date, excerpt) |

After changing `config.js`, refresh the browser. Most content updates require no other file edits.

---

## Features Implemented

- **Responsive design** — mobile-first, works on phones, tablets, laptops, desktops
- **Sticky header** with scroll effect and active section highlighting
- **Mobile hamburger menu**
- **Hero section** with entrance animations and animated counters
- **Scroll-triggered reveal animations** (respects `prefers-reduced-motion`)
- **Horizontal affiliate/partner slider** — continuous loop, pause on hover
- **Interactive quiz demo** — 5 questions, scoring, prev/next, restart
- **Contact form** — client-side validation (connect to backend/Google Form for production)
- **Clickable email, telephone, WhatsApp** links
- **Multi-page structure** with consistent navigation
- **Privacy Policy & Terms** page
- **SEO basics** — meta description, Open Graph tags, semantic headings
- **Accessibility** — focus styles, reduced-motion support, semantic HTML, ARIA labels

---

## Customising Content

### Change logo / brand name
- Update the logo markup in each HTML file (`.logo` and `.logo-icon`).
- Or replace with an image: put a logo file in `assets/logos/` and update the `<a class="logo">` content.

### Add / edit affiliate brands
Edit the `affiliates` array in `js/config.js`. Each item needs `name`, `description`, `url`, and optional `logoText`.

### Add courses
Edit `courses.cybersecurity`, `courses.programming`, or `courses.emerging` in `config.js`.

### Replace practice exam platform link
Set `practiceExamPlatform` in `config.js` to the real URL.

### Contact form production setup
The form currently validates on the client and shows a success message. Options:
1. Point the form `action` to a Google Form or Formspree endpoint.
2. Connect to your own backend API.
3. Use the mailto fallback (commented in `app.js`).

---

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from the `CodingHamme` folder (or push via Git).
3. Go to **Settings → Pages**.
4. Under **Source**, select the branch (usually `main`) and folder `/ (root)`.
5. Save. Your site will be live at `https://<username>.github.io/<repo-name>/`.

If the site is in a subfolder, ensure relative paths (already used) work correctly.

---

## Browser Support

Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions).  
Uses CSS custom properties, Flexbox, Grid, Intersection Observer, and ES6+.

---

## Security Notes

- No API keys or secrets in frontend code.
- Contact form is client-side only until you connect a backend.
- External links use `rel="noopener noreferrer"` where appropriate.
- Input is validated before any processing; output is escaped in dynamic rendering.

---

## Quality Assurance Checklist

- [x] All navigation links work
- [x] Mobile menu opens/closes
- [x] Smooth scroll and back-to-top
- [x] Affiliate slider loops and pauses on hover
- [x] Quiz: answer, next/prev, score, restart
- [x] Contact form validates required fields and email format
- [x] Email / tel / WhatsApp links are functional
- [x] Responsive at 320px, 768px, 1024px, 1280px+
- [x] Reduced-motion preferences respected
- [x] No console errors on load

---

## Licence

See `LICENSE.txt`. Content and brand name belong to CodingHamme / BenTech Digital Solutions. Code structure is provided for the project owner to modify and deploy freely.

---

**CodingHamme**  
*Learn. Practise. Build. Secure. Grow.*  
Empowering Digital Skills. Building Technology Careers.
