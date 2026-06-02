const SESSION_KEY = 'portfolio-books-access';
const SESSION_HOURS = 12;

async function sha256(text) {
  const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function getExpectedHash() {
  return (window.BOOK_ACCESS_SHA256 || '').trim().toLowerCase();
}

function isConfigured() {
  return getExpectedHash().length === 64;
}

function isUnlocked() {
  if (!isConfigured()) return false;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const { exp, hash } = JSON.parse(raw);
    if (Date.now() > exp) {
      sessionStorage.removeItem(SESSION_KEY);
      return false;
    }
    return hash === getExpectedHash();
  } catch {
    return false;
  }
}

function unlockSession() {
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      exp: Date.now() + SESSION_HOURS * 60 * 60 * 1000,
      hash: getExpectedHash(),
    })
  );
}

function lockSession() {
  sessionStorage.removeItem(SESSION_KEY);
  stripBookImages();
}

function loadBookImages(root = document) {
  root.querySelectorAll('img[data-src]').forEach((img) => {
    if (!img.getAttribute('src')) {
      img.setAttribute('src', img.dataset.src);
      img.removeAttribute('data-src');
    }
  });
}

function stripBookImages(root = document) {
  root.querySelectorAll('#books-protected img[src]').forEach((img) => {
    if (!img.dataset.src && img.getAttribute('src')) {
      img.dataset.src = img.getAttribute('src');
    }
    img.removeAttribute('src');
  });
}

async function verifyPassword(password) {
  if (!isConfigured()) return false;
  const hash = await sha256(password);
  return hash === getExpectedHash();
}

function setGateVisible(showGate) {
  const gate = document.getElementById('books-gate');
  const content = document.getElementById('books-protected');
  if (gate) {
    gate.hidden = !showGate;
    gate.setAttribute('aria-hidden', showGate ? 'false' : 'true');
  }
  if (content) {
    content.hidden = showGate;
    content.setAttribute('aria-hidden', showGate ? 'true' : 'false');
  }
}

function updateUI() {
  const unlocked = isUnlocked();
  setGateVisible(!unlocked);
  const lockBtn = document.getElementById('books-lock-btn');
  if (lockBtn) lockBtn.hidden = !unlocked;
  if (unlocked) {
    loadBookImages(document.getElementById('books-protected'));
    document.dispatchEvent(new CustomEvent('books-unlocked'));
  } else {
    stripBookImages(document.getElementById('books-protected'));
  }
}

async function handleGateSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector('input[type="password"]');
  const errorEl = document.getElementById('books-gate-error');
  const password = input?.value || '';

  if (!isConfigured()) {
    if (errorEl) {
      errorEl.textContent = window.portfolioI18n
        ? window.portfolioI18n.t('books.gate.notConfigured')
        : 'Accès non configuré.';
    }
    return;
  }

  const ok = await verifyPassword(password);
  if (ok) {
    unlockSession();
    input.value = '';
    if (errorEl) errorEl.textContent = '';
    updateUI();
  } else if (errorEl) {
    errorEl.textContent = window.portfolioI18n
      ? window.portfolioI18n.t('books.gate.wrongPassword')
      : 'Mot de passe incorrect.';
    input?.focus();
  }
}

function initBookAccess() {
  const form = document.getElementById('books-gate-form');
  form?.addEventListener('submit', handleGateSubmit);

  document.getElementById('books-lock-btn')?.addEventListener('click', () => {
    lockSession();
    updateUI();
    document.getElementById('books-gate')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  updateUI();
}

document.addEventListener('DOMContentLoaded', initBookAccess);

window.portfolioBookAccess = {
  sha256,
  isUnlocked,
  isConfigured,
  lockSession,
  updateUI,
  async hashPassword(password) {
    const hash = await sha256(password);
    console.log('Ajoutez dans src/js/book-access.config.js :\nwindow.BOOK_ACCESS_SHA256 = "' + hash + '";');
    return hash;
  },
};
