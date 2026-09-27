# CLAUDE.md

This file provides guidance for Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MPU5 LoRa Mod is a React + Vite web application that serves as documentation and landing page for an open-source hardware project: transforming an MPU5 replica (airsoft milsim accessory) into a functional mesh radio using a LoRa board supported by [Meshtastic](https://meshtastic.org/) firmware. The site features 3D STL file visualization, complete assembly guide, dark/light theme switching, and responsive design.

## Common Commands

All commands use **Yarn** (v4.18.1), never npm.

```bash
# Development
yarn dev          # Start Vite dev server (http://localhost:5173/)

# Build
yarn build        # Build for production (output in ./dist/)
yarn preview      # Preview production build locally

# Code Quality
yarn lint         # Run oxlint (AST-based linter)
yarn format       # Format code with Prettier
yarn format:check # Check formatting without changes
```

## Project Architecture

### Directory Structure

```
src/
  ├── pages/              # Page components (Home.jsx)
  ├── components/         # Feature components (sections, layouts)
  │   └── base/          # Reusable base components (STLGroupViewer, PartsList, FeatureCard, etc.)
  ├── icons/             # Custom SVG icon components (all with viewBox and consistent props)
  ├── theme/             # Material-UI theme configuration
  ├── hooks/             # Custom React hooks (ex: useIconSize.js)
  ├── data/              # Static data (ex: stlGroups.js — STL parts/groups)
  ├── assets/            # Images and static files
  ├── App.jsx            # Root component with theme switching
  └── main.jsx           # Entry point
```

### Main Components and Patterns

**Theme System**: Uses Material-UI's `ThemeProvider` with light/dark themes. Theme persists in `localStorage` with key `'theme'`. Colors:

- Primary: `#FF8A33` (orange, consistent across themes)
- Light mode: light background, dark text
- Dark mode: very dark background (#0E110D), light text

**3D Viewer**: `STLGroupViewer.jsx` renders 3D STL models using Three.js with:

- Geometry caching to prevent reloading
- Interactive orbit controls with auto-rotation
- Part highlighting by ID
- Responsive canvas sizing

**Icons**: All icons in `/src/icons/` follow a consistent pattern:

- SVG components with `viewBox` attribute
- Consistent `width`, `height`, `fill` props
- Named exports (ex: `export function StarIcon(props)`)

**Base Components**: Reusable UI building blocks in `/src/components/base/`:

- `STLGroupViewer` — 3D model display component
- `PartsList` — Interactive parts list with highlighting
- `FeatureCard` — Feature card component
- `SectionContainer`, `SectionTitle`, `FeatureGrid` — Layout components
- `TwoColumnSection`, `StepList` — Specific layout patterns

### Styling Approach

- **Material-UI (MUI)**: Main UI framework with `useTheme()` hook for theme access
- **CSS**: Global styles in `src/index.css`, component-scoped styles via MUI's `sx` prop
- **Formatting**: Prettier with `printWidth: 100`, no semicolons, single quotes
- **Linting**: Oxlint for React-specific rules (hooks, component exports)

### How Pages are Composed

`Home.jsx` is a vertical stack of sections:

1. Navbar (with theme switching)
2. HeroSection
3. AboutSection
4. HowItWorksSection
5. FilesSection
6. AssemblySection
7. SupportSection
8. FAQSection
9. Footer

Each section is a separate component, typically importing base components from `/src/components/base/`.

## Build and Deployment

- **Vite Config**: Base path is `/mpu5/` for GitHub Pages deployment
- **GitHub Pages**: Automatic deployment on push to `main` or `master` branches
- **Note**: GitHub Actions workflow already corrected to use Yarn

## Code Quality Patterns

- **Oxlint Rules**: React hooks and component export rules are enforced
- **Prettier**: Line width of 100 characters, no semicolons
- **React**: Functional components with hooks; no class components
- **Import Order**: No mandatory order; use natural grouping (React, packages, local)

## 3D Models Structure

STL files are located in `public/models/stl/` with the following organization:

- `top/` — Upper enclosure components
- `bottom/` — Lower enclosure components
- `guides/` — Reference pieces and guides

The `devices/` folder contains board-specific files (ex: Heltec V4) and is not part of public documentation.

## License

The project is licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**, covering the web application code, STL files, and hardware documentation.

**Important**: Commercial use is prohibited by the default license, but is permitted with prior contact and authorization from the license holder. See `LICENSE` for details.

## Notes for Future Changes

1. **Yarn Only**: Never use npm. Project is configured for Yarn with node-modules linker.
2. **Icon Updates**: When adding/modifying icons, keep props and viewBox consistent across all icons.
3. **Theme Access**: Use `useTheme()` hook from `@mui/material` to access current theme colors.
4. **Three.js Usage**: The STLLoader caching pattern prevents geometry reloading; don't remove the `stlCache` Map.
5. **Section Components**: Each section is independent; try to keep them self-contained for maintainability.
6. **GitHub Actions**: Deployment workflow already uses Yarn (fixed).
