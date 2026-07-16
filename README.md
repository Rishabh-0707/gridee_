# Gridee — Parking. Simplified.

The official marketing website for **Gridee**, a smart-parking platform designed to make finding, reserving, entering, and paying for parking feel effortless.

**Live website:** [gridee-parking.gridee-business.chatgpt.site](https://gridee-parking.gridee-business.chatgpt.site)

## Overview

The site introduces Gridee’s consumer app, parking workflow, core technology, supported use cases, and official policy information. It is built as an animated, responsive product experience using real Gridee app screens.

Highlights include:

- Responsive product landing page
- Scroll-based hero and vision animations
- Interactive app-screen preview that switches on hover, focus, or click
- Horizontal feature and industry sections
- Official App Store and Google Play links
- About, Privacy Policy, and Data Safety pages
- Account-deletion instructions
- Responsive desktop and mobile layouts
- Reduced-motion support

## App Downloads

- [Download on the App Store](https://apps.apple.com/in/app/grideeapp/id6757460398)
- [Get it on Google Play](https://play.google.com/store/apps/details?id=com.gridee.parking&pcampaignid=web_share)

## Technology

- [React 19](https://react.dev/)
- [Next.js 15](https://nextjs.org/)
- [vinext](https://github.com/cloudflare/vinext)
- [Vite](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/)
- [Lucide React](https://lucide.dev/)
- Cloudflare Workers-compatible build output
- OpenAI Sites hosting

## Project Structure

```text
app/
├── about/
│   └── page.tsx          # About Gridee
├── data-safety/
│   └── page.tsx          # Data policy and account deletion
├── privacy/
│   └── page.tsx          # Privacy policy
├── globals.css           # Global styles, responsive layout, animations
├── info-page.tsx         # Shared layout for informational pages
├── layout.tsx            # Root document layout and metadata
└── page.tsx              # Main Gridee landing page

public/                    # App screenshots and static assets
.openai/hosting.json       # Sites project configuration
```

## Local Development

### Prerequisites

- Node.js `22.13.0` or newer
- npm

### Setup

```bash
git clone https://github.com/Rishabh-0707/gridee_.git
cd gridee_
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create and validate the production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Check the codebase with ESLint |
| `npm test` | Run the project’s automated build/render test |

## Routes

| Route | Description |
| --- | --- |
| `/` | Main Gridee product website |
| `/about` | Company and product overview |
| `/privacy` | Official privacy policy |
| `/data-safety` | Data usage, security, and account deletion |

## Deployment

The website is hosted with OpenAI Sites. Its existing Sites project is declared in:

```text
.openai/hosting.json
```

Production changes should follow this sequence:

1. Run `npm run build`.
2. Commit the exact validated source state.
3. Push the commit to GitHub.
4. Save a Sites version using that commit SHA.
5. Deploy the saved version and confirm its status succeeds.

## Official Links

- [Gridee documentation](https://docs.gridee.in/)
- [Instagram](https://www.instagram.com/gridee/?igsh=MW9rbjdiajJwcTVwZw==)
- [LinkedIn](https://www.linkedin.com/company/gridee?trk=public_post_reshare_feed-actor-image)
- Email: [gridee.business@gmail.com](mailto:gridee.business@gmail.com)

## License

This repository and its assets are maintained for Gridee. All rights reserved.
