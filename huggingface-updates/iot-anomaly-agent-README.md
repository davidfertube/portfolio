---
title: Anomaly Agent
emoji: 🤖
colorFrom: indigo
colorTo: purple
sdk: gradio
sdk_version: 5.9.1
python_version: "3.11"
app_file: app.py
pinned: true
license: mit
short_description: Real-Time Turbine Anomaly Detection with Automated RCA
tags:
  - energy
  - iot
  - anomaly-detection
  - agents
  - turbine
  - scada
---

# Anomaly Agent

**Real-Time Turbine Anomaly Detection with Automated Root Cause Analysis**

Isolation Forest-based anomaly detection for gas turbine sensor streams, paired with LLM-powered root cause analysis that translates statistical outliers into actionable maintenance diagnostics.

[![Portfolio](https://img.shields.io/badge/Portfolio-davidfernandez.dev-00d4ff?style=flat-square)](https://davidfernandez.dev/projects/anomaly-agent)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=flat-square&logo=github)](https://github.com/davidfertube/anomaly-agent)

---

## Overview

Two-stage system combining unsupervised anomaly detection with LLM-based diagnostic reasoning. Isolation Forest detects multi-variate sensor deviations that single-channel alarms miss. Mistral 7B root cause agent translates anomalies into plain-language maintenance diagnostics.

**Design decisions:**

- **Isolation Forest over autoencoders** — Interpretability over reconstruction accuracy. Feature importance feeds directly into RCA agent context
- **Unsupervised training** — Labeled failure data is scarce in power generation. Only normal operating data required
- **LLM for RCA, not detection** — Statistical model handles detection (fast, deterministic). LLM handles interpretation (contextual, flexible). Prevents hallucination from affecting detection reliability

## Architecture

```
Turbine SCADA → Preprocessing → Isolation Forest → Anomaly Detection → LLM Root Cause Agent → Operations Alert
```

## Performance

| Metric | Value |
|--------|-------|
| Detection Latency | <15s |
| Sensor Channels | Multi-variate |
| Root Cause Analysis | Automated (LLM) |
| SCADA Integration | OPC-UA compatible |

## Interactive Demos

### 1. Bearing Degradation Pattern
**Input:** Vibration amplitude increasing at 147Hz (shaft speed x bearing BPFO), temperature rising 2°C/hr on bearing #3 housing.
**Expected:** ANOMALY DETECTED (score: 0.89). RCA: Probable outer race defect on turbine bearing #3. Frequency signature matches BPFO at current shaft speed. Recommend: Schedule bearing inspection at next planned outage. Monitor vibration trend for acceleration.

### 2. Compressor Surge Event
**Input:** Sudden pressure oscillation in compressor discharge with simultaneous flow reversal and exhaust temperature spike.
**Expected:** ANOMALY DETECTED (score: 0.97, CRITICAL). RCA: Compressor surge event detected. Discharge pressure oscillation with flow reversal indicates aerodynamic instability. Recommend: Immediate load reduction. Inspect inlet guide vanes and check anti-surge valve operation.

### 3. Normal Operating Variation
**Input:** Minor temperature fluctuation (+/- 1.5°C) on exhaust thermocouples during load ramp from 50% to baseload.
**Expected:** NORMAL (score: 0.12). Variations within expected range for load transient. No action required.

## Tech Stack

Isolation Forest (scikit-learn), Mistral 7B (Groq), Pandas, NumPy, Gradio, Docker

## Author

**David Fernandez** — AI Engineer

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
