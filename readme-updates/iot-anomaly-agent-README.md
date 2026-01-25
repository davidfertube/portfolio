# Vitals Anomaly Agent 💓

**ICU Patient Monitoring & Early Warning System**

Real-time anomaly detection for patient vital signs using autonomous AI agents.

[![Live Demo](https://img.shields.io/badge/🤗-Live_Demo-yellow)](https://huggingface.co/spaces/davidfertube/iot-anomaly-agent)
[![Portfolio](https://img.shields.io/badge/📂-Portfolio-blue)](https://davidfernandez.dev)

## 🎯 The Problem

ICU alarm fatigue desensitizes staff to critical alerts. Subtle correlations in vitals often precede deterioration but are missed by static thresholds.

## 💡 The Solution

AI agent monitoring real-time telemetry from patient monitors. Detects multi-variate anomalies (e.g., sepsis patterns) and triages alerts to nursing stations.

## 🏗️ Architecture

```
Patient Monitors (HL7) → Azure IoT Hub → Stream Analytics → Anomaly Detection Model → Sim.ai Agent → Clinical Alert System
```

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Alert Latency | <15s |
| Vitals Analyzed | Multi |
| Triage Mode | Auto |

## 🛠️ Tech Stack

- **Azure IoT Hub** - Scalable IoT ingestion
- **Sim.ai** - Visual AI agent builder
- **Stream Analytics** - Real-time data processing

## 🔍 Monitored Vitals

- Heart Rate & Rhythm
- Blood Pressure
- SpO2 (Oxygen Saturation)
- Respiratory Rate
- Temperature
- Multi-variate Correlations

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/davidfertube/iot-anomaly-agent.git
cd iot-anomaly-agent

# Install dependencies
pip install -r requirements.txt

# Configure Azure IoT credentials
cp .env.example .env
# Edit .env with your Azure IoT Hub connection string

# Run the application
python app.py
```

## 📝 License

MIT License © 2026 David Fernandez

## 👤 Author

**David Fernandez** - AI Engineer | Azure Native

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
