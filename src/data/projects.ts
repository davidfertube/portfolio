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
    tagline: 'AI-Powered Steel Manufacturing Intelligence',
    description: 'Enterprise knowledge platform for steel manufacturing—integrating metallurgical data, process parameters, and quality metrics for intelligent decision support.',
    category: 'venture',
    tags: ['RAG', 'Manufacturing', 'Enterprise'],
    metrics: [
      { value: 'RAG', label: 'Pipeline' },
      { value: 'Steel', label: 'Domain' },
      { value: 'Enterprise', label: 'Scale' }
    ],
    githubUrl: null,
    huggingFaceUrl: null,
    demoUrl: 'https://red-flower-0152ee60f.1.azurestaticapps.net/',
    isPrivate: false,
    techStack: 'Python • LangChain • Azure AI • FastAPI • PostgreSQL',
    problem: 'Steel manufacturers struggle with siloed technical knowledge across metallurgy, process engineering, and quality control. Engineers spend hours searching for critical specifications.',
    solution: 'Intelligent knowledge retrieval platform using RAG to surface metallurgical standards, process parameters, and quality benchmarks from enterprise documentation.',
    architecture: 'Technical Documents → Semantic Chunking → Embeddings → Vector Search → LLM Response → Expert Answer',
    demoType: 'chat'
  },
  {
    id: 'renewal-agents',
    title: 'Renewal Agents',
    tagline: 'AI-Powered Defense Contractor Compliance',
    description: 'Automated CMMC 2.0 compliance assessment platform for defense contractors—mapping controls to NIST 800-171 and generating audit-ready evidence packages.',
    category: 'venture',
    tags: ['CMMC 2.0', 'Compliance', 'Defense'],
    metrics: [
      { value: 'Level 2', label: 'Certification' },
      { value: '110', label: 'Controls' },
      { value: 'DoD', label: 'Ready' }
    ],
    githubUrl: null,
    huggingFaceUrl: null,
    demoUrl: 'https://renewal-agents-649096848847.us-central1.run.app/',
    isPrivate: false,
    techStack: 'Python • LangChain • Azure AI • FastAPI • PostgreSQL',
    problem: 'Defense contractors must achieve CMMC 2.0 certification to bid on DoD contracts. Manual compliance mapping is error-prone and resource-intensive.',
    solution: 'AI platform automating CMMC 2.0 control assessment, evidence collection, and gap remediation—reducing certification timeline by 40%.',
    architecture: 'Policy Documents → NLP Analysis → NIST 800-171 Mapping → Gap Detection → Evidence Package Generation',
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
    category: 'project',
    tags: ['NERC CIP', 'Compliance', 'NLP'],
    metrics: [
      { value: '60%', label: 'Audit Reduction' },
      { value: 'CIP-006', label: 'Standard' },
      { value: 'Auto', label: 'Validation' }
    ],
    githubUrl: 'https://github.com/davidfertube/compliance-agent',
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
    githubUrl: 'https://github.com/davidfertube/anomaly-agent',
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
