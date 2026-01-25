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
  isPrivate: boolean;
  techStack: string;
  problem: string;
  solution: string;
  architecture: string;
  demoType?: 'ppe-detection' | 'chat' | 'visualization' | 'iot-anomaly' | 'none';
}

export const projects: ProjectData[] = [
  // --- VENTURES ---
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Intelligence',
    tagline: 'AI-Driven Grid Reliability',
    description: 'Production-grade AI system predicting equipment RUL using FFT signal processing and LSTM networks—delivering measurable reliability improvements for energy grid operations.',
    category: 'venture',
    tags: ['MLOps', 'Time-Series', 'Cloud-Native'],
    metrics: [
      { value: 'RUL', label: 'Prediction' },
      { value: 'FFT', label: 'Analysis' },
      { value: 'MLOps', label: 'Pipeline' }
    ],
    githubUrl: 'https://github.com/davidfertube/predictive-maintenance',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/predictive-maintenance',
    isPrivate: false,
    techStack: 'Python • Scikit-Learn • LSTM • Plotly • Docker • CI/CD',
    problem: 'Run-to-failure maintenance creates grid instability and costly outages. Energy operators need predictive foresight into equipment failure modes.',
    solution: 'Scalable failure predictor deployed in cloud-native environments, estimating RUL from degradation trends for proactive maintenance scheduling.',
    architecture: 'Sensor History → FFT Analysis → LSTM Model → RUL Estimation → Maintenance Strategy Agent',
    demoType: 'visualization'
  },
  {
    id: 'enterprise-knowledge-retrieval',
    title: 'Enterprise Knowledge Retrieval',
    tagline: 'Agentic RAG for Energy & Commodities',
    description: 'Production-grade agentic RAG pipeline for Energy & Commodities featuring semantic chunking, OpenAI embeddings, Pinecone vector search, and LangGraph multi-agent orchestration.',
    category: 'venture',
    tags: ['RAG', 'LangGraph', 'Vector Search'],
    metrics: [
      { value: '50K+', label: 'Documents' },
      { value: 'Agents', label: 'Multi-Step' },
      { value: 'Enterprise', label: 'Scale' }
    ],
    githubUrl: 'https://github.com/davidfertube/chat-with-assets-rag',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'LangChain • LangGraph • ChromaDB • Pinecone • FastAPI',
    problem: 'Enterprises struggle to retrieve accurate answers from massive, siloed technical documentation. Simple search misses critical context.',
    solution: 'Enterprise-scale knowledge retrieval using RAG, semantic chunking strategies, and multi-agent workflows for Energy & Commodities supply chain operations.',
    architecture: 'Technical Manuals → Semantic Chunking → Embeddings → Pinecone → LangGraph Agents → Expert Response',
    demoType: 'chat'
  },

  // --- PRODUCTION PROJECTS ---
  {
    id: 'grid-operations-assistant',
    title: 'Grid Operations Voice Assistant',
    tagline: 'Edge AI for Power Grid Technicians',
    description: 'Production-grade edge AI assistant enabling hands-free access to grid maintenance protocols, outage procedures, and real-time SCADA data for NRG field technicians.',
    category: 'project',
    tags: ['Edge AI', 'Power Grid', 'Voice'],
    metrics: [
      { value: 'Edge', label: 'Compute' },
      { value: 'SCADA', label: 'Integration' },
      { value: 'Offline', label: 'Capable' }
    ],
    githubUrl: null,
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Python • Whisper • Local LLM • React Native • Docker',
    problem: 'Power grid technicians need hands-free access to SCADA data, outage maps, and maintenance procedures while working on energized equipment.',
    solution: 'Edge-deployed voice assistant with local LLM inference delivering grid status, safety protocols, and equipment schematics even in remote substations.',
    architecture: 'Voice Input → Edge STT (Whisper) → SCADA API → Local LLM → TTS → Technician Audio',
    demoType: 'none'
  },
  {
    id: 'nerc-cip-agent',
    title: 'NERC CIP Compliance Agent',
    tagline: 'Multi-Agent Regulatory Assessment',
    description: 'Multi-agent AI system automating NERC CIP compliance assessments for power utilities—scanning BES cyber systems and generating audit-ready gap analysis reports.',
    category: 'project',
    tags: ['PydanticAI', 'NERC CIP', 'Compliance'],
    metrics: [
      { value: 'NERC', label: 'CIP Standards' },
      { value: 'BES', label: 'Cyber Systems' },
      { value: 'Auto', label: 'Audit' }
    ],
    githubUrl: 'https://github.com/davidfertube/policy-guard',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/policy-guard',
    isPrivate: false,
    techStack: 'PydanticAI • DSPy • Python • FastAPI • Docker',
    problem: 'NERC CIP compliance requires continuous monitoring of 45+ standards across BES cyber systems. Manual audits are resource-intensive and error-prone.',
    solution: 'Multi-agent system trained on NERC CIP v6/v7 standards that automates control validation, evidence collection, and gap analysis for power grid compliance.',
    architecture: 'BES System Configs → PydanticAI Orchestration → NERC CIP Validator → Audit-Ready Report',
    demoType: 'none'
  },
  {
    id: 'energy-data-lake',
    title: 'Energy Data Lake Platform',
    tagline: 'Unified Power Generation Analytics',
    description: 'Cloud-native data platform unifying generation, transmission, and market data—enabling AI-ready analytics across NRG\'s fleet of power plants.',
    category: 'project',
    tags: ['Data Platform', 'Cloud-Native', 'Power Generation'],
    metrics: [
      { value: 'Multi-Source', label: 'Integration' },
      { value: 'Real-Time', label: 'Streaming' },
      { value: 'AI-Ready', label: 'Analytics' }
    ],
    githubUrl: null,
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Python • FastAPI • Apache Kafka • Databricks • Kubernetes',
    problem: 'Power generation data is siloed across plant historians, SCADA systems, and market feeds. Cross-fleet analytics requires unified data access.',
    solution: 'Cloud-native data lake platform ingesting PI historian, SCADA, and ERCOT market data into a unified schema for fleet-wide AI applications.',
    architecture: 'PI/SCADA/Market Data → Kafka Streaming → Delta Lake → Databricks → Analytics APIs',
    demoType: 'none'
  },
  {
    id: 'turbine-anomaly-agent',
    title: 'Turbine Anomaly Detection Agent',
    tagline: 'Real-Time Power Plant Monitoring',
    description: 'AI agent for real-time gas turbine monitoring—detecting anomalies in vibration, temperature, and performance data with LLM-powered root cause analysis.',
    category: 'experiment',
    tags: ['Agents', 'Power Generation', 'Anomaly Detection'],
    metrics: [
      { value: 'Real-Time', label: 'Monitoring' },
      { value: 'Gas Turbine', label: 'Focus' },
      { value: 'LLM', label: 'Analysis' }
    ],
    githubUrl: 'https://github.com/davidfertube/iot-anomaly-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/iot-anomaly-agent',
    isPrivate: false,
    techStack: 'Python • Isolation Forest • Mistral-7B • Gradio • Time-Series',
    problem: 'Gas turbines generate massive sensor streams. Manual monitoring misses subtle anomalies in vibration and heat rate that precede forced outages.',
    solution: 'AI agent combining Isolation Forest for anomaly detection with LLM-powered analysis—correlating sensor deviations to known turbine failure modes.',
    architecture: 'Turbine Sensors → Isolation Forest → Anomaly Detection → LLM Root Cause → Operations Alert',
    demoType: 'iot-anomaly'
  },

  // --- EXPERIMENTS ---
  {
    id: 'geo-insight-hse',
    title: 'Vision AI Safety Inspector',
    tagline: 'VLM for HSE Compliance',
    description: 'Production-grade Vision-Language Model (VLM) for real-time HSE compliance—delivering measurable safety improvements at energy facilities.',
    category: 'experiment',
    tags: ['VLM', 'Computer Vision', 'Safety'],
    metrics: [
      { value: 'Vision', label: 'Model' },
      { value: 'R&D', label: 'Phase' },
      { value: 'Safety', label: 'First' }
    ],
    githubUrl: 'https://github.com/davidfertube/geo-insight-hse',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Qwen2-VL • Transformers • Python • Gradio • Docker',
    problem: 'Conventional object detection misses behavioral context. Energy facilities need AI that understands unsafe actions, not just objects.',
    solution: 'VLM system using Qwen2-VL to reason about safety scenes in natural language for HSE compliance monitoring.',
    architecture: 'Video Feed → VLM Inference → Safety Reasoning → Alert System',
    demoType: 'ppe-detection'
  },
  {
    id: 'las-parser',
    title: 'Well Log Data Parser',
    tagline: 'Energy Data ETL Pipeline',
    description: 'Cloud-native ETL pipeline for LAS/DLIS well log files with vectorization for RAG applications in Energy & Commodities operations.',
    category: 'experiment',
    tags: ['Data Engineering', 'Energy', 'Vectorization'],
    metrics: [
      { value: 'LAS/DLIS', label: 'Formats' },
      { value: 'ETL', label: 'Pipeline' },
      { value: 'Vector', label: 'Ready' }
    ],
    githubUrl: 'https://github.com/davidfertube/las-parser',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Python • LASIO • Pandas • Mistral-7B • Gradio',
    problem: 'Well log data in legacy LAS/DLIS formats is difficult to integrate with modern AI systems and RAG pipelines.',
    solution: 'ETL pipeline that parses, normalizes, and vectorizes well log data for seamless integration with enterprise AI applications.',
    architecture: 'LAS/DLIS Files → LASIO Parser → Data Normalization → Vectorization → RAG-Ready Output',
    demoType: 'none'
  },
  {
    id: 'rl-supply-chain',
    title: 'RL Supply Chain Optimizer',
    tagline: 'Reinforcement Learning for Inventory',
    description: 'Autonomous inventory management using PPO reinforcement learning—demonstrating AI-driven optimization for supply chain operations.',
    category: 'experiment',
    tags: ['Reinforcement Learning', 'Optimization', 'PPO'],
    metrics: [
      { value: 'PPO', label: 'Algorithm' },
      { value: 'RL', label: 'Agent' },
      { value: 'Supply', label: 'Chain' }
    ],
    githubUrl: 'https://github.com/davidfertube/rl-supply-chain',
    huggingFaceUrl: null,
    isPrivate: false,
    techStack: 'Python • Stable Baselines3 • PPO • Gymnasium • Docker',
    problem: 'Traditional inventory management relies on heuristics. Complex supply chains need adaptive, AI-driven optimization.',
    solution: 'Reinforcement learning agent using PPO to optimize inventory levels, reorder points, and supply chain decisions autonomously.',
    architecture: 'Environment State → PPO Agent → Action Selection → Reward Calculation → Policy Update',
    demoType: 'none'
  }
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
