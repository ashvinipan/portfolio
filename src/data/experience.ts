export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'JBK Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: 'Jan 2024 — Present',
    location: 'Pune, India',
    summary:
      'Design and build a multi-module, multi-tenant SaaS project-management platform end-to-end, from the ACL model to the UI.',
    achievements: [
      'Design and develop a multi-module SaaS project-management platform (Laravel 12 + Next.js) spanning Projects, Tasks, TaskLists, Tickets, and Organizations for multi-tenant clients.',
      'Architected an organization-based multi-tenant system with a profile-based ACL model for granular, role-specific permissions across all modules.',
      'Built an ACL-aware Activity Log using Laravel Observers, Events, and Queues to capture and process model lifecycle events asynchronously.',
      'Implemented secure authentication and authorization (JWT, Sanctum), standardizing permission checks and reducing unauthorized-access risk.',
      'Optimized complex MySQL/PostgreSQL queries through indexing and refactoring, improving API response times across high-traffic modules.',
      'Containerized services with Docker and supported CI/CD build & deploy workflows using GitHub Actions.',
    ],
    stack: ['Laravel 12', 'Next.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Pointmatrix IT Services',
    role: 'Software Developer',
    duration: 'Nov 2021 — Jan 2024',
    location: 'India',
    summary:
      'Built GPS tracking, fleet management, and taxi-booking platforms with a focus on reliability and secure access.',
    achievements: [
      'Developed GPS tracking and fleet-management applications, including live location updates and trip/route reporting.',
      'Built core modules for a taxi-booking platform: ride requests, driver assignment, and fare-calculation logic.',
      'Implemented authentication and role-based access control across user types (admin, driver, customer).',
      'Optimized MySQL queries and reporting modules, improving dashboard and analytics performance.',
      'Collaborated in an Agile environment through sprint planning and code reviews.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
  },
];
