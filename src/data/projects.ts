export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
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
  {
    id: 'geo-insight',
    title: 'Geo-Insight HSE',
    tagline: 'Real Time PPE Detection for HSE Compliance',
    description: 'Real Time PPE detection for HSE compliance using computer vision.',
    tags: ['YOLOv8', 'Azure Container Apps', 'Edge AI'],
    metrics: [
      { value: '99%', label: 'Accuracy' },
      { value: '<100ms', label: 'Latency' },
      { value: '24/7', label: 'Monitoring' }
    ],
    githubUrl: 'https://github.com/davidfertube/geo-insight-hse',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/geo-insight-hse',
    isPrivate: false,
    techStack: 'YOLOv8 • Azure Container Apps',
    problem: 'HSE is #1 priority in energy operations. Manual PPE monitoring is slow, inconsistent, and impossible to scale across large industrial sites.',
    solution: 'Real Time computer vision pipeline using YOLOv8 on Azure Edge devices. Processes live camera feeds with sub-100ms latency for instant alerts.',
    architecture: 'Camera → Edge Device → OPC UA → SCADA/HMI. ONNX optimized for air-gapped OT environments (Purdue Level 3).',
    demoType: 'ppe-detection'
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    tagline: 'Equipment Failure Prediction with LSTM',
    description: 'Equipment failure prediction using LSTM neural networks.',
    tags: ['LSTM', 'NASA Dataset', 'FFT Analysis'],
    metrics: [
      { value: '92%', label: 'F1 Score' },
      { value: '48hrs', label: 'Early Warning' },
      { value: '30%', label: 'Cost Reduction' }
    ],
    githubUrl: 'https://github.com/davidfertube/predictive-maintenance',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/predictive-maintenance',
    isPrivate: false,
    techStack: 'LSTM • NASA Dataset • FFT',
    problem: 'Unplanned equipment failures cause costly downtime and safety hazards. Traditional scheduled maintenance is wasteful and ineffective.',
    solution: 'LSTM neural network trained on NASA turbofan dataset. Uses FFT for vibration analysis and predicts Remaining Useful Life (RUL) with 48-hour lead time.',
    architecture: 'Sensor Data → FFT Processing → LSTM Model → RUL Prediction → Alert System with Azure IoT Hub integration.',
    demoType: 'visualization'
  },
  {
    id: 'iot-anomaly-agent',
    title: 'IoT Anomaly Agent',
    tagline: 'Agentic AI for Industrial Sensor Monitoring',
    description: 'Real-time anomaly detection and automated response using AI agents.',
    tags: ['Azure IoT Hub', 'Sim.ai', 'Real-time ML'],
    metrics: [
      { value: '<30s', label: 'Alert Latency' },
      { value: '6', label: 'Sensor Types' },
      { value: 'Auto', label: 'Work Orders' }
    ],
    githubUrl: 'https://github.com/davidfertube/iot-anomaly-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/iot-anomaly-agent',
    isPrivate: false,
    techStack: 'Azure IoT Hub • Sim.ai • Stream Analytics',
    problem: 'Industrial sensors generate massive data streams. Manual monitoring is impossible at scale, and traditional threshold alerts create alert fatigue with too many false positives.',
    solution: 'AI agent that ingests real-time telemetry from Azure IoT Hub, detects multi-sensor anomaly patterns using ML, and autonomously generates work orders with human-in-the-loop approval.',
    architecture: 'Sensors → Azure IoT Hub (Free Tier) → Stream Analytics → Anomaly Detection ML → Sim.ai Agent → Auto-generate Work Order → Teams/ServiceNow notification.',
    demoType: 'iot-anomaly'
  },
  {
    id: 'chat-with-assets',
    title: 'Chat-with-Assets RAG',
    tagline: 'Enterprise RAG for Technical Documentation',
    description: 'Enterprise RAG pipeline for technical documentation.',
    tags: ['Azure AI Search', 'Next.js', 'LangChain'],
    metrics: [
      { value: '4.2s', label: 'Response Time' },
      { value: '10K+', label: 'Documents' },
      { value: '95%', label: 'Relevance' }
    ],
    githubUrl: 'https://github.com/davidfertube/chat-with-assets-rag',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/chat-with-assets-rag',
    isPrivate: true,
    techStack: 'Azure AI Search • Next.js',
    problem: 'Engineers waste hours searching through thousands of PDFs, manuals, and P&IDs. Knowledge is siloed and hard to access.',
    solution: 'Conversational AI that ingests and indexes all technical documentation. Engineers ask natural language questions and get cited answers instantly.',
    architecture: 'Documents → Azure AI Search (Hybrid + Semantic) → LangChain → GPT-4o → Cited Response with source links.',
    demoType: 'chat'
  },
  {
    id: 'legal-eagle',
    title: 'Legal-Eagle Agent',
    tagline: 'Multi-Agent Contract Review System',
    description: 'Multi-agent system for contract review and analysis.',
    tags: ['LangGraph', 'Azure OpenAI', 'Gemini'],
    metrics: [
      { value: '5', label: 'Specialized Agents' },
      { value: '80%', label: 'Time Saved' },
      { value: 'Multi LLM', label: 'Architecture' }
    ],
    githubUrl: 'https://github.com/davidfertube/legal-eagle-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/legal-eagle-agent',
    isPrivate: true,
    techStack: 'LangGraph • Azure OpenAI • Gemini',
    problem: 'Contract review is tedious, expensive, and prone to human error. Legal teams are bottlenecks for deal velocity.',
    solution: 'Orchestrated multi-agent system where specialized agents handle different contract aspects: risk analysis, clause extraction, red-flag detection, and summary generation.',
    architecture: 'Contract → Supervisor Agent → [Risk Agent, Clause Agent, Summary Agent] → LangGraph Orchestration → Structured Report.',
    demoType: 'none'
  },
  {
    id: 'policy-guard',
    title: 'Policy-Guard Compliance',
    tagline: 'Policy-as-Code Engine for Regulatory Compliance',
    description: 'Policy-as-Code engine for regulatory compliance.',
    tags: ['DSPy', 'Web Demo', 'LLM Evaluation'],
    metrics: [
      { value: '100+', label: 'Policies' },
      { value: 'Real Time', label: 'Checking' },
      { value: 'DSPy', label: 'Optimization' }
    ],
    githubUrl: 'https://github.com/davidfertube/policy-guard',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/policy-guard',
    isPrivate: false,
    techStack: 'DSPy • Web Demo',
    problem: 'Regulatory compliance is complex and ever-changing. Manual policy checking is slow, inconsistent, and scales poorly.',
    solution: 'DSPy-optimized prompts that convert natural language policies into executable checks. Evaluates documents against multiple compliance frameworks simultaneously.',
    architecture: 'Policy Library → DSPy Compiler → Optimized Prompts → Document Evaluation → Compliance Score with specific violations.',
    demoType: 'none'
  },
  {
    id: 'rl-supply-chain',
    title: 'RL Supply Chain',
    tagline: 'Reinforcement Learning for Inventory Optimization',
    description: 'Reinforcement learning for supply chain optimization.',
    tags: ['Stable Baselines3', 'Azure ML', 'PPO'],
    metrics: [
      { value: '23%', label: 'Cost Reduction' },
      { value: 'PPO', label: 'Algorithm' },
      { value: 'Real Time', label: 'Decisions' }
    ],
    githubUrl: 'https://github.com/davidfertube/rl-supply-chain',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/rl-supply-chain',
    isPrivate: false,
    techStack: 'Stable Baselines3 • Azure ML',
    problem: 'Traditional supply chain planning uses static rules that cannot adapt to demand volatility, leading to stockouts or excess inventory.',
    solution: 'PPO agent trained in custom gymnasium environment that learns optimal reorder policies. Adapts to seasonal patterns and demand spikes.',
    architecture: 'Demand Forecast → Custom Gym Environment → PPO Agent → Inventory Decision → Reward Signal (minimize cost + stockout).',
    demoType: 'visualization'
  },
  {
    id: 'hallucination-hunter',
    title: 'Hallucination Hunter',
    tagline: 'Automated Groundedness & Relevance Testing',
    description: 'Automated Groundedness & Relevance Testing for Industrial Agents.',
    tags: ['Azure AI Studio', 'EvalOps', 'Golden Datasets'],
    metrics: [
      { value: '94%', label: 'Accuracy (vs 60%)' },
      { value: '50', label: 'Golden Q/A Pairs' },
      { value: 'EvalOps', label: 'Pipeline' }
    ],
    githubUrl: 'https://github.com/davidfertube/hallucination-hunter',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/hallucination-hunter',
    isPrivate: true,
    techStack: 'Azure AI Studio • EvalOps',
    problem: 'AI Agents in high-stakes energy environments cannot "hallucinate" or be "lazy." Inaccurate answers about drilling law or safety protocols create immense liability.',
    solution: 'Automated "EvalOps" pipeline using Azure AI Studio Evaluation. Scores agent responses against human-verified "Golden Dataset" on Groundedness, Relevance, and Coherence.',
    architecture: 'Agent Output → Evaluator LLM (GPT-4o) → Score via Prompty → Pass/Fail Report. Integrated with CI/CD to block deployments if accuracy drops.',
    demoType: 'none'
  },
  {
    id: 'intelligent-las-parser',
    title: 'Intelligent LAS Parser',
    tagline: 'Unlocking Legacy Well Logs for Modern AI',
    description: 'Unlocking legacy .LAS well logs for modern AI analysis.',
    tags: ['Python', 'WITSML', 'Vectorization'],
    metrics: [
      { value: '50+', label: 'Years of Data' },
      { value: '99.5%', label: 'Parse Rate' },
      { value: 'Vector', label: 'Ready' }
    ],
    githubUrl: 'https://github.com/davidfertube/las-parser',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/las-parser',
    isPrivate: false,
    techStack: 'Python • WITSML • Vectorization',
    problem: 'Decades of valuable well log data trapped in legacy .LAS format. Inconsistent headers, missing metadata, and encoding issues prevent analysis.',
    solution: 'Intelligent parser that handles all LAS versions, auto-corrects common issues, and outputs clean, vectorized data ready for ML pipelines.',
    architecture: 'LAS Files → Header Parser → Curve Normalizer → Quality Validator → Vectorized Output (Parquet/PostgreSQL).',
    demoType: 'none'
  }
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
