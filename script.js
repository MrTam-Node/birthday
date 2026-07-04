/* ============================================================================
   HAPPY 30TH BIRTHDAY — a quiet, minimal surprise reveal
   ----------------------------------------------------------------------------
   Everything you'd want to personalize lives in the CONFIG object below.
   Edit the values and save — the rest of this file just reads from it, so
   you shouldn't need to touch any code below "END CONFIG".

   The flow: an opening (music starts softly), a personal message, a tease
   that builds anticipation without revealing anything, an unrevealed
   "surprise" line, then a closing that hints there's more to come. She
   already knows about dinner — this page is about what happens after.
   ============================================================================ */

const CONFIG = {
  // Personal message — a few short lines, kept intimate rather than long.
  MESSAGE_LINES: [
    "Today, of all days, I wish I could be the one hugging you right now.",
    "Since I can't, I've spent the day thinking about how to make tonight feel like I am anyway.",
    "You've spent thirty years becoming exactly who you are, and I love every version of you along the way.",
    "So here's something small, from far away."
  ],

  // The tease — builds anticipation without spoiling anything. She already
  // knows where dinner is; this is about what comes after.
  TEASE_LINES: [
    "I know you already know where dinner is tonight.",
    "But there's one more surprise waiting for you.",
    "At the end of your meal — don't leave just yet.",
    "Save a little room for dessert."
  ],

  // The surprise stays unrevealed on purpose — she won't know what this
  // means until dessert actually arrives.
  SURPRISE_LINE: "I hope tonight reminds you just how loved you are, even from miles away.",

  // Closing — hints the birthday isn't over yet.
  CLOSING_LINE: "This isn't the last surprise… ♥",
  CLOSING_SUB: "Happy 30th, my love."
};

/* ============================================================================
   END CONFIG — page behavior below. Reads from CONFIG above. No need to
   edit past this point unless you want to change how something behaves.
   ============================================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  const CANDLE_COUNT = 1;

  function init() {
    renderContent();
    renderCandles();
    setupLiveClock();
    setupPressPlay();
    setupCandles();
    setupMiniPlayer();
    setupBackgroundMusic();
    setupAmbientConfetti();
    setupScreenReveals();
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
    // No "blow them all out" button with a single candle — tapping the
    // one candle already does the same thing.
  }

  function extinguishCandle(candleEl) {
    if (candleEl.classList.contains('out')) return;
    candleEl.classList.add('out');
    burstConfetti(candleEl);
    const msg = document.getElementById('wish-message');
    if (msg) {
      msg.textContent = 'Wish made. ✨';
      msg.classList.add('visible');
    }
  }

  function burstConfetti(originEl) {
    const stage = document.getElementById('confetti-stage');
    if (!stage || !originEl) return;
    const rect = originEl.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const originX = rect.left - stageRect.left + rect.width / 2;
    const originY = rect.top - stageRect.top + rect.height / 2;
    const COLORS = ['#ff6b5e', '#ffb347', '#1fae6b', '#fff6ef'];

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

  /* ---------------------------- Content ---------------------------- */
  function renderContent() {
    const message = document.getElementById('message-text');
    if (message) message.innerHTML = CONFIG.MESSAGE_LINES.map(escapeHTML).join('<br><br>');

    const tease = document.getElementById('tease-text');
    if (tease) tease.innerHTML = CONFIG.TEASE_LINES.map(escapeHTML).join('<br><br>');

    const surprise = document.getElementById('surprise-text');
    if (surprise) surprise.textContent = CONFIG.SURPRISE_LINE;

    const closingSig = document.getElementById('outro-signature');
    if (closingSig) closingSig.textContent = CONFIG.CLOSING_LINE;

    const closingSub = document.getElementById('outro-sub');
    if (closingSub) closingSub.textContent = CONFIG.CLOSING_SUB;
  }

  /* ---------------------------- Gentle fade-in as each beat scrolls into view ---------------------------- */
  function setupScreenReveals() {
    const beats = document.querySelectorAll('.track, .outro');
    if (!('IntersectionObserver' in window)) {
      beats.forEach((el) => el.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    beats.forEach((el) => observer.observe(el));
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

  /* ---------------------------- Live clock ---------------------------- */
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

  /* ---------------------------- Press play ---------------------------- */
  function setupPressPlay() {
    const btn = document.getElementById('press-play');
    if (!btn) return;
    btn.addEventListener('click', () => {
      startMusic();
      const first = document.getElementById('section-wish');
      if (first) first.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------------------------- Mini player: scroll-spy + scrub ---------------------------- */
  function setupMiniPlayer() {
    const scrubFill = document.getElementById('mini-player-scrub-fill');
    const trackLabel = document.getElementById('mini-player-track');
    const nameLabel = document.getElementById('mini-player-name');
    const sections = Array.from(document.querySelectorAll('.track, .outro'));
    if (!scrubFill) return;

    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
      scrubFill.style.width = (progress * 100) + '%';

      let current = null;
      const viewportMid = scrollTop + window.innerHeight * 0.4;
      sections.forEach((sec) => {
        if (sec.offsetTop <= viewportMid) current = sec;
      });
      if (current && trackLabel && nameLabel) {
        const idx = sections.indexOf(current) + 2; // +2: opening counts as 01
        trackLabel.textContent = String(idx).padStart(2, '0');
        nameLabel.textContent = current.dataset.trackName || '';
      } else if (trackLabel && nameLabel) {
        trackLabel.textContent = '01';
        nameLabel.textContent = 'Opening';
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

     This exact block is unchanged from the previously verified-working
     version.
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
