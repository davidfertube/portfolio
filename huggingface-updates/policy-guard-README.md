---
title: Compliance Agent
emoji: ⚡
colorFrom: purple
colorTo: blue
sdk: gradio
sdk_version: 4.44.0
python_version: 3.11
app_file: app.py
pinned: true
license: apache-2.0
short_description: NERC CIP Compliance Automation for Energy Operators
tags:
  - compliance
  - policy
  - dspy
  - pydantic-ai
  - nerc-cip
  - energy
---

# Compliance Agent

**NERC CIP Compliance Automation for Bulk Electric System Operators**

Automated procedure validation against NERC CIP-006-6 physical security requirements, reducing audit preparation time by 60% through NLP-driven gap detection and remediation planning.

[![Portfolio](https://img.shields.io/badge/Portfolio-davidfernandez.dev-00d4ff?style=flat-square)](https://davidfernandez.dev/projects/compliance-agent)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-181717?style=flat-square&logo=github)](https://github.com/davidfertube/policy-guard)

---

## Overview

NLP-based compliance engine built with PydanticAI and DSPy that ingests internal security procedures and validates them against NERC CIP standard requirements. The system identifies compliance gaps, maps procedure clauses to specific CIP requirements, and generates actionable remediation recommendations.

**Design decisions:**

- **PydanticAI for structured output** — Compliance findings must be machine-parseable for GRC platform integration. Pydantic schemas enforce consistent finding format
- **DSPy optimization** — Prompt pipelines compiled against labeled examples rather than hand-tuned, improving accuracy as training data grows
- **Policy-as-Code** — Compliance rules encoded as structured policies. New standards (CIP-007, CIP-010) added by defining schemas, not modifying inference

## Architecture

```
Procedure Document → Clause Segmentation → CIP Requirement Matching → DSPy Evaluation → Gap Report + Remediation Plan
```

## Performance

| Metric | Value |
|--------|-------|
| Audit Prep Reduction | 60% |
| Standards Coverage | CIP-006-6 |
| Validation Mode | Real-Time |
| Output Format | Structured (PydanticAI) |

## Interactive Demos

### 1. Physical Security Gap Detection
**Input:** Internal access control procedure document for a 230kV substation control house.
**Expected:** Gap identified in CIP-006-6 R1.4 — procedure lacks visitor escort requirements for Electronic Security Perimeter areas. Severity: HIGH. Remediation: Add visitor log and continuous escort protocol.

### 2. Compliant Procedure Validation
**Input:** Comprehensive physical security plan covering badge access, CCTV monitoring, and visitor management for BES cyber asset locations.
**Expected:** Compliance Score: 100%. All CIP-006-6 requirements satisfied. Evidence mapping generated for audit documentation.

### 3. Multi-Requirement Cross-Reference
**Input:** Combined IT security and physical security procedure with overlapping CIP-006 and CIP-007 scope.
**Expected:** Cross-reference report showing which procedure sections satisfy which CIP requirements, with gaps flagged where coverage is implicit but not explicit.

## Tech Stack

PydanticAI, DSPy, Mistral 7B, FastAPI, Gradio, Python

## Author

**David Fernandez** — Senior AI Engineer

- [Portfolio](https://davidfernandez.dev)
- [LinkedIn](https://linkedin.com/in/davidfertube)
- [GitHub](https://github.com/davidfertube)
