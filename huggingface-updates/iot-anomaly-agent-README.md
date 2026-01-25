---
title: Vitals Anomaly Agent
emoji: 🤖
colorFrom: indigo
colorTo: purple
sdk: gradio
sdk_version: 5.9.1
python_version: "3.11"
app_file: app.py
pinned: true
license: mit
short_description: ICU Patient Monitoring & Early Warning System
tags:
  - healthcare
  - iot
  - anomaly-detection
  - agents
  - icu
  - patient-monitoring
---

# Vitals Anomaly Agent 🤖

**ICU Patient Monitoring & Early Warning System**

Real-time anomaly detection for patient vital signs using autonomous AI agents.

## 🎯 Purpose

ICU alarm fatigue desensitizes staff to critical alerts. Subtle correlations in vitals often precede deterioration but are missed by static thresholds.

AI agent monitoring real-time telemetry from patient monitors. Detects multi-variate anomalies (e.g., sepsis patterns) and triages alerts to nursing stations.

## 🏗️ Architecture

```
Patient Monitors (HL7) → Azure IoT Hub → Stream Analytics → Anomaly Detection Model → Sim.ai Agent → Clinical Alert System
```

## ⚡ Features

- **6 Vital Types**: Heart Rate, Blood Pressure, SpO2, Respiratory Rate, Temperature, ECG
- **Real-time Anomaly Detection**: Multi-variate pattern recognition
- **Automated Triage**: Priority-based alert routing
- **Human-in-the-Loop**: Configurable approval workflows

## 🛠️ Technology Stack

- Azure IoT Hub (Health Tier)
- Sim.ai Visual Agent Builder
- Isolation Forest + LSTM Autoencoder
- HL7/FHIR Integration

## 📊 Metrics

- <15s Alert Latency
- Multi-Vitals Analyzed simultaneously
- Auto Triage capability

## 🚀 Interactive Demos

### 1. Critical Sepsis Pattern
**Input:** HR: 115, BP: 90/60, Temp: 102.1F.
**Expected Result:** High Priority Alert: Sepsis Warning Pattern Detected. Automated triage to Charge Nurse.

### 2. Multi-Variate Anomaly
**Input:** Sudden drop in SpO2 (88%) without matching change in HR.
**Expected Result:** Medium Priority Alert: Possible sensor displacement or respiratory distress.

## 👤 Author

**David Fernandez** | Industrial AI Engineer | Azure Native

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
