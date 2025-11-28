# Reusable UI Components Demo

This project showcases a small but polished design system built with React and Vite. It contains reusable primitives for cards, buttons, and typography along with two sample pages (“Overview” and “Insights”) that prove how the same components can power different layouts. A pill-style toggle lets you switch between the pages without leaving the screen.

## Live Demo

The latest build is deployed here: **https://uicomponentss204.netlify.app/**

## What’s Included

- **UI primitives** – `Card`, `Button`, and `Text` components share consistent spacing, typography, and interaction states.
- **Interactive cards** – Every card can be clicked or keyboard-activated to surface contextual details.
- **Two demo pages** – Overview highlights metrics and initiatives, while Insights captures feedback and roadmap tasks. Both reuse the same components.
- **Flat visual language** – Calm, gradient-free palette with soft surfaces and rounded shapes to keep focus on content.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

This outputs a production-ready bundle in `dist/`, the same bundle that is published to Netlify at the link above.
