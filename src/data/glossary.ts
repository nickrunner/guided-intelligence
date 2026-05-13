export interface GlossaryTerm {
  slug: string;
  term: string;
  abbreviation?: string;
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  {
    slug: 'gi',
    term: 'Guided Intelligence',
    abbreviation: 'GI',
    definition:
      'The operating framework. A structured, AI-native engineering model built around continuous flow, layered safety, and human semantic oversight.',
  },
  {
    slug: 'hil',
    term: 'Human-in-the-Loop',
    abbreviation: 'HIL',
    definition:
      'A principle and responsibility model where humans provide semantic judgment, constraints, and contextual decisions while AI performs most mechanical execution.',
  },
  {
    slug: 'team',
    term: 'Team',
    definition:
      'A GI Team consists of Builders and Reviewers. Individuals may belong to multiple GI Teams. The Planner oversees the entire Domain rather than any single Team.',
  },
  {
    slug: 'domain',
    term: 'Domain',
    definition:
      'Represents the entire semantic surface a Planner oversees, comprising all capability and layer tracks and the cells they form across the product or system.',
  },
  {
    slug: 'track',
    term: 'Track',
    definition:
      'A one-dimensional lane of responsibility within a Domain. Capability Tracks correspond to product capabilities, and Layer Tracks correspond to technical layers.',
  },
  {
    slug: 'cell',
    term: 'Cell',
    definition: 'The intersection of a capability track and a layer track.',
  },
  {
    slug: 'flow',
    term: 'Flow',
    definition: 'The continuous, non-batched, core pipeline of the velocity model.',
  },
  {
    slug: 'shift',
    term: 'Shift',
    definition:
      'Structured HIL role that defines who holds responsibility at each stage of the flow. Shifts define boundaries, prevent role bleed, and ensure clear semantic ownership at every step.',
  },
  {
    slug: 'semantic-work',
    term: 'Semantic Work',
    definition:
      'The primary human contribution within GI. Humans evaluate meaning, correctness, intent alignment, trade offs, and domain invariants rather than mechanical implementation.',
  },
  {
    slug: 'mechanical-work',
    term: 'Mechanical Work',
    definition:
      'Work that can be executed deterministically by AI: code generation, refactors, boilerplate, test creation, formatting, and structured analysis.',
  },
  {
    slug: 'intent',
    term: 'Intent',
    definition:
      'The primary input to the GI Flow. A structured statement of what the system should achieve.',
  },
  {
    slug: 'execution-plan',
    term: 'Execution Plan',
    definition:
      'The AI-generated plan that bridges Planner intent to Builder execution. It outlines steps, constraints, scope, contracts, and success criteria.',
  },
  {
    slug: 'pat',
    term: 'Product Acceptance Testing',
    abbreviation: 'PAT',
    definition:
      'A continuous, asynchronous validation layer that performs exploratory testing, regression verification, invariant checking, and system-level validation outside the main flow.',
  },
  {
    slug: 'severity-model',
    term: 'Severity Model',
    abbreviation: 'Sev1–Sev5',
    definition:
      'The standardized classification system for bugs, regressions, and system anomalies. Sev5 stops the line; Sev1–4 allow flow to continue with appropriate response.',
  },
  {
    slug: 'ring',
    term: 'Ring',
    definition:
      'Canary deployment stages. Ring 0 = internal validation environment; smallest blast radius. Ring 1 = limited real-user exposure before general release.',
  },
  {
    slug: 'invariant',
    term: 'Invariant',
    definition:
      'A condition, rule, or system property that must always hold true within a domain. Invariants define the non-negotiable behaviors, data relationships, contracts, and assumptions that protect system correctness.',
  },
];

export function findTerm(slug: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.slug === slug);
}
