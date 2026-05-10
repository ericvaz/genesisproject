# iPhone Optimization Notes

This revision makes the Genesis Project usable as a mobile-first iPhone experience.

## What changed

- Added `viewport-fit=cover` and safe-area support for iPhone notches and home indicator spacing.
- Reworked the mobile hero so the title, buttons, artwork, and verse card stack cleanly.
- Converted the chapter cards into compact horizontal image/text cards on small screens.
- Made the 50-chapter browser touch-friendly with horizontal scrolling chapter buttons.
- Made the chapter tabs horizontally scrollable instead of wrapping awkwardly.
- Increased Bible reader text size and line height for phone reading.
- Improved mobile scrolling behavior with `-webkit-overflow-scrolling: touch`.
- Made the family tree panel iPhone-friendly with sticky controls, better node labels, vertical and horizontal drag/pan, and two-finger pinch zoom.
- Reflowed school monetization cards into a clean one-column mobile layout.

## Practical publishing note

This version is still a static site. It should run directly on GitHub Pages, Netlify, Vercel, or any basic web host.
