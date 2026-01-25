# Geo-Insight HSE 🦺

**Real-Time PPE Detection for Site Safety**

Computer vision system for detecting Personal Protective Equipment (PPE) compliance in hazardous environments.

[![Live Demo](https://img.shields.io/badge/🤗-Live_Demo-yellow)](https://huggingface.co/spaces/davidfertube/geo-insight-hse)
[![Portfolio](https://img.shields.io/badge/📂-Portfolio-blue)](https://davidfernandez.dev)

## 🎯 The Problem

Workplace safety relies on manual spot checks. Non-compliance with PPE protocols is a leading cause of preventable industrial accidents.

## 💡 The Solution

Real-time computer vision pipeline running on edge devices. Instantly detects missing helmets/vests and logs safety incidents without cloud latency.

## 🏗️ Architecture

```
CCTV Stream → Edge Device (ONNX Runtime) → FastAPI Inference → Hazard Alert → Safety Dashboard
```

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Detection Accuracy | 99% |
| Inference Latency | <100ms |
| Monitoring | 24/7 |

## 🛠️ Tech Stack

- **YOLOv8** - State-of-the-art object detection
- **ONNX Runtime** - Cross-platform ML inference
- **FastAPI** - High-performance API framework
- **Docker** - Containerized deployment

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/davidfertube/geo-insight-hse.git
cd geo-insight-hse

# Install dependencies
pip install -r requirements.txt

# Run with Docker
docker build -t geo-insight-hse .
docker run -p 8000:8000 geo-insight-hse

# Or run directly
uvicorn app:app --host 0.0.0.0 --port 8000
```

## 🔍 Detection Classes

- Hard Hat (Present/Missing)
- Safety Vest (Present/Missing)
- Safety Glasses
- Gloves

## 📝 License

MIT License © 2026 David Fernandez

## 👤 Author

**David Fernandez** - AI Engineer | Azure Native

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
