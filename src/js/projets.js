let projetsInitialized = false;

function getImageUrl(img) {
  return img.getAttribute('src') || img.dataset.src || '';
}

function t(key, vars) {
  let text = window.portfolioI18n ? window.portfolioI18n.t(key) : key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, String(v));
    });
  }
  return text;
}

function createBookViewer(lightbox) {
  const titleEl = lightbox.querySelector('.lightbox-title');
  const counterEl = lightbox.querySelector('.lightbox-counter');
  const noticeEl = lightbox.querySelector('.lightbox-notice');
  const emptyEl = lightbox.querySelector('.lightbox-empty-state');
  const viewerEl = lightbox.querySelector('.lightbox-viewer');
  const stageEl = lightbox.querySelector('.lightbox-stage');
  const photoEl = lightbox.querySelector('.lightbox-photo');
  const progressEl = lightbox.querySelector('.lightbox-progress');
  const progressFill = lightbox.querySelector('.lightbox-progress-fill');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let urls = [];
  let index = 0;
  let touchStartX = 0;

  function setMode(mode) {
    const isViewer = mode === 'viewer';
    emptyEl.hidden = mode !== 'empty';
    viewerEl.hidden = !isViewer;
    progressEl.hidden = !isViewer;
    lightbox.classList.toggle('book-lightbox--viewer', isViewer);
  }

  function updateCounter() {
    if (!urls.length) {
      counterEl.textContent = '';
      return;
    }
    counterEl.textContent = t('projets.lightbox.counter', {
      current: index + 1,
      total: urls.length,
    });
    progressFill.style.width = `${((index + 1) / urls.length) * 100}%`;
  }

  function updateNav() {
    const disabled = urls.length <= 1;
    prevBtn.disabled = disabled;
    nextBtn.disabled = disabled;
  }

  function preloadAdjacent() {
    [-1, 1].forEach((delta) => {
      const i = index + delta;
      if (i < 0 || i >= urls.length) return;
      const img = new Image();
      img.src = urls[i];
    });
  }

  function showPhoto(direction) {
    if (!urls.length) return;

    photoEl.classList.remove('is-visible', 'is-entering-next', 'is-entering-prev');
    if (direction === 'next') photoEl.classList.add('is-entering-next');
    else if (direction === 'prev') photoEl.classList.add('is-entering-prev');

    const src = urls[index];
    const loader = new Image();
    loader.onload = () => {
      photoEl.src = src;
      photoEl.classList.remove('is-entering-next', 'is-entering-prev');
      requestAnimationFrame(() => {
        photoEl.classList.add('is-visible');
      });
      preloadAdjacent();
    };
    loader.onerror = () => {
      photoEl.classList.remove('is-entering-next', 'is-entering-prev');
      photoEl.classList.add('is-visible');
    };
    loader.src = src;

    updateCounter();
    updateNav();
  }

  function goTo(newIndex, direction) {
    if (!urls.length) return;
    index = (newIndex + urls.length) % urls.length;
    showPhoto(direction);
  }

  function next() {
    goTo(index + 1, 'next');
  }

  function prev() {
    goTo(index - 1, 'prev');
  }

  function open({ title, images, rawNotice }) {
    urls = images;
    index = 0;
    titleEl.textContent = title;
    noticeEl.innerHTML = '';
    emptyEl.innerHTML = '';

    if (!urls.length) {
      setMode('empty');
      const empty = document.createElement('p');
      empty.className = 'lightbox-empty';
      empty.textContent = t('projets.emptyBook');
      const hint = document.createElement('p');
      hint.className = 'lightbox-empty-hint';
      hint.textContent = t('projets.emptyBookHint');
      emptyEl.append(empty, hint);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.focus();
      document.body.style.overflow = 'hidden';
      return;
    }

    if (rawNotice) {
      const notice = document.createElement('p');
      notice.className = 'lightbox-status-notice';
      notice.textContent = rawNotice;
      noticeEl.appendChild(notice);
      noticeEl.hidden = false;
    } else {
      noticeEl.hidden = true;
    }

    setMode('viewer');
    showPhoto();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.focus();
    document.body.style.overflow = 'hidden';
  }

  function close() {
    urls = [];
    index = 0;
    photoEl.removeAttribute('src');
    photoEl.classList.remove('is-visible', 'is-entering-next', 'is-entering-prev');
    noticeEl.innerHTML = '';
    noticeEl.hidden = true;
    emptyEl.innerHTML = '';
    emptyEl.hidden = true;
    viewerEl.hidden = true;
    progressEl.hidden = true;
    lightbox.classList.remove('open', 'book-lightbox--viewer');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prev();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    next();
  });

  stageEl.addEventListener('click', (e) => {
    if (viewerEl.hidden) return;
    const rect = stageEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.35) prev();
    else if (x > rect.width * 0.65) next();
  });

  stageEl.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  stageEl.addEventListener(
    'touchend',
    (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(dx) < 48) return;
      if (dx < 0) next();
      else prev();
    },
    { passive: true }
  );

  lightbox.tabIndex = -1;
  lightbox.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open') || viewerEl.hidden) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  });

  return { open, close, next, prev };
}

