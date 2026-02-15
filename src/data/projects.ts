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
    id: 'specvault',
    title: 'SpecVault',
    tagline: 'RAG-Powered Document Retrieval with Traceable Citations',
    description: 'RAG system with vector search and traceable [1] [2] citations from uploaded PDFs.',
    category: 'venture',
    tags: ['RAG', 'Vector Search', 'pgvector', 'LLM'],
    metrics: [
      { value: '<5s', label: 'Response Time' },
      { value: '100%', label: 'Cited Answers' },
      { value: '$0', label: 'Monthly Cost' }
    ],
    githubUrl: 'https://github.com/davidfertube/steel-venture',
    huggingFaceUrl: null,
    demoUrl: 'https://specvault.app',
    techStack: 'Next.js 16 • React 19 • TypeScript • Supabase pgvector • Voyage AI • Groq • Vercel',
    problem: 'Domain experts spend hours searching through technical documents manually. Scattered documentation across systems leads to missed information and costly errors.',
    solution: 'RAG-powered retrieval engine that ingests PDFs, generates embeddings, and returns precise answers with traceable [1] [2] citations pointing to exact documents and pages.',
    architecture: 'PDF Upload → Text Extraction → Voyage AI Embeddings (1024d) → pgvector Search → Groq Llama 3.3 70B → Cited Answer',
  },
  {
    id: 'altaviz',
    title: 'Altaviz',
    tagline: 'MLOps Platform with Medallion Architecture ETL',
    description: 'MLOps platform processing 50k+ sensor readings through medallion architecture with drift detection and retraining.',
    category: 'venture',
    tags: ['MLOps', 'PySpark', 'Predictive Maintenance', 'Streaming'],
    metrics: [
      { value: '50k+', label: 'Sensor Readings' },
      { value: '10', label: 'Units Monitored' },
      { value: '4', label: 'Stations' }
    ],
    githubUrl: 'https://github.com/davidfertube/altaviz',
    huggingFaceUrl: null,
    demoUrl: 'https://altaviz.app',
    techStack: 'PySpark • Delta Lake • PostgreSQL • Streamlit • Plotly • Docker • Terraform',
    problem: 'Industrial operators rely on reactive maintenance, leading to unplanned downtime. Sensor data across distributed stations is siloed and not actionable for ML models.',
    solution: 'End-to-end MLOps pipeline: ingest sensor data, process through medallion architecture ETL, store multi-window aggregates in PostgreSQL, and monitor model health with automated drift detection.',
    architecture: 'Data Ingestion → PySpark ETL (Bronze/Silver/Gold) → PostgreSQL (7 tables) → Streamlit Dashboard (4 pages)',
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
    id: 'compliance-agent',
    title: 'Compliance Agent',
    tagline: 'Multi-Agent RAG for Regulatory Compliance',
    description: 'Multi-agent RAG automating compliance validation, reducing audit prep time 60%.',
    category: 'experiment',
    tags: ['Multi-Agent RAG', 'NLP', 'Compliance'],
    metrics: [
      { value: '60%', label: 'Audit Reduction' },
      { value: 'Multi-Agent', label: 'Architecture' },
      { value: 'Auto', label: 'Validation' }
    ],
    githubUrl: 'https://github.com/davidfertube/policy-guard',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/compliance-agent',
    techStack: 'PydanticAI • DSPy • Mistral • Python • FastAPI',
    problem: 'Regulatory compliance requires continuous monitoring of standards across complex systems. Manual audits are resource-intensive and error-prone.',
    solution: 'Multi-agent RAG architecture (LangGraph + pgvector) that automates procedure validation, gap detection, and remediation recommendations against regulatory standards.',
    architecture: 'Procedure Document → Multi-Agent RAG → Regulatory Validation → Gap Report → Remediation Plan',
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
  {
    id: 'vision-agent',
    title: 'Vision Agent',
    tagline: 'Vision Language Model for Structured Scene Understanding',
    description: 'Qwen2-VL pipeline generating structured assessments with severity classification. Reasons about context, not just objects.',
    category: 'experiment',
    tags: ['VLM', 'Computer Vision', 'ONNX Runtime'],
    metrics: [
      { value: 'VLM', label: 'Multimodal' },
      { value: '5', label: 'Categories' },
      { value: 'Real-Time', label: 'Inference' }
    ],
    githubUrl: 'https://github.com/davidfertube/vision-agent',
    huggingFaceUrl: 'https://huggingface.co/spaces/davidfertube/vision-agent',
    techStack: 'Qwen2-VL • Transformers • Python • Gradio • Docker • ONNX Runtime',
    problem: 'Traditional object detection (YOLO, Faster R-CNN) classifies objects but misses behavioral context. Real-world scene understanding requires reasoning about actions and environment, not just bounding boxes.',
    solution: 'Vision Language Model pipeline using Qwen2-VL that processes images and generates structured assessments across multiple categories with severity classification and actionable recommendations.',
    architecture: 'Image Input → Preprocessing → Qwen2-VL Inference (ONNX Runtime) → Structured Reasoning → Severity Classification → Report',
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find(p => p.id === id);
}
