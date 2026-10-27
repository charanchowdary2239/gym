# ⚡ IronPulse Fitness — Premium Gym Demo Website
**Demonstration Website Crafted for NRK Digitals Portfolio**

---

## 📌 Project Overview
**IronPulse Fitness** is a high-performance, fully responsive demonstration website created for **NRK Digitals**' web design and development business portfolio. It showcases a modern, energetic fitness brand aesthetic utilizing a **black, orange, and white** color scheme, bold typography, smooth scrolling interactions, and clean code architecture.

> **Important Note:** This website is a fictional demonstration model for portfolio showcasing. All facility details, trainer profiles, customer testimonials, prices, and contact information are illustrative placeholders and not genuine business records.

---

## 🎨 Design & Aesthetic Highlights
- **Color System:**
  - Obsidian Black (`#080808` / `#121212`) for depth and high-end contrast.
  - Kinetic Orange (`#ff5e14` / `#ff7733`) for high energy, CTAs, and active states.
  - Crisp White (`#ffffff` / `#e2e2e5`) for clean, readable typography adhering to WCAG AA contrast standards.
- **Typography:**
  - Headings: `Oswald` (Google Fonts) — strong, athletic, uppercase punch.
  - Body: `Plus Jakarta Sans` (Google Fonts) — clean, modern, ultra-legible.
- **Animations & Interactivity:**
  - Sticky glassmorphic navbar with active scrollspy indicator.
  - Smooth mobile slide-out drawer with backdrop blur.
  - Interactive pricing cards with autofill hooks into the enquiry form.
  - Floating WhatsApp badge with pulsing animation.
  - Responsive interactive demo enquiry modal.

---

## 📂 Project Structure & Files to Upload

```text
gym demo/
├── index.html        # Complete semantic HTML5 structure with all 10 required sections
├── style.css         # Modern, modular CSS design system with responsive media queries
├── script.js         # Vanilla JavaScript (smooth scrolling, drawer, forms, config)
└── README.md         # Deployment, customization, and local preview instructions
```

### 🚀 Exactly Which Files to Upload to Hostinger
When deploying to **Hostinger Shared Hosting** (or any other hosting provider like cPanel, Bluehost, Netlify, Vercel, or GitHub Pages), you only need to upload the following **3 core production files**:

1. `index.html`
2. `style.css`
3. `script.js`

*(You do not need to upload `README.md` to public hosting, though keeping it in your git repository is recommended).*

---

## 🌐 How to Preview the Site Locally

### Method 1: Direct Double-Click (Zero Setup)
Because this is a pure static website with zero dependencies:
1. Open your File Explorer and navigate to `c:\Users\charan\Downloads\gym demo`.
2. Double-click `index.html` to open it immediately in Google Chrome, Microsoft Edge, Brave, or Firefox.
3. Everything (all styles, scripts, images, and fonts) works out-of-the-box.

### Method 2: VS Code Live Server Extension
1. Open the folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will launch at `http://127.0.0.1:5500/index.html` with instant live-reloading.

### Method 3: Python Built-in Local Server
Open PowerShell in the project directory and run:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📤 Step-by-Step Guide: Deploying to Hostinger Shared Hosting

