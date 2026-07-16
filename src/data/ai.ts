export interface AITool {
  name: string;
  use: string;
}

export const aiIntro =
  'AI tooling is part of how I work — for code generation, debugging, refactoring, reviews, docs, and test cases. It accelerates the mechanical parts so I can spend judgement where it matters: architecture, correctness, and permissions. Every line still gets reviewed and owned.';

export const aiTools: AITool[] = [
  {
    name: 'Claude',
    use: 'Reasoning through architecture, refactors, and gnarly bugs — my primary pair.',
  },
  {
    name: 'Cursor',
    use: 'AI-native editing for multi-file changes with full project context.',
  },
  {
    name: 'Windsurf',
    use: 'Agentic flows for larger, well-scoped changes across a codebase.',
  },
  {
    name: 'GitHub Copilot',
    use: 'Inline completion for the predictable, repetitive parts of coding.',
  },
  {
    name: 'Cline',
    use: 'Agentic coding for task automation and generating test cases.',
  },
];

export const aiPrinciples = [
  'AI drafts; I decide. Nothing ships without review.',
  'Tests and types are the guardrails that make speed safe.',
  'Understanding the code beats generating more of it.',
];
