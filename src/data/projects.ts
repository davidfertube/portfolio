export interface ProjectMetric {
  value: string;
  label: string;
}

export type ProjectCategory = 'venture' | 'project' | 'experiment';

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
  isPrivate: boolean;
  techStack: string;
  problem: string;
  solution: string;
  architecture: string;
  demoType?: 'ppe-detection' | 'chat' | 'visualization' | 'iot-anomaly' | 'none';
}

export const projects: ProjectData[] = [
  // --- VENTURES (No links - business concepts) ---
  {
    id: 'specvault',
    title: 'SpecVault',
    tagline: 'AI Compliance Verification for O&G Materials Engineers',
    description: 'AI-powered RAG system for querying steel specifications with traceable citations. Query NACE MR0175, ASTM, and API standards instantly with answers engineers can cite in compliance reports.',
    category: 'venture',
    tags: ['RAG', 'NACE/ASTM/API', 'Compliance', 'O&G'],
    metrics: [
      { value: '<5s', label: 'Response Time' },
      { value: '100%', label: 'Cited Answers' },
      { value: '$0', label: 'Monthly Cost' }
    ],
    githubUrl: 'https://github.com/davidfertube/steel-venture',
    huggingFaceUrl: null,
    demoUrl: 'https://specvault.app',
    isPrivate: false,
    techStack: 'Next.js 16 • React 19 • TypeScript • Supabase pgvector • Voyage AI • Groq • Vercel',
    problem: 'Materials engineers spend 2-4 hours/day searching specs manually. Wrong material specification = $10M+ liability. NACE/ASTM/API docs scattered across systems cause compliance audit failures.',
    solution: 'RAG-powered compliance verification engine that retrieves precise specifications from uploaded PDFs with traceable [1] [2] citations pointing to exact documents and pages.',
    architecture: 'PDF Upload → Text Extraction → Voyage AI Embeddings (1024d) → pgvector Search → Groq Llama 3.3 70B → Cited Answer',
    demoType: 'chat'
  },
  {
    id: 'altaviz',
    title: 'Altaviz',
    tagline: 'Predictive Maintenance MLOps for Natural Gas Compression',
    description: 'Production-ready MLOps platform monitoring 10 compressor units across 4 Texas stations. PySpark ETL pipelines process 50k+ sensor readings through a Bronze/Silver/Gold medallion architecture into real-time fleet health dashboards.',
    category: 'venture',
    tags: ['MLOps', 'PySpark', 'Predictive Maintenance', 'Energy'],
    metrics: [
      { value: '50k+', label: 'Sensor Readings' },
      { value: '10', label: 'Compressors' },
      { value: '4', label: 'TX Stations' }
    ],
    githubUrl: 'https://github.com/davidfertube/altaviz',
    huggingFaceUrl: null,
    demoUrl: 'https://altaviz.app',
    isPrivate: false,
    techStack: 'PySpark • Delta Lake • PostgreSQL • Streamlit • Plotly • Docker • Terraform',
    problem: 'Gas compression operators rely on reactive maintenance, leading to unplanned downtime costing $50k+/day. Sensor data across distributed stations is siloed and not actionable.',
    solution: 'End-to-end MLOps pipeline: simulate sensor data, process through medallion architecture ETL, store multi-window aggregates in PostgreSQL, and visualize fleet health with real-time alerting.',
    architecture: 'Data Simulator → PySpark ETL (Bronze/Silver/Gold) → PostgreSQL (7 tables) → Streamlit Dashboard (4 pages)',
    demoType: 'none'
  },

  // --- EXPERIMENTS (GitHub repos only) ---
  {
    id: 'predictive-agent',
    title: 'Predictive Agent',
    tagline: 'LSTM-Based RUL Prediction',
    description: 'RUL prediction system extending turbine life 15-20% using LSTM neural networks trained on NASA C-MAPSS and GE 7FA patterns.',
    category: 'experiment',
    tags: ['LSTM', 'Time-Series', 'MLOps'],
    metrics: [
      { value: '15-20%', label: 'Life Extension' },
      { value: 'LSTM', label: 'Model' },
      { value: 'NASA', label: 'C-MAPSS' }
    ],
    githubUrl: 'https://github.com/davidfertube/predictive-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/predictive-agent',
    isPrivate: false,
    techStack: 'Python • Scikit-Learn • LSTM • Plotly • Docker • CI/CD',
    problem: 'Power plant operators need to predict equipment failures before they happen to schedule maintenance proactively.',
    solution: 'LSTM model trained on NASA C-MAPSS data, adapted for GE Frame 7FA turbines, predicting Remaining Useful Life from sensor degradation patterns.',
    architecture: 'Sensor History → Feature Engineering → LSTM Model → RUL Estimation → Maintenance Strategy',
    demoType: 'visualization'
  },
  {
    id: 'compliance-agent',
    title: 'Compliance Agent',
    tagline: 'NERC CIP Compliance Automation',
    description: 'NERC CIP compliance automation reducing audit prep 60% through automated procedure validation against CIP-006-6 requirements.',
    category: 'experiment',
    tags: ['NERC CIP', 'Compliance', 'NLP'],
    metrics: [
      { value: '60%', label: 'Audit Reduction' },
      { value: 'CIP-006', label: 'Standard' },
      { value: 'Auto', label: 'Validation' }
    ],
    githubUrl: 'https://github.com/davidfertube/policy-guard',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/compliance-agent',
    isPrivate: false,
    techStack: 'PydanticAI • DSPy • Mistral • Python • FastAPI',
    problem: 'NERC CIP compliance requires continuous monitoring of standards across BES cyber systems. Manual audits are resource-intensive and error-prone.',
    solution: 'NLP model fine-tuned on NERC CIP standards that automates procedure validation, gap detection, and remediation recommendations.',
    architecture: 'Procedure Document → NLP Analysis → CIP-006 Validation → Gap Report → Remediation Plan',
    demoType: 'none'
  },
  {
    id: 'anomaly-agent',
    title: 'Anomaly Agent',
    tagline: 'Real-Time Turbine Monitoring',
    description: 'Real-time turbine anomaly detection with auto root cause analysis using Isolation Forest and LLM-powered diagnostics.',
    category: 'experiment',
    tags: ['Anomaly Detection', 'IoT', 'LLM'],
    metrics: [
      { value: 'Real-Time', label: 'Detection' },
      { value: 'Auto', label: 'RCA' },
      { value: 'SCADA', label: 'Integration' }
    ],
    githubUrl: 'https://github.com/davidfertube/anomaly-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/anomaly-agent',
    isPrivate: false,
    techStack: 'Python • Isolation Forest • Gradio • Time-Series • Docker',
    problem: 'Gas turbines generate massive sensor streams. Manual monitoring misses subtle anomalies that precede forced outages.',
    solution: 'Isolation Forest model detecting anomalies in vibration, temperature, and pressure data with automated root cause analysis.',
    architecture: 'Turbine Sensors → Isolation Forest → Anomaly Detection → Root Cause Analysis → Operations Alert',
    demoType: 'iot-anomaly'
  },
  {
    id: 'vision-agent',
    title: 'Vision Agent',
    tagline: 'VLM for HSE Compliance',
    description: 'Vision AI for HSE compliance inspection using Qwen2-VL multimodal model for safety scene understanding.',
    category: 'experiment',
    tags: ['VLM', 'Computer Vision', 'Safety'],
    metrics: [
      { value: 'VLM', label: 'Multimodal' },
      { value: 'HSE', label: 'Compliance' },
      { value: 'Real-Time', label: 'Analysis' }
    ],
    githubUrl: 'https://github.com/davidfertube/vision-agent',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Qwen2-VL • Transformers • Python • Gradio • Docker',
    problem: 'Traditional object detection misses behavioral context. Safety requires understanding actions, not just objects.',
    solution: 'VLM system using Qwen2-VL to reason about safety scenes in natural language.',
    architecture: 'Video Feed → VLM Inference → Safety Reasoning → Alert System',
    demoType: 'none'
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
