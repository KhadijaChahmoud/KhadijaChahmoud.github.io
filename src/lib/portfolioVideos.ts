const assetUrl = (fileName: string) => `/assets/${encodeURIComponent(fileName)}`;

export const portfolioVideos = [
  {
    id: 'brand-power',
    title: 'Brand power is belonging',
    category: 'Brand storytelling',
    description: 'A Brandy Socials reel about community and brand power.',
    src: assetUrl('brand-power-belonging.mp4'),
  },
  {
    id: 'maison-design',
    title: 'Creative direction for Maison Design',
    category: 'Client collaboration',
    description: 'Creative direction, content production, social strategy, and grid design.',
    src: assetUrl('ScopeCreative DirectionContent ProductionSocial Media StrategyGrid DesignClient@maison_design_dx.mp4'),
  },
  {
    id: 'intended-uae',
    title: 'A favorite client collaboration',
    category: 'Client collaboration',
    description: 'A reel featuring work with Intended UAE.',
    src: assetUrl('one of my fav clients that i enjoy working with the most @intendeduae 🤍.mp4'),
  },
  {
    id: 'womenpreneur-summit',
    title: 'WomenpreneurME Summit',
    category: 'Events and community',
    description: 'A reflection on participating in the WomenpreneurME Summit.',
    src: assetUrl('Yesterday, I had the honor of participating in the @womenpreneurme Summit on the occasion of Emi.mp4'),
  },
  {
    id: 'outfit-check',
    title: 'Outfit check',
    category: 'Everyday moments',
    description: 'A casual outfit-check moment.',
    src: assetUrl('Chkon dar outfit check hsen I think raed wins.mp4'),
  },
  {
    id: 'just-trust-him',
    title: 'Just trust him',
    category: 'Everyday moments',
    description: 'A short-form social video.',
    src: assetUrl('just trust him 🤍.mp4'),
  },
  {
    id: 'eid-mubarak',
    title: 'Eid Mubarak',
    category: 'Culture and celebrations',
    description: 'A greeting for Eid.',
    src: assetUrl('Eid Mubarak 🤍 🪄.mp4'),
  },
  {
    id: 'daily-wisdom',
    title: 'Wisdom of the day',
    category: 'Culture and reflections',
    description: 'A daily wisdom greeting.',
    src: assetUrl('حكمة اليوم ويسعد صباحكم 🤣☀️.mp4'),
  },
  {
    id: 'talbiyah',
    title: 'Talbiyah',
    category: 'Culture and reflections',
    description: 'A devotional video dated November 20, 2026.',
    src: assetUrl('لبيك اللهم لبيك ✨ 20 نوفمبر 2026.mp4'),
  },
] as const;
