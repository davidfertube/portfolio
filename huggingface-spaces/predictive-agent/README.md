---
title: Predictive Agent
emoji: 🔧
colorFrom: green
colorTo: blue
sdk: gradio
sdk_version: 5.9.1
python_version: "3.11"
app_file: app.py
pinned: true
license: mit
short_description: LSTM-Based RUL Prediction
tags:
  - predictive-maintenance
  - lstm
  - rul
  - ccgt
  - industrial-ai
---

# Predictive Agent

**LSTM-Based RUL Prediction for CCGT Equipment**

Predict Remaining Useful Life for Combined Cycle Gas Turbine equipment to optimize maintenance scheduling.

## Quick Start

1. Click **"Demo: Degraded Equipment"** to see RUL prediction for failing equipment
2. Click **"Demo: Healthy Equipment"** to see prediction for healthy baseline
3. Or enter your own equipment health data

## Key Metrics

| Metric | Description | Good | Warning |
|--------|-------------|------|---------|
| Health Index | Overall condition score | >70% | 40-70% |
| Vibration | Mechanical condition | <0.3 in/s | 0.3-0.5 in/s |
| Heat Rate Delta | Thermal efficiency loss | <4% | 4-8% |
| Operating Hours | Time since overhaul | <50k | 50-65k |
| Start Count | Thermal cycles | <1000 | 1000-1200 |

## How It Works

```
Health Metrics -> Sequence Generation -> LSTM Inference -> RUL Estimate -> Maintenance Plan
```

## Resources

- **Model**: [rul-predictor-ccgt](https://huggingface.co/davidfertube/rul-predictor-ccgt)
- **Dataset**: [ccgt-health-history](https://huggingface.co/datasets/davidfertube/ccgt-health-history)
- **GitHub**: [predictive-agent](https://github.com/davidfertube/predictive-agent)
- **Portfolio**: [davidfernandez.dev](https://davidfernandez.dev)

## Author

**David Fernandez** - Industrial AI Engineer | LangGraph Contributor

- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
- [HuggingFace](https://huggingface.co/davidfertube)