let bookViewer = null;

function initProjetsInteractions() {
  if (projetsInitialized) return;
  projetsInitialized = true;

  const lightbox = document.getElementById('book-lightbox');

  const photoGrid = document.querySelector('.photo-books-grid');
  const videoSection = document.getElementById('video-section');
  const booksProtected = document.getElementById('books-protected');

  function applyBookFilter(filter) {
    const isVideo = filter === 'video';
    const isPhotoCategory = filter !== 'video' && filter !== 'all';

    if (photoGrid) photoGrid.classList.toggle('filter-hidden', isVideo);
    if (videoSection) {
      videoSection.classList.toggle('filter-hidden', isPhotoCategory);
      if (isVideo) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (isVideo) return;

    if (booksProtected?.hidden && filter !== 'all') return;

    document.querySelectorAll('.photo-book').forEach((book) => {
      const cats = book.dataset.category || '';
      const show = filter === 'all' || cats.includes(filter);
      book.classList.toggle('hidden', !show);
    });
  }

  document.querySelectorAll('.filter-chip:not(.books-lock-btn)').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip:not(.books-lock-btn)').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      applyBookFilter(chip.dataset.filter);
    });
  });

  if (window.location.hash === '#video-section') {
    document.querySelector('.filter-chip[data-filter="video"]')?.click();
  }

  if (!lightbox) return;

  bookViewer = createBookViewer(lightbox);

  document.querySelectorAll('.book-open-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!window.portfolioBookAccess?.isUnlocked()) return;

      const book = btn.closest('.photo-book');
      if (!book) return;

      const title = book.querySelector('.book-info h2')?.textContent || '';
      const imgs = book.querySelectorAll('.book-spreads img[data-src], .book-spreads img[src]');
      const images = Array.from(imgs).map(getImageUrl).filter(Boolean);
      const rawNotice =
        book.dataset.bookStatus === 'raw' ? t('projets.lightboxRawNotice') : null;

      bookViewer.open({ title, images, rawNotice });
    });
  });

  lightbox.querySelector('.lightbox-close')?.addEventListener('click', () => bookViewer.close());
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) bookViewer.close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      bookViewer.close();
    }
  });

  window.onLangChange = function () {
    if (!lightbox.classList.contains('open') || !bookViewer) return;
    const counterEl = lightbox.querySelector('.lightbox-counter');
    if (counterEl.textContent) {
      const match = counterEl.textContent.match(/(\d+)\s*\/\s*(\d+)/);
      if (match) {
        counterEl.textContent = t('projets.lightbox.counter', {
          current: match[1],
          total: match[2],
        });
      }
    }
  };
}

function bootProjets() {
  initProjetsInteractions();
}

document.addEventListener('DOMContentLoaded', bootProjets);
