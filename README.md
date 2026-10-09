# eliocasciola.dev

Personal portfolio website built to showcase my projects, skills, and experience as a Junior .NET Developer.

## Live Website

eliocasciola.dev

## Tech Stack

- React
- JavaScript
- JSX
- CSS
- Vite
- Cloudflare Workers

## Features

- Responsive portfolio interface
- Reusable React components
- Projects showcase
- About and skills sections
- CV and contact information

## Development

Install dependencies:

npm install

Start the development server:

npm run dev

Create a production build:

npm run build

## Deployment

The project is hosted on Cloudflare Workers.

Changes pushed to the `main` branch on GitHub are automatically built and deployed by Cloudflare.

## Author

Elio Casciola


## Current Safari-friendly logo playback

Logo animation now uses `fallen-zenith-loop.mp4`: silent H.264 Main, 800 × 534,
30 fps, three-second loop, YUV 4:2:0 and fast-start metadata (151 KB).
`AnimatedLogo` presents a 61 KB poster until playback begins. If autoplay is
rejected it uses `fallen-zenith-loop-fallback.webp`; Reduce Motion selects the
still poster and never starts a video. The logo remains labelled for assistive
technology throughout playback. Original replaced media is backed up outside
the project in the local task's `safari-media/originals` folder.

The portfolio intro uses `/intro-safari.mp4` (silent H.264, 30 fps, fast start),
with explicit muted inline playback. It skips the overlay if playback fails or
takes more than four seconds to start, and skips it for Reduce Motion. Its
dark background blends with the site's background rather than relying on WebM
alpha support. Native Safari testing remains necessary on the affected devices.
