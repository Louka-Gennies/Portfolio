const BOOKS_IMG_BASE = './src/assets/images/books';

function bookFolder(id) {
  return `${BOOKS_IMG_BASE}/${id}`;
}

function applyBookStatus(book, status) {
  if (!status) return;

  book.classList.add(`photo-book--${status}`);
  book.dataset.bookStatus = status;

  const info = book.querySelector('.book-info');
  if (!info || info.querySelector('.book-status')) return;

  const statusEl = document.createElement('p');
  statusEl.className = 'book-status';
  statusEl.setAttribute('data-i18n', `projets.status.${status}`);
  const openBtn = info.querySelector('.book-open-btn');
  if (openBtn) {
    info.insertBefore(statusEl, openBtn);
  } else {
    info.appendChild(statusEl);
  }

  if (status === 'editing' && openBtn) {
    openBtn.hidden = true;
  }
}

function applyCover(book, coverFile) {
  const coverEl = book.querySelector('.book-cover');
  if (!coverEl || !coverFile) return;

  const id = book.dataset.bookId;
  const src = `${bookFolder(id)}/${coverFile}`;

  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.loading = 'lazy';

  const label = coverEl.querySelector('.book-cover-label');
  const hint = coverEl.querySelector('.book-cover-hint');
  if (label) label.remove();
  if (hint) hint.remove();

  coverEl.classList.remove('book-cover--placeholder');
  coverEl.insertBefore(img, coverEl.firstChild);
}

function applySpreads(book, pages) {
  const spreads = book.querySelector('.book-spreads');
  if (!spreads || !pages?.length) return;

  const id = book.dataset.bookId;
  const base = bookFolder(id);

  spreads.innerHTML = '';
  pages.forEach((file, i) => {
    const img = document.createElement('img');
    img.dataset.src = `${base}/${file}`;
    img.alt = '';
    img.loading = i < 4 ? 'eager' : 'lazy';
    spreads.appendChild(img);
  });
}

function initBookImages() {
  const manifest = window.portfolioBookImages;
  if (!manifest) return;

  document.querySelectorAll('.photo-book[data-book-id]').forEach((book) => {
    const id = book.dataset.bookId;
    const config = manifest[id];
    if (!config) return;

    if (config.status) {
      applyBookStatus(book, config.status);
    }

    if (config.cover) {
      applyCover(book, config.cover);
    }

    applySpreads(book, config.pages);
  });

  if (window.portfolioI18n?.applyTranslations) {
    window.portfolioI18n.applyTranslations(window.portfolioI18n.getLang());
  }
}

document.addEventListener('DOMContentLoaded', initBookImages);
