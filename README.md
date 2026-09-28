# MPU5 LoRa Mod

![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)
![Yarn](https://img.shields.io/badge/Package%20Manager-Yarn-2C8EBB.svg)
![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF.svg)
[![GitHub](https://img.shields.io/badge/GitHub-your--user%2Fmpu5-black.svg)](https://github.com/your-user/mpu5)

Transform your MPU5 replica into a real mesh radio. STL files and complete guide to integrate a LoRa board supported by [Meshtastic](https://meshtastic.org/) inside the enclosure. Communicate without internet, no monthly fees, mesh network with your team.

## About the Project

MPU5 LoRa Mod integrates a LoRa board with [Meshtastic](https://meshtastic.org/) firmware inside a fake MPU5 replica, transforming it into a real mesh network communication node.

Each operator carries a node. The radios form a mesh network: if a teammate is out of range, the message hops through others until it arrives. The smartphone is the interface (app [Meshtastic](https://meshtastic.org/), [ATAK](https://play.google.com/store/apps/details?id=com.atakmap.app.civ), or [iTAK](https://apps.apple.com/br/app/itak/id1561656396)); the MPU5 is the mesh node.

### Features

- **Mesh network chat** — Text messages per channel or direct, retransmitted radio-to-radio until delivery
- **Team position on map** — GPS shared between nodes, track your team in real time
- **Zero infrastructure** — Works in the field: doesn't depend on carriers, Wi-Fi, or internet
- **Encrypted channels** — AES-256 per channel: each team has its own key
- **Preserved visuals** — Electronics hidden inside the enclosure; from the outside, it still looks like your MPU5
- **Open and remixable** — STL files available; adapt to other LoRa boards as you wish

## Tech Stack

### Web Application (this repository)

- **React 19** — UI Framework
- **TypeScript** — Static typing (strict mode)
- **Vite** — Build tool and dev server
- **Material-UI (MUI 9, Grid v2)** — Components and design system
- **Three.js** (`@react-three/fiber` + `@react-three/drei`) — 3D STL model visualization
- **Yarn 4.18.1** — Package manager
- **ESLint 9** — Linting (TypeScript, React hooks, import order)
- **Prettier** — Code formatting
- **husky + lint-staged** — Pre-commit checks
- **GitHub Actions** — CI (lint, format, typecheck, build) and Pages deployment

### Hardware

- **Board**: Any LoRa board supported by [Meshtastic](https://meshtastic.org/) (ex: Heltec V4, T-Beam, RAK Wireless, etc.)
- **Communication**: LoRa 915 MHz (ISM band Brazil)
- **Firmware**: [Meshtastic](https://meshtastic.org/) (open-source)

## Project Structure

```
src/
├── pages/                  # Page components
│   └── Home.tsx            # Main landing page
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── FilesSection.tsx        # 3D preview and STL download
│   │   ├── AssemblySection.tsx     # Assembly guide
│   │   ├── SupportSection.tsx
│   │   └── FAQSection.tsx
│   ├── common/             # App-wide chrome
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── base/               # Reusable base components
│       ├── STLGroupViewer.tsx      # 3D viewer (Three.js)
│       ├── PartsList.tsx           # Interactive parts list
│       ├── FeatureCard.tsx         # Feature card
│       ├── SectionContainer.tsx
│       ├── SectionTitle.tsx
│       ├── FeatureGrid.tsx
│       ├── TwoColumnSection.tsx
│       ├── StepList.tsx
│       └── SVGIcon.tsx             # Shared icon rendering wrapper
├── icons/                  # SVG icon components (built on SVGIcon)
├── theme/                  # Material-UI configuration (colors, typography)
├── hooks/                  # Custom React hooks
├── data/                   # Static data (ex: stlGroups.ts — STL parts/groups)
├── types/                  # Centralized TypeScript types, by domain
├── assets/                 # Images and static files
├── App.tsx                 # Root component (theme)
└── main.tsx                # Entry point
```

Every folder above has a barrel `index.ts` — import from the folder (`@/icons`), not the individual file. See `CLAUDE.md` for the full architecture reference.

## Running Locally

### Requirements

- **Node.js** 18+ and **Yarn** 4.18.1

### Installation and Development

```bash
# Clone the repository
git clone https://github.com/your-user/mpu5.git
cd mpu5

# Install dependencies (always with Yarn, never npm)
yarn

# Start the development server
yarn dev
# Application will be at http://localhost:5173/

# Build for production
yarn build

# Preview the production build
yarn preview

# Type-check the whole project (does not emit files)
yarn typecheck

# Linting (ESLint)
yarn lint
yarn lint:fix  # Auto-fix what it can

# Formatting with Prettier
yarn format
yarn format:check  # Check formatting without changing
```

## STL Files and Assembly

STL files are organized in folders by component, located in `public/models/stl/`:

**Top (Upper enclosure)**:

- `mpu5-top-case.stl` — Main upper body
- `mpu5-top-cover.stl` — Upper cover/lid
- `mpu5-top-latch.stl` — Upper latch/closure

**Bottom (Lower enclosure)**:

- `mpu5-bottom-case.stl` — Main lower body
- `mpu5-bottom-cover.stl` — Lower cover/lid
- `mpu5-bottom-connector-guide.stl` — Lower connector guide
- `mpu5-bottom-latch.stl` — Lower latch/closure

**Guides and References**:

- `mpu5-fiber-guide.stl` — Reference/fiber guide

The **complete guide for cutting, soldering, and assembly** is available in the application itself (sections "Files" and "Assembly"). Includes materials list, tools, step-by-step photos, and safety tips.

## Contributing

Contributions are welcome! Some ways to help:

- **Issues**: Report parts fitting problems
- **Remixes**: Adaptations for other LoRa boards
- **Share on social media**: Share your build with a link to the project page

See `CLAUDE.md` for details on code architecture and project conventions.

## Support the Project

Always free. Every donation is a one-time gift — no subscriptions, no recurring charges, no
strings attached. Donations pay for filament, test boards, and development hours.

- **Pix**: Instant support (key and QR available on the site)
- **GitHub Sponsors**: One-time support directly through GitHub

Both count equally toward `SPONSORS.md`. Don't want to be listed? Just say so when you donate and
we'll leave your name out.

## Legal Notice

Independent, non-profit project for the airsoft community. Not affiliated with Persistent Systems (real MPU5) or [Meshtastic](https://meshtastic.org/) (firmware). Names and trademarks mentioned belong to their respective owners.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**.

You can share, adapt, and remix, provided that:

- You attribute authorship to the original creator
- You do not use for commercial purposes (see exception below)
- You make any derivative works available under the same license (CC BY-NC-SA 4.0)

**Commercial exception**: If you wish to commercialize this project or its derivatives, contact us to negotiate specific authorization. Commercial use is permitted with prior permission.

See `LICENSE` for the complete legal text.

---

Ready to build yours? Download the files, follow the guide, and get on the field connected.

[![GitHub](https://img.shields.io/badge/View%20on%20GitHub-your--user%2Fmpu5-black?style=for-the-badge)](https://github.com/your-user/mpu5)
