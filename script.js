/* ============================================================================
   A PLAYLIST FOR YOU — birthday mixtape microsite
   ----------------------------------------------------------------------------
   Everything you'd want to personalize lives in the CONFIG object below.
   Edit the values inside CONFIG and save — the rest of this file just reads
   from it, so you shouldn't need to touch any code below "END CONFIG".

   A note on the content below: since this is written for a long-distance
   relationship where she's away specifically on her actual birthday, the
   REASONS/TIMELINE/LETTER are written to fit that — not a cohabiting-couple
   story. Swap in your real ones whenever you're ready.
   ============================================================================ */

const CONFIG = {

  // The birthday girl's name. Shown big on the cover.
  HER_NAME: 'Her Name',

  // Your name. Shown as the signature in the outro.
  YOUR_NAME: '[Your Name]',

  // Exactly 30 short lines — one per "lyric" in the Thirty Reasons track.
  // Line #1 shows REASONS[0], line #30 shows REASONS[29].
  REASONS: [
    "The way you send me a photo of your coffee every single morning, wherever you are.",
    "How you stay up way too late just so our time zones can overlap for an hour.",
    "The voice memos you send instead of texting when you have too much to say.",
    "How you still get excited to show me the view out of whatever window you're at.",
    "The way you narrate your whole day to me like I was there for it.",
    "How you learned my group chat's inside jokes without ever meeting them.",
    "The playlists you make me that somehow always match exactly how I'm feeling.",
    "How you never once made the distance my fault or yours.",
    "The way you fall asleep on video call mid-sentence and I just let you.",
    "How you remember every layover, every flight number, every countdown.",
    "The way 'I miss you' never gets old, no matter how many times you say it.",
    "How you make a new city feel less lonely just by texting me from it.",
    "The way you still get nervous before I see your face on a call.",
    "How you plan our next trip together before we've even finished this one.",
    "The way you send selfies with no context except that you're thinking of me.",
    "How you learned to say goodnight in whatever time zone I'm sleeping in.",
    "The way you keep every boarding pass like it's a souvenir.",
    "How you never let a bad connection ruin a good conversation.",
    "The way you say 'come here' and mean it, even from a thousand miles off.",
    "How you make ordinary Tuesdays feel like events, just by calling.",
    "The way you get genuinely thrilled about my boring errands, just to hear my voice.",
    "How you never once made me feel far away, even when you were.",
    "The way you've turned waiting for me into its own kind of love language.",
    "How you keep receipts, ticket stubs, and playlists like a scrapbook of us.",
    "The way you say my name different than everyone else does.",
    "How you make me believe distance is just a detail, not a deal-breaker.",
    "The way you've grown into exactly the person I fell for, and then some.",
    "How you make turning thirty sound like the start of something, not the end.",
    "The way you love loud, even through a screen.",
    "How every version of you, close or far, I have loved completely."
  ],

  // 5-7 milestones for the "Liner Notes" track. "time" is styled like a
  // track timestamp (any short label works: "0:00", a season, etc).
  TIMELINE: [
    {
      time: '0:00',
      date: 'The Beginning',
      title: 'The Day We Matched',
      text: "A profile, a bad opening line, and a reply that came back faster than either of us expected. Neither of us planned on this turning into a whole life."
    },
    {
      time: '1:24',
      date: 'Three Weeks In',
      title: 'The Call That Lasted Till 3AM',
      text: "We said 'okay, one more thing' about six times. I fell asleep with my phone still lit up on the pillow next to me."
    },
    {
      time: '2:47',
      date: 'First Visit',
      title: 'The Flight I Booked Without Overthinking It',
      text: "Twelve hours in the air just to see your face for four days. Worth every layover, every terrible airport coffee."
    },
    {
      time: '3:15',
      date: 'A Year In',
      title: 'The Trip We Finally Took Together',
      text: "Not visiting each other for once — actually going somewhere new, side by side, like people who live in the same city do."
    },
    {
      time: '3:52',
      date: 'Somewhere In Between',
      title: 'Every Ordinary Video Call',
      text: "No news, no big update, just your face on my screen while you made dinner or I did laundry. Those are the ones I replay the most."
    },
    {
      time: '4:00',
      date: 'Today',
      title: 'Your 30th, From Far Away',
      text: "I hate that I'm not there to hand you a cake in person. But you're turning thirty on the other side of some distance I'm counting down every day, and I wanted you to have this anyway."
    }
  ],

  // The "voice memo" transcript — the love letter, written for the fact that
  // she's traveling and away specifically on her birthday.
  LOVE_LETTER:
`Hey, it's me.

I know today's supposed to be the day I show up with a cake and terrible singing and you pretending to be embarrassed about it. I hate that I can't do that this year — that you're waking up thirty in a place I'm not, on a day I wanted so badly to be there for.

But I've been thinking about you all day anyway, from wherever I am, same as always. Thirty looks like it's going to be a good one on you. I've watched you grow into someone braver and funnier and more exactly yourself every single year I've known you, and I don't think distance has slowed any of that down — if anything, it's taught us both how to love someone properly even when they're not in the room.

So here's a playlist instead of a cake. Here's thirty reasons instead of a card. Here's everything I'd be saying out loud right now if the time zones lined up.

Happy 30th, from wherever you're reading this. I'm not there yet. But I will be soon, and I already can't wait.

Yours, from far away — for now.`,

  // 6-8 photos for "The Album Booklet". "src" points into images/ (see
  // images/README.txt). If a file isn't there yet, a graceful placeholder
  // shows instead of a broken image — safe to launch with zero real photos.
  PHOTOS: [
    { src: 'images/photo1.jpg', caption: 'First video call, terrible wifi, best four hours' },
    { src: 'images/photo2.jpg', caption: 'The layover selfie before the first visit' },
    { src: 'images/photo3.jpg', caption: 'That trip we actually took together' },
    { src: 'images/photo4.jpg', caption: 'Your view, sent with no caption needed' },
    { src: 'images/photo5.jpg', caption: 'Falling asleep mid-call, again' },
    { src: 'images/photo6.jpg', caption: 'The airport reunion hug' },
    { src: 'images/photo7.jpg', caption: 'A random Tuesday, screenshotted anyway' },
    { src: 'images/photo8.jpg', caption: 'Us, on whatever screen was between us' }
  ]

};