1. **Log in to Hostinger hPanel:**
   - Go to [hostinger.com](https://hostinger.com) and log in to your account.
2. **Open the File Manager:**
   - In hPanel, navigate to **Websites** &rarr; click **Manage** next to your domain.
   - Under the **Files** section, click **File Manager** (or access via FTP like FileZilla).
3. **Navigate to `public_html`:**
   - Double-click the `public_html` directory.
   - If there is a default Hostinger `default.php` file, delete or rename it.
4. **Upload the Files:**
   - Click the **Upload** icon (top right) &rarr; select **Files**.
   - Select and upload:
     - `index.html`
     - `style.css`
     - `script.js`
   - *Ensure `index.html` resides directly inside `public_html`, not nested inside a subfolder, so it loads at `https://yourdomain.com/`.*
5. **Verify SSL & Cache:**
   - Ensure your free Hostinger Let's Encrypt SSL is activated under **Security &rarr; SSL**.
   - Clear your browser cache and visit your website URL.

---

## ⚙️ How to Customize Placeholders for Real Clients

### 1. Replacing the WhatsApp Number & Default Message
Open `script.js` and edit the `CONFIG` object at lines 16–28:
```javascript
const CONFIG = {
  gymName: 'IronPulse Fitness',
  agencyName: 'NRK Digitals',
  
  // Enter Country Code + 10-Digit Mobile Number (e.g. '919876543210' for India)
  whatsappNumber: '919876543210', 
  
  whatsappDefaultMessage: 'Hi IronPulse Fitness, I would like to enquire about your gym memberships!',
  phoneDisplay: '+91 98765 43210',
  emailDisplay: 'contact@ironpulse-demo.com'
};
```
Also update the `href` in `index.html` on the floating button (around line 430) and the form alternative (around line 400).

### 2. Updating Membership Pricing
Open `index.html` and locate the `<section id="memberships">` section:
- **Monthly:** ₹1,500
- **Quarterly:** ₹4,000
- **Half-Yearly:** ₹7,000
- **Yearly:** ₹12,000
Change the amounts and feature bullet points to match your client's exact packages.

### 3. Replacing Sample Address, Hours & Contact Details
Locate `<section id="contact">` in `index.html` to update:
- Street address & city
- Operating hours
- Real phone numbers and email addresses
- Google Maps embed (replace `.demo-map-card` with an `<iframe>` from Google Maps Share/Embed).

### 4. Updating Agency Attribution
If you want to customize your agency links or branding:
- Search for `NRK Digitals` in `index.html` (found in the top announcement bar, form disclaimer banner, and footer agency spotlight).
- Add your agency website link to the `<a>` tag:
  ```html
  <a href="https://youragencywebsite.com" target="_blank" class="agency-cta-btn">
    Need a website for your fitness business? Contact NRK Digitals
  </a>
  ```

---

## ✅ Checklist of Requirements Fulfilled

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Color Scheme** | Deep Obsidian Black, Vivid Kinetic Orange, Crisp White | ✅ Pass |
| **Sticky Navigation** | `IRONPULSE` logo, Home, About, Facilities, Programs, Trainers, Memberships, Contact | ✅ Pass |
| **Mobile Drawer** | Slide-out menu with backdrop overlay, accessible escape/close controls | ✅ Pass |
| **Hero Section** | Bold headline, fitness background image, "Join Now" CTA, key metrics ribbon | ✅ Pass |
| **About Section** | Training philosophy, 4 core biomechanical & community pillars, visual card | ✅ Pass |
| **Facilities Cards** | 6 equipment cards: Free Weights, Cardio, Turf, Boxing, Recovery, Lockers | ✅ Pass |
| **Trainer Profiles** | 4 fictional trainers (Marcus Vance, Elena Rodriguez, Devon Cole, Maya Sharma) with sample tags | ✅ Pass |
| **Membership Pricing** | Monthly: ₹1,500, Quarterly: ₹4,000, Half-Yearly: ₹7,000, Yearly: ₹12,000 (Sample labels included) | ✅ Pass |
| **Testimonials** | Clearly labelled illustrative sample stories & satisfaction ratings | ✅ Pass |
| **Contact Section** | Placeholder address, opening hours, phone placeholder, interactive validated form | ✅ Pass |
| **Floating WhatsApp** | Floating bottom-right button with pulse animation and centralized config placeholder number | ✅ Pass |
| **NRK Digitals Credit** | Prominent "Website demo by NRK Digitals" top bar, spotlight banner & footer credit | ✅ Pass |
| **Technical Stack** | Pure HTML5, CSS3, vanilla JavaScript. Zero frameworks, zero external node dependencies | ✅ Pass |
| **Hostinger Ready** | Static structure ready to drag & drop into `public_html` | ✅ Pass |

---

© 2026 **IronPulse Fitness Demo** — Designed & Developed for **NRK Digitals**.
