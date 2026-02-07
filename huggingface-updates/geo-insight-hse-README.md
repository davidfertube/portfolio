# Vision Agent

**VLM-Powered HSE Compliance Inspection for Energy Operations**

Vision Language Model system using Qwen2-VL for safety scene understanding that goes beyond object detection — reasoning about behavioral compliance, environmental hazards, and procedural violations in natural language.

[![Portfolio](https://img.shields.io/badge/Portfolio-davidfernandez.dev-00d4ff?style=flat-square)](https://davidfernandez.dev/projects/vision-agent)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=flat-square&logo=github)](https://github.com/davidfertube/vision-agent)

---

## Overview

VLM pipeline using Qwen2-VL that processes site images and generates structured safety assessments in natural language. Instead of predicting bounding boxes, the model reasons about the full safety context of a scene.

**Design decisions:**

- **VLM over object detection** — Traditional CV answers "what objects are present?" VLMs answer "what is happening and is it safe?" — fundamentally different for HSE
- **Qwen2-VL** — Best open-weight VLM for visual grounding at 7B scale. Runs on single GPU without quantization
- **ONNX Runtime for edge** — Deployment on ruggedized hardware at remote well sites and offshore platforms where cloud connectivity is unreliable
- **Structured safety output** — Findings with severity (Critical/Warning/Observation), regulation (OSHA 1926, API RP 2220), and corrective action

## Architecture

```
Site Camera → Image Preprocessing → Qwen2-VL Inference (ONNX) → Safety Reasoning → HSE Report + Alert
```

## Performance

| Metric | Value |
|--------|-------|
| Scene Understanding | VLM (behavioral + environmental) |
| Inference Latency | <100ms (ONNX Runtime) |
| Monitoring | 24/7 continuous |
| Output Format | Structured (severity + regulation + action) |

## Interactive Demos

### 1. PPE Non-Compliance Detection
**Input:** Image of workers entering a wellhead area. One worker wearing hardhat with unsecured chin strap, another missing safety glasses.
**Expected:** Finding 1: WARNING — Hardhat chin strap unsecured on worker near wellhead (OSHA 1926.100). Corrective action: Secure chin strap before entering restricted zone. Finding 2: CRITICAL — Safety glasses missing in chemical exposure area (OSHA 1926.102). Corrective action: Immediate stop-work until eye protection obtained.

### 2. Environmental Hazard Assessment
**Input:** Image of a work area near rotating equipment with no barrier guards and a visible fluid spill on the walking surface.
**Expected:** Finding 1: CRITICAL — Unguarded rotating equipment within 7 feet of walkway (OSHA 1926.300). Finding 2: WARNING — Slip hazard from uncontained fluid on walking surface (API RP 2220). Corrective action: Install machine guarding, deploy spill containment and absorbent.

### 3. Compliant Work Scene
**Input:** Image of workers in full PPE (hardhat, vest, glasses, gloves) operating within a properly barricaded work zone with visible safety signage.
**Expected:** OBSERVATION — All personnel in full PPE compliance. Work zone properly barricaded with appropriate signage. No findings. HSE compliance: SATISFACTORY.

## Tech Stack

Qwen2-VL 7B, ONNX Runtime, Transformers, FastAPI, Gradio, Docker

## Author

**David Fernandez** — Senior AI Engineer

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
