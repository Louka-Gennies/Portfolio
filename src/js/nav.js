const HOME_PATH = './home.html';
const SECTION_OFFSET = 80;

function isHomePage() {
  const path = window.location.pathname.toLowerCase();
  return path.endsWith('home.html') || path.endsWith('/') || path.endsWith('/portfolio/') || path.endsWith('/portfolio');
}

function scrollToSection(sectionId, behavior = 'smooth') {
  const el = document.getElementById(sectionId);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - SECTION_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

function navigate(event, url) {
  event.preventDefault();

  if (url.startsWith('#') || url.includes('#')) {
    const hashIndex = url.indexOf('#');
    const sectionId = url.slice(hashIndex + 1);
    if (!sectionId) return;
    if (isHomePage()) {
      scrollToSection(sectionId);
      history.replaceState(null, '', `#${sectionId}`);
      setActiveNavLink(sectionId);
    } else {
      sessionStorage.setItem('portfolio-scroll', sectionId);
      goWithOverlay(HOME_PATH + '#' + sectionId);
    }
    return;
  }

  const resolved = url.startsWith('/') ? '.' + url : url;
  goWithOverlay(resolved);
}

function goWithOverlay(url) {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  } else {
    window.location.href = url;
  }
}

function setActiveNavLink(sectionId) {
  const map = { about: 'about-link', contact: 'contact-link' };
  document.querySelectorAll('.nav-links a').forEach((a) => a.classList.remove('active'));
  if (sectionId === 'about' || sectionId === 'contact') {
    const id = map[sectionId];
    const link = document.getElementById(id);
    if (link) link.classList.add('active');
  } else if (isHomePage()) {
    const home = document.getElementById('home-link');
    if (home) home.classList.add('active');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setActiveNavLink('');
}

function handleIncomingScroll() {
  const hash = window.location.hash?.slice(1);
  const stored = sessionStorage.getItem('portfolio-scroll');
  const sectionId = hash || stored;
  if (!sectionId || !isHomePage()) return;

  sessionStorage.removeItem('portfolio-scroll');

  const run = () => {
    scrollToSection(sectionId, 'auto');
    setActiveNavLink(sectionId);
    if (hash) history.replaceState(null, '', `#${sectionId}`);
  };

  if (document.body.classList.contains('hidden')) {
    window.addEventListener('load', () => setTimeout(run, 100), { once: true });
  } else {
    setTimeout(run, 150);
  }
}

document.addEventListener('DOMContentLoaded', handleIncomingScroll);

window.portfolioNav = { navigate, scrollToTop, scrollToSection, isHomePage };
