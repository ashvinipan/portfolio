export interface Tech {
  name: string;
  /** logo key resolved by TechLogo.astro; falls back to a monogram tile */
  logo: string;
  /** short note shown under the name */
  note: string;
}

export interface TechGroup {
  category: string;
  items: Tech[];
}

export const stack: TechGroup[] = [
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', logo: 'laravel', note: 'Primary framework' },
      { name: 'PHP', logo: 'php', note: 'Core language' },
      { name: 'REST APIs', logo: 'rest', note: 'Versioned & documented' },
      { name: 'Eloquent ORM', logo: 'laravel', note: 'Data modelling' },
      { name: 'JWT / Sanctum', logo: 'jwt', note: 'Auth & tokens' },
      { name: 'Queues & Events', logo: 'queue', note: 'Async workflows' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', logo: 'react', note: 'Hooks & state' },
      { name: 'Next.js', logo: 'nextjs', note: 'SSR / i18n' },
      { name: 'Astro.js', logo: 'astro', note: 'Static & content' },
      { name: 'TypeScript', logo: 'typescript', note: 'Everywhere' },
      { name: 'Zustand', logo: 'zustand', note: 'State management' },
      { name: 'Zod', logo: 'zod', note: 'Schema validation' },
      { name: 'Tailwind CSS', logo: 'tailwind', note: 'Design systems' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', logo: 'mysql', note: 'Production store' },
      { name: 'PostgreSQL', logo: 'postgresql', note: 'Production store' },
      { name: 'Redis', logo: 'redis', note: 'Caching' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Docker', logo: 'docker', note: 'Dev & prod parity' },
      { name: 'GitHub Actions', logo: 'githubactions', note: 'CI/CD' },
      { name: 'Git / GitHub', logo: 'github', note: 'Version control' },
      { name: 'Claude', logo: 'claude', note: 'Reasoning & code' },
      { name: 'Cursor', logo: 'cursor', note: 'AI-native editor' },
      { name: 'Windsurf', logo: 'windsurf', note: 'Agentic flows' },
      { name: 'Copilot', logo: 'copilot', note: 'Inline completion' },
      { name: 'Cline', logo: 'cline', note: 'Agentic coding' },
    ],
  },
];
