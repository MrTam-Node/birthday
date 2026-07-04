# A Playlist For You

A birthday page framed as a mixtape/now-playing music app, built for a long-distance relationship where she's away specifically on her birthday. Everything scrolls as a "tracklist," with a persistent mini-player at the bottom that's the real music control.

## What's here

1. **Cover** — a live clock (her device's real time), the big title, and a "Press play" button
2. **Track 01 · Make a Wish** — candles you tap or blow into your mic to extinguish
3. **Track 02 · Thirty Reasons** — synced-lyrics-style reveal, one line highlights at a time as you scroll
4. **Track 03 · Liner Notes** — the relationship timeline, styled like album credits with track timestamps
5. **Track 04 · Hidden Track** — the love letter, presented as a tappable voice memo that reveals its transcript
6. **Track 05 · The Album Booklet** — photo gallery
7. **Outro**
8. **Mini-player** — fixed at the bottom throughout, shows which "track" (section) you're scrolled to, doubles as scroll-progress, and is the real play/pause control for the background music

## How to personalize

Everything lives in the `CONFIG` object at the top of `script.js`:

- `HER_NAME`, `YOUR_NAME`
- `REASONS` — 30 lines, one per lyric
- `TIMELINE` — 5-7 milestones (currently written for a long-distance story — swap in your real ones)
- `LOVE_LETTER` — the voice-memo transcript
- `PHOTOS` — captions + file paths

Drop photos into `images/` (see `images/README.txt`) — optional, the page looks fine with none and fails silently rather than showing broken images.

## A note on the music

Background music is `audio/track.mp3` — "Spring On The Horizon" by HoliznaCC0, CC0-licensed (public domain, no attribution required; see `audio/README.txt` for the source). It's routed through a filter that opens up gently as she scrolls further into the page, so it's not just a flat loop. It starts on her first tap/click/keypress — browsers block all audio from starting with zero interaction first, that's a hard rule in every modern browser, not a bug here. Want a different song? Just swap the file (see `audio/README.txt`).

## Hosting

Like the other variants, this needs to be served over `http://` or `https://` (even just `npx serve` locally) rather than opened directly as a file — the microphone feature requires it, and some browsers restrict audio autoplay differently on `file://` too.