/* ============================================================================
   END CONFIG — page behavior below. Reads from CONFIG above. No need to
   edit past this point unless you want to change how something behaves.
   ============================================================================ */

(function () {
  'use strict';

  const CANDLE_COUNT = 1;
  let candlesRemaining = CANDLE_COUNT;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    renderCover();
    renderCandles();
    renderTranscript();
    renderBooklet();
    renderOutro();

    setupLiveClock();
    setupPressPlay();
    setupCandles();
    setupVoiceMemo();
    setupMiniPlayer();
    setupBackgroundMusic();
    setupAmbientConfetti();
  }

  /* ---------------------------- Ambient confetti ---------------------------- */
  // The same confetti-js (by Daniel Lundin, MIT) canvas effect used in
  // birthday-counter/ — continuously falling pieces on a full-viewport
  // canvas, driven entirely by confetti.min.js's ConfettiGenerator.
  function setupAmbientConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas || !window.ConfettiGenerator) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const confetti = new window.ConfettiGenerator({
      target: 'confetti-canvas',
      max: 60,
      size: 1,
      // Tinted to match the page's own palette (coral, tangerine, mint,
      // gold) instead of the library's default purple/pink/cyan.
      colors: [[255, 107, 94], [255, 179, 71], [31, 174, 107], [255, 214, 138]]
    });
    confetti.render();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  /* ---------------------------- Cover ---------------------------- */
  function renderCover() {
    const title = document.getElementById('cover-title');
    if (title) title.textContent = `${CONFIG.HER_NAME}'s 30th`;
  }

  function setupLiveClock() {
    const el = document.getElementById('live-clock-text');
    if (!el) return;
    function tick() {
      const now = new Date();
      const time = now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
      const date = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
      el.textContent = `${date} · ${time}, right now`;
    }
    tick();
    setInterval(tick, 15000);
  }

  function setupPressPlay() {
    const btn = document.getElementById('press-play');
    if (!btn) return;
    btn.addEventListener('click', () => {
      startMusic();
      const first = document.getElementById('track-01');
      if (first) first.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------------------------- Candles / wish ---------------------------- */
  function renderCandles() {
    const holder = document.getElementById('candles');
    if (!holder) return;
    holder.innerHTML = '';
    for (let i = 0; i < CANDLE_COUNT; i++) {
      const candle = document.createElement('button');
      candle.className = 'candle';
      candle.type = 'button';
      candle.setAttribute('aria-label', 'Blow out candle ' + (i + 1));
      candle.innerHTML = `
        <span class="flame" aria-hidden="true"></span>
        <span class="wick" aria-hidden="true"></span>
        <span class="wax" aria-hidden="true"></span>
      `;
      candle.addEventListener('click', () => extinguishCandle(candle));
      holder.appendChild(candle);
    }
  }

  function setupCandles() {
    const blowAllBtn = document.getElementById('blow-all-btn');
    if (blowAllBtn) {
      blowAllBtn.addEventListener('click', () => {
        const lit = document.querySelectorAll('.candle:not(.out)');
        lit.forEach((c, idx) => setTimeout(() => extinguishCandle(c), idx * 170));
      });
    }
  }

  function extinguishCandle(candleEl) {
    if (candleEl.classList.contains('out')) return;
    candleEl.classList.add('out');
    burstConfetti(candleEl);
    candlesRemaining = Math.max(0, candlesRemaining - 1);
    if (candlesRemaining === 0) {
      const msg = document.getElementById('wish-message');
      if (msg) {
        msg.textContent = 'Wish made. Here’s to thirty, from wherever I am. ✨';
        msg.classList.add('visible');
      }
    }
  }

  function burstConfetti(originEl) {
    const stage = document.getElementById('confetti-stage');
    if (!stage || !originEl) return;
    const rect = originEl.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const originX = rect.left - stageRect.left + rect.width / 2;
    const originY = rect.top - stageRect.top + rect.height / 2;
    const COLORS = ['#ff6b5e', '#ffb347', '#6ee7b7', '#fff6ef'];

    for (let i = 0; i < 14; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 70;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance - 30;
      const size = 4 + Math.random() * 5;
      piece.style.left = originX + 'px';
      piece.style.top = originY + 'px';
      piece.style.width = size + 'px';
      piece.style.height = size * (Math.random() > 0.5 ? 1 : 2.2) + 'px';
      piece.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      piece.style.setProperty('--dx', x + 'px');
      piece.style.setProperty('--dy', y + 'px');
      piece.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      stage.appendChild(piece);
      piece.addEventListener('animationend', () => piece.remove());
      setTimeout(() => piece.remove(), 1600);
    }
  }

  /* ---------------------------- Voice memo (letter) ---------------------------- */
  function renderTranscript() {
    const body = document.getElementById('transcript-body');
    if (!body) return;
    const paragraphs = CONFIG.LOVE_LETTER.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    body.innerHTML = paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join('');
  }

  function setupVoiceMemo() {
    const memo = document.getElementById('voice-memo');
    const transcript = document.getElementById('voice-memo-transcript');
    if (!memo || !transcript) return;
    memo.addEventListener('click', () => {
      const expanded = memo.classList.toggle('expanded');
      memo.setAttribute('aria-expanded', String(expanded));
      transcript.classList.toggle('revealed', expanded);
    });
  }

  /* ---------------------------- Album booklet (photos) ---------------------------- */
  function renderBooklet() {
    const grid = document.getElementById('booklet-grid');
    if (!grid) return;
    grid.innerHTML = '';
    CONFIG.PHOTOS.forEach((photo) => {
      const fig = document.createElement('figure');
      fig.className = 'booklet-photo';
      fig.innerHTML = `
        <img class="booklet-photo-img" src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.caption)}" loading="lazy">
        <div class="booklet-photo-fallback" aria-hidden="true">&#9825;</div>
        <figcaption class="booklet-caption">${escapeHTML(photo.caption)}</figcaption>
      `;
      const img = fig.querySelector('.booklet-photo-img');
      img.addEventListener('error', () => fig.classList.add('image-missing'));
      grid.appendChild(fig);
    });
  }

  /* ---------------------------- Outro ---------------------------- */
  function renderOutro() {
    const sig = document.getElementById('outro-signature');
    if (sig) sig.textContent = `With all my love, ${CONFIG.YOUR_NAME}`;
  }

  /* ---------------------------- Mini player: scroll-spy + scrub ---------------------------- */
  function setupMiniPlayer() {
    const scrubFill = document.getElementById('mini-player-scrub-fill');
    const trackLabel = document.getElementById('mini-player-track');
    const nameLabel = document.getElementById('mini-player-name');
    const sections = Array.from(document.querySelectorAll('.track'));
    if (!scrubFill) return;

    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      scrubFill.style.width = (progress * 100) + '%';

      let current = sections[0];
      const viewportMid = scrollTop + window.innerHeight * 0.4;
      sections.forEach((sec) => {
        if (sec.offsetTop <= viewportMid) current = sec;
      });
      if (current && trackLabel && nameLabel) {
        const idx = sections.indexOf(current) + 1;
        trackLabel.textContent = 'Track ' + String(idx).padStart(2, '0');
        nameLabel.textContent = current.dataset.trackName || '';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================================
     BACKGROUND MUSIC — "White" by Kevin MacLeod (incompetech.com), CC BY 4.0
     (see audio/README.txt for the required attribution). Plays via the
     plain <audio> element directly — no Web Audio API graph, no visible
     widget, nothing that depends on a third party's iframe rendering or
     ad-blocker rules. Volume swells gently as she scrolls further into the
     page instead, no audio graph required for that at all.

     Browsers hard-block all audio from starting with zero user interaction
     first — there's no way around that, by design, in every modern browser.
     So this starts on her first tap/click/keypress. The mini-player button
     is the manual play/pause toggle once it's going.
     ============================================================================ */
  let musicStarted = false;
  let musicPlaying = false;
  const BASE_VOLUME = 0.55;
  const MAX_VOLUME = 0.85;

  function startMusic() {
    startAmbience();
  }

  function setMusicPlayingState(isPlaying) {
    const miniBtn = document.getElementById('mini-player-btn');
    const pressBtn = document.getElementById('press-play');
    const pressLabel = document.getElementById('press-play-label');
    if (miniBtn) {
      miniBtn.classList.toggle('playing', isPlaying);
      miniBtn.setAttribute('aria-pressed', String(isPlaying));
      miniBtn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
    }
    if (pressBtn) pressBtn.classList.toggle('is-playing', isPlaying);
    if (pressLabel) pressLabel.textContent = isPlaying ? 'Now playing' : 'Press play';
  }

  function startAmbience() {
    const audioEl = document.getElementById('bg-audio');
    if (!audioEl) return;

    audioEl.volume = BASE_VOLUME;
    const playPromise = audioEl.play();
    if (playPromise && playPromise.then) {
      playPromise.then(() => {
        musicStarted = true;
        musicPlaying = true;
        setMusicPlayingState(true);
        updateAmbienceForScroll();
      }).catch(() => {
        // Blocked — the gesture that called this should normally prevent
        // this, but if it happens there's nothing more to do than leave
        // the mini-player showing "not playing" so she can tap it herself.
        setMusicPlayingState(false);
      });
    }
  }

  function pauseAmbience() {
    const audioEl = document.getElementById('bg-audio');
    if (!audioEl || !musicPlaying) return;
    audioEl.pause();
    musicPlaying = false;
    setMusicPlayingState(false);
  }

  function resumeAmbience() {
    const audioEl = document.getElementById('bg-audio');
    if (!audioEl || musicPlaying) return;
    audioEl.play().then(() => {
      musicPlaying = true;
      setMusicPlayingState(true);
    }).catch(() => {});
  }

  // Swells the volume gently as she scrolls further into the page, so it's
  // not just a flat loop — the "ambience as she scrolls" bit, done with
  // nothing more than audioEl.volume (no separate audio graph to fail).
  function updateAmbienceForScroll() {
    const audioEl = document.getElementById('bg-audio');
    if (!audioEl || !musicPlaying) return;
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    audioEl.volume = BASE_VOLUME + progress * (MAX_VOLUME - BASE_VOLUME);
  }

  function setupBackgroundMusic() {
    const miniBtn = document.getElementById('mini-player-btn');

    window.addEventListener('scroll', updateAmbienceForScroll, { passive: true });

    if (miniBtn) {
      miniBtn.addEventListener('click', () => {
        if (!musicStarted) { startAmbience(); return; }
        musicPlaying ? pauseAmbience() : resumeAmbience();
      });
    }

    // Starts on her first tap/click/keypress. Browsers specifically do NOT
    // count scroll or wheel events as a "real" user gesture for unlocking
    // audio — only a genuine tap, click, or keypress does — so those are
    // deliberately left out here even though the goal is "as she scrolls".
    // In practice this still fires almost immediately: on a phone, the very
    // touch that starts a scroll gesture (touchstart) qualifies, so this
    // starts right as she begins scrolling. On a trackpad/mouse with no
    // click yet, it starts the moment she clicks or taps anything at all.
    const firstInteractionEvents = ['pointerdown', 'touchstart', 'keydown', 'click'];
    function onFirstInteraction() {
      startAmbience();
      firstInteractionEvents.forEach((evt) => window.removeEventListener(evt, onFirstInteraction));
    }
    firstInteractionEvents.forEach((evt) => window.addEventListener(evt, onFirstInteraction, { passive: true }));

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pauseAmbience();
      else if (musicStarted) resumeAmbience();
    });
  }

  /* ---------------------------- Mic "blow to extinguish" ---------------------------- */
  (function setupMicBlow() {
    document.addEventListener('DOMContentLoaded', () => {
      const micBtn = document.getElementById('mic-blow-btn');
      const levelFill = document.getElementById('mic-level-fill');
      const hint = document.getElementById('mic-hint');
      if (!micBtn) return;

      const LIT_SELECTOR = '.candle:not(.out)';
      const SUPPORTED = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia &&
        (window.AudioContext || window.webkitAudioContext));
      if (!SUPPORTED) { micBtn.hidden = true; return; }

      const MIN_THRESHOLD = 0.025;
      const MAX_THRESHOLD = 0.35;
      const THRESHOLD_MULTIPLIER = 1.5;
      const CALIBRATION_MS = 500;
      const BLOW_COOLDOWN_MS = 550;

      let audioCtx = null, analyser = null, stream = null, rafId = null;
      let listening = false, calibrating = false, lastBlowAt = 0;
      let blowThreshold = MIN_THRESHOLD;

      micBtn.addEventListener('click', () => { listening ? stopListening() : startListening(); });

      function setLabel(text) {
        const label = micBtn.querySelector('.mic-label');
        if (label) label.textContent = text;
      }

      function startListening() {
        micBtn.disabled = true;
        navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
        }).then((mediaStream) => {
          stream = mediaStream;
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          analyser = audioCtx.createAnalyser();
          analyser.fftSize = 512;
          audioCtx.createMediaStreamSource(stream).connect(analyser);

          listening = true;
          calibrating = true;
          blowThreshold = MIN_THRESHOLD;
          micBtn.disabled = false;
          micBtn.classList.add('listening');
          setLabel('Calibrating… give it a second');
          if (hint) hint.hidden = false;

          monitor();
        }).catch(() => {
          micBtn.disabled = false;
          setLabel('Mic unavailable — tap candles instead');
          setTimeout(() => { micBtn.hidden = true; }, 2600);
        });
      }

      function stopListening() {
        listening = false;
        calibrating = false;
        if (rafId) cancelAnimationFrame(rafId);
        if (stream) stream.getTracks().forEach((t) => t.stop());
        if (audioCtx) audioCtx.close();
        audioCtx = null;
        stream = null;
        micBtn.classList.remove('listening');
        setLabel('Blow into your mic');
        if (levelFill) levelFill.style.width = '0%';
        if (hint) hint.hidden = true;
      }

      function monitor() {
        const data = new Uint8Array(analyser.fftSize);
        let smoothedRms = 0;
        let calibrationSum = 0;
        let calibrationCount = 0;
        const calibrationStart = performance.now();

        function tick() {
          if (!listening) return;
          analyser.getByteTimeDomainData(data);
          let sumSquares = 0;
          for (let i = 0; i < data.length; i++) {
            const v = (data[i] - 128) / 128;
            sumSquares += v * v;
          }
          const rms = Math.sqrt(sumSquares / data.length);
          smoothedRms = rms > smoothedRms ? rms : smoothedRms * 0.85 + rms * 0.15;

          const now = performance.now();

          if (calibrating) {
            calibrationSum += rms;
            calibrationCount++;
            if (now - calibrationStart >= CALIBRATION_MS) {
              calibrating = false;
              const noiseFloor = calibrationCount ? calibrationSum / calibrationCount : 0;
              blowThreshold = Math.min(MAX_THRESHOLD, Math.max(MIN_THRESHOLD, noiseFloor * THRESHOLD_MULTIPLIER));
              setLabel('Listening… blow now! (tap to stop)');
            }
            rafId = requestAnimationFrame(tick);
            return;
          }

          if (levelFill) {
            levelFill.style.width = Math.min(100, Math.round((smoothedRms / blowThreshold) * 100)) + '%';
          }

          if (smoothedRms > blowThreshold && now - lastBlowAt > BLOW_COOLDOWN_MS) {
            lastBlowAt = now;
            blowNextCandle();
          }
          rafId = requestAnimationFrame(tick);
        }
        rafId = requestAnimationFrame(tick);
      }

      function blowNextCandle() {
        const next = document.querySelector(LIT_SELECTOR);
        if (!next) { stopListening(); return; }
        next.click();
        if (!document.querySelector(LIT_SELECTOR)) stopListening();
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden && listening) stopListening();
      });
    });
  })();

  /* ---------------------------- Utils ---------------------------- */
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
  }

})();
