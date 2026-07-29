export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** relative to /public */
  image: string;
  imageAlt: string;
  /** icon id (Icon component) used for the abstract gradient placeholder */
  icon: string;
  featured: boolean;
  year: string;
  stack: string[];
  /** my role on this project */
  role: string;
  /** key features I implemented */
  features: string[];
  challenge: string;
  architecture: string;
  /** true for internal/company work with no public demo, source, or case study */
  companyProject: boolean;
}

export const projects: Project[] = [
  {
    slug: 'project-management-saas',
    title: 'Project Management SaaS',
    tagline: 'One permission-controlled system for many organizations.',
    description:
      'A multi-tenant platform with profile-based ACL, letting multiple organizations manage Projects, Tasks, Tickets, and Activity Logs from a single, permission-controlled codebase.',
    image: '/images/projects/project-management.svg',
    imageAlt: 'Multi-module project management dashboard',
    icon: 'layers',
    featured: true,
    year: '2024',
    stack: ['Laravel 12', 'Next.js', 'TypeScript', 'Docker'],
    role: 'Full Stack Developer — designed the architecture, ACL system, and Activity Log module',
    features: [
      'Organization-based multi-tenant system with a profile-based ACL model for granular, role-specific permissions',
      'ACL-aware Activity Log using Laravel Observers, Events, and Queues to capture model lifecycle events asynchronously',
      'Secure authentication and authorization workflows (JWT, Sanctum) with standardized permission checks',
      'Query optimization across MySQL/PostgreSQL through indexing and refactoring',
      'Dockerized services with CI/CD build and deploy workflows via GitHub Actions',
    ],
    challenge:
      'Let many organizations share one platform while keeping their data isolated and their permissions granular — down to specific actions per role.',
    architecture:
      'Organization-scoped multi-tenancy with a profile-based ACL model, plus an ACL-aware Activity Log built on Laravel Observers, Events, and Queues that captures model lifecycle events asynchronously.',
    companyProject: true,
  },
  {
    slug: 'auctionalgo',
    title: 'AuctionAlgo',
    tagline: 'Real-time bidding, many rooms at once.',
    description:
      'A multi-theme, multilingual online auction platform supporting live, concurrent bidding sessions with role-specific dashboards for buyers, sellers, and admins.',
    image: '/images/projects/auctionalgo.svg',
    imageAlt: 'Live auction bidding interface',
    icon: 'gauge',
    featured: true,
    year: '2023',
    stack: ['Laravel', 'React.js', 'MySQL', 'Redis'],
    role: 'Full Stack Developer',
    features: [
      'Live, concurrent bidding sessions across multiple auction rooms',
      'Role-specific dashboards for buyers, sellers, and admins',
      'Multi-theme, multilingual (i18n) interface',
      'Redis-backed state to keep concurrent sessions consistent',
    ],
    challenge:
      'Support many live auctions with concurrent bidders without race conditions or stale prices, while serving distinct dashboards per role.',
    architecture:
      'Real-time bid processing with role-scoped dashboards, multi-theme + i18n support, and Redis-backed state to keep concurrent sessions consistent.',
    companyProject: true,
  },
  {
    slug: 'khaatapro',
    title: 'KhaataPro',
    tagline: 'The digital ledger that replaces the paper one.',
    description:
      'A digital ledger and accounting SaaS for small businesses — customer balance tracking and financial reporting, with offline-ready architecture planning.',
    image: '/images/projects/khaatapro.svg',
    imageAlt: 'Digital accounting ledger dashboard',
    icon: 'component',
    featured: true,
    year: '2023',
    stack: ['Laravel', 'React.js', 'MySQL'],
    role: 'Full Stack Developer',
    features: [
      'Customer balance tracking for small businesses',
      'Financial reporting tools replacing manual ledger books',
      'Offline-ready architecture planning for unreliable connectivity',
    ],
    challenge:
      'Replace manual ledger books for small businesses with a tool they can trust for balances and reporting — even with unreliable connectivity.',
    architecture:
      'Customer balance tracking and financial reporting built around an offline-ready architecture plan, so records stay consistent regardless of network.',
    companyProject: true,
  },
  {
    slug: 'rentalx',
    title: 'RentalX',
    tagline: 'Listings to payments, end to end.',
    description:
      'A rental management system covering the full workflow — listings, bookings, and payments — with role-based access for owners and renters.',
    image: '/images/projects/rentalx.svg',
    imageAlt: 'Rental management booking interface',
    icon: 'container',
    featured: true,
    year: '2022',
    stack: ['Laravel', 'React.js', 'MySQL'],
    role: 'Full Stack Developer',
    features: [
      'End-to-end rental workflow: listings, bookings, and payments',
      'Role-based access for owners and renters',
    ],
    challenge:
      'Model the entire rental lifecycle in one system while keeping owner and renter capabilities cleanly separated.',
    architecture:
      'End-to-end rental workflow (listings → bookings → payments) with role-based access enforced across owner and renter journeys.',
    companyProject: true,
  },
  {
    slug: 'daanrekha',
    title: 'Daanrekha',
    tagline: 'Visibility into where donations actually go.',
    description:
      'A multi-organization donation and CSR tracking platform giving NGOs and CSR teams visibility into donation flows through centralized reporting dashboards.',
    image: '/images/projects/daanrekha.svg',
    imageAlt: 'Donation tracking reporting dashboard',
    icon: 'shield',
    featured: true,
    year: '2022',
    stack: ['Laravel', 'React.js', 'MySQL'],
    role: 'Full Stack Developer',
    features: [
      'Multi-organization donation tracking',
      'Centralized reporting dashboards for donation flow visibility',
    ],
    challenge:
      'Give NGOs and CSR teams a trustworthy, centralized view of donation flows across multiple organizations.',
    architecture:
      'Multi-organization data model feeding centralized reporting dashboards for donation visibility.',
    companyProject: true,
  },
  {
    slug: 'marketing-websites',
    title: 'Marketing Websites',
    tagline: 'Fast, multilingual static sites with Astro.',
    description:
      'Designed and built multilingual static marketing websites with Astro.js for the company and its products — Prahitech, AuctionAlgo, and KhaataPro.',
    image: '/images/projects/marketing.svg',
    imageAlt: 'Marketing website landing pages',
    icon: 'code',
    featured: true,
    year: '2023',
    stack: ['Astro.js', 'Tailwind CSS', 'TypeScript'],
    role: 'Full Stack Developer',
    features: [
      'Multilingual static marketing sites for the company and its products',
      'Sites shipped: Prahitech, AuctionAlgo, and KhaataPro',
    ],
    challenge:
      'Ship fast, SEO-friendly, multilingual marketing sites for several products with a consistent, maintainable setup.',
    architecture:
      'Static Astro.js sites with i18n and shared components across prahitech.com, auctionalgo.com, and khaatapro.com.',
    companyProject: true,
  },
];
