# Predictive Agent

**LSTM-Based Remaining Useful Life Prediction for Gas Turbines**

Condition-based maintenance system that predicts equipment degradation in power generation assets, extending turbine service intervals by 15-20% while reducing unplanned downtime.

[![Portfolio](https://img.shields.io/badge/Portfolio-davidfernandez.dev-00d4ff?style=flat-square)](https://davidfernandez.dev/projects/predictive-agent)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=flat-square&logo=github)](https://github.com/davidfertube/predictive-maintenance)

---

## Overview

LSTM neural network trained on NASA C-MAPSS turbofan degradation data, adapted for GE Frame 7FA gas turbine operating profiles. The model ingests multi-sensor time-series data and outputs a Remaining Useful Life (RUL) estimate in operational hours.

**Design decisions:**

- **LSTM over transformer** — Sensor streams are sequential with long-range temporal dependencies. LSTM's gating mechanism captures gradual degradation better than attention for this dataset size
- **FFT preprocessing** — Vibration signals transformed to frequency domain to expose bearing defect frequencies (BPFO, BPFI) invisible in raw time-domain data
- **Multi-horizon output** — RUL predicted at 1hr, 12hr, and 48hr horizons for flexible maintenance planning

## Architecture

```
Sensor Data → FFT Processing → LSTM (2-layer, 64 units) → RUL Estimation → Maintenance Strategy
```

## Performance

| Metric | Value |
|--------|-------|
| F1 Score | 92% |
| Precision | 91% |
| Recall | 93% |
| Early Warning | 48 hrs |
| Cost Reduction | ~30% |

## Interactive Demos

### 1. Pump Cavitation Warning
**Input:** Time-series vibration data showing 5Hz frequency spikes in a centrifugal pump.
**Expected:** RUL: 14 hours. Status: CRITICAL. Recommendation: Shutdown and inspect impeller for cavitation damage.

### 2. Normal Bearing Wear
**Input:** Steady vibro-acoustic data within 1-2mm/s RMS from turbine bearing housing.
**Expected:** RUL: 420 hours. Status: OPTIMAL. Schedule bearing inspection in next planned outage (2 weeks).

### 3. Compressor Blade Fouling
**Input:** Gradual increase in exhaust gas temperature with decreasing compressor efficiency ratio.
**Expected:** RUL: 168 hours. Status: MONITOR. Online water wash recommended before next baseload cycle.

## Tech Stack

Python, PyTorch, scikit-learn, SciPy FFT, FastAPI, Gradio, Docker

## Author

**David Fernandez** — Senior AI Engineer

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
