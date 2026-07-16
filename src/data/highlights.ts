export interface Highlight {
  title: string;
  body: string;
  /** icon id resolved by the Icon component */
  icon: 'server' | 'layers' | 'shield' | 'gauge' | 'component' | 'container';
}

export const highlights: Highlight[] = [
  {
    title: 'Multi-tenant SaaS architecture',
    body: 'Architected organization-based multi-tenancy on a single codebase, isolating data per organization across every module.',
    icon: 'layers',
  },
  {
    title: 'Profile-based ACL & auth',
    body: 'Built granular, role-specific permission systems with secure JWT and Sanctum auth, cutting unauthorized-access risk.',
    icon: 'shield',
  },
  {
    title: 'Event-driven activity logs',
    body: 'Captured model lifecycle events asynchronously with Laravel Observers, Events, and Queues — audit trails that scale.',
    icon: 'server',
  },
  {
    title: 'Database performance',
    body: 'Optimized complex MySQL/PostgreSQL queries through indexing and refactoring, improving response times on high-traffic modules.',
    icon: 'gauge',
  },
  {
    title: 'Scalable REST APIs',
    body: 'Designed versioned, documented APIs with resources, form requests, and a clean service layer following SOLID principles.',
    icon: 'component',
  },
  {
    title: 'Dockerized CI/CD',
    body: 'Containerized services with Docker and automated build & deploy pipelines with GitHub Actions for repeatable releases.',
    icon: 'container',
  },
];
