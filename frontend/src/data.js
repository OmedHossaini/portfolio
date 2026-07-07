// ─────────────────────────────────────────────────────────────
//  Site content & configuration. Edit copy/links here.
// ─────────────────────────────────────────────────────────────

export const config = {
  // Toggles the hero "Open to work" eyebrow.
  availableForWork: true,
  // Single accent color; also mirrored by the --acc CSS variable.
  accent: '#ff4d2e',
  // TODO: replace with the new resume link when provided.
  resumeUrl:
    'https://drive.google.com/file/d/1FdRC2F14XwT51WbynZwISFUTVHo1qVOj/view?usp=sharing',
  // Hero headshot (in public/). Portrait ~4:5.
  headshot: '/headshot.png',
}

export const contact = {
  email: 'Omed_Hossaini@Outlook.com',
  phone: '438-924-7828',
  location: 'Montréal, QC',
  github: 'https://github.com/OmedHossaini',
  linkedin: 'https://www.linkedin.com/in/omed-hossaini-a25b942a0/',
  thecrib: 'https://thecrib.ca/',
  appstore:
    'https://apps.apple.com/ca/app/thecrib-sports-platform/id6759890474',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact', accent: true },
]

// Marquee tokens — `accent: true` renders in the accent color.
export const marqueeTokens = [
  { label: 'JavaScript' },
  { label: 'React', accent: true },
  { label: 'TypeScript' },
  { label: 'Node.js' },
  { label: 'Next.js' },
  { label: 'React Native', accent: true },
  { label: 'OpenAI' },
  { label: 'AWS' },
  { label: 'MongoDB' },
  { label: 'Stripe' },
]

export const featured = {
  pill: '★ FOUNDER',
  meta: 'Web + iOS · SaaS',
  title: 'TheCrib',
  tagline: 'Your team. One app. Zero chaos.',
  description:
    'A cross-platform sports team-management platform for coaches. It replaces the pile of group chats, spreadsheets and payment apps you juggle to run a team. I designed, built and shipped it solo to the App Store, and it reached 40+ users across 5 countries in its first month.',
  // The bold fragment inside the description above.
  descriptionHighlight: '40+ users across 5 countries',
  stats: [
    { value: '3 tiers', sub: 'Stripe billing · RBAC' },
    { value: 'AI', sub: 'OpenAI practice plans' },
    { value: '8', sub: 'sports · bilingual EN/FR' },
  ],
  chips: [
    'Roster & RSVP',
    'Schedule + notifications',
    'Team fees via Stripe',
    'AI practice planner',
    'Tactics whiteboard',
    'Live scores & stats',
  ],
  tech: 'React Native (Expo) · TypeScript · Node.js / Express · AWS · Stripe · OpenAI API',
  built: '🍁 Built in Montréal',
  // Image slot — drop TheCrib screenshots here (portrait / app UI).
  image: '/thecrib.png',
}

export const projects = [
  {
    number: '01',
    title: 'FarmerFlow',
    badge: { label: "🏆 PolyHacks '25 · 1st", accent: true },
    description:
      'A full-stack farm-management app I built in 24 hours. Firebase auth, a real-time weather API, CSV inventory and an OpenAI advice chatbot.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'OpenAI'],
    href: 'https://devpost.com/software/farmerflow-ikzya7',
    image: '/farmerflow.png',
  },
  {
    number: '02',
    title: 'Stash · AI Content Organizer',
    badge: { label: 'ConUHacks X' },
    description:
      'Extracts, summarizes and auto-categorizes any pasted URL (YouTube, TikTok, Spotify and more) using Google Gemini. Includes JWT auth and a smart search with intent routing.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Google Gemini'],
    href: 'https://devpost.com/software/stash-5q8ina',
    image: null,
  },
  {
    number: '03',
    title: 'Tori Stecum · Traduction',
    badge: { label: 'Freelance client' },
    description:
      'A bilingual React site for a real client, scoring 90+ on PageSpeed. I built the Node/Nodemailer email backend and a custom FR/EN translation system. Live in production.',
    tech: ['React', 'Node.js', 'Nodemailer', 'SEO'],
    href: 'https://www.toristecumtraductionandrevision.site/',
    image: '/tori.png',
  },
  {
    number: '04',
    title: 'Brass Door Pub',
    badge: { label: 'Freelance client' },
    description:
      'A mobile-first restaurant site with a dynamic categorized menu, CSS3 animations and lazy-loaded assets. Live on Vercel.',
    tech: ['React', 'CSS3', 'Responsive'],
    href: 'https://brass-door-pub.vercel.app/',
    image: null,
  },
]

