# A Playlist For You

A birthday page framed as a mixtape/now-playing music app, built for a long-distance relationship where she's away specifically on her birthday. Everything scrolls as a "tracklist," with a persistent mini-player at the bottom that's the real music control.

## What's here

1. **Cover** — a live clock (her device's real time), the big title, and a "Press play" button
2. **Track 01 · Make a Wish** — candles you tap or blow into your mic to extinguish
3. **Track 02 · Hidden Track** — the love letter, presented as a tappable voice memo that reveals its transcript
4. **Track 03 · The Album Booklet** — photo gallery
5. **Outro**
6. **Mini-player** — fixed at the bottom throughout, shows which "track" (section) you're scrolled to, doubles as scroll-progress, and is the real play/pause control for the background music
7. **Ambient confetti** — continuously falling in the background across the whole page (the same `confetti-js` canvas library used in `birthday-counter/`, tinted to this page's own palette)

(An earlier version also had "Thirty Reasons" and "Liner Notes" tracks — removed at the user's request. The `REASONS`/`TIMELINE` fields still exist in `CONFIG` in case they come back in some other form later, they're just not rendered anywhere right now.)

## How to personalize

Everything lives in the `CONFIG` object at the top of `script.js`:

- `HER_NAME`, `YOUR_NAME`
- `LOVE_LETTER` — the voice-memo transcript
- `PHOTOS` — captions + file paths
- `REASONS` / `TIMELINE` — currently unused (see note above)

Drop photos into `images/` (see `images/README.txt`) — optional, the page looks fine with none and fails silently rather than showing broken images.

## A note on the music

Background music is `audio/track.mp3` — currently "Spring On The Horizon" by HoliznaCC0, CC0-licensed (public domain, no attribution required; see `audio/README.txt` for the source) — **but this is a placeholder the user plans to swap for a different track.** It plays via a plain `<audio>` element (deliberately not routed through the Web Audio API — that caused a real "plays but silent" bug once already), with its volume swelling gently as she scrolls further into the page. It starts on her first tap/click/keypress — browsers block all audio from starting with zero interaction first, that's a hard rule in every modern browser, not a bug here. Swap the file any time (see `audio/README.txt`).

## Hosting

Like the other variants, this needs to be served over `http://` or `https://` (even just `npx serve` locally) rather than opened directly as a file — the microphone feature requires it, and some browsers restrict audio autoplay differently on `file://` too.
