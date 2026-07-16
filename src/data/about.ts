export const about = {
  photo: '/images/image.jpeg',
  photoAlt: 'Portrait of Ashvini Pangavhane',
  paragraphs: [
    'I’m a full stack developer with 4.5+ years building multi-tenant SaaS — one codebase safely serving many organizations, each with its own data and permission rules.',
    'I work in Laravel, React/Next.js, and TypeScript, and I care about the parts that decide whether a product survives its second year: clean ACL models, event-driven activity logs, well-indexed queries, and Dockerized deploys.',
    'That means maintainable, high-quality releases — SOLID, a real service layer, versioned APIs — with AI tooling to move faster and engineering judgement kept firmly human.',
  ],
  philosophy: [
    {
      title: 'Architecture first',
      body: 'Model the domain and the permissions before writing endpoints. Good boundaries make multi-tenancy tractable.',
    },
    {
      title: 'Performance is a feature',
      body: 'I profile queries, index deliberately, and cache with Redis — fast APIs are a product decision.',
    },
    {
      title: 'Maintainable by design',
      body: 'SOLID, service layers, and versioned APIs so the next release is as safe as the last one.',
    },
  ],
} as const;
