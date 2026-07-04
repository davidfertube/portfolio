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
    id: 'altaviz',
    title: 'Altaviz',
    tagline: 'AI Media Buying Copilot with Statistical Anomaly Detection + MCP',
    description: 'Cross-platform ad monitoring that detects anomalies with real statistics, prices them in dollars, and drafts fixes behind human approval.',
    category: 'venture',
    tags: ['Agentic AI', 'Anomaly Detection', 'MCP', 'Claude', 'Tool-Calling'],
    metrics: [
      { value: '5', label: 'Detectors' },
      { value: '7', label: 'Agent + MCP Tools' },
      { value: 'HITL', label: 'Approval Gate' }
    ],
    githubUrl: 'https://github.com/davidfertube/altaviz',
    huggingFaceUrl: null,
    demoUrl: 'https://altaviz.vercel.app',
    techStack: 'Next.js 16 • React 19 • TypeScript • Anthropic Claude • mcp-handler • Recharts • React Three Fiber • Vercel',
    problem: 'Media buying teams lose money in the gap between when a campaign breaks and when a human notices. Fatigued creative doubles CPA for days; a tracking outage burns spend across platforms; a winning ad set stays budget-capped. At affiliate scale that detection lag is a permanent tax on ROI.',
    solution: 'A statistical engine (not LLM guesses) scans every campaign across Meta, Google, Taboola, and TikTok for creative fatigue, CPA drift, spend spikes, tracking outages, and underfunded winners — each priced in $/day. A Claude tool-calling copilot answers "what should I kill today?" in dollars and drafts typed actions that never execute without human approval. The same tool registry ships as an MCP server for Claude Desktop, Claude Code, and Cursor.',
    architecture: 'Seeded Multi-Platform Account → Detection Engine (z-scores, trend slopes, significance gates) → One zod Tool Registry → Claude Streaming Agent + MCP Server → Human-Approval Action Queue',
  },
  {
    id: 'steelagent',
    title: 'SteelAgent',
    tagline: 'RAG-Powered Document Retrieval with Traceable Citations',
    description: 'RAG system with vector search and traceable citations from uploaded PDFs.',
    category: 'venture',
    tags: ['RAG', 'Vector Search', 'pgvector', 'LLM'],
    metrics: [
      { value: '<5s', label: 'Response Time' },
      { value: '100%', label: 'Cited Answers' },
      { value: '$0', label: 'Monthly Cost' }
    ],
    githubUrl: 'https://github.com/davidfertube/steel-venture',
    huggingFaceUrl: null,
    demoUrl: 'https://steelagent.ai',
    techStack: 'Next.js 16 • React 19 • TypeScript • Supabase pgvector • Voyage AI • Groq • Vercel',
    problem: 'Domain experts spend hours searching through technical documents manually. Scattered documentation across systems leads to missed information and costly errors.',
    solution: 'RAG-powered retrieval engine that ingests PDFs, generates embeddings, and returns precise answers with traceable [1] [2] citations pointing to exact documents and pages.',
    architecture: 'PDF Upload → Text Extraction → Voyage AI Embeddings (1024d) → pgvector Search → Groq Llama 3.3 70B → Cited Answer',
  },

  // --- EXPERIMENTS ---
  {
    id: 'predictive-agent',
    title: 'Predictive Agent',
    tagline: 'LSTM Time-Series Model for Remaining Useful Life',
    description: 'LSTM model extending maintenance intervals 15-20%. Trained on NASA C-MAPSS turbofan dataset.',
    category: 'experiment',
    tags: ['LSTM', 'Time-Series', 'Predictive Maintenance'],
    metrics: [
      { value: '15-20%', label: 'Interval Extension' },
      { value: 'LSTM', label: 'Model' },
      { value: 'NASA', label: 'C-MAPSS' }
    ],
    githubUrl: 'https://github.com/davidfertube/predictive-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/predictive-agent',
    techStack: 'Python • Scikit-Learn • LSTM • Plotly • Docker • CI/CD',
    problem: 'Equipment operators need to predict failures before they happen to schedule maintenance proactively and avoid costly unplanned downtime.',
    solution: 'LSTM model trained on NASA C-MAPSS sensor degradation data, predicting Remaining Useful Life from multivariate time-series patterns.',
    architecture: 'Sensor History → Feature Engineering → LSTM Model → RUL Estimation → Maintenance Strategy',
  },
  {
    id: 'anomaly-agent',
    title: 'Anomaly Agent',
    tagline: 'Streaming Anomaly Detection with Automated Root Cause Analysis',
    description: 'Isolation Forest anomaly detection on streaming sensor data with automated root cause analysis. 92% precision.',
    category: 'experiment',
    tags: ['Anomaly Detection', 'Isolation Forest', 'Streaming'],
    metrics: [
      { value: '92%', label: 'Precision' },
      { value: '<5 min', label: 'Alert Latency' },
      { value: 'Auto', label: 'Root Cause' }
    ],
    githubUrl: 'https://github.com/davidfertube/iot-anomaly-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/anomaly-agent',
    techStack: 'Python • Isolation Forest • Gradio • Time-Series • Docker',
    problem: 'Industrial sensor streams generate massive data volumes. Manual monitoring misses subtle anomalies that precede equipment failures.',
    solution: 'Isolation Forest model detecting anomalies in vibration, temperature, and pressure time-series data with automated root cause analysis surfaced to operations teams.',
    architecture: 'Sensor Stream → Feature Extraction → Isolation Forest → Anomaly Detection → Root Cause Analysis → Alert',
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
