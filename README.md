# Raihana Khelifati — Full-Stack Developer Portfolio

A fast, modern, and secure portfolio website for **Raihana Khelifati**, Computer Science Engineering student at **ESI Sidi Bel Abbès** (Algeria) focused on Full-Stack Development and exploring Cybersecurity.

## Tech Stack
- **Framework & Runtime**: React 18 / 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Google Fonts Kanit (300-900)
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animations**: Framer Motion (with `prefers-reduced-motion` compliance)
- **Icons**: Lucide React, react-icons (`FaWhatsapp`)
- **Contact Form**: Web3Forms API with client-side validation and honeypot bot protection

## Security & Pre-Deploy Verification

### Running Security Audits
To maintain a clean and secure dependency tree, always run npm audit before deployments:

```bash
# Check dependencies for known vulnerabilities
npm audit

# Automatically fix minor patches if needed
npm audit fix
```

### Environment Variables
Configure your optional Web3Forms API key in `.env`:
```env
VITE_WEB3FORMS_KEY="your_web3forms_access_key"
```
*(Never commit `.env` containing live secrets. A sanitized `.env.example` is provided.)*

### Production Headers
Security headers including Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), and Permissions-Policy are pre-configured in:
- `public/_headers` (Netlify & Cloudflare Pages)
- `vercel.json` (Vercel)

## Development

```bash
# Start development server
npm run dev

# Lint & typecheck
npm run lint

# Build for production
npm run build
```
