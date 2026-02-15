# Vision Agent

**VLM-Powered HSE Compliance Inspection for Energy Operations**

Vision Language Model system using Qwen2-VL for safety scene understanding that goes beyond object detection — reasoning about behavioral compliance, environmental hazards, and procedural violations in natural language.

[![Live Demo](https://img.shields.io/badge/Live_Demo-HuggingFace-yellow?style=flat-square)](https://huggingface.co/spaces/davidfertube/vision-agent)
[![Portfolio](https://img.shields.io/badge/Portfolio-davidfernandez.dev-00d4ff?style=flat-square)](https://davidfernandez.dev/projects/vision-agent)

---

## Problem

HSE (Health, Safety, Environment) compliance in energy operations relies on manual site inspections. Traditional computer vision approaches (YOLO, Faster R-CNN) can detect PPE presence but cannot reason about context:

- **Object detection misses behavioral violations**: A worker wearing a hardhat but not secured (chin strap undone) passes YOLO detection but fails compliance
- **Environmental context is invisible**: Proximity to rotating equipment, working at height without tie-off, blocked emergency exits — none of these are detectable as bounding boxes
- **Procedure adherence requires reasoning**: "Is this worker following the hot work permit protocol?" requires understanding the scene, not just classifying objects
- **Incident reports need natural language**: Safety managers need descriptive findings, not bounding box coordinates

## Solution

Vision Language Model (VLM) pipeline using Qwen2-VL that processes site images and generates structured safety assessments in natural language. Instead of predicting bounding boxes, the model reasons about the full safety context of a scene.

**Key design decisions:**

- **VLM over object detection**: Traditional CV answers "what objects are present?" VLMs answer "what is happening and is it safe?" — a fundamentally different capability for HSE compliance
- **Qwen2-VL selection**: Among open-weight VLMs, Qwen2-VL offers the best balance of visual grounding accuracy and instruction-following for structured safety output. Runs on a single GPU without quantization at 7B scale
- **ONNX Runtime for edge**: Converted model runs on ONNX Runtime for deployment on ruggedized edge hardware at remote well sites and offshore platforms where cloud connectivity is unreliable
- **Structured safety output**: Model generates findings with severity classification (Critical/Warning/Observation), affected regulation (OSHA 1926, API RP 2220), and recommended corrective action — not just free-text descriptions

## Architecture

```
Site Camera / Uploaded Image
         │
         ▼
┌──────────────────────────┐
│  Image Preprocessing      │  Resize, normalize for VLM input
│  Scene Framing            │  Multi-region attention zones
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  Qwen2-VL Inference       │  7B multimodal model
│  (ONNX Runtime)           │  Safety-specific prompt template
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  Safety Reasoning          │  Scene understanding + compliance check
│  Finding Generation        │  Severity, regulation, corrective action
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  HSE Report               │  Structured findings per image
│  Alert System             │  Critical findings trigger notifications
└──────────────────────────┘
```

## Performance

| Metric | Value | Context |
|--------|-------|---------|
| Scene Understanding | VLM | Full behavioral + environmental reasoning |
| Inference Latency | <100ms | ONNX Runtime on edge hardware |
| Monitoring | 24/7 | Continuous feed processing |
| Output Format | Structured | Severity + regulation + corrective action |

## Tech Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| VLM | Qwen2-VL 7B | Best open-weight VLM for visual grounding |
| Runtime | ONNX Runtime | Edge deployment without cloud dependency |
| Framework | Transformers (HF) | Model loading and prompt management |
| API | FastAPI | REST endpoints for SCADA/safety system integration |
| UI | Gradio | Interactive image upload and analysis demo |
| Deployment | Docker | Containerized for field and cloud deployment |

## Detection Capabilities

Beyond traditional PPE detection, the VLM reasons about:

- **PPE Compliance**: Hardhat, safety vest, glasses, gloves — including partial compliance (worn but unsecured)
- **Behavioral Violations**: Improper lifting, working at unprotected edges, bypassing safety barriers
- **Environmental Hazards**: Spill risks, blocked egress routes, proximity to energized equipment
- **Procedural Context**: Hot work permit compliance, confined space entry protocol adherence

## Getting Started

```bash
git clone https://github.com/davidfertube/vision-agent.git
cd vision-agent

pip install -r requirements.txt

# Run with Docker
docker build -t vision-agent .
docker run -p 8000:8000 vision-agent

# Or run directly
uvicorn app:app --host 0.0.0.0 --port 8000
```

## License

MIT License - 2026 David Fernandez

## Author

**David Fernandez** — AI Engineer

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
