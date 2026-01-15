import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Building Production-Ready AI for the Energy Corridor | David Fernandez',
    description: 'From Computer Vision to Multi-Agent Systems: 8 production-ready AI demos that address real challenges in the energy sector.',
};

const projects = [
    {
        id: 'geo-insight-hse',
        title: 'Geo-Insight HSE — Computer Vision for Safety Compliance',
        problem: 'Manual PPE monitoring is slow, inconsistent, and impossible to scale across large industrial sites.',
        solution: 'Real-time computer vision pipeline using YOLOv8 fine-tuned for PPE detection. Processes live camera feeds with sub-100ms latency.',
        features: ['Detection of hard hats, safety vests, gloves, and safety glasses', 'Zone-based compliance monitoring dashboard', 'Automated violation tracking with 92%+ accuracy'],
        techStack: 'YOLOv8 • Azure Container Apps • ONNX Runtime • OPC UA',
        architecture: 'Camera → Edge Device → OPC UA → SCADA/HMI (Purdue Level 3 compliant for air-gapped OT environments)',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/geo-insight-hse',
    },
    {
        id: 'predictive-maintenance',
        title: 'Predictive Maintenance — Equipment Failure Prediction',
        problem: 'Unplanned equipment failures cause costly downtime and safety hazards. Scheduled maintenance is wasteful.',
        solution: 'LSTM neural network trained on NASA\'s C-MAPSS turbofan dataset. Predicts Remaining Useful Life (RUL) with 48-hour lead time.',
        features: ['Real-time vibration sensor analysis using FFT', 'RUL gauge with early warning system', 'Alert transitions: normal → warning → critical'],
        techStack: 'LSTM • NASA C-MAPSS Dataset • FFT Analysis • Azure IoT Hub',
        architecture: 'Sensor Data → FFT Processing → LSTM Model → RUL Prediction → Alert System',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/predictive-maintenance',
    },
    {
        id: 'chat-with-assets-rag',
        title: 'Chat-with-Assets RAG — Enterprise Document Q&A',
        problem: 'Engineers waste hours searching through thousands of PDFs, manuals, and P&IDs. Knowledge is siloed.',
        solution: 'Conversational AI that ingests 10K+ technical documents. Engineers ask natural language questions and get cited answers instantly.',
        features: ['Hybrid semantic + keyword search', 'Source document citations with file references', '4.2s average response time'],
        techStack: 'Azure AI Search • LangChain • GPT-4o • Sentence Transformers',
        architecture: 'Documents → Azure AI Search (Hybrid) → LangChain → GPT-4o → Cited Response',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/chat-with-assets-rag',
    },
    {
        id: 'legal-eagle-agent',
        title: 'Legal-Eagle Agent — Multi-Agent Contract Review',
        problem: 'Contract review is tedious, expensive, and prone to human error. Legal teams bottleneck deal velocity.',
        solution: 'Orchestrated multi-agent system where specialized LLMs handle different contract aspects.',
        features: ['Supervisor agent routes to Risk, Clause, and Summary agents', 'Real-time processing visualization', 'Risk scoring with clause-level analysis'],
        techStack: 'LangGraph • Azure OpenAI • Gemini • Multi-LLM Architecture',
        architecture: 'Contract → Supervisor Agent → [Risk Agent, Clause Agent, Summary Agent] → Structured Report',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/legal-eagle-agent',
    },
    {
        id: 'policy-guard',
        title: 'Policy-Guard Compliance — Policy-as-Code Engine',
        problem: 'Regulatory compliance is complex and ever-changing. Manual checking is slow and inconsistent.',
        solution: 'DSPy-optimized prompts convert natural language policies into executable compliance checks.',
        features: ['6 compliance frameworks: GDPR, SOC 2, HIPAA, PCI DSS, ISO 27001, OSHA', 'Real-time pass/warning/fail status', 'Confidence scores and overall compliance gauge'],
        techStack: 'DSPy • Prompt Optimization • 100+ Policy Rules',
        architecture: 'Policy Library → DSPy Compiler → Optimized Prompts → Document Evaluation → Compliance Score',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/policy-guard',
    },
    {
        id: 'rl-supply-chain',
        title: 'RL Supply Chain — Inventory Optimization',
        problem: 'Static supply chain rules can\'t adapt to demand volatility, causing stockouts or excess inventory.',
        solution: 'PPO reinforcement learning agent learns optimal reorder policies in a custom gymnasium environment.',
        features: ['12-month inventory level simulation', 'Agent decisions with reward signal visualization', '23% cost reduction vs baseline'],
        techStack: 'Stable Baselines3 • PPO • Custom Gymnasium Environment • Azure ML',
        architecture: 'Demand Forecast → Custom Gym Env → PPO Agent → Inventory Decision → Reward Signal',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/rl-supply-chain',
    },
    {
        id: 'hallucination-hunter',
        title: 'Hallucination Hunter — Agent Evaluation Pipeline',
        problem: 'AI agents in high-stakes energy environments cannot hallucinate. Inaccurate answers create liability.',
        solution: 'Automated EvalOps pipeline using Azure AI Studio. Scores agent responses against human-verified golden datasets.',
        features: ['Groundedness, Relevance, and Coherence scoring', '50 golden Q/A pairs as ground truth', 'CI/CD integration to block bad deployments'],
        techStack: 'Azure AI Studio • GPT-4o Evaluator • Prompty • Golden Datasets',
        architecture: 'Agent Output → Evaluator LLM → Score via Prompty → Pass/Fail Report → CI/CD Gate',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/hallucination-hunter',
    },
    {
        id: 'las-parser',
        title: 'Intelligent LAS Parser — Legacy Well Log Analysis',
        problem: 'Decades of valuable well log data trapped in legacy .LAS format. Inconsistent headers prevent analysis.',
        solution: 'Intelligent parser handles all LAS versions, auto-corrects issues, and outputs vectorized data.',
        features: ['Multi-track log visualization (GR, RHOB, NPHI, DT, RT)', 'AI-powered lithology interpretation', '99.5% parse rate on legacy files'],
        techStack: 'Python • WITSML • Vectorization • scikit-learn',
        architecture: 'LAS Files → Header Parser → Curve Normalizer → Quality Validator → Vectorized Output',
        demoUrl: 'https://huggingface.co/spaces/davidfertube/las-parser',
    },
];

