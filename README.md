# 🛍️ E-Commerce Fashion Store

A fully responsive, modern e-commerce front-end built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks required.

---

## 🌟 Features

- **Sticky Navigation Header** — Stays at the top while scrolling; includes a smooth slide-in mobile menu
- **Hero / Banner Section** — Full-width promotional banner with headline text and a product image
- **Feature Category Grid** — 8 clickable category boxes with hover effects and background images
- **Featured Products** — 8 product cards with brand name, star ratings, pricing, and an add-to-cart button
- **New Arrivals** — Separate section showcasing the latest collection
- **Repair Service Banner** — Full-width explore/CTA section with an overlay and button
- **Shop Now Offer Banner** — Promotional banner with a glassmorphism-style button
- **Newsletter Signup** — Email subscription section with styled input + button
- **Responsive Design** — Adapts beautifully across all screen sizes

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `1440px+` | Large / Wide desktops |
| `≤ 1200px` | Standard desktops & laptops |
| `≤ 991px` | Tablets (landscape) |
| `≤ 768px` | Tablets (portrait) — mobile nav activates |
| `≤ 576px` | Large phones |
| `≤ 480px` | Small phones |
| `≤ 375px` | Compact phones (iPhone SE, etc.) |
| `≤ 320px` | Oldest / smallest devices |

---

## 🗂️ Project Structure

```
ecommerce/
├── index.html       # Main HTML page
├── style.css        # All styling + responsive media queries
├── script.js        # Mobile navigation toggle logic
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

No build step needed. Simply open the project in your browser:

1. **Clone or download** this repository
2. Open `index.html` in any modern browser

Or use a local development server (e.g. VS Code **Live Server** extension):

```bash
# With Live Server running on port 5500
http://localhost:5500/
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Use |
|---|---|---|
| `--primary-color` | `#51bdb4` | Buttons, links, accents |
| `--primary-dark` | `#3da8a0` | Button hover states |
| `--secondary-color` | `#ff5252` | Destructive / highlight |
| `--text-dark` | `#0f172a` | Headings, body text |
| `--text-muted` | `#475569` | Subtitles, descriptions |
| `--bg-light` | `#f8fafb` | Section backgrounds |
| `--accent-orange` | `#c97b2f` | Collection labels |
| `--star-gold` | `#f0a500` | Star ratings |

### Typography
- **Font Stack:** `'Segoe UI'`, `system-ui`, `Roboto`, `sans-serif`
- Fluid font sizes scale down gracefully at each breakpoint

### Shadows & Transitions
- Three shadow levels: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- All interactions use `cubic-bezier(0.4, 0, 0.2, 1)` easing for a premium feel

---

## 🧩 Key Components

### Navigation
- Desktop: horizontal nav with animated underline on hover
- Mobile (`≤ 768px`): hamburger `☰` slides a panel in from the right; `✕` closes it

### Product Card
Each `.productbox` contains:
- A background-image product photo (`.pro`)
- Brand name + star rating
- Price display
- Add-to-cart icon button (bottom-right corner)

### Product Grids

| Screen Width | Columns |
|---|---|
| Desktop (> 1200px) | 4 |
| Laptop (≤ 1200px) | 3 |
| Tablet (≤ 991px) | 2 |
| Phone (≤ 375px) | 1 |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (Vanilla) | Mobile navigation toggle |
| Font Awesome 6.5 | Icons (cart, stars, hamburger, close) |

---

## 📄 License

This project is open-source and free to use for personal and educational purposes.
