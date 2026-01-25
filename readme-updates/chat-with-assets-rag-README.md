# Med-Research RAG 🔬

**Evidence-Based Medical Research Assistant**

RAG pipeline for querying medical journals, patient records, and clinical trials with citation support.

[![Live Demo](https://img.shields.io/badge/🤗-Live_Demo-yellow)](https://huggingface.co/spaces/davidfertube/chat-with-assets-rag)
[![Portfolio](https://img.shields.io/badge/📂-Portfolio-blue)](https://davidfernandez.dev)

## 🎯 The Problem

Clinicians and researchers struggle to synthesize insights from thousands of medical journals and patient history records efficiently.

## 💡 The Solution

Conversational AI that indexes medical literature and EHR data. Enables natural language queries with strict citation requirements for clinical decision support.

## 🏗️ Architecture

```
PubMed/EHR Data → LlamaIndex Ingestion → Azure AI Search (Hybrid) → GPT-4o with Grounding → Cited Clinical Response
```

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Response Time | 4.2s |
| Journals Indexed | 50K+ |
| Citation Rate | 98% |

## 🛠️ Tech Stack

- **LlamaIndex** - Data framework for LLM applications
- **Azure AI Search** - Enterprise hybrid search
- **PubMed API** - Medical literature access

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/davidfertube/chat-with-assets-rag.git
cd chat-with-assets-rag

# Install dependencies
pip install -r requirements.txt

# Configure Azure credentials
cp .env.example .env
# Edit .env with your Azure AI Search credentials

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