export const about = {
  heading: 'Montréal-based developer shipping products end-to-end.',
  paragraphs: [
    "I'm a full-stack developer and the founder of TheCrib, a sports team-management platform I designed, built and shipped solo to the App Store. Alongside it I take on freelance clients, building fast, production-grade web apps end to end.",
    "I work mostly in React, React Native and Node, and I like owning a product from the first line of code to launch. Away from the keyboard I'm usually playing basketball or volleyball, gaming, or drawing — the mix keeps me sharp and creative.",
  ],
  stats: [
    { value: '40+', sub: 'TheCrib users · 5 countries, month 1' },
    { value: '1st', sub: 'place · PolyHacks 2025, 100+ entrants' },
    { value: 'AWS', sub: 'Certified Cloud Practitioner' },
  ],
}

export const interests = [
  {
    emoji: '🏀',
    label: 'Basketball',
    sub: 'Most weekends',
    detail: 'I play point guard with my friends.',
  },
  {
    emoji: '🎮',
    label: 'Gaming',
    sub: 'A lifelong hobby',
    detail: 'Mostly League of Legends.',
  },
  {
    emoji: '✏️',
    label: 'Drawing',
    sub: 'Keeps me creative',
    detail: 'I love drawing fictional characters from games.',
  },
  {
    emoji: '🏐',
    label: 'Volleyball',
    sub: 'Pick-up games',
    detail: 'Middle blocker and power, playing tournaments around Montréal.',
  },
  {
    emoji: '🎥',
    label: 'YouTube',
    sub: 'Learning & unwinding',
    detail: 'Big fan of the Sidemen.',
  },
  {
    emoji: '♟️',
    label: 'Chess',
    sub: 'Strategy & focus',
    detail: 'Rated around 1400.',
  },
]

export const skillCategories = [
  {
    label: 'Languages',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'PHP',
      'HTML5',
      'CSS3 / Sass',
      'SQL',
    ],
  },
  {
    label: 'Frontend',
    items: [
      'React',
      'React Native',
      'Vue.js',
      'Next.js',
      'Expo',
      'Tailwind',
      'Vite',
      'Redux',
    ],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Laravel',
      'REST APIs',
      'JWT',
      'Stripe API',
      'OpenAI API',
    ],
  },
  {
    label: 'Databases · Cloud & DevOps',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Firebase',
      'AWS',
      'Docker',
      'CI/CD',
      'Git/GitHub',
      'Vercel',
      'App Store Connect',
    ],
  },
]

export const achievements = [
  {
    emoji: '🏆',
    title: 'PolyHacks 2025, 1st place',
    cta: 'View project ↗',
    detail: 'Won among 100+ participants with FarmerFlow. 3 hackathons total.',
    href: 'https://devpost.com/software/farmerflow-ikzya7',
  },
  {
    emoji: '☁️',
    title: 'AWS Cloud Practitioner',
    cta: 'View credential ↗',
    detail: 'Certified (CLF-C02) on AWS concepts, services and architecture.',
    href: 'https://www.credly.com/badges/e5ba30f4-da80-4291-8181-57ec52c3b5dc/linked_in?t=srl9kv',
  },
  {
    emoji: '🎓',
    title: 'Concordia University',
    cta: 'View on LinkedIn ↗',
    detail: 'Full-Stack Web Development Diploma, 2023.',
    href: 'https://www.linkedin.com/in/omed-hossaini-a25b942a0/',
  },
]
