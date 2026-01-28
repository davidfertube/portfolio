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
    id: 'steel-agents',
    title: 'Steel Agents',
    tagline: 'The Intelligent Engine for Steel Specifications',
    description: 'AI-powered RAG system helping engineering teams instantly access ASTM standards, material specifications, and compliance requirements through conversational queries with cited answers.',
    category: 'venture',
    tags: ['RAG', 'ASTM', 'Engineering'],
    metrics: [
      { value: '<2s', label: 'Response Time' },
      { value: '100K+', label: 'Vectors' },
      { value: 'ASTM/ASME', label: 'Standards' }
    ],
    githubUrl: null,
    huggingFaceUrl: null,
    demoUrl: 'https://steel-venture.vercel.app/',
    isPrivate: false,
    techStack: 'Python • LangGraph • Azure AI • FastAPI • PostgreSQL',
    problem: 'Engineering teams waste hours manually searching through PDFs to find steel specifications, ASTM standards, and compliance requirements.',
    solution: 'RAG-powered knowledge engine that retrieves precise information from technical documents in under 2 seconds with traceable source citations including document names, pages, and sections.',
    architecture: 'Technical Documents → Semantic Chunking → 100K+ Vector Store → AI Context Understanding → Cited Answer',
    demoType: 'chat'
  },

  // --- PRODUCTION PROJECTS (3 - All have GitHub + HuggingFace demos) ---
  {
    id: 'predictive-agent',
    title: 'Predictive Agent',
    tagline: 'LSTM-Based RUL Prediction',
    description: 'RUL prediction system extending turbine life 15-20% using LSTM neural networks trained on NASA C-MAPSS and GE 7FA patterns.',
    category: 'project',
    tags: ['LSTM', 'Time-Series', 'MLOps'],
    metrics: [
      { value: '15-20%', label: 'Life Extension' },
      { value: 'LSTM', label: 'Model' },
      { value: 'NASA', label: 'C-MAPSS' }
    ],
    githubUrl: 'https://github.com/davidfertube/predictive-maintenance',
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
    category: 'project',
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
    category: 'project',
    tags: ['Anomaly Detection', 'IoT', 'LLM'],
    metrics: [
      { value: 'Real-Time', label: 'Detection' },
      { value: 'Auto', label: 'RCA' },
      { value: 'SCADA', label: 'Integration' }
    ],
    githubUrl: 'https://github.com/davidfertube/iot-anomaly-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/anomaly-agent',
    isPrivate: false,
    techStack: 'Python • Isolation Forest • Gradio • Time-Series • Docker',
    problem: 'Gas turbines generate massive sensor streams. Manual monitoring misses subtle anomalies that precede forced outages.',
    solution: 'Isolation Forest model detecting anomalies in vibration, temperature, and pressure data with automated root cause analysis.',
    architecture: 'Turbine Sensors → Isolation Forest → Anomaly Detection → Root Cause Analysis → Operations Alert',
    demoType: 'iot-anomaly'
  },

  // --- EXPERIMENTS (View Code only) ---
  {
    id: 'chat-with-assets-rag',
    title: 'Enterprise RAG',
    tagline: 'Agentic RAG for Industrial Documents',
    description: 'Agentic RAG for industrial document Q&A using LangChain, Pinecone vector search, and multi-agent orchestration.',
    category: 'experiment',
    tags: ['RAG', 'LangChain', 'Pinecone'],
    metrics: [
      { value: 'RAG', label: 'Pipeline' },
      { value: 'Vector', label: 'Search' },
      { value: 'Agents', label: 'Multi-Step' }
    ],
    githubUrl: 'https://github.com/davidfertube/chat-with-assets-rag',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'LangChain • LangGraph • ChromaDB • Pinecone • FastAPI',
    problem: 'Technical documentation is siloed and hard to search. Engineers need contextual answers, not keyword matches.',
    solution: 'RAG pipeline with semantic chunking and multi-agent workflows for accurate technical document retrieval.',
    architecture: 'Documents → Chunking → Embeddings → Vector Store → Agent Orchestration → Response',
    demoType: 'none'
  },
  {
    id: 'geo-insight-hse',
    title: 'Vision AI Safety Inspector',
    tagline: 'VLM for HSE Compliance',
    description: 'Vision AI for HSE compliance inspection using Qwen2-VL multimodal model for safety scene understanding.',
    category: 'experiment',
    tags: ['VLM', 'Computer Vision', 'Safety'],
    metrics: [
      { value: 'VLM', label: 'Multimodal' },
      { value: 'HSE', label: 'Compliance' },
      { value: 'Real-Time', label: 'Analysis' }
    ],
    githubUrl: 'https://github.com/davidfertube/geo-insight-hse',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Qwen2-VL • Transformers • Python • Gradio • Docker',
    problem: 'Traditional object detection misses behavioral context. Safety requires understanding actions, not just objects.',
    solution: 'VLM system using Qwen2-VL to reason about safety scenes in natural language.',
    architecture: 'Video Feed → VLM Inference → Safety Reasoning → Alert System',
    demoType: 'none'
  },
  {
    id: 'data-parser-energy',
    title: 'Data Parser - Energy',
    tagline: 'Well Log Data ETL',
    description: 'Well log data parser for energy ETL pipelines, 10x faster than industry standard parsers.',
    category: 'experiment',
    tags: ['Data Engineering', 'Energy', 'ETL'],
    metrics: [
      { value: '10x', label: 'Faster' },
      { value: 'LAS/DLIS', label: 'Formats' },
      { value: 'ETL', label: 'Pipeline' }
    ],
    githubUrl: 'https://github.com/davidfertube/las-parser',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Python • LASIO • Pandas • NumPy • Docker',
    problem: 'Well log data in legacy LAS/DLIS formats is slow to parse and difficult to integrate with modern systems.',
    solution: 'Optimized ETL pipeline parsing well log data 10x faster than standard tools.',
    architecture: 'LAS/DLIS Files → Optimized Parser → Normalization → Output Formats',
    demoType: 'none'
  },
  {
    id: 'rl-supply-chain',
    title: 'RL Supply Chain',
    tagline: 'PPO Inventory Optimization',
    description: 'RL-based inventory optimization reducing stockouts 25% using PPO reinforcement learning.',
    category: 'experiment',
    tags: ['Reinforcement Learning', 'PPO', 'Optimization'],
    metrics: [
      { value: '25%', label: 'Stockout Reduction' },
      { value: 'PPO', label: 'Algorithm' },
      { value: 'RL', label: 'Agent' }
    ],
    githubUrl: 'https://github.com/davidfertube/rl-supply-chain',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Python • Stable Baselines3 • PPO • Gymnasium • Docker',
    problem: 'Traditional inventory management uses static rules. Complex supply chains need adaptive optimization.',
    solution: 'PPO agent learning optimal inventory policies through simulation, reducing stockouts 25%.',
    architecture: 'Environment State → PPO Agent → Action → Reward → Policy Update',
    demoType: 'none'
  }
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
