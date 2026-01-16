# David Fernandez — Industrial AI Engineer | Azure Native

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-davidfernandez.dev-00d4ff?style=for-the-badge)](https://davidfernandez.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/davidfertube)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-Spaces-yellow?style=for-the-badge&logo=huggingface)](https://huggingface.co/davidfertube)
[![GitHub](https://img.shields.io/badge/GitHub-Projects-181717?style=for-the-badge&logo=github)](https://github.com/davidfertube)

---

## About This Portfolio

This repository contains my **interactive portfolio website** showcasing **9 production-ready AI systems** built for the energy industry. Each project features a **live, working demo** that demonstrates real functionality—not just mockups.

**🌐 Live Site: [davidfernandez.dev](https://davidfernandez.dev)**

---

## Featured Projects

| # | Project | Tech Stack | Live Demo | GitHub | HuggingFace |
|---|---------|------------|-----------|--------|-------------|
| 1 | **Geo-Insight HSE** | YOLOv8, ONNX, Edge AI | [Demo](https://davidfernandez.dev/projects/geo-insight) | [Repo](https://github.com/davidfertube/geo-insight-hse) | [Space](https://huggingface.co/spaces/davidfertube/geo-insight-hse) |
| 2 | **Predictive Maintenance** | LSTM, FFT, NASA Dataset | [Demo](https://davidfernandez.dev/projects/predictive-maintenance) | [Repo](https://github.com/davidfertube/predictive-maintenance) | [Space](https://huggingface.co/spaces/davidfertube/predictive-maintenance) |
| 3 | **IoT Anomaly Agent** | Azure IoT Hub, Sim.ai | [Demo](https://davidfernandez.dev/projects/iot-anomaly-agent) | [Repo](https://github.com/davidfertube/iot-anomaly-agent) | [Space](https://huggingface.co/spaces/davidfertube/iot-anomaly-agent) |
| 4 | **Chat-with-Assets RAG** | Azure AI Search, LangChain | [Demo](https://davidfernandez.dev/projects/chat-with-assets) | [Repo](https://github.com/davidfertube/chat-with-assets-rag) | [Space](https://huggingface.co/spaces/davidfertube/chat-with-assets-rag) |
| 5 | **Legal-Eagle Agent** | LangGraph, Multi-LLM | [Demo](https://davidfernandez.dev/projects/legal-eagle) | [Repo](https://github.com/davidfertube/legal-eagle-agent) | [Space](https://huggingface.co/spaces/davidfertube/legal-eagle-agent) |
| 6 | **Policy-Guard Compliance** | DSPy, LLM Evaluation | [Demo](https://davidfernandez.dev/projects/policy-guard) | [Repo](https://github.com/davidfertube/policy-guard) | [Space](https://huggingface.co/spaces/davidfertube/policy-guard) |
| 7 | **RL Supply Chain** | PPO, Stable Baselines3 | [Demo](https://davidfernandez.dev/projects/rl-supply-chain) | [Repo](https://github.com/davidfertube/rl-supply-chain) | [Space](https://huggingface.co/spaces/davidfertube/rl-supply-chain) |
| 8 | **Hallucination Hunter** | Azure AI Studio, EvalOps | [Demo](https://davidfernandez.dev/projects/hallucination-hunter) | [Repo](https://github.com/davidfertube/hallucination-hunter) | [Space](https://huggingface.co/spaces/davidfertube/hallucination-hunter) |
| 9 | **Intelligent LAS Parser** | Python, WITSML | [Demo](https://davidfernandez.dev/projects/intelligent-las-parser) | [Repo](https://github.com/davidfertube/las-parser) | [Space](https://huggingface.co/spaces/davidfertube/las-parser) |

---

## Tech Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                    INDUSTRIAL AI ENGINEER                        │
│                       AZURE NATIVE                               │
├─────────────────────────────────────────────────────────────────┤
│  COMPUTER VISION    │  NLP/RAG         │  AGENTS               │
│  • YOLOv8           │  • LangChain     │  • LangGraph          │
│  • ONNX Runtime     │  • Azure AI      │  • Sim.ai             │
│  • Edge AI          │    Search        │  • Multi-Agent        │
├─────────────────────┴──────────────────┴───────────────────────┤
│  TIME SERIES / ML           │  MLOPS & CLOUD                   │
│  • LSTM                     │  • Azure ML                       │
│  • FFT Analysis             │  • Container Apps                 │
│  • Reinforcement Learning   │  • IoT Hub                        │
│  • Stable Baselines3        │  • GitHub Actions                 │
└─────────────────────────────┴───────────────────────────────────┘
```

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
├── app/                    # Next.js 16 App Router pages
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── portfolio/          # Portfolio grid
│   └── projects/[id]/      # Dynamic project pages
├── components/
│   ├── demos/              # 9 interactive demo components
│   ├── ProjectPage.tsx     # Project page layout
│   └── Navigation.tsx      # Site navigation
├── data/
│   └── projects.ts         # Project metadata
└── styles/                 # Global styles
```

---

## Deployment

This site is deployed on **Vercel** with automatic deployments from the `main` branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/davidfertube/portfolio)

---

## Contact

**David Fernandez** — Industrial AI Engineer | Azure Native

- 🌐 [davidfernandez.dev](https://davidfernandez.dev)
- 📧 davidfertube@gmail.com
- 🤗 [huggingface.co/davidfertube](https://huggingface.co/davidfertube)
- 💼 [linkedin.com/in/davidfertube](https://linkedin.com/in/davidfertube)

---

*Built with Next.js 16, React 19, and deployed on Vercel*
