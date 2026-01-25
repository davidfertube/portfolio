---
title: Intelligent LAS Parser
emoji: ⚡
colorFrom: red
colorTo: red
sdk: streamlit
sdk_version: 1.28.0
app_file: app.py
pinned: true
license: mit
short_description: Legacy Energy Data Modernization
tags:
  - energy
  - oil-gas
  - well-logs
  - data-engineering
  - vectorization
---

# Intelligent LAS Parser ⚡

**Legacy Energy Data Modernization**

Parsing and vectorization engine for legacy well logs and subsurface data.

## 🎯 Purpose

Decades of critical subsurface data is locked in legacy LAS files with inconsistent formatting, making it inaccessible to modern AI tools.

Robust parser that standardizes legacy well logs, corrects errors, and vectorizes content for retrieval, unlocking historical data for new exploration.

## 🏗️ Architecture

```
LAS Files → Header Parser → Curve Normalizer → Quality Validator → LlamaIndex Vectorization → Output (Parquet/PostgreSQL)
```

## ⚡ Features

- **LAS File Parsing**: Upload and parse standard LAS 2.0 files
- **Log Visualization**: Multi-track well log display with interactive curves
- **AI Interpretation**: Automated lithology prediction using ML models
- **Crossplot Analysis**: Neutron-Density and other petrophysical crossplots

## 🛠️ Tech Stack

- Python
- LlamaIndex for vectorization
- Azure AI Search
- scikit-learn for ML interpretation
- Streamlit for UI
- pandas & numpy for data processing

## 📊 Metrics

- 50+ Years of Data supported
- 99.5% Parse Rate
- Vector-Ready output

## Related Resources

- [Dataset: LAS Well Logs Sample](https://huggingface.co/datasets/davidfertube/las-well-logs-sample)

## 🚀 Interactive Demos

### 1. Mixed Legacy Stream
**Input:** ASCII log file with misaligned headers and non-standard mnemonic codes.
**Expected Result:** Clean JSON output with standardized mnemonics (e.g., DEPT, GR, NPHI) and 99%+ parse rate.

### 2. Large Scale Batch
**Input:** Batch of 50 .las files from different vendors.
**Expected Result:** Normalized vector database ingestion with consistent schema across all sources.

## 👤 Author

**David Fernandez** | Industrial AI Engineer | Azure Native

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
