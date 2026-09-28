# CLAUDE.md

This file provides guidance for Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MPU5 LoRa Mod is a React + TypeScript + Vite web application that serves as documentation and landing page for an open-source hardware project: transforming an MPU5 replica (airsoft milsim accessory) into a functional mesh radio using a LoRa board supported by [Meshtastic](https://meshtastic.org/) firmware. The site features 3D STL file visualization, complete assembly guide, dark/light theme switching, and responsive design.

## Common Commands

All commands use **Yarn** (v4.18.1), never npm.

```bash
# Development
yarn dev          # Start Vite dev server (http://localhost:5173/)

# Build
yarn build        # Build for production (output in ./dist/)
yarn preview      # Preview production build locally

# Code Quality
yarn typecheck    # Type-check the whole project (tsc --build; does NOT emit files)
yarn lint         # Run ESLint
yarn lint:fix     # Run ESLint with auto-fix
yarn format       # Format code with Prettier
yarn format:check # Check formatting without changes
```

`yarn build` alone does **not** type-check (Vite uses esbuild, which strips types without validating them). Always run `yarn typecheck` separately to catch type errors — this is also enforced in CI.

## Automatic Code Quality

- **Pre-commit hook** (husky + lint-staged): runs ESLint `--fix` and Prettier `--write` on staged `.js/.jsx/.ts/.tsx` files before every commit. A commit is blocked if ESLint reports an error it can't auto-fix.
- **GitHub Actions** (`.github/workflows/lint-and-format.yml`): on every push/PR to `main`/`master`, runs `yarn lint`, `yarn format:check`, `yarn typecheck`, and `yarn build`. Any failure blocks the PR.
- When writing code in this repo (human or AI), always run `yarn lint:fix && yarn format` before committing — don't rely solely on the hook to catch issues.

## Project Architecture

### Directory Structure

```
src/
  ├── pages/              # Page components (Home.tsx)
  ├── components/
  │   ├── sections/       # Page sections (HeroSection, AboutSection, FAQSection, etc.)
  │   ├── common/         # App-wide chrome (Navbar, Footer)
  │   └── base/           # Reusable base components (STLGroupViewer, PartsList, FeatureCard, SVGIcon, etc.)
  ├── icons/               # SVG icon components, all built on the SVGIcon wrapper
  ├── theme/               # Material-UI theme configuration (theme.ts)
  ├── hooks/               # Custom React hooks (useIconSize.ts)
  ├── data/                # Static data (stlGroups.ts — STL parts/groups)
  ├── types/               # Centralized TypeScript types, grouped by domain (icons.ts, components.ts, data.ts)
  ├── utils/               # Reserved for future utility functions (currently empty)
  ├── assets/              # Images and static files
  ├── App.tsx              # Root component with theme switching
  └── main.tsx             # Entry point
```

Every one of these folders (`icons`, `hooks`, `data`, `types`, `components/base`, `components/sections`, `components/common`, `pages`) has a barrel `index.ts` — import from the folder, not the individual file, e.g. `import { LoRaIcon } from '@/icons'`, not `import { LoRaIcon } from '@/icons/LoRa'`.

**Path alias**: `@/*` maps to `src/*` (configured in `tsconfig.app.json` and `vite.config.ts`). Always use `@/...` for cross-folder imports; use relative imports (`./`, `../`) only within the same folder.

### TypeScript Configuration

The project uses the standard 3-file tsconfig structure (the same one `create vite --template react-ts` generates):

- `tsconfig.json` — root file, contains only `references`, no compiler options of its own
- `tsconfig.app.json` — the actual app config (strict mode, path alias, `include: ["src"]`)
- `tsconfig.node.json` — config for `vite.config.ts` (a Node-context file, not part of the app bundle)

**Do not collapse these back into a single `tsconfig.json`.** A single file that mixes `compilerOptions` with a `references` field is a known trigger for a resolver bug in `unrs-resolver`/`eslint-import-resolver-typescript` (breaks `@/*` alias resolution for value imports; see git history around the ESLint setup commit for the full investigation). The 3-file split is also what prevents `tsc --build` from writing compiled `.js`/`.d.ts` output next to source files — both `tsconfig.app.json` and `tsconfig.node.json` set `noEmit: true` for this reason.

### Main Components and Patterns

**Theme System**: Uses Material-UI's `ThemeProvider` with light/dark themes. Theme persists in `localStorage` with key `'theme'`. Colors:

- Primary: `#FF8A33` (orange, consistent across themes)
- Light mode: light background, dark text
- Dark mode: very dark background (#0E110D), light text

**3D Viewer**: `STLGroupViewer.tsx` renders 3D STL models using Three.js with:

- Geometry caching to prevent reloading (typed as `Map<string, BufferGeometry>`)
- Interactive orbit controls with auto-rotation
- Part highlighting by ID
- Responsive canvas sizing
- The internal per-part component is named `STLPartMesh`, not `STLPart` — that name is reserved for the `STLPart` data type in `@/types` (a single part's metadata: id, name, file, material, etc.)

**Icons**: All icons in `/src/icons/` are geometry-only components built on the shared `SVGIcon` wrapper (`src/components/base/SVGIcon.tsx`):

```typescript
import { FC } from 'react'
import { SVGIcon } from '@/components/base/SVGIcon'
import type { IconProps } from '@/types'

export const SomeIcon: FC<IconProps> = props => (
  <SVGIcon {...props}>
    <path d="..." />
  </SVGIcon>
)
```

- `IconProps` (`@/types`): `size?: 'xs'|'sm'|'md'|'lg'|'xl'`, `width?`, `height?`, `color?`
- `SVGIcon` owns all the shared SVG plumbing: calls `useIconSize`, sets `viewBox`, `fill`, `stroke`, `strokeWidth`, `strokeLinecap`, `strokeLinejoin` — defaults to `fill="none"`, `stroke=color`, `strokeWidth="1.5"`, `strokeLinecap="round"`, `strokeLinejoin="round"`.
- A handful of icons override these defaults to preserve their original look — e.g. some pass `strokeLinecap="butt"` or `strokeLinejoin="miter"` because the original hand-authored SVG didn't round its caps/joins. When adding a new icon, match the source artwork's stroke style rather than assuming the wrapper's defaults are always right.
- `PixIcon` is solid-fill (`fill={color} stroke="none"`), not outlined — it's the exception, not a bug.
- `PlayPauseIcon` takes an extra `state?: 'play' | 'pause'` prop.

**Base Components** (`/src/components/base/`): reusable UI building blocks, all typed via interfaces in `@/types`:

- `STLGroupViewer`, `PartsList` — STL data display (both take `STLPart[]` from `@/types`)
- `FeatureCard`, `FeatureGrid` — feature callout cards (`FeatureCardProps.icon` is `FC<IconProps>`, i.e. a component reference like `icon: MeshChat`, not a rendered element)
- `SectionContainer`, `SectionTitle`, `TwoColumnSection`, `StepList` — layout primitives
- `SVGIcon` — the icon rendering wrapper described above

**Sections** (`/src/components/sections/`): one file per page section (`HeroSection`, `AboutSection`, `HowItWorksSection`, `FilesSection`, `AssemblySection`, `SupportSection`, `FAQSection`). Each is self-contained and composed together in `src/pages/Home.tsx`.

**Common** (`/src/components/common/`): app-wide chrome that isn't a page section — `Navbar` (takes `onToggleTheme`/`isDark`), `Footer` (no props).

### Component Authoring Pattern

Every component in this codebase (except nothing — there are no exceptions) uses a named export, typed with `FC` and a `Props` interface from `@/types`:

```typescript
import { FC } from 'react'
import type { SomeComponentProps } from '@/types'

export const SomeComponent: FC<SomeComponentProps> = ({ propA, propB }) => {
  return <div>...</div>
}
```

- **No `export default`**, anywhere, for any component — including pages and `App`. `main.tsx` imports `{ App }` from `./App`; `App.tsx` imports `{ Home }` from `@/pages`.
- **Props types live in `src/types/components.ts`**, not inline in the component file, so they're discoverable from one place and reusable if a sibling component needs the same shape.
- Types are grouped by domain, not by component: `src/types/icons.ts` (icon-related), `src/types/components.ts` (component props), `src/types/data.ts` (STL data shapes). All re-exported from `src/types/index.ts`.
- **No `any`.** ESLint's `@typescript-eslint/no-explicit-any` is set to `error`, not `warn`.
- **Before assuming a prop's shape, read the component's actual usage** (how it's called from its parent) rather than guessing from the name — this codebase has had real mismatches between a plausible-sounding type and what the code actually does (e.g. `useIconSize` takes a preset string, not raw pixel numbers; `stlGroups` items have `parts: STLPart[]`, not a flat `path` field).

### Styling Approach

- **Material-UI (MUI)**: Main UI framework with `useTheme()` hook for theme access
- **CSS**: Global styles in `src/index.css`, component-scoped styles via MUI's `sx` prop
- **Formatting**: Prettier with `printWidth: 100`, no semicolons, single quotes
- **Linting**: ESLint 9 (flat config, `eslint.config.js`) — `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-import-x`
- **MUI Grid**: this project uses Grid v2. Write `<Grid size={{ xs: 12, md: 4 }}>`, never the old `<Grid item xs={12} md={4}>` — the `item` prop no longer exists on this Grid and silently leaks through as an invalid DOM attribute (a real bug this project hit and fixed; don't reintroduce it).

### How Pages are Composed

`src/pages/Home.tsx` is a vertical stack of sections:

1. Navbar (with theme switching)
2. HeroSection
3. AboutSection
4. HowItWorksSection
5. FilesSection
6. AssemblySection
7. SupportSection
8. FAQSection
9. Footer

Each section is a separate component in `src/components/sections/`, composed via the `@/components/sections` barrel import.

## Build and Deployment

- **Vite Config**: Base path is `/mpu5/` for GitHub Pages deployment
- **GitHub Pages**: Automatic deployment on push to `main` or `master` branches
- **CI**: `.github/workflows/lint-and-format.yml` runs lint, format check, typecheck, and build on every push/PR to `main`/`master`

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

1. **Yarn Only**: Never use npm or npx. Project is configured for Yarn with node-modules linker.
2. **TypeScript everywhere**: the entire `src/` tree is `.ts`/`.tsx`. Don't add new `.js`/`.jsx` files.
3. **Named exports only**: no `export default`, anywhere, for any component (see Component Authoring Pattern above).
4. **Icon Updates**: new icons go through the `SVGIcon` wrapper (see Icons above); don't duplicate the SVG boilerplate per-icon.
5. **Theme Access**: Use `useTheme()` hook from `@mui/material` to access current theme colors.
6. **Three.js Usage**: The STLLoader caching pattern prevents geometry reloading; don't remove the `stlCache` Map in `STLGroupViewer.tsx`.
7. **MUI Grid v2**: use `size={{ xs, md }}`, never the old `item xs md` API (see Styling Approach above).
8. **Section Components**: Each section is independent; keep them self-contained for maintainability.
9. **Don't collapse the 3-file tsconfig split** back into one file (see TypeScript Configuration above) — it will break ESLint's import resolution.
10. **GitHub Actions**: Deployment and CI workflows already use Yarn.
