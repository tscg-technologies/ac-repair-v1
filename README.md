# AC REPAIR & AIR CONDITIONING SERVICES
**TSCG Technologies Portfolio Demonstration**  
*A modern, responsive, performance-optimized air conditioning and HVAC services demonstration website.*

---

## 1. Project Overview

This website serves as a high-fidelity demonstration of how an air-conditioning repair, installation, and maintenance business can present its services to residential and commercial customers.

- **Website Identity:** AC REPAIR & AIR CONDITIONING SERVICES
- **Business Category:** Air Conditioning Repair, Installation, Maintenance & HVAC Services
- **Target Deployment:** Hostinger Static Hosting
- **Portfolio Host:** TSCG Technologies Demonstration Portfolio
- **Status:** Complete 6-Page Demonstration Platform

> **Important Demonstration Notice:**  
> This is a portfolio demonstration website created strictly for showcasing web design and technical layout capabilities. It does not represent an operating business. No actual company names, registrations, certifications, customer testimonials, licenses, or real commercial service claims have been invented.

---

## 2. Strict Technology Restrictions & Compliance

This website adheres to strict pure-web standards:
- **HTML5:** Semantic, accessible markup across all 6 pages.
- **CSS3:** Custom responsive design system with CSS custom properties, grid/flexbox layouts, smooth animations, and `prefers-reduced-motion` compliance.
- **Vanilla JavaScript:** 100% pure native JavaScript with zero external frameworks or libraries.
- **Strictly Prohibited & Excluded:**
  - No React, Next.js, Angular, or Vue
  - No Bootstrap or Tailwind CSS
  - No jQuery, GSAP, or Three.js
  - No WordPress, PHP, MySQL, or Node.js runtimes
  - No build tools, bundlers, or package managers required

The entire website runs directly in any modern web browser and is fully compatible with Hostinger static hosting.

---

## 3. Directory Structure

```text
ac-repair-website/
├── index.html                   # Page 1: Homepage (Hero, 8 Services, Problems Grid, Dual Panels, How It Works)
├── about.html                   # Page 2: About (Approach, Capabilities, Demo Team Profiles)
├── services.html                # Page 3: AC Services (8 Detailed Service Sections + FAQ Accordion)
├── emergency.html               # Page 4: Emergency AC Repair (Urgent Problem Cards, Safety Guide, Request Form)
├── projects.html                # Page 5: Projects (8 Case Studies, Category Filters, Modal / Lightbox)
├── contact.html                 # Page 6: Contact (Demo Info, Interactive Validated Booking Form)
│
├── images/                      # Website images and photography (1376x768 resolution JPEGs & fallbacks)
│
├── assets/
│   ├── css/
│   │   └── style.css            # Master stylesheet with custom properties, responsive breakpoints & animations
│   ├── js/
│   │   └── main.js              # Vanilla JS: Sticky nav, drawer, filters, modals, accordions, form validation
│   └── images/
│       └── placeholders/        # High-fidelity vector SVG & JPG placeholders matching exact target specs
│
├── IMAGE-GENERATION-GUIDE.md    # 26 Copy-ready Google Flow AI prompts for all placeholders
└── README.md                    # Project documentation, local preview & Hostinger deployment guide
```

---

## 4. Key Design & Technical Features

### Color Palette
- **Deep Navy:** `#10243A` (Primary background, header, and contrast surface)
- **Dark Charcoal:** `#172330` (Secondary background, dark card accents)
- **Cooling Blue:** `#2585D5` (Primary call-to-action buttons, active indicators)
- **Ice Cyan:** `#48C7E8` (Accent highlights, glowing badges, logo accents)
- **Pale Blue:** `#EAF5FC` (Soft background section fills, badge containers)
- **White:** `#FFFFFF` (Card surfaces, clean section backgrounds)
- **Cool Grey:** `#F3F6F9` (Light section backgrounds, subtle dividers)
- **Accent Orange:** `#FF9B55` (Emergency cues, safety guidance, high-urgency alerts)

### Navigation & Header
- Original abstract snowflake/airflow SVG emblem with text "AC REPAIR SERVICES".
- Responsive sticky header: Transparent over homepage hero, transitions to solid navy with backdrop blur on scroll.
- Mobile slide-out drawer with accessible keyboard ESC dismiss and backdrop click detection.
- Mobile sticky quick-action bar at the bottom of small screens.
- Demonstration phone link `0000000000` with interactive demo toast alert.

### Interactive Components
- **Projects Filter:** Filter projects by All, Residential AC, Commercial AC, Installation, Maintenance, and Replacement.
- **Accessible Project Modal / Lightbox:** Detailed view of project scope, image, and category with focus trapping and ESC close.
- **FAQ Accordion:** Smooth CSS height transition, ARIA expanded state management.
- **Client-Side Form Validation:** For both the General Contact Form and Emergency Request Form with live error messaging and loading feedback.
- **Demonstration Disclaimers:** Explicit notices confirming no personal information is transmitted or stored.

---

## 5. Local Preview Instructions

You can preview the website immediately without compiling or installing dependencies:

### Method A: Direct File Open
Double click `index.html` or drag it into any web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Method B: Python Local Server (Recommended)
Open a terminal in the project root directory and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Method C: VS Code Live Server
If using Visual Studio Code, right-click `index.html` and select **"Open with Live Server"**.

---

## 6. Hostinger Static Hosting Deployment Guide

The website is pre-configured for static web hosting platforms such as Hostinger Shared Hosting, Cloud Hosting, or Hostinger VPS.

### Step 1: Access Hostinger hPanel
1. Log in to your Hostinger account at [hpanel.hostinger.com](https://hpanel.hostinger.com).
2. Go to **Websites** and click **Manage** on your target domain.

### Step 2: Open File Manager
1. Navigate to **Files** > **File Manager**.
2. Open the `public_html` directory for your domain.
3. If an existing `default.php` or parking page exists in `public_html`, delete or archive it.

### Step 3: Upload Website Files
Upload the entire contents of the project folder directly into `public_html`:
```text
public_html/
├── index.html
├── about.html
├── services.html
├── emergency.html
├── projects.html
├── contact.html
├── images/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── IMAGE-GENERATION-GUIDE.md
└── README.md
```

### Step 4: Verify Live Website
1. Visit your domain in any browser.
2. Verify all six pages navigate smoothly, CSS loads correctly, and interactive forms display demo confirmations.

---

## 7. Placeholder Image System & Google Flow Guide

All image locations feature responsive, high-definition SVG placeholders that render crisply without external image CDNs.

When ready to replace placeholders with real photography:
1. Open `IMAGE-GENERATION-GUIDE.md`.
2. Copy the detailed, copy-ready prompt for each image into **Google Flow** or your preferred image generation platform.
3. Save the resulting photo using the specified target filename into `assets/images/placeholders/`.

---

## 8. Responsible Disclaimers & Ethics

- **Phone Number:** `0000000000` is a placeholder demonstration contact number and is not connected to a live telephone line.
- **Form Submissions:** Forms validate in the browser and do not submit data to any server or database.
- **Refrigerant & Electrical Safety:** The website strictly advises users against dangerous DIY refrigerant handling or electrical tampering, directing all complex service needs to qualified specialists.
- **Guarantees:** No unrealistic percentage energy savings or utility bill reductions are claimed.

---

*Developed for the TSCG Technologies Demonstration Showcase.*
