export interface ProjectMetric {
  value: string;
  label: string;
}

export type ProjectCategory = 'venture' | 'experiment';

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  metrics: ProjectMetric[];
  githubUrl: string | null;
  huggingFaceUrl: string | null;
  demoUrl?: string | null;
  techStack: string;
  problem: string;
  solution: string;
  architecture: string;
}

export const projects: ProjectData[] = [
  // --- VENTURES ---
  {
    id: 'geothermal-agent',
    title: 'Geothermal Agent',
    tagline: 'The Agent Powered Intelligence Platform for Geothermal Energy',
    description: 'Cited answers on brine chemistry, casing alloys, scaling, and well integrity for geothermal operators.',
    category: 'venture',
    tags: ['Agentic RAG', 'Geothermal', 'pgvector', 'Citations'],
    metrics: [
      { value: '3', label: 'Agents' },
      { value: 'Cited', label: 'Every Claim' },
      { value: 'Live', label: 'geoagent.energy' }
    ],
    githubUrl: null,
    huggingFaceUrl: null,
    demoUrl: 'https://geoagent.energy',
    techStack: 'Next.js 16 • React 19 • TypeScript • Supabase pgvector • Voyage AI • Claude • Vercel',
    problem: 'Geothermal operators lose days hunting through standards, service reports, and vendor data to answer one question: what survives this brine. The sources are scattered, and a wrong call on casing alloy or scaling control shows up later as a failed well.',
    solution: 'A corrosion and materials agent that retrieves from a curated geothermal corpus, writes every claim with the page it came from, checks that claim against the page, and refuses to answer when the corpus cannot back it. Three agents cover cited questions, integrity programs, and casing survey analysis.',
    architecture: 'Question → Voyage Retrieval → Reranking → Claude Answer → Citation Check → Cited Response',
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
