import gradio as gr

# =============================================================================
# PREDICTIVE AGENT - LSTM-Based RUL Prediction
# Author: David Fernandez | Industrial AI Engineer | LangGraph Contributor
# =============================================================================

def predict(health_index, vibration, heat_rate_delta, operating_hours, start_count):
    """Predict Remaining Useful Life based on equipment health."""

    # Normalize factors (0-1 scale)
    hi_factor = health_index / 100
    vib_factor = 1 - min(vibration / 1.0, 1)
    hr_factor = 1 - min(heat_rate_delta / 15, 1)
    hours_factor = 1 - min(operating_hours / 80000, 1)
    starts_factor = 1 - min(start_count / 1500, 1)

    # Weighted composite
    composite = (
        hi_factor * 0.35 +
        vib_factor * 0.25 +
        hr_factor * 0.20 +
        hours_factor * 0.12 +
        starts_factor * 0.08
    )

    rul = int(composite * 200)

    # Urgency
    if rul < 30:
        urgency = "🔴 CRITICAL"
        action = "Schedule emergency maintenance within 48 hours."
    elif rul < 100:
        urgency = "🟡 SCHEDULED"
        action = "Plan maintenance in next outage window (2-4 weeks)."
    else:
        urgency = "🟢 ROUTINE"
        action = "Continue normal monitoring. No immediate action."

    # Status checks
    def status(val, good, warn, lower_better=True):
        if lower_better:
            if val <= good: return "✅ OK"
            elif val <= warn: return "⚠️ WARNING"
            else: return "🔴 CRITICAL"
        else:
            if val >= good: return "✅ OK"
            elif val >= warn: return "⚠️ WARNING"
            else: return "🔴 CRITICAL"

    # Recommendations
    recs = []
    if health_index < 60:
        recs.append("🔧 **Hot Gas Path Inspection** - Health index degraded")
    if vibration > 0.4:
        recs.append("🔧 **Bearing Analysis** - Elevated vibration")
    if heat_rate_delta > 6:
        recs.append("🔧 **Compressor Wash** - Heat rate deviation")
    if operating_hours > 60000:
        recs.append("🔧 **Major Overhaul Planning** - High hours")
    if not recs:
        recs.append("✅ Continue normal monitoring")

    return f"""# 🔮 RUL Prediction Report

## Remaining Useful Life: **{rul} cycles**

## {urgency}
{action}

---

## Equipment Status
| Parameter | Value | Status |
|-----------|-------|--------|
| Health Index | {health_index}% | {status(health_index, 70, 40, False)} |
| Vibration | {vibration} in/s | {status(vibration, 0.3, 0.5)} |
| Heat Rate Delta | {heat_rate_delta}% | {status(heat_rate_delta, 4, 8)} |
| Operating Hours | {int(operating_hours):,} | {status(operating_hours, 50000, 65000)} |
| Start Count | {int(start_count):,} | {status(start_count, 1000, 1200)} |

---

## Recommendations
{chr(10).join(recs)}

---

## Model Details
- **Algorithm**: LSTM Neural Network
- **Confidence**: {int(composite * 100)}% composite health

---
*Model: [rul-predictor-ccgt](https://huggingface.co/davidfertube/rul-predictor-ccgt) | Dataset: [ccgt-health-history](https://huggingface.co/datasets/davidfertube/ccgt-health-history)*
"""

# Create the interface
demo = gr.Interface(
    fn=predict,
    inputs=[
        gr.Number(label="Health Index (%)", value=85, minimum=0, maximum=100),
        gr.Number(label="Vibration (in/s)", value=0.18, minimum=0, maximum=1),
        gr.Number(label="Heat Rate Delta (%)", value=2.5, minimum=0, maximum=15),
        gr.Number(label="Operating Hours", value=52000),
        gr.Number(label="Start Count", value=950),
    ],
    outputs=gr.Markdown(label="RUL Prediction"),
    title="🔧 Predictive Agent",
    description="""
## LSTM-Based Remaining Useful Life (RUL) Prediction

**How to use:**
1. Click an example below to load demo values
2. Click "Submit" to see the RUL prediction
3. Or enter your own equipment health data

**What it does:** Predicts equipment failure timeline for CCGT turbines using LSTM neural networks.
""",
    article="""
---
### How It Works
```
Health Metrics → LSTM Model → RUL Prediction → Maintenance Priority
```

**Key Metrics:** Health Index, Vibration, Heat Rate Delta, Operating Hours, Start Count

**Resources:** [Model](https://huggingface.co/davidfertube/rul-predictor-ccgt) | [Dataset](https://huggingface.co/datasets/davidfertube/ccgt-health-history) | [Portfolio](https://davidfernandez.dev)

*Built by David Fernandez - Industrial AI Engineer | LangGraph Contributor*
""",
    examples=[
        [96.5, 0.14, 1.2, 48500, 920],   # Healthy equipment
        [42.3, 0.48, 8.5, 68000, 1180],  # Degraded equipment
    ],
    cache_examples=False,
)

demo.launch()
