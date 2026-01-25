---
language: en
license: apache-2.0
tags:
- nlp
- policy
- compliance
- distilbert
- classification
datasets:
- davidfertube/financial-compliance-reports-synthetic
metrics:
- f1: 0.94
- precision: 0.92
- recall: 0.96
---

# DistilBERT Policy Classifier

This model is a fine-tuned DistilBERT-base-uncased for classifying text into various regulatory compliance categories (e.g., HIPAA, GDPR, SOC2, Internal Protocol).

## Model Description
- **Developed by:** David Fernandez
- **Model type:** Transformer-based Text Classifier
- **Language(s) (NLP):** English
- **License:** Apache-2.0
- **Fine-tuned from model:** distilbert-base-uncased

## Usage
```python
from transformers import pipeline
classifier = pipeline("text-classification", model="davidfertube/distilbert-policy-classifier")
classifier("Patient data was shared with the billing department without explicit consent.")
```

## Performance
- F1-Score: 0.94
- Optimized for low-latency inference in agentic workflows.
