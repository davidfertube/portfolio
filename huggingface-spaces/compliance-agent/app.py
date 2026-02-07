import gradio as gr

# =============================================================================
# COMPLIANCE AGENT - NERC CIP Compliance Automation
# Author: David Fernandez | Industrial AI Engineer | LangGraph Contributor
# =============================================================================

REQUIREMENTS = {
    "R1.1": ("Physical Security Plan", ["physical security", "psp", "access control", "security plan"]),
    "R1.2": ("Access Controls", ["badge", "card", "pin", "biometric", "lock", "authentication"]),
    "R1.3": ("Visitor Program", ["visitor", "escort", "visitor log", "sign in"]),
    "R1.4": ("Monitoring", ["cctv", "camera", "video", "surveillance", "alarm", "monitor"]),
    "R1.5": ("Access Logging", ["log", "access log", "badge log", "audit", "record"]),
    "R1.6": ("90-Day Retention", ["90 days", "90 calendar days", "retention", "ninety"]),
    "R1.7": ("24hr Revocation", ["24 hours", "termination", "revoke", "disable", "remove access"]),
    "R1.8": ("Visitor Log Retention", ["visitor log", "visitor record", "90 days"]),
}

DEMO_COMPLIANT = """PHYSICAL SECURITY PLAN - ENERGY MANAGEMENT CENTER
Document ID: PSP-EMC-001 | Effective: January 2024

1. PHYSICAL ACCESS CONTROLS
All personnel must authenticate using dual-factor badge + PIN entry at all Physical Security Perimeter (PSP) access points. Badge access logs are reviewed every 14 days by the Security Manager. All access records are maintained for a minimum of 90 calendar days per CIP-006-6 R1.6.

2. VISITOR CONTROL PROGRAM
All visitors must sign the visitor log with name, company, purpose, escort name, and entry/exit times. Visitors require continuous escort by authorized personnel within the PSP. Visitor logs are retained for 90 calendar days minimum per CIP-006-6 R1.8.

3. MONITORING REQUIREMENTS
24/7 CCTV surveillance coverage of all PSP entry points. Video retention: 90 calendar days. Alarm system with documented 15-minute response time.

4. ACCESS REVOCATION
Upon termination notification from HR, physical access is revoked within 24 hours. Security Manager confirms badge deactivation."""

DEMO_GAPS = """ACCESS CONTROL PROCEDURE - SUBSTATION ALPHA
Version 2.0 | June 2023

1. ENTRY REQUIREMENTS
Employees badge in using proximity cards at the main gate.
Visitors sign the visitor log and receive a visitor badge.

2. MONITORING
Security cameras at main entrance. Recordings reviewed when needed.

3. LOG MANAGEMENT
Badge logs reviewed monthly. Visitor logs kept for 30 days."""

def analyze(procedure_text):
    """Analyze procedure for NERC CIP-006-6 compliance."""

    if not procedure_text or not procedure_text.strip():
        return "⚠️ Please enter a procedure document to analyze."

    text = procedure_text.lower()
    findings = []
    compliant = partial = gap = 0

    for req_id, (title, keywords) in REQUIREMENTS.items():
        matches = sum(1 for kw in keywords if kw in text)
        total = len(keywords)

        if matches >= 2:
            status = "✅ COMPLIANT"
            compliant += 1
        elif matches >= 1:
            status = "⚠️ PARTIAL"
            partial += 1
        else:
            status = "❌ GAP"
            gap += 1

        findings.append(f"| {req_id} | {title} | {matches}/{total} | {status} |")

    score = int((compliant + partial * 0.5) / len(REQUIREMENTS) * 100)
    table = "\n".join(findings)

    if gap >= 3:
        priority = "🔴 HIGH PRIORITY"
        action = "Multiple compliance gaps detected. Immediate remediation required."
    elif gap >= 1:
        priority = "🟡 MEDIUM PRIORITY"
        action = "Some gaps identified. Address within 30 days."
    else:
        priority = "🟢 LOW PRIORITY"
        action = "Minor improvements recommended."

    return f"""# NERC CIP-006-6 Compliance Assessment

## Summary
| Metric | Value |
|--------|-------|
| **Compliance Score** | **{score}%** |
| ✅ Compliant | {compliant} |
| ⚠️ Partial | {partial} |
| ❌ Gaps | {gap} |

## {priority}
{action}

---

## Detailed Findings
| Requirement | Description | Keywords | Status |
|-------------|-------------|----------|--------|
{table}

---

## Next Steps
1. Address ❌ GAP items first - these are audit findings
2. Strengthen ⚠️ PARTIAL items with documentation
3. Maintain ✅ COMPLIANT items

---
*Model: [compliance-policy-checker](https://huggingface.co/davidfertube/compliance-policy-checker) | Dataset: [compliance-procedures-data](https://huggingface.co/datasets/davidfertube/compliance-procedures-data)*
"""

# Create the interface
demo = gr.Interface(
    fn=analyze,
    inputs=gr.Textbox(
        label="Procedure Document",
        placeholder="Paste your physical security procedure here...",
        lines=15
    ),
    outputs=gr.Markdown(label="Compliance Assessment"),
    title="🛡️ Compliance Agent",
    description="""
## NERC CIP-006-6 Physical Security Compliance

**How to use:**
1. Click an example below to load a demo procedure
2. Click "Submit" to see the compliance assessment
3. Or paste your own procedure document

**What it does:** Validates procedures against NERC CIP-006-6 physical security requirements with gap detection.
""",
    article="""
---
### How It Works
```
Procedure Document → Requirement Mapping → Keyword Analysis → Gap Detection → Score
```

**Requirements Checked:** Physical Security Plan, Access Controls, Visitor Program, Monitoring, Logging, 90-Day Retention, 24hr Revocation

**Resources:** [Model](https://huggingface.co/davidfertube/compliance-policy-checker) | [Dataset](https://huggingface.co/datasets/davidfertube/compliance-procedures-data) | [Portfolio](https://davidfernandez.dev)

*Built by David Fernandez - Industrial AI Engineer | LangGraph Contributor*
""",
    examples=[
        [DEMO_COMPLIANT],  # Compliant procedure
        [DEMO_GAPS],       # Procedure with gaps
    ],
    cache_examples=False,
)

demo.launch()
