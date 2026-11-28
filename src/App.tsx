import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ECO_STORAGE_KEYS, readEcoCookie, setEcoCookie, writeSessionPreference } from './clientStorage';
import {
  ArrowUpRight,
  AudioLines,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Github,
  House,
  Info,
  Instagram,
  ListMusic,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  ShieldCheck,
  Sun,
  UserPlus,
  X,
} from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import ContributionWeekEmbed from './components/ContributionWeekEmbed';
import PwaInstallButton from './components/PwaInstallButton';
import LanguageShowcase from './components/LanguageShowcase';
import GitHubFollowButton from './components/GitHubFollowButton';
import TimelineVideo from './components/TimelineVideo';
import TimelinePage from './TimelinePage';
import ProtectedUsersPage from './protectedUSERS_root_path_secure/ProtectedUsersPage';
import { PUBLIC_PLAYLIST } from './music/playlist';

const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

const PROFILE_URL = 'https://github.com/KhadijaChahmoud';
const REPOSITORIES_URL = 'https://github.com/KhadijaChahmoud?tab=repositories';
const INSTAGRAM_URL = 'https://www.instagram.com/khadija.chahmoud/';
const PROTECTED_USERS_URL = '/protectedUSERS_root_path_secure/';
const SOURCE_URL = 'https://github.com/KhadijaChahmoud/KhadijaChahmoud.github.io';

function EcoHeader({
  leftOpen,
  rightOpen,
  onToggleLeft,
  onToggleRight,
  onCloseSidebars,
}: {
  leftOpen: boolean;
  rightOpen: boolean;
  onToggleLeft: () => void;
  onToggleRight: () => void;
  onCloseSidebars: () => void;
}) {
  return (
    <header className="eco-header" onClick={(event) => {
      if (event.target instanceof Element && event.target.closest('button.toggle-button')) return;
      onCloseSidebars();
    }}>
      <div className="header-side">
        <button className="icon-button toggle-button" type="button" onClick={onToggleLeft} aria-label="Toggle navigation" aria-expanded={leftOpen} title="Toggle navigation (Ctrl+B)">
          {leftOpen ? <PanelLeftClose size={19} /> : <PanelLeftOpen size={19} />}
        </button>
        <a className="brand" href="/" aria-label="Khadija Chahmoud home"><span className="brand-mark">ECO</span><span className="brand-label">Khadija Chahmoud</span></a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about.html">About</a>
          <a href="/timeline.html">Timeline</a>
          <a href="/#languages">Languages</a>
          <a href={PUBLIC_PLAYLIST.length ? '/#listen' : '/#listen-section'}>Listen</a>
        </nav>
      </div>
      <div className="header-side header-side-right">
        <a className="header-link github-link" href={REPOSITORIES_URL} target="_blank" rel="noreferrer" aria-label="View all repositories on GitHub"><Github size={16} /><span>Repositories</span></a>
        <a className="icon-button toggle-button" href={SOURCE_URL} target="_blank" rel="noreferrer" aria-label="Open the Khadija Chahmoud portfolio repository" title="Portfolio source"><ArrowUpRight size={18} /></a>
        <a className="icon-button toggle-button" href={PROTECTED_USERS_URL} aria-label="Sign in with GitHub" title="Sign in with GitHub"><UserPlus size={19} /></a>
        <button className="icon-button toggle-button right-toggle" type="button" onClick={onToggleRight} aria-label="Toggle right sidebar" aria-expanded={rightOpen} title="Toggle right sidebar (Ctrl+M)">
          {rightOpen ? <PanelRightClose size={19} /> : <PanelRightOpen size={19} />}
        </button>
      </div>
    </header>
  );
}

function EcoLeftSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <button className="sidebar-backdrop left-backdrop" type="button" aria-label="Close navigation" onClick={onClose} />}
      <aside className={`left-sidebar ${open ? 'sidebar-open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-content">
          <div className="sidebar-section-label">Navigation</div>
          <nav className="sidebar-nav" aria-label="ECO pages">
            <a href="/" className="sidebar-link"><House size={18} /><span>Home</span><ChevronRight size={15} /></a>
            <a href="/about.html" className="sidebar-link"><Info size={18} /><span>About</span></a>
            <a href="/timeline.html" className="sidebar-link"><Clock3 size={18} /><span>Work timeline</span></a>
            <a href="/#languages" className="sidebar-link"><Code2 size={18} /><span>Languages &amp; starters</span></a>
            <a href={PUBLIC_PLAYLIST.length ? '/#listen' : '/#listen-section'} className="sidebar-link"><ListMusic size={18} /><span>Music library</span></a>
            <div className="sidebar-divider" />
            <a href={SOURCE_URL} className="sidebar-link" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /><span>Portfolio source</span></a>
            <a href={PROFILE_URL} className="sidebar-link" target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub profile</span></a>
            <a href={INSTAGRAM_URL} className="sidebar-link" target="_blank" rel="noreferrer"><Instagram size={18} /><span>Instagram</span></a>
            <a href={PROTECTED_USERS_URL} className="sidebar-link"><UserPlus size={18} /><span>Protected users</span></a>
          </nav>
          <p className="sidebar-footnote">A small public starting point for the @eco ecosystem.</p>
        </div>
        <button type="button" className="sidebar-close icon-button" aria-label="Close navigation" onClick={onClose}><X size={18} /></button>
      </aside>
    </>
  );
}

function EcoRightSidebar({
  open,
  onClose,
  theme,
  onToggleTheme,
}: {
  open: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}) {
  return (
    <>
      {open && <button className="sidebar-backdrop right-backdrop" type="button" aria-label="Close settings" onClick={onClose} />}
      <aside className={`right-sidebar ${open ? 'sidebar-open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-content settings-content">
          <div className="settings-title-row"><div><span className="sidebar-section-label">PREFERENCES</span><h2>Settings</h2></div><button type="button" className="icon-button" aria-label="Close settings" onClick={onClose}><X size={18} /></button></div>
          <section className="settings-section">
            <h3>Appearance</h3>
            <button type="button" className="setting-action" onClick={onToggleTheme}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              <span>{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
            </button>
          </section>
          <section className="settings-section">
            <h3>Install this app</h3>
            <PwaInstallButton />
          </section>
          <section className="settings-section">
            <h3>Your music</h3>
            <a className="setting-action" href={PUBLIC_PLAYLIST.length ? '/#listen' : '/#listen-section'}><AudioLines size={17} /><span>Open your music library</span><ChevronRight size={15} /></a>
            <p className="settings-note">Private tracks and saved links stay in this browser on this device. They are never uploaded by this site.</p>
          </section>
          <section className="settings-section">
            <h3>Project information</h3>
            <a className="setting-action" href="https://github.com/KhadijaChahmoud/KhadijaChahmoud.github.io/blob/main/SECURITY.md" target="_blank" rel="noreferrer"><ShieldCheck size={17} /><span>Security policy</span><ArrowUpRight size={14} /></a>
            <a className="setting-action" href="https://github.com/KhadijaChahmoud/KhadijaChahmoud.github.io/blob/main/TERMS.md" target="_blank" rel="noreferrer"><CircleHelp size={17} /><span>Terms</span><ArrowUpRight size={14} /></a>
          </section>
          <a href={SOURCE_URL} target="_blank" rel="noreferrer" className="settings-version">Powered by @eco · source <ArrowUpRight size={13} /></a>
        </div>
      </aside>
    </>
  );
}

function HomePage() {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  useEffect(() => {
    if (!isAvatarOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsAvatarOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAvatarOpen]);

  return (
    <main id="main" className="page-main" tabIndex={-1}>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">CONTENT CREATION · SOCIAL MEDIA · BRAND STORYTELLING</p>
          <div className="hero-heading-row">
            <h1>Hi, I’m <span>Khadija Chahmoud.</span><br />I make <span className="gradient-text">stories feel human.</span></h1>
            <button
              className="hero-avatar-button"
              type="button"
              onClick={() => setIsAvatarOpen(true)}
              aria-label="Enlarge photo of Khadija Chahmoud"
            >
              <img
                className="hero-avatar"
                src="/assets/KHADIJACHAHMOUD.jpeg"
                alt="Khadija Chahmoud"
              />
            </button>
          </div>
          <p className="hero-subtitle">A creative home for thoughtful content, social media management, and brand storytelling. Based between Dubai and Casablanca.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/about.html">Get to know me <ArrowUpRight size={16} /></a>
            <GitHubFollowButton />
            <a className="secondary-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
            <a className="secondary-button" href="#listen"><AudioLines size={16} /> Listen with me</a>
          </div>
          <p className="hero-caption">Real stories · genuine connection · meaningful content</p>
        </div>
      </section>
      <ContributionWeekEmbed site="khadijachahmoud" />
      {isAvatarOpen && (
        <div
          className="avatar-lightbox"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsAvatarOpen(false);
          }}
        >
          <div className="avatar-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Khadija Chahmoud photo">
            <button
              className="avatar-lightbox-close"
              type="button"
              onClick={() => setIsAvatarOpen(false)}
              aria-label="Close enlarged photo"
              autoFocus
            >
              <X size={24} />
            </button>
            <img src="/assets/KHADIJACHAHMOUD.jpeg" alt="Khadija Chahmoud" />
          </div>
        </div>
      )}

      <section className="content-section intro-section" id="ecosystem">
        <div className="section-heading"><span className="eyebrow">THE APPROACH</span><h2>People first. Stories with purpose.</h2><p>Every brand has a human story behind it. I help bring that story to life with thoughtful content, a clear voice, and a consistent social presence.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">◈</span><h3>Content creation</h3><p>Develop thoughtful content around a brand’s voice, story, and audience.</p></article>
          <article className="feature-card"><span className="feature-icon">✳</span><h3>Social media management</h3><p>Build a consistent and considered presence that feels true to the people behind it.</p></article>
          <article className="feature-card"><span className="feature-icon">♫</span><h3>Brand storytelling</h3><p>Find the human details that make a brand memorable and worth connecting with.</p></article>
        </div>
      </section>

      <TimelineVideo />
      <section className="content-section source-section" id="ecosystem-source">
        <div><span className="eyebrow">THE @ECO ECOSYSTEM</span><h2>Explore the ideas behind this site.</h2><p>This portfolio shares its architecture with the @eco ecosystem. Browse the project timeline and see the tools that inspired this digital space.</p></div>
        <a className="secondary-button" href="/timeline.html">Explore the ecosystem <ArrowUpRight size={15} /></a>
      </section>

      <LanguageShowcase />

      <section className="content-section listen-section" id="listen-section" aria-labelledby="listen-heading">
        <div className="listen-card">
          <span className="eyebrow">A LITTLE SPACE TO LISTEN</span>
          <h2 id="listen-heading">Press play. Make yourself at home.</h2>
          {PUBLIC_PLAYLIST.length ? (
            <>
              <p>Add audio files from your device or save audio links in your private browser library. You can also add public tracks to the shared playlist in <code>src/music/playlist.ts</code>.</p>
              <a className="primary-button" href="#listen">Open music player <AudioLines size={16} /></a>
              <p className="privacy-caption">Your private library stays on this device. Playback resumes after you press Play again.</p>
            </>
          ) : (
            <p>Add a track you have permission to publish to <code>src/music/playlist.ts</code>. The footer player will appear after the playlist is configured.</p>
          )}
        </div>
      </section>

      <section className="content-section source-section" id="contact-section">
        <div><span className="eyebrow">LET’S CONNECT</span><h2>Real stories start with a conversation.</h2><p>Have a brand to grow, an idea to explore, or a project that needs a human touch? I’d love to hear about it.</p></div>
        <a className="secondary-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> Connect on Instagram <ArrowUpRight size={15} /></a>
      </section>

      <section className="content-section source-section" id="family-spaces">
        <div><span className="eyebrow">FAMILY CREATIVE SPACES</span><h2>Two more places for ideas to grow.</h2><p>Explore the family-supported creative pages, each with its own example projects and personality.</p></div>
        <div className="hero-actions">
          <a className="secondary-button" href="https://khadijadaughter.github.io/" rel="noreferrer">Creative Corner <ArrowUpRight size={15} /></a>
          <a className="secondary-button" href="https://khadijason.github.io/" rel="noreferrer">Curiosity Lab <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main id="main" className="page-main about-page" tabIndex={-1}>
      <section className="about-hero">
        <span className="eyebrow">ABOUT KHADIJA</span>
        <h1>Stories that make brands feel <span className="gradient-text">human.</span></h1>
        <p>I’m Khadija Chahmoud, a creative professional focused on content creation, social media management, and human-first brand storytelling. My perspective connects Dubai and Casablanca.</p>
        <div className="hero-actions">
          <a className="primary-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={16} /> Find me on Instagram</a>
          <a className="secondary-button" href={PROFILE_URL} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={15} /></a>
        </div>
      </section>
      <section className="content-section about-details">
        <div className="section-heading"><span className="eyebrow">HOW I WORK</span><h2>Thoughtful communication, grounded in people.</h2></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">✦</span><h3>Authenticity</h3><p>Real voices, real moments, and honest communication.</p></article>
          <article className="feature-card"><span className="feature-icon">⌕</span><h3>Curiosity</h3><p>Listen first, ask better questions, and find the meaningful detail.</p></article>
          <article className="feature-card"><span className="feature-icon">♡</span><h3>Purpose</h3><p>Create with intention and build recognition through consistency.</p></article>
        </div>
      </section>
      <section className="content-section source-section">
        <div><span className="eyebrow">BETWEEN DUBAI AND CASABLANCA</span><h2>Two places. A shared creative perspective.</h2><p>Dubai brings new perspectives and opportunity; Casablanca keeps me connected to home, local talent, and creative possibility.</p></div>
        <a className="secondary-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> Let’s connect <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}

function EcoFooter({ onCloseSidebars }: { onCloseSidebars: () => void }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <footer className="eco-footer" onClick={onCloseSidebars}>
      <span className="footer-license">© @eco 2026 · Built with Khadija Chahmoud</span>
      <MusicPlayer />
      <a className="footer-github-link" href={REPOSITORIES_URL} target="_blank" rel="noreferrer" aria-label="View all GitHub repositories">
        <Github size={19} />
      </a>
      <div className="footer-meta">
        <time dateTime={now.toISOString()}>{now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</time>
        <a href="https://github.com/KhadijaChahmoud/KhadijaChahmoud.github.io/blob/main/TERMS.md" target="_blank" rel="noreferrer">Terms</a>
        <a href="https://github.com/KhadijaChahmoud/KhadijaChahmoud.github.io/blob/main/SECURITY.md" target="_blank" rel="noreferrer">Security</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = window.localStorage.getItem(ECO_STORAGE_KEYS.theme)
        ?? readEcoCookie(ECO_STORAGE_KEYS.cookieTheme)
        ?? window.localStorage.getItem('eco-starter:theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });
  const isAbout = pathname.endsWith('/about.html');
  const isTimeline = pathname.endsWith('/timeline.html');
  const isProtectedUsers = pathname.startsWith('/protectedUSERS_root_path_secure');

  useEffect(() => {
    const appPaths = new Set(['/', '/index.html', '/about.html', '/timeline.html', PROTECTED_USERS_URL]);
    const handleNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor || (anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return;
      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        !appPaths.has(destination.pathname)
      ) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) {
        if (destination.hash !== window.location.hash) return;
        event.preventDefault();
        return;
      }
      event.preventDefault();
      window.history.pushState(null, '', destination.href);
      setPathname(destination.pathname);
    };
    const handleHistoryNavigation = () => setPathname(window.location.pathname);
    document.addEventListener('click', handleNavigation);
    window.addEventListener('popstate', handleHistoryNavigation);
    return () => {
      document.removeEventListener('click', handleNavigation);
      window.removeEventListener('popstate', handleHistoryNavigation);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.title = isProtectedUsers
      ? 'Protected Users | Khadija Chahmoud'
      : isTimeline
        ? 'Work Timeline | Khadija Chahmoud'
        : isAbout
          ? 'About | Khadija Chahmoud'
          : 'Khadija Chahmoud | @eco';
    try {
      window.localStorage.setItem(ECO_STORAGE_KEYS.theme, theme);
      setEcoCookie(ECO_STORAGE_KEYS.cookieTheme, theme);
      writeSessionPreference('theme', theme);
    } catch {
      // The selected theme remains active for this page even if storage is disabled.
    }
  }, [isAbout, isProtectedUsers, isTimeline, theme]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'b') {
        event.preventDefault();
        setLeftOpen((open) => !open);
      } else if (event.ctrlKey && event.key.toLowerCase() === 'm') {
        event.preventDefault();
        setRightOpen((open) => !open);
      } else if (event.key === 'Escape') {
        setLeftOpen(false);
        setRightOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const toggleSidebar = (side: 'left' | 'right') => {
    const setter = side === 'left' ? setLeftOpen : setRightOpen;
    (side === 'left' ? setRightOpen : setLeftOpen)(false);
    setter((open) => !open);
  };

  const closeSidebars = () => {
    setLeftOpen(false);
    setRightOpen(false);
  };

  const closeSidebar = (side: 'left' | 'right') => {
    (side === 'left' ? setLeftOpen : setRightOpen)(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Suspense fallback={<div className="three-background canvas-fallback" aria-hidden="true" />}>
        <ThreeBackground theme={theme} />
      </Suspense>
      <div className="eco-public-layout">
        <EcoHeader
          leftOpen={leftOpen}
          rightOpen={rightOpen}
          onToggleLeft={() => toggleSidebar('left')}
          onToggleRight={() => toggleSidebar('right')}
          onCloseSidebars={closeSidebars}
        />
        <div className="main-container">
          <EcoLeftSidebar open={leftOpen} onClose={() => closeSidebar('left')} />
          {isProtectedUsers ? <ProtectedUsersPage /> : isTimeline ? <TimelinePage /> : isAbout ? <AboutPage /> : <HomePage />}
          <EcoRightSidebar
            open={rightOpen}
            onClose={() => closeSidebar('right')}
            theme={theme}
            onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
          />
        </div>
        <EcoFooter onCloseSidebars={closeSidebars} />
      </div>
    </>
  );
}
