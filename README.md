# Ask Analyst — Social Trading (Next.js)

A Next.js 14 App Router port of the `Ask Analyst - Social Trading.html`
prototype. Generated from that design; the HTML file remains the source of truth
for the visual work.

## Run

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /feed
```

## Layout

| Path | What it is |
|---|---|
| `app/globals.css` | The Ask Analyst design system (tokens + css layers, in `styles.css` order) followed by the app's own CSS layer. |
| `app/<route>/page.jsx` | One route per screen: feed, news, article, trending, discover, leaderboard, pages, profile, messages, notifications, settings. `/` redirects to `/feed`. |
| `app/layout.jsx` | Root layout; sets `data-theme` and loads `globals.css`. |
| `components/AppShell.jsx` | Header, left nav, content column and rail columns. Navigation is `next/link`; the theme switch, share dialog and docked chat live here. |
| `components/parts.jsx` | Shared primitives — Delta, AreaChart, Donut, PanelHead, TfChips, SegToggle, RuledTable, Ticker, Person, CallPill, Empty. |
| `components/screens/*.jsx` | Feed (timeline, news, sectors, people), Market (trending, leaderboard, discover, pages), Profile (profile + settings), Comms (messages, notifications, dialogs), Article (news detail). |
| `lib/ds.js` | The design-system bundle as an ES module, with its icon resolver pointed at the Tabler set. |
| `lib/icons-tabler.jsx` | Tabler Icons (MIT) drawn at the design system's icon spec. |
| `lib/data.js` | The content model — PSX companies, brokerage houses, posts, news, portfolios. |
| `public/assets/**` | Logos, company marks, avatars and news imagery. |

## Notes

- Every screen module is a client component: the prototype is interaction-led
  (tabs, dialogs, hover readouts, theme switching).
- `/article` reads the selected story from `sessionStorage`; a production build
  would give each story a slug route.
- Company marks resolve by ticker from `public/assets/ds/companies`. A missing
  mark renders an empty slot of the same size rather than a substitute glyph.
