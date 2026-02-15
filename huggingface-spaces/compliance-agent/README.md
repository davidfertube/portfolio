---
title: Compliance Agent
emoji: 🛡️
colorFrom: purple
colorTo: blue
sdk: gradio
sdk_version: 5.9.1
python_version: "3.11"
app_file: app.py
pinned: true
license: mit
short_description: NERC CIP Compliance Automation
tags:
  - compliance
  - nerc-cip
  - regulatory
  - power-grid
  - security
---

# Compliance Agent

**NERC CIP-006-6 Compliance Automation**

Validate physical security procedures against NERC CIP regulations with gap detection and remediation recommendations.

## Quick Start

1. Click **"Demo: Procedure with Gaps"** to see gap detection in action
2. Click **"Demo: Compliant Procedure"** to see a passing assessment
3. Or paste your own procedure document

## CIP-006-6 Requirements Checked

- R1.1: Physical Security Plan
- R1.2: Physical Access Controls
- R1.3: Visitor Control Program
- R1.4: Access Point Monitoring
- R1.5: Logging Physical Access
- R1.6: Log Retention (90 days)
- R1.7: Access Revocation (24 hours)
- R1.8: Visitor Log Retention

## How It Works

```
Procedure Text -> Requirement Mapping -> Gap Analysis -> Evidence Extraction -> Remediation Plan
```

## Resources

- **Model**: [compliance-policy-checker](https://huggingface.co/davidfertube/compliance-policy-checker)
- **Dataset**: [compliance-procedures-data](https://huggingface.co/datasets/davidfertube/compliance-procedures-data) (219 likes)
- **GitHub**: [compliance-agent](https://github.com/davidfertube/compliance-agent)
- **Portfolio**: [davidfernandez.dev](https://davidfernandez.dev)

## Author

**David Fernandez** - AI Engineer

- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
- [HuggingFace](https://huggingface.co/davidfertube)