const patterns = [
    {
        title: 'Edge-First for OT Environments',
        description: 'Industrial sites often can\'t send data to the cloud. Design for Purdue Level 3 compliance with ONNX models running on edge devices.',
    },
    {
        title: 'Multi-Agent > Monolithic',
        description: 'Complex reasoning tasks (legal review, compliance checking) benefit from specialized agents coordinated by a supervisor. LangGraph makes this tractable.',
    },
    {
        title: 'EvalOps Before Deployment',
        description: 'For high-stakes domains, build evaluation into CI/CD. Golden datasets and automated scoring prevent costly hallucinations in production.',
    },
    {
        title: 'Hybrid Search for Enterprise RAG',
        description: 'Pure vector search misses exact matches (equipment IDs, part numbers). Combine semantic + keyword search for industrial documentation.',
    },
    {
        title: 'DSPy for Prompt Optimization',
        description: 'Hand-crafted prompts are fragile. DSPy compiles prompts to maximize task-specific metrics, especially valuable for policy compliance.',
    },
];

export default function IndustrialAIPortfolioArticle() {
    return (
        <main className={styles.articlePage}>
            <article className={styles.article}>
                <header className={styles.articleHeader}>
                    <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
                    <h1>Building Production-Ready AI for the Energy Corridor</h1>
                    <p className={styles.subtitle}>From Computer Vision to Multi-Agent Systems</p>
                    <div className={styles.meta}>
                        <span>David Fernandez</span>
                        <span>•</span>
                        <span>January 15, 2026</span>
                        <span>•</span>
                        <span>12 min read</span>
                    </div>
                </header>

                <section className={styles.intro}>
                    <p>
                        As an Industrial AI Engineer focused on Azure-native solutions, I&apos;ve built a portfolio of
                        <strong> 8 interactive ML demos</strong> that address real challenges in the energy sector.
                        Here&apos;s what I created, why it matters, and the patterns I discovered along the way.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>The Energy AI Problem</h2>
                    <p>
                        The energy industry sits on decades of operational data—well logs, sensor readings,
                        compliance documents, maintenance records—yet most of it remains untapped. Why? Because
                        AI solutions built for consumer applications don&apos;t translate to industrial environments where:
                    </p>
                    <ul className={styles.problemList}>
                        <li><strong>Safety is non-negotiable:</strong> PPE violations can mean injuries or fatalities</li>
                        <li><strong>Downtime is catastrophic:</strong> A single turbine failure costs $100K+ per day</li>
                        <li><strong>Regulations are complex:</strong> OSHA, EPA, state-level rules change constantly</li>
                        <li><strong>Legacy data is messy:</strong> 50-year-old file formats, handwritten logs, inconsistent schemas</li>
                    </ul>
                    <p>My portfolio tackles these problems head-on with production-ready solutions.</p>
                </section>

                <section className={styles.section}>
                    <h2>The Portfolio: 8 Live Demos</h2>

                    {projects.map((project, index) => (
                        <div key={project.id} className={styles.projectCard}>
                            <h3>{index + 1}. {project.title}</h3>

                            <div className={styles.projectContent}>
                                <div className={styles.problemSolution}>
                                    <p><strong>Problem:</strong> {project.problem}</p>
                                    <p><strong>Solution:</strong> {project.solution}</p>
                                </div>

                                <div className={styles.features}>
                                    <strong>Key Features:</strong>
                                    <ul>
                                        {project.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <p className={styles.techStack}><strong>Tech Stack:</strong> {project.techStack}</p>
                                <p className={styles.architecture}><strong>Architecture:</strong> {project.architecture}</p>

                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.demoLink}
                                >
                                    🤗 Try the Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                <section className={styles.section}>
                    <h2>Architecture Patterns I&apos;ve Learned</h2>

                    <div className={styles.patternGrid}>
                        {patterns.map((pattern, index) => (
                            <div key={index} className={styles.patternCard}>
                                <h4>{index + 1}. {pattern.title}</h4>
                                <p>{pattern.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Try the Demos</h2>
                    <p>All 8 projects are live on Hugging Face with interactive demos:</p>

                    <div className={styles.demoTable}>
                        <div className={styles.demoRow}>
                            <span>Geo-Insight HSE</span>
                            <span>Computer Vision</span>
                            <a href="https://huggingface.co/spaces/davidfertube/geo-insight-hse" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>Predictive Maintenance</span>
                            <span>Time Series/LSTM</span>
                            <a href="https://huggingface.co/spaces/davidfertube/predictive-maintenance" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>Chat-with-Assets RAG</span>
                            <span>Enterprise RAG</span>
                            <a href="https://huggingface.co/spaces/davidfertube/chat-with-assets-rag" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>Legal-Eagle Agent</span>
                            <span>Multi-Agent</span>
                            <a href="https://huggingface.co/spaces/davidfertube/legal-eagle-agent" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>Policy-Guard</span>
                            <span>Compliance</span>
                            <a href="https://huggingface.co/spaces/davidfertube/policy-guard" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>RL Supply Chain</span>
                            <span>Reinforcement Learning</span>
                            <a href="https://huggingface.co/spaces/davidfertube/rl-supply-chain" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>Hallucination Hunter</span>
                            <span>EvalOps</span>
                            <a href="https://huggingface.co/spaces/davidfertube/hallucination-hunter" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                        <div className={styles.demoRow}>
                            <span>Intelligent LAS Parser</span>
                            <span>Data Engineering</span>
                            <a href="https://huggingface.co/spaces/davidfertube/las-parser" target="_blank" rel="noopener noreferrer">Try it →</a>
                        </div>
                    </div>
                </section>

                <footer className={styles.articleFooter}>
                    <div className={styles.author}>
                        <strong>David Fernandez</strong>
                        <span>Industrial AI Solutions Architect | Azure Native</span>
                    </div>
                    <div className={styles.authorLinks}>
                        <a href="https://davidfernandez.dev" target="_blank" rel="noopener noreferrer">🌐 Portfolio</a>
                        <a href="https://huggingface.co/davidfertube" target="_blank" rel="noopener noreferrer">🤗 HuggingFace</a>
                        <a href="https://linkedin.com/in/davidfertube" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                    </div>
                </footer>
            </article>
        </main>
    );
}
