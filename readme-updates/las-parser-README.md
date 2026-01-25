# Intelligent LAS Parser 🛢️

**Legacy Energy Data Modernization**

Parsing and vectorization engine for legacy well logs and subsurface data.

[![Live Demo](https://img.shields.io/badge/🤗-Live_Demo-yellow)](https://huggingface.co/spaces/davidfertube/las-parser)
[![Portfolio](https://img.shields.io/badge/📂-Portfolio-blue)](https://davidfernandez.dev)

## 🎯 The Problem

Decades of critical subsurface data is locked in legacy LAS files with inconsistent formatting, making it inaccessible to modern AI tools.

## 💡 The Solution

Robust parser that standardizes legacy well logs, corrects errors, and vectorizes content for retrieval, unlocking historical data for new exploration.

## 🏗️ Architecture

```
LAS Files → Header Parser → Curve Normalizer → Quality Validator → LlamaIndex Vectorization → Output (Parquet/PostgreSQL)
```

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Years of Data | 50+ |
| Parse Rate | 99.5% |
| Output Format | Vector-Ready |

## 🛠️ Tech Stack

- **Python** - Core parsing engine
- **LlamaIndex** - Document vectorization
- **Azure AI Search** - Semantic search indexing

## 🔍 Supported Formats

- LAS 2.0 (Standard)
- LAS 3.0
- DLIS
- CSV Well Data

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/davidfertube/las-parser.git
cd las-parser

# Install dependencies
pip install -r requirements.txt

# Run the application
streamlit run app.py
```

## 📁 Output Formats

- **Parquet** - Columnar storage for analytics
- **PostgreSQL** - Relational database export
- **Vector Embeddings** - For semantic search

## 📝 License

MIT License © 2026 David Fernandez

## 👤 Author

**David Fernandez** - AI Engineer | Azure Native

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
