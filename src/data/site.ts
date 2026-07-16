/**
 * Single source of truth for personal-brand + site content.
 * Every section renders from this file — edit here, not in markup.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  /** id used to pick the inline SVG in the Icon component */
  icon: 'github' | 'linkedin' | 'x' | 'mail' | 'resume';
}

export const site = {
  name: 'Ashvini Pangavhane',
  role: 'Full Stack Developer',
  tagline: 'Building scalable, multi-tenant SaaS with Laravel & React.',
  intro:
    'Full Stack Developer with 4.5+ years of experience designing and building scalable, multi-tenant SaaS platforms with Laravel, React, Next.js and TypeScript — secure auth systems, RESTful APIs, and event-driven backends built for production.',
  email: 'ashwinipangavhane001@gmail.com',
  phone: '+91 93704 33434',
  location: 'Pune, Maharashtra, India',
  openTo: 'Pune · Remote (India) · Remote (Global)',
  yearsExperience: '4.5+',
  resumeUrl: '/resume.pdf',
  url: 'https://example.com',
  /** used for OG/meta descriptions site-wide */
  description:
    'Ashvini Pangavhane — Full Stack Developer specializing in Laravel, React.js, Next.js and TypeScript. I design and build scalable, multi-tenant SaaS platforms with secure auth, clean architecture, and optimized performance.',
  twitterHandle: '@ashvini',
} as const;

/** Work arrangements shown as chips in the contact card. */
export const availableFor: string[] = ['Remote', 'Hybrid', 'On-site (Pune)'];

/** Engagement types surfaced to recruiters below the contact channels. */
export const openToRoles: string[] = [
  'Full Stack Roles',
  'Laravel Projects',
  'React Applications',
  'SaaS Platforms',
  'Freelance Opportunities',
];

export const nav: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ashvini-pangavhane-967998184',
    handle: 'in/ashvini-pangavhane',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ashvini',
    handle: '@ashvini',
    icon: 'github',
  },
  {
    label: 'Email',
    href: `mailto:ashwinipangavhane001@gmail.com`,
    handle: 'ashwinipangavhane001@gmail.com',
    icon: 'mail',
  },
];
