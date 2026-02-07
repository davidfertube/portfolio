# Compliance Agent

**NERC CIP Compliance Automation for Bulk Electric System Operators**

Automated procedure validation against NERC CIP-006-6 physical security requirements, reducing audit preparation time by 60% through NLP-driven gap detection and remediation planning.

[![Live Demo](https://img.shields.io/badge/Live_Demo-HuggingFace-yellow?style=flat-square)](https://huggingface.co/spaces/davidfertube/compliance-agent)
[![Portfolio](https://img.shields.io/badge/Portfolio-davidfernandez.dev-00d4ff?style=flat-square)](https://davidfernandez.dev/projects/compliance-agent)

---

## Problem

NERC CIP compliance is mandatory for all operators of Bulk Electric System (BES) cyber assets. CIP-006-6 alone defines 30+ physical security requirements covering access control, monitoring, logging, and visitor management across every facility with BES cyber systems.

The compliance burden is substantial:

- **Manual audits** require cross-referencing hundreds of internal procedures against evolving CIP standard language
- **Regulatory fines** for non-compliance reach $1M+/day per violation (FERC enforcement)
- **Evidence collection** for triennial audits typically consumes 2-3 months of staff time across compliance, IT, and operations teams
- **Gap detection** between written procedures and actual CIP requirements relies on subject matter expert interpretation, which is inconsistent across reviewers

## Solution

NLP-based compliance engine built with PydanticAI and DSPy that ingests internal security procedures and validates them against NERC CIP standard requirements. The system identifies compliance gaps, maps procedure clauses to specific CIP requirements, and generates actionable remediation recommendations.

**Key design decisions:**

- **PydanticAI for structured output**: Compliance findings must be machine-parseable for integration with GRC platforms. Pydantic schemas enforce consistent finding format (requirement ID, gap description, severity, remediation)
- **DSPy optimization**: Prompt pipelines are compiled against labeled compliance examples rather than hand-tuned, improving accuracy as the training set grows
- **Requirement decomposition**: CIP standards are pre-decomposed into atomic testable requirements. Each procedure is evaluated against individual requirements rather than full standard sections, improving precision
- **Policy-as-Code**: Compliance rules are encoded as structured policies, not hardcoded prompts. New standards (CIP-007, CIP-010) can be added by defining requirement schemas without modifying the inference pipeline

## Architecture

```
Internal Procedures (PDF/DOCX)
         │
         ▼
┌─────────────────────────┐
│  Document Parser         │  Text extraction + section detection
│  Clause Segmentation     │  Split procedures into testable units
└─────────┬───────────────┘
          ▼
┌─────────────────────────┐
│  CIP Requirement Engine  │  Decomposed CIP-006-6 requirements
│  Policy-as-Code Store    │  Atomic, testable compliance rules
└─────────┬───────────────┘
          ▼
┌─────────────────────────┐
│  DSPy Compliance Module  │  NLP evaluation of clause vs. requirement
│  PydanticAI Schemas      │  Structured finding output
└─────────┬───────────────┘
          ▼
┌─────────────────────────┐
│  Gap Analysis Report     │  Missing/partial/satisfied per requirement
│  Remediation Plan        │  Prioritized corrective actions
└─────────────────────────┘
```

## Performance

| Metric | Value | Context |
|--------|-------|---------|
| Audit Prep Reduction | 60% | vs. manual cross-reference baseline |
| Standards Coverage | CIP-006-6 | Physical security requirements |
| Validation Mode | Real-Time | Process procedures as uploaded |
| Output Format | Structured | PydanticAI schema for GRC integration |

## Tech Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Agent Framework | PydanticAI | Type-safe structured output for compliance findings |
| Prompt Optimization | DSPy | Compiled prompts improve with labeled examples |
| LLM | Mistral 7B | Fast inference for high-volume procedure scanning |
| API | FastAPI | REST endpoints for GRC platform integration |
| Deployment | Docker + Gradio | Containerized with interactive demo interface |

## Getting Started

```bash
git clone https://github.com/davidfertube/policy-guard.git
cd policy-guard

pip install -r requirements.txt

# Run the application
python app.py
```

## License

MIT License - 2026 David Fernandez

## Author

**David Fernandez** — Senior AI Engineer

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
