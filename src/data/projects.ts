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

  // --- EXPERIMENTS ---
  {
    id: 'predictive-agent',
    title: 'Predictive Agent',
    tagline: 'LSTM Time Series Model for Remaining Useful Life',
    description: 'LSTM model extending maintenance intervals 15 to 20 percent. Trained on the NASA C-MAPSS turbofan dataset.',
    category: 'experiment',
    tags: ['LSTM', 'Time Series', 'Predictive Maintenance'],
    metrics: [
      { value: '15 to 20%', label: 'Interval Extension' },
      { value: 'LSTM', label: 'Model' },
      { value: 'NASA', label: 'C-MAPSS' }
    ],
    githubUrl: 'https://github.com/davidfertube/predictive-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/predictive-agent',
    techStack: 'Python • Scikit-Learn • LSTM • Plotly • Docker • CI/CD',
    problem: 'Equipment operators need to predict failures before they happen to schedule maintenance proactively and avoid costly unplanned downtime.',
    solution: 'LSTM model trained on NASA C-MAPSS sensor degradation data, predicting Remaining Useful Life from multivariate time series patterns.',
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
    techStack: 'Python • Isolation Forest • Gradio • Time Series • Docker',
    problem: 'Industrial sensor streams generate massive data volumes. Manual monitoring misses subtle anomalies that precede equipment failures.',
    solution: 'Isolation Forest model detecting anomalies in vibration, temperature, and pressure time series data with automated root cause analysis surfaced to operations teams.',
    architecture: 'Sensor Stream → Feature Extraction → Isolation Forest → Anomaly Detection → Root Cause Analysis → Alert',
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
