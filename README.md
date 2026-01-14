# David Fernandez — Industrial AI Solutions Architect

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-davidfernandez.dev-00d4ff?style=for-the-badge)](https://davidfernandez.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/davidfertube)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-yellow?style=for-the-badge&logo=huggingface)](https://huggingface.co/davidfertube)

---

## About This Portfolio

This repository contains my **interactive portfolio website** showcasing **8 production-ready AI systems** built for the energy industry. Each project features a **live, working demo** that demonstrates real functionality—not just mockups.

**Live Site: [davidfernandez.dev](https://davidfernandez.dev)**

---

## Featured Projects

### 1. Geo-Insight HSE — Real-Time PPE Detection
**[Try the Demo](https://davidfernandez.dev/projects/geo-insight)**

Computer vision pipeline for HSE compliance using **YOLOv8** on Azure Edge devices. The demo allows you to:
- Upload any image or use sample industrial scenes
- See real-time bounding box detection of helmets, vests, gloves, and eyewear
- View confidence scores and inference time metrics

**Tech:** YOLOv8 • Azure Container Apps • ONNX Runtime • OPC UA

---

### 2. Predictive Maintenance — Equipment Failure Prediction  
**[Try the Demo](https://davidfernandez.dev/projects/predictive-maintenance)**

LSTM neural network trained on NASA turbofan dataset predicting Remaining Useful Life (RUL). The demo simulates:
- Live vibration sensor data streaming
- Real-time RUL gauge with 48-hour early warning
- Alert transitions from normal → warning → critical states

**Tech:** LSTM • FFT Analysis • NASA C-MAPSS Dataset • Azure IoT Hub

---

### 3. Chat-with-Assets RAG — Enterprise Document Q&A
**[Try the Demo](https://davidfernandez.dev/projects/chat-with-assets)**

Conversational AI for 10K+ technical documents (PDFs, P&IDs, manuals). The demo shows:
- Natural language questions with cited answers
- Source document references with file types
- Simulated 4.2s response time with typing indicators

**Tech:** Azure AI Search • LangChain • GPT-4o • Hybrid Semantic Search

---

### 4. Legal-Eagle Agent — Multi-Agent Contract Review
**[Try the Demo](https://davidfernandez.dev/projects/legal-eagle)**

Orchestrated multi-agent system with specialized LLMs. The demo visualizes:
- Supervisor agent routing to Risk, Clause, and Summary agents
- Real-time processing indicators per agent
- Risk scoring with clause-level analysis (pass/warning/fail)

**Tech:** LangGraph • Azure OpenAI • Gemini • Multi-LLM Architecture

---

### 5. Policy-Guard Compliance — Policy-as-Code Engine
**[Try the Demo](https://davidfernandez.dev/projects/policy-guard)**

DSPy-optimized prompts for regulatory compliance checking. The demo evaluates:
- 6 compliance frameworks (GDPR, SOC 2, HIPAA, PCI DSS, ISO 27001, OSHA)
- Real-time pass/warning/fail status with confidence scores
- Overall compliance score gauge

**Tech:** DSPy • Prompt Optimization • 100+ Policy Rules

---

### 6. RL Supply Chain — Inventory Optimization
**[Try the Demo](https://davidfernandez.dev/projects/rl-supply-chain)**

PPO reinforcement learning agent for supply chain decisions. The demo simulates:
- 12-month inventory level visualization
- Agent reorder decisions with reward signals
- Before/after cost comparison (23% reduction)

**Tech:** Stable Baselines3 • PPO • Custom Gymnasium Environment • Azure ML

---

### 7. Hallucination Hunter — Agent Evaluation Pipeline
**[Try the Demo](https://davidfernandez.dev/projects/hallucination-hunter)**

Automated EvalOps for validating AI agent responses. The demo runs:
- 5 test cases against a golden dataset
- Groundedness, Relevance, and Coherence scoring
- Pass/fail results with CI/CD integration context

**Tech:** Azure AI Studio • GPT-4o Evaluator • Prompty • Golden Datasets

---

### 8. Intelligent LAS Parser — Legacy Well Log Analysis
**[Try the Demo](https://davidfernandez.dev/projects/intelligent-las-parser)**

Parser for 50+ years of legacy .LAS well log data. The demo shows:
- Header parsing with auto-correction
- Well log curve visualization (GR, RHOB, NPHI)
- Vectorized output formats (Parquet, PostgreSQL, Vector DB)

**Tech:** Python • WITSML • LAS 1.2/2.0/3.0 • Vectorization

---

## Local Development

```bash
# Clone and run
git clone https://github.com/davidfertube/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Repository Structure

```
src/
├── app/                    # Next.js 15 App Router pages
├── components/
│   ├── demos/              # Interactive demo components (8 demos)
│   ├── ProjectPage.tsx     # Individual project page layout
│   └── ...                 # Shared UI components
├── data/
│   └── projects.ts         # Project metadata and content
└── styles/                 # Global styles and design tokens
```

---

## Contact

**David Fernandez** — Industrial AI Solutions Architect

- [davidfernandez.dev](https://davidfernandez.dev)
- davidfertube@gmail.com
- [huggingface.co/davidfertube](https://huggingface.co/davidfertube)
