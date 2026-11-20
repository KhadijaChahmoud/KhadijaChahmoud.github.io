import React, { lazy, Suspense, useEffect, useState } from 'react';
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
import LanguageShowcase from './components/LanguageShowcase';
import GitHubFollowButton from './components/GitHubFollowButton';
import TimelineVideo from './components/TimelineVideo';
import TimelinePage from './TimelinePage';

const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

const PROFILE_URL = 'https://github.com/KhadijaChahmoud';
const REPOSITORIES_URL = 'https://github.com/KhadijaChahmoud?tab=repositories';
const INSTAGRAM_URL = 'https://www.instagram.com/khadija.chahmoud/';
const PROTECTED_USERS_URL = '/protectedUSERS_root_path_secure/';
const SOURCE_URL = 'https://github.com/KhadijaChahmoud/KhadijaChahmoud.github.io';

function readLayoutPreference(key: string, fallback: boolean) {
  try {
    const saved = window.localStorage.getItem(key);
    return saved === null ? fallback : saved === 'true';
  } catch {
    return fallback;
  }
}

function EcoHeader({
  leftOpen,
  rightOpen,
  onToggleLeft,
  onToggleRight,
}: {
  leftOpen: boolean;
  rightOpen: boolean;
  onToggleLeft: () => void;
  onToggleRight: () => void;
}) {
  return (
    <header className="eco-header">
      <div className="header-side">
        <button className="icon-button toggle-button" type="button" onClick={onToggleLeft} aria-label="Toggle navigation" aria-expanded={leftOpen} title="Toggle navigation (Ctrl+B)">
          {leftOpen ? <PanelLeftClose size={19} /> : <PanelLeftOpen size={19} />}
        </button>
        <a className="brand" href="/" aria-label="ECO home"><span className="brand-mark">ECO</span><span className="brand-label">ECOSYSTEM</span></a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/about.html">About</a>
          <a href="/timeline.html">Timeline</a>
          <a href="/#languages">Languages</a>
          <a href="/#listen">Listen</a>
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
            <a href="/#listen" className="sidebar-link"><ListMusic size={18} /><span>Music library</span></a>
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
            <h3>Your music</h3>
            <a className="setting-action" href="/#listen"><AudioLines size={17} /><span>Open your music library</span><ChevronRight size={15} /></a>
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
  return (
    <main id="main" className="page-main" tabIndex={-1}>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">CONTENT CREATION · SOCIAL MEDIA · BRAND STORYTELLING</p>
          <h1>Hi, I’m <span>Khadija Chahmoud.</span><br />I make <span className="gradient-text">stories feel human.</span></h1>
          <p className="hero-subtitle">A creative home for thoughtful content, social media management, and brand storytelling. Based between Dubai and Casablanca.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/about.html">Get to know me <ArrowUpRight size={16} /></a>
            <GitHubFollowButton />
            <a className="secondary-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
          </div>
          <p className="hero-caption">Real stories · genuine connection · meaningful content</p>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="content-section intro-section" id="ecosystem">
        <div className="section-heading"><span className="eyebrow">THE APPROACH</span><h2>People first. Stories with purpose.</h2><p>Every brand has a human story behind it. I help bring that story to life with thoughtful content, a clear voice, and a consistent social presence.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">◈</span><h3>Content creation</h3><p>Develop thoughtful content around a brand’s voice, story, and audience.</p></article>
          <article className="feature-card"><span className="feature-icon">✳</span><h3>Social media management</h3><p>Build a consistent and considered presence that feels true to the people behind it.</p></article>
          <article className="feature-card"><span className="feature-icon">♫</span><h3>Brand storytelling</h3><p>Find the human details that make a brand memorable and worth connecting with.</p></article>
        </div>
      </section>

      <TimelineVideo />
      <section className="content-section source-section">
        <div><span className="eyebrow">THE @ECO ECOSYSTEM</span><h2>Explore the ideas behind this site.</h2><p>This portfolio shares its architecture with the @eco ecosystem. Browse the project timeline and see the tools that inspired this digital space.</p></div>
        <a className="secondary-button" href="/timeline.html">Explore the ecosystem <ArrowUpRight size={15} /></a>
      </section>

      <LanguageShowcase />

      <section className="content-section listen-section" aria-labelledby="listen-heading">
        <div className="listen-card">
          <span className="eyebrow">A LITTLE SPACE TO LISTEN</span>
          <h2 id="listen-heading">Press play. Make yourself at home.</h2>
          <p>Add audio files from your device or save audio links in your private browser library. You can also add public tracks to the shared playlist in <code>src/music/playlist.ts</code>.</p>
          <a className="primary-button" href="#listen">Open music player <AudioLines size={16} /></a>
          <p className="privacy-caption">Your private library stays on this device. Playback resumes after you press Play again.</p>
        </div>
      </section>

      <section className="content-section source-section">
        <div><span className="eyebrow">LET’S CONNECT</span><h2>Real stories start with a conversation.</h2><p>Have a brand to grow, an idea to explore, or a project that needs a human touch? I’d love to hear about it.</p></div>
        <a className="secondary-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> Connect on Instagram <ArrowUpRight size={15} /></a>
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

function EcoFooter() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <footer className="eco-footer">
      <span className="footer-license">Built with @eco · © {now.getFullYear()} Khadija Chahmoud</span>
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
  const [leftOpen, setLeftOpen] = useState(() => readLayoutPreference('eco-starter:left-open', window.innerWidth > 900));
  const [rightOpen, setRightOpen] = useState(() => readLayoutPreference('eco-starter:right-open', false));
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      return window.localStorage.getItem('eco-starter:theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });
  const isAbout = window.location.pathname.endsWith('/about.html');
  const isTimeline = window.location.pathname.endsWith('/timeline.html');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.title = isTimeline
      ? 'Work Timeline | Khadija Chahmoud'
      : isAbout
        ? 'About | Khadija Chahmoud'
        : 'Khadija Chahmoud | @eco';
    try {
      window.localStorage.setItem('eco-starter:theme', theme);
    } catch {
      // The selected theme remains active for this page even if storage is disabled.
    }
  }, [isAbout, isTimeline, theme]);

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
        try {
          window.localStorage.setItem('eco-starter:left-open', 'false');
          window.localStorage.setItem('eco-starter:right-open', 'false');
        } catch {
          // Closing sidebars still works when storage is disabled.
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const toggleSidebar = (side: 'left' | 'right') => {
    const setter = side === 'left' ? setLeftOpen : setRightOpen;
    const key = side === 'left' ? 'eco-starter:left-open' : 'eco-starter:right-open';
    setter((open) => {
      const next = !open;
      try {
        window.localStorage.setItem(key, String(next));
      } catch {
        // Sidebar state still updates for this visit when storage is disabled.
      }
      return next;
    });
  };

  const closeSidebar = (side: 'left' | 'right') => {
    (side === 'left' ? setLeftOpen : setRightOpen)(false);
    try {
      window.localStorage.setItem(side === 'left' ? 'eco-starter:left-open' : 'eco-starter:right-open', 'false');
    } catch {
      // Closing the sidebar still works when storage is disabled.
    }
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
        />
        <div className="main-container">
          <EcoLeftSidebar open={leftOpen} onClose={() => closeSidebar('left')} />
          {isTimeline ? <TimelinePage /> : isAbout ? <AboutPage /> : <HomePage />}
          <EcoRightSidebar
            open={rightOpen}
            onClose={() => closeSidebar('right')}
            theme={theme}
            onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
          />
        </div>
        <EcoFooter />
      </div>
    </>
  );
}
