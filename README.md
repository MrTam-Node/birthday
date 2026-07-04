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

Background music is "Nuvole Bianche" by Ludovico Einaudi, streamed live from **Spotify's official embed + iFrame API** (`SPOTIFY_TRACK_URI` near the top of `script.js`) — not a downloaded file. This is the same sanctioned mechanism as embedding a YouTube video; no copy of the track is hosted in this repo, which matters because it's a real commercial recording still under copyright, not something that can legally be redistributed as a file. The embed is visible (per Spotify's own embed guidelines) as a compact widget just under the "Press play" button, and stays in sync with the mini-player's play/pause button via the controller's `playback_update` events.

Practical notes:
- Non-Premium listeners (or anyone not logged into Spotify in that browser) get a 30-second preview loop. Full playback requires Spotify Premium, logged in, same browser.
- It starts on her first tap/click/keypress — browsers block all audio from starting with zero interaction first, that's a hard rule in every modern browser, not a bug here.
- Want a different song? Change `SPOTIFY_TRACK_URI` in `script.js` to another track's `spotify:track:...` URI (grab it from a track's Spotify share link), or ask to have it swapped back to a self-hosted royalty-free file instead.

## Hosting

Like the other variants, this needs to be served over `http://` or `https://` (even just `npx serve` locally) rather than opened directly as a file — the microphone feature requires it, and some browsers restrict audio autoplay differently on `file://` too.
