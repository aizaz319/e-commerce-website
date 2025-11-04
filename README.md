# My Shop – Static E‑commerce Template

A lightweight, deployable storefront with product grid, cart, and checkout via Email or WhatsApp. No backend required.

## Features
- Responsive product grid with search
- Client-side cart with localStorage persistence
- Slide-in cart drawer with quantity controls
- Order submission via:
  - Email (mailto)
  - WhatsApp (wa.me)
- Zero build tools. Pure HTML/CSS/JS.

## Quick start
1. Open `index.html` in a browser to test locally.
2. Update contact targets in `assets/script.js`:
   - `EMAIL_TO = 'orders@example.com'`
   - `WHATSAPP_TO = '15551234567'` (E.164, no `+`)
3. Replace or add products in `assets/script.js` (`products` array).
4. Deploy with any static hosting (see below).

## Deploy options
### GitHub Pages
- Create a new repo and push these files.
- In GitHub, go to Settings → Pages → Branch: `main` (root) → Save.
- Your site will be live at the provided URL.

### Netlify (recommended)
- Drag-and-drop this folder at `https://app.netlify.com/drop`.
- Or connect your Git repo and deploy from `main`.

### Vercel
- Import the repo at `https://vercel.com/new`.
- Framework preset: "Other". Output directory: `/` (root).

## Customization
- Branding: swap `assets/favicon.svg`, change title/brand text in `index.html`.
- Colors/appearance: edit CSS variables in `assets/styles.css` at the top.
- Products: edit the `products` array in `assets/script.js` (id, title, price, image, desc, badge).
- Copy: update the hero/about/contact text in `index.html`.

## How orders work
This template does not take payment. Instead, it generates a pre-filled email or WhatsApp message containing:
- Line items with quantities and prices
- Subtotal
- Customer contact/shipping details (if provided)

You confirm the order, payment, shipping, and taxes off-platform.

### Collecting payments
If you want integrated checkout:
- Stripe Checkout: add a serverless function to create checkout sessions; replace the email/WhatsApp buttons with `stripe.redirectToCheckout(...)`.
- Payment links: replace the buttons with direct links to Stripe/PayPal payment links per product or for a flat cart policy.

## Notes
- Product images reference Unsplash demo URLs—replace with your own assets for reliability.
- `mailto:` opens the default email client. If users lack a configured client, prefer WhatsApp or a hosted form service (Netlify Forms, Formspree).

## License
MIT. Use freely, attribution appreciated.


