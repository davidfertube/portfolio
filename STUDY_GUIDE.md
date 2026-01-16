# Industrial AI Portfolio: Complete Study Guide & Demo Scripts

> **For David Fernandez** | Industrial AI Engineer | Azure Native
> 
> This guide reverse-engineers every project in your portfolio so you can explain the architecture, defend technical decisions, and demo each project confidently in interviews.

---

## Table of Contents

1. [Portfolio Overview](#portfolio-overview)
2. [Project Deep Dives (9 Projects)](#project-deep-dives)
3. [Demo Scripts for Each Project](#demo-scripts)
4. [Common Interview Questions](#common-interview-questions)
5. [Technical Cheat Sheets](#technical-cheat-sheets)
6. [Azure Service Quick Reference](#azure-service-quick-reference)

---

## Portfolio Overview

### Your Tech Stack DNA

```
┌─────────────────────────────────────────────────────────────────┐
│                    INDUSTRIAL AI ENGINEER                        │
│                       AZURE NATIVE                               │
├─────────────────────────────────────────────────────────────────┤
│  COMPUTER VISION    │  NLP/RAG         │  AGENTS               │
│  • YOLOv8           │  • LangChain     │  • LangGraph          │
│  • ONNX Runtime     │  • Azure AI      │  • Sim.ai             │
│  • Edge AI          │    Search        │  • Multi-Agent        │
│                     │  • Embeddings    │    Orchestration      │
├─────────────────────┴──────────────────┴───────────────────────┤
│  TIME SERIES / ML           │  MLOPS & CLOUD                   │
│  • LSTM                     │  • Azure ML                       │
│  • FFT Analysis             │  • Container Apps                 │
│  • Reinforcement Learning   │  • IoT Hub                        │
│  • Stable Baselines3        │  • GitHub Actions                 │
└─────────────────────────────┴───────────────────────────────────┘
```

### Project Summary Table

| # | Project | Core Tech | Industry Problem | GitHub | HuggingFace |
|---|---------|-----------|------------------|--------|-------------|
| 1 | Geo-Insight HSE | YOLOv8, ONNX | PPE compliance | ✅ | ✅ |
| 2 | Predictive Maintenance | LSTM, FFT | Equipment failure | ✅ | ✅ |
| 3 | IoT Anomaly Agent | Azure IoT Hub, Sim.ai | Sensor monitoring | ✅ | ✅ |
| 4 | Chat-with-Assets RAG | Azure AI Search, LangChain | Document search | ✅ | ✅ |
| 5 | Legal-Eagle Agent | LangGraph, Multi-LLM | Contract review | ✅ | ✅ |
| 6 | Policy-Guard | DSPy | Regulatory compliance | ✅ | ✅ |
| 7 | RL Supply Chain | PPO, Stable Baselines3 | Inventory optimization | ✅ | ✅ |
| 8 | Hallucination Hunter | Azure AI Studio | LLM evaluation | ✅ | ✅ |
| 9 | Intelligent LAS Parser | Python, WITSML | Legacy data unlock | ✅ | ✅ |

---

## Project Deep Dives

---

### Project 1: Geo-Insight HSE

#### One-Liner
*"Real-time PPE detection for HSE compliance using YOLOv8 on edge devices."*

#### The Problem You Solved
- Manual safety inspections are slow, inconsistent, and don't scale
- HSE violations can result in OSHA fines ($15,635-$156,259 per violation)
- Energy sites need 24/7 monitoring across multiple cameras

#### Architecture Diagram
```
┌──────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   IP Camera  │────>│  Edge Device    │────>│   SCADA/HMI     │
│   (RTSP)     │     │  (ONNX Runtime) │     │   Dashboard     │
└──────────────┘     │  YOLOv8-nano    │     └─────────────────┘
                     │  <100ms         │            │
                     └─────────────────┘            ▼
                                             ┌─────────────────┐
                                             │   Alert System  │
                                             │   (Teams/SMS)   │
                                             └─────────────────┘
```

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **YOLOv8-nano** | Smallest model footprint for edge deployment |
| **ONNX Runtime** | 3x faster inference than PyTorch on CPU |
| **Edge deployment** | Air-gapped OT environments can't connect to cloud |
| **Custom training** | Off-the-shelf models miss industry-specific PPE (hard hats, safety vests) |

#### Metrics You Should Know
- **99% accuracy** on test set
- **<100ms latency** on NVIDIA Jetson Nano
- **24/7 monitoring** capability
- **mAP@0.5: 0.92** (mean average precision)

#### Interview Defense Points
1. *"Why YOLO over Faster R-CNN?"*
   - YOLO is single-shot (faster), Faster R-CNN is two-stage (slower but more accurate). For real-time PPE detection, speed matters more.

2. *"How do you handle low-light conditions?"*
   - Data augmentation during training (brightness, contrast). Could also add IR cameras for night shifts.

3. *"What about privacy?"*
   - Edge processing means video never leaves the site. No cloud storage of footage.

#### Links
- **GitHub**: https://github.com/davidfertube/geo-insight-hse
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/geo-insight-hse
- **Website**: https://davidfernandez.dev/projects/geo-insight

---

### Project 2: Predictive Maintenance

#### One-Liner
*"LSTM neural network predicts equipment failure 48 hours in advance using sensor data."*

#### The Problem You Solved
- Unplanned downtime costs oil & gas industry $38B/year
- Traditional scheduled maintenance is wasteful (replace parts that still work)
- Catastrophic failures create safety hazards

#### Architecture Diagram
```
┌──────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Sensor Data │────>│  FFT Processing │────>│  LSTM Model     │
│  (vibration, │     │  (frequency     │     │  (sequence      │
│   temp, etc) │     │   features)     │     │   prediction)   │
└──────────────┘     └─────────────────┘     └────────┬────────┘
                                                      │
                     ┌─────────────────┐              ▼
                     │  Alert System   │◄────┌─────────────────┐
                     │  (48hr warning) │     │  RUL Prediction │
                     └─────────────────┘     └─────────────────┘
```

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **NASA Turbofan Dataset** | Gold standard for RUL prediction research (FD001-FD004) |
| **FFT preprocessing** | Vibration data has frequency components; FFT extracts them |
| **LSTM over Transformer** | Smaller dataset (~20K samples); LSTM performs better on short sequences |
| **48hr lead time** | Enough time to schedule maintenance without disrupting operations |

#### What is RUL?
**Remaining Useful Life** = cycles until failure. Your model predicts this number.

#### The NASA Turbofan Dataset
- 100 jet engines, run-to-failure
- 21 sensors per engine
- 6 operating conditions
- You used FD001 (simplest: 1 operating condition, 1 fault mode)

#### Metrics You Should Know
- **92% F1 Score** on test set
- **48hr early warning** lead time
- **30% cost reduction** vs scheduled maintenance
- **RMSE: 15.2 cycles** (average error in RUL prediction)

#### Interview Defense Points
1. *"Why not just set threshold alerts?"*
   - Threshold alerts are reactive. ML predicts failure BEFORE thresholds are breached.

2. *"How did you handle the censored data problem?"*
   - NASA dataset is run-to-failure. For real deployments, need survival analysis methods (Cox regression).

3. *"What sensors matter most?"*
   - Feature importance analysis shows temperature deviation (T24, T50) and pressure ratio (phi) are top predictors.

#### Links
- **GitHub**: https://github.com/davidfertube/predictive-maintenance
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/predictive-maintenance
- **Website**: https://davidfernandez.dev/projects/predictive-maintenance

---

### Project 3: IoT Anomaly Agent

#### One-Liner
*"AI agent that monitors industrial sensors in real-time and auto-generates work orders when anomalies are detected."*

#### The Problem You Solved
- Engineers suffer "alert fatigue" from thousands of threshold alerts
- Traditional alerts are single-variable; real anomalies are multi-variable patterns
- Work order creation is manual and slow

#### Architecture Diagram
```
┌──────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  6 Sensors   │────>│  Azure IoT Hub  │────>│  Stream         │
│  (pressure,  │     │  (8K msgs/day   │     │  Analytics      │
│   temp, etc) │     │   FREE tier)    │     │                 │
└──────────────┘     └─────────────────┘     └────────┬────────┘
                                                      │
┌──────────────┐     ┌─────────────────┐              ▼
│  Teams/      │◄────│  Sim.ai Agent   │◄────┌─────────────────┐
│  ServiceNow  │     │  (workflow)     │     │  Anomaly ML     │
└──────────────┘     └─────────────────┘     └─────────────────┘
```

#### The 6 Sensors
| Sensor | Unit | Warning | Critical |
|--------|------|---------|----------|
| Wellhead Pressure | PSI | >2800 | >3200 |
| Process Temp | °F | >210 | >235 |
| Flow Rate | BBL/D | >1000 | >1100 |
| Pump Vibration | mm/s | >4.5 | >7.5 |
| H2S Level | PPM | >10 | >20 |
| Power Draw | kW | >55 | >70 |

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **Azure IoT Hub Free Tier** | 8K messages/day, 500 devices (enough for demo) |
| **Sim.ai** | Visual workflow builder for agentic pipelines |
| **Multi-sensor pattern** | Single-sensor alerts miss correlated failures |
| **Auto work order** | Reduces response time from hours to seconds |

#### The Anomaly Pattern
This demo simulates a **pump bearing failure**:
1. Vibration increases first (mechanical wear)
2. Temperature rises next (friction heat)
3. Power draw increases (motor works harder)

#### Interview Defense Points
1. *"Why not just use threshold alerts?"*
   - Pump bearing failure shows CORRELATED increases across vibration, temp, and power. Single thresholds would trigger 3 separate false alarms before the pattern emerges.

2. *"What ML model do you use?"*
   - Could use Isolation Forest (unsupervised) or LSTM Autoencoder (reconstructionloss). Demo uses pattern matching for simplicity.

3. *"How does the agent decide to create a work order?"*
   - Confidence threshold + human-in-the-loop approval for high-stakes decisions.

#### Links
- **GitHub**: https://github.com/davidfertube/iot-anomaly-agent
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/iot-anomaly-agent
- **Website**: https://davidfernandez.dev/projects/iot-anomaly-agent

---

### Project 4: Chat-with-Assets RAG

#### One-Liner
*"Conversational AI that lets engineers ask natural language questions about 10,000+ technical documents with cited sources."*

#### The Problem You Solved
- Engineers spend 20% of time searching for information
- Knowledge is siloed in PDFs, manuals, P&IDs
- Ctrl+F doesn't understand context or synonyms

#### Architecture Diagram
```
┌──────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Documents   │────>│  Chunking &     │────>│  Azure AI       │
│  (PDF, DOCX) │     │  Embedding      │     │  Search         │
└──────────────┘     └─────────────────┘     └────────┬────────┘
                                                      │
┌──────────────┐     ┌─────────────────┐              ▼
│  User        │────>│  Query Vector   │────>│  Hybrid Search  │
│  Question    │     │  + Keywords     │     │  (Semantic +    │
└──────────────┘     └─────────────────┘     │   BM25)         │
                                             └────────┬────────┘
                                                      │
                     ┌─────────────────┐              ▼
                     │  Cited Answer   │◄────┌─────────────────┐
                     │  with Sources   │     │  GPT-4o + Docs  │
                     └─────────────────┘     └─────────────────┘
```

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **Azure AI Search** | Enterprise-grade, hybrid search, semantic ranking |
| **Hybrid Search** | Semantic catches meaning, BM25 catches exact part numbers |
| **Chunking (512 tokens)** | Small enough for precise retrieval, large enough for context |
| **Source citations** | Engineers MUST verify AI answers; citations enable this |

#### What is Hybrid Search?
Combines two retrieval methods:
1. **Semantic**: Understands meaning ("pump failure" ≈ "compressor malfunction")
2. **BM25/Keyword**: Exact matching for part numbers ("SKF-6205-2Z")

#### Metrics You Should Know
- **4.2s response time** (including LLM generation)
- **10K+ documents** indexed
- **95% relevance** (human evaluation)
- **Top-5 retrieval accuracy: 89%**

#### Interview Defense Points
1. *"How do you handle hallucinations?"*
   - Grounding: LLM only answers from retrieved documents. If no relevant docs, says "I don't know."

2. *"What about updates to documents?"*
   - Incremental indexing. Azure AI Search supports doc updates without full re-index.

3. *"Why not just use ChatGPT?"*
   - ChatGPT doesn't know YOUR internal documents. RAG = your knowledge + LLM reasoning.

#### Links
- **GitHub**: https://github.com/davidfertube/chat-with-assets-rag
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/chat-with-assets-rag
- **Website**: https://davidfernandez.dev/projects/chat-with-assets

---

### Project 5: Legal-Eagle Agent

#### One-Liner
*"Multi-agent system with 5 specialized agents that review contracts 10x faster than humans."*

#### The Problem You Solved
- Contract review takes 2-4 weeks per deal
- Legal teams are bottlenecks for M&A velocity
- Human reviewers miss clauses buried in 200-page agreements

#### Architecture Diagram
```
                        ┌─────────────────┐
                        │   Supervisor    │
                        │   Agent         │
                        └────────┬────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
        ▼                        ▼                        ▼
┌───────────────┐      ┌────────────────┐      ┌────────────────┐
│  Risk Agent   │      │  Clause Agent  │      │ Summary Agent  │
│  (liabilities │      │  (extract key  │      │ (exec summary) │
│   red flags)  │      │   clauses)     │      │                │
└───────────────┘      └────────────────┘      └────────────────┘
        │                        │                        │
        └────────────────────────┼────────────────────────┘
                                 ▼
                        ┌─────────────────┐
                        │ Structured      │
                        │ Report          │
                        └─────────────────┘
```

#### The 5 Agents
| Agent | Role | Output |
|-------|------|--------|
| **Supervisor** | Orchestrates workflow | Delegation decisions |
| **Risk Agent** | Identifies liabilities | Risk score (1-10) + flags |
| **Clause Agent** | Extracts key clauses | Structured JSON |
| **Summary Agent** | Executive summary | 3-paragraph summary |
| **Reviewer Agent** | Cross-checks findings | Final validation |

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **LangGraph** | Graph-based orchestration with state management |
| **Multi-LLM** | GPT-4o for reasoning, Gemini for long context (1M tokens) |
| **Specialized prompts** | Each agent has domain-specific system prompt |
| **Human-in-the-loop** | Critical decisions require human approval |

#### Why Multi-Agent > Single Agent?
1. **Separation of concerns**: Each agent is an expert
2. **Parallelization**: Risk and Clause agents can run simultaneously
3. **Debugging**: Easy to identify which agent failed
4. **Scalability**: Add new agents without rewriting system

#### Interview Defense Points
1. *"Why not just use one powerful agent?"*
   - Single agents suffer from "lost in the middle" problem on long documents. Specialized agents focus on specific tasks.

2. *"How do you handle agent disagreements?"*
   - Supervisor agent arbitrates. If confidence is low, flags for human review.

3. *"What's the cost?"*
   - ~$0.50 per contract (dominated by GPT-4o tokens). 100x cheaper than paralegal hours.

#### Links
- **GitHub**: https://github.com/davidfertube/legal-eagle-agent
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/legal-eagle-agent
- **Website**: https://davidfernandez.dev/projects/legal-eagle

---

### Project 6: Policy-Guard Compliance

#### One-Liner
*"DSPy-optimized engine that checks documents against 100+ regulatory policies in real-time."*

#### The Problem You Solved
- Regulatory compliance spans OSHA, EPA, DOT, state laws
- Manual checking is slow and error-prone
- Policies change frequently; hard to keep up

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **DSPy** | Programmatic prompting that self-optimizes |
| **Policy-as-Code** | Policies defined as structured rules, not prose |
| **Modular policies** | Add/remove policies without code changes |

#### What is DSPy?
DSPy = **D**eclarative **S**elf-improving language programs in **Py**thon

Instead of manual prompt engineering:
```python
# Traditional prompting
prompt = "Check if this document violates OSHA 1910.119..."

# DSPy approach  
class PolicyChecker(dspy.Signature):
    """Check document against policy and list violations."""
    document = dspy.InputField()
    policy = dspy.InputField()
    violations = dspy.OutputField()
```

DSPy then auto-optimizes the prompt using labeled examples.

#### Interview Defense Points
1. *"Why DSPy over LangChain?"*
   - DSPy compiles and optimizes prompts automatically. LangChain requires manual prompt tuning.

2. *"How do you handle policy updates?"*
   - Policies are stored in a database. Update the DB, system auto-adapts.

#### Links
- **GitHub**: https://github.com/davidfertube/policy-guard
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/policy-guard
- **Website**: https://davidfernandez.dev/projects/policy-guard

---

### Project 7: RL Supply Chain

#### One-Liner
*"PPO agent learns optimal inventory reorder policies, reducing costs 23%."*

#### The Problem You Solved
- Static reorder rules can't adapt to demand variability
- Stockouts = lost revenue; excess inventory = wasted capital
- Seasonal patterns are hard to encode in rules

#### Architecture Diagram
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Demand Forecast│────>│  Gym Environ    │────>│  PPO Agent      │
│  (historical    │     │  (state: stock  │     │  (Stable        │
│   + seasonal)   │     │   demand, cost) │     │   Baselines3)   │
└─────────────────┘     └────────┬────────┘     └────────┬────────┘
                                 │                       │
                                 ▼                       ▼
                        ┌─────────────────┐     ┌─────────────────┐
                        │  Reward Signal  │◄────│  Reorder        │
                        │  (-stockout     │     │  Decision       │
                        │   -holding cost)│     │                 │
                        └─────────────────┘     └─────────────────┘
```

#### Key RL Concepts

| Concept | In This Project |
|---------|-----------------|
| **State** | Current inventory, demand forecast, days since last order |
| **Action** | Order quantity (0, small, medium, large) |
| **Reward** | -(holding cost) - (stockout penalty) |
| **Policy** | Neural network mapping state → action probabilities |

#### Why PPO?
**Proximal Policy Optimization** is:
- Stable (clips gradient updates)
- Sample-efficient
- Works well with continuous action spaces

#### Metrics You Should Know
- **23% cost reduction** vs (s, S) policy
- **Service level: 98.5%** (stockouts rare)
- **Training: 100K episodes** (~2 hours)

#### Interview Defense Points
1. *"Why RL over optimization (LP)?"*
   - RL handles stochastic demand without explicit distribution assumptions. LP requires known demand distributions.

2. *"How do you handle lead times?"*
   - Lead time is part of the state. Agent learns to order ahead.

#### Links
- **GitHub**: https://github.com/davidfertube/rl-supply-chain
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/rl-supply-chain
- **Website**: https://davidfernandez.dev/projects/rl-supply-chain

---

### Project 8: Hallucination Hunter

#### One-Liner
*"Automated LLM evaluation pipeline that catches hallucinations before they reach production."*

#### The Problem You Solved
- LLMs hallucinate facts (especially technical details)
- Manual QA doesn't scale with release velocity
- Need automated guardrails in CI/CD

#### Architecture Diagram
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Agent Output   │────>│  Evaluator LLM  │────>│  Groundedness   │
│  (answer to     │     │  (GPT-4o)       │     │  Score (0-5)    │
│   user query)   │     └─────────────────┘     └────────┬────────┘
└─────────────────┘                                      │
                                                         │
┌─────────────────┐     ┌─────────────────┐              ▼
│  Golden Dataset │────>│  Compare        │────>┌─────────────────┐
│  (50 verified   │     │  Answer vs      │     │  Pass/Fail      │
│   Q&A pairs)    │     │  Ground Truth   │     │  Report         │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

#### Key Metrics Evaluated
| Metric | What It Measures | Target |
|--------|------------------|--------|
| **Groundedness** | Is answer supported by source docs? | >4.0 |
| **Relevance** | Does answer address the question? | >4.0 |
| **Coherence** | Is answer logically structured? | >4.0 |
| **Fluency** | Is answer grammatically correct? | >4.0 |

#### The Golden Dataset
- 50 question-answer pairs
- Human-verified ground truth
- Covers edge cases and tricky questions
- Updated quarterly

#### Interview Defense Points
1. *"How do you prevent the evaluator from hallucinating?"*
   - Evaluator uses Prompty format with structured output. Also, evaluator is GPT-4o (lower hallucination rate) evaluating GPT-3.5/Claude outputs.

2. *"What happens when a model fails?"*
   - CI/CD blocks deployment. Engineers get Slack notification with failing Q&A pairs.

#### Links
- **GitHub**: https://github.com/davidfertube/hallucination-hunter
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/hallucination-hunter
- **Website**: https://davidfernandez.dev/projects/hallucination-hunter

---

### Project 9: Intelligent LAS Parser

#### One-Liner
*"Parses 50+ years of legacy well log data into ML-ready format with 99.5% success rate."*

#### The Problem You Solved
- Oil & gas companies have decades of valuable .LAS files
- Inconsistent headers, encodings, missing sections
- No standardized way to vectorize for ML

#### What is LAS?
**Log ASCII Standard** - industry format for well log data
- Contains curves: GR (gamma ray), RHOB (density), NPHI (neutron porosity)
- Header section + data section
- Multiple versions (1.2, 2.0, 3.0) with different specs

#### Key Technical Decisions

| Decision | Why |
|----------|-----|
| **Multi-version support** | Real data has LAS 1.2, 2.0, and 3.0 files mixed |
| **Auto-correction** | Common issues (wrong delimiters, encoding) fixed automatically |
| **Vectorization** | Output is Parquet (10x faster than CSV) |
| **Validation** | Flags files with missing curves or invalid ranges |

#### Interview Defense Points
1. *"Why not just use lasio?"*
   - lasio is great for clean files. This parser handles dirty real-world data with auto-correction.

2. *"What curves indicate a pay zone?"*
   - High resistivity (hydrocarbon), low gamma ray (clean sand), neutron-density crossover (gas effect).

#### Links
- **GitHub**: https://github.com/davidfertube/las-parser
- **HuggingFace**: https://huggingface.co/spaces/davidfertube/las-parser
- **Website**: https://davidfernandez.dev/projects/intelligent-las-parser

---

## Demo Scripts

Use these scripts when demonstrating each project to interviewers.

---

### Demo Script: Geo-Insight HSE (2 minutes)

```
"Let me show you Geo-Insight HSE, our real-time PPE detection system.

[Navigate to HuggingFace Space]

The problem: HSE compliance on energy sites requires constant monitoring,
but manual inspections miss violations. OSHA fines can reach $156,000.

[Upload sample image with workers - some with PPE, some without]

Watch how the YOLOv8 model instantly detects:
- ✅ Hard hats
- ✅ Safety vests
- ❌ Missing safety glasses (flagged in red)

The architecture runs on edge devices—no cloud connection needed.
This is critical for air-gapped OT environments at Purdue Level 3.

[Point to latency number]
Sub-100ms latency means real-time alerts. If a worker removes
their hard hat, the system flags it within one second.

Questions?"
```

---

### Demo Script: Predictive Maintenance (2 minutes)

```
"This is our Predictive Maintenance system trained on NASA's turbofan dataset.

[Navigate to HuggingFace Space]

The problem: Unplanned equipment failures cost the oil & gas industry
$38 billion per year. Traditional scheduled maintenance wastes money
by replacing parts that still work fine.

[Click 'Run Simulation']

Watch the vibration sensor data over time. The LSTM model is analyzing
frequency components via FFT preprocessing.

[Point to RUL gauge]
The model predicts Remaining Useful Life—in this case, 48 hours.
That's enough lead time to schedule maintenance without disrupting operations.

When the model detects impending failure, it transitions from green
to yellow to red. Alerts go to the maintenance team automatically.

The key insight: we're not detecting failure—we're predicting it
BEFORE it happens."
```

---

### Demo Script: IoT Anomaly Agent (3 minutes)

```
"This is the IoT Anomaly Detection Agent—my newest project.

[Navigate to HuggingFace Space]

Traditional monitoring uses simple threshold alerts. The problem?
If you set 'alert when pressure > 3000 PSI,' you get hundreds of
false positives. Engineers suffer alert fatigue and miss real issues.

[Click 'Run Simulation']

Watch the 6 sensors. Right now everything is green—normal operations.

[Wait for anomaly to begin]

Now the agent detects a pattern: vibration is spiking, followed by
temperature rise, followed by increased power draw. This is the
signature of a pump bearing failure.

[Point to agent log]

The agent recognizes this multi-sensor pattern and—here's the key—
automatically generates a work order.

[Show work order]

Work Order WO-997430: Pump Station P-101, bearing failure detected,
URGENT priority, estimated 4 hours to failure.

This went from sensor data to work order in under 30 seconds.
A human would take hours to correlate these signals."
```

---

### Demo Script: Chat-with-Assets RAG (2 minutes)

```
"This is Chat-with-Assets—our RAG system for technical documentation.

[Navigate to HuggingFace Space]

The problem: Engineers spend 20% of their time searching for information
buried in thousands of PDFs and manuals. Ctrl+F doesn't understand context.

[Type question: 'What is the maximum operating pressure for separator V-101?']

Watch how the system:
1. Converts my question to a vector embedding
2. Searches 10,000+ documents using hybrid search
3. Retrieves the 5 most relevant chunks
4. Generates an answer WITH citations

[Point to answer and source links]

The answer includes the source document, page number, and a link.
Engineers MUST verify AI answers—citations enable that.

The key differentiator: hybrid search combines semantic understanding
with keyword matching. That's critical for part numbers like 'SKF-6205-2Z'
which embeddings would scramble."
```

---

### Demo Script: Legal-Eagle Agent (2 minutes)

```
"Legal-Eagle is a multi-agent system for contract review.

[Navigate to HuggingFace Space]

The problem: Contract review takes 2-4 weeks. Legal teams are bottlenecks.
Human reviewers miss clauses buried in 200-page agreements.

[Upload sample contract or use demo]

Watch the workflow:
1. Supervisor Agent analyzes the document structure
2. Risk Agent identifies liabilities (runs in parallel)
3. Clause Agent extracts key clauses
4. Summary Agent generates executive summary

[Point to output]

Risk Score: 7/10—this contract has concerning clauses.
Flagged issues:
- Unlimited liability in Section 4.2
- Non-standard IP assignment in Section 7.1

The key insight: each agent is specialized. The Risk Agent has a
domain-specific prompt focused only on legal risks. This is more
accurate than a single generalist agent."
```

---

[Additional demo scripts for projects 6-9 follow the same pattern]

---

## Common Interview Questions

### ML Fundamentals

1. **"Explain the bias-variance tradeoff."**
   > High bias = underfitting (model too simple). High variance = overfitting (memorizes training data). Goal: balance both.

2. **"How do you handle class imbalance?"**
   > Options: SMOTE (synthetic oversampling), class weights, threshold tuning, ensemble methods.

3. **"What's the difference between L1 and L2 regularization?"**
   > L1 (Lasso): drives weights to exactly zero → feature selection. L2 (Ridge): shrinks weights → prevents large weights.

### Your Projects

1. **"Walk me through your most complex project."**
   > Use Legal-Eagle: multi-agent, LangGraph orchestration, multi-LLM approach.

2. **"What was your biggest technical challenge?"**
   > Geo-Insight: getting YOLO to run on edge devices with acceptable latency. Solution: ONNX optimization + model quantization.

3. **"How do you detect model drift in production?"**
   > Monitor prediction confidence distribution. If confidence drops, investigate data drift. Hallucination Hunter pipeline catches this.

### System Design

1. **"Design a real-time anomaly detection system."**
   > IoT Anomaly Agent architecture: sensors → IoT Hub → Stream Analytics → ML model → agent → alert.

2. **"How would you scale your RAG pipeline to 1M documents?"**
   > Shard the vector index, use caching for common queries, implement rate limiting, async processing.

---

## Technical Cheat Sheets

### YOLOv8 Cheat Sheet
```python
from ultralytics import YOLO

# Load model
model = YOLO('yolov8n.pt')  # nano model

# Train
model.train(data='ppe.yaml', epochs=100, imgsz=640)

# Inference
results = model.predict('image.jpg', conf=0.5)

# Export to ONNX
model.export(format='onnx')
```

### LangGraph Cheat Sheet
```python
from langgraph.graph import StateGraph, END

# Define state
class AgentState(TypedDict):
    messages: list
    next: str

# Define nodes
def supervisor(state):
    # Logic to decide next agent
    return {"next": "risk_agent"}

def risk_agent(state):
    # Analyze risks
    return {"messages": state["messages"] + [result]}

# Build graph
workflow = StateGraph(AgentState)
workflow.add_node("supervisor", supervisor)
workflow.add_node("risk_agent", risk_agent)
workflow.add_edge("supervisor", "risk_agent")
workflow.add_edge("risk_agent", END)

# Compile and run
app = workflow.compile()
result = app.invoke({"messages": [...], "next": ""})
```

### Azure AI Search Cheat Sheet
```python
from azure.search.documents import SearchClient
from azure.core.credentials import AzureKeyCredential

# Connect
client = SearchClient(
    endpoint="https://<service>.search.windows.net",
    index_name="documents",
    credential=AzureKeyCredential("<key>")
)

# Hybrid search
results = client.search(
    search_text="pump failure",
    vector_queries=[VectorizedQuery(
        vector=embedding,
        k_nearest_neighbors=5,
        fields="content_vector"
    )],
    top=10
)
```

---

## Azure Service Quick Reference

| Service | Free Tier | Use Case |
|---------|-----------|----------|
| **IoT Hub** | 8K msgs/day, 500 devices | Sensor data ingestion |
| **AI Search** | 50MB, 10K docs, 3 indexes | RAG retrieval |
| **Container Apps** | 180K vCPU-seconds | Model deployment |
| **ML Studio** | Free SDK | Model training |
| **OpenAI** | $200 credit (new) | GPT-4o access |
| **Cognitive Services** | Various free tiers | Vision, Speech, Language |

---

## Final Checklist Before Interview

- [ ] Can demo all 9 projects on HuggingFace
- [ ] Can explain architecture of each project
- [ ] Know key metrics for each project
- [ ] Prepared for "why this technology?" questions
- [ ] Have 2-3 technical challenges + solutions ready
- [ ] Website is live and all links work
- [ ] GitHub repos are public and documented

---

*Last updated: January 16, 2026*
*Author: David Fernandez | Industrial AI Engineer*
