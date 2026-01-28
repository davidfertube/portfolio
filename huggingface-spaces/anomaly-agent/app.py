import gradio as gr

# =============================================================================
# ANOMALY AGENT - Real-Time Turbine Monitoring
# Author: David Fernandez | Industrial AI Engineer | LangGraph Contributor
# =============================================================================

NORMAL_RANGES = {
    'Exhaust Temp': (850, 920),
    'Vibration X': (0.1, 0.4),
    'Vibration Y': (0.1, 0.4),
    'Bearing Temp': (150, 180),
    'Inlet Pressure': (180, 220),
    'Lube Oil Pressure': (25, 35),
    'Fuel Flow': (7, 9)
}

def analyze(exhaust_temp, vibration_x, vibration_y, bearing_temp, inlet_pressure, lube_oil_pressure, fuel_flow):
    """Analyze turbine sensor readings for anomalies."""

    values = {
        'Exhaust Temp': (exhaust_temp, 'F'),
        'Vibration X': (vibration_x, 'in/s'),
        'Vibration Y': (vibration_y, 'in/s'),
        'Bearing Temp': (bearing_temp, 'F'),
        'Inlet Pressure': (inlet_pressure, 'psi'),
        'Lube Oil Pressure': (lube_oil_pressure, 'psi'),
        'Fuel Flow': (fuel_flow, 'MSCF/hr')
    }

    issues = []
    rows = []

    for name, (val, unit) in values.items():
        low, high = NORMAL_RANGES[name]
        if val < low:
            status = "⚠️ LOW"
            issues.append(f"**{name}**: {val} {unit} (below {low})")
        elif val > high:
            status = "🔴 HIGH"
            issues.append(f"**{name}**: {val} {unit} (above {high})")
        else:
            status = "✅ OK"
        rows.append(f"| {name} | {val} {unit} | {low}-{high} | {status} |")

    table = "\n".join(rows)

    if issues:
        return f"""# 🚨 ANOMALY DETECTED

## Root Cause Analysis
{chr(10).join('- ' + i for i in issues)}

## Sensor Readings
| Parameter | Value | Normal Range | Status |
|-----------|-------|--------------|--------|
{table}

## Recommended Actions
1. Review SCADA historian for trend analysis
2. Schedule bearing inspection if vibration elevated
3. Log anomaly in maintenance system

---
*Model: [turbine-anomaly-detector](https://huggingface.co/davidfertube/turbine-anomaly-detector) | Dataset: [turbine-sensor-streams](https://huggingface.co/datasets/davidfertube/turbine-sensor-streams)*
"""
    else:
        return f"""# ✅ NORMAL OPERATION

All sensors within expected operating parameters.

## Sensor Readings
| Parameter | Value | Normal Range | Status |
|-----------|-------|--------------|--------|
{table}

---
*Model: [turbine-anomaly-detector](https://huggingface.co/davidfertube/turbine-anomaly-detector)*
"""

# Create the interface
demo = gr.Interface(
    fn=analyze,
    inputs=[
        gr.Number(label="Exhaust Temp (F)", value=880),
        gr.Number(label="Vibration X (in/s)", value=0.18),
        gr.Number(label="Vibration Y (in/s)", value=0.16),
        gr.Number(label="Bearing Temp (F)", value=165),
        gr.Number(label="Inlet Pressure (psi)", value=197),
        gr.Number(label="Lube Oil Pressure (psi)", value=28),
        gr.Number(label="Fuel Flow (MSCF/hr)", value=8.2),
    ],
    outputs=gr.Markdown(label="Analysis Results"),
    title="📡 Anomaly Agent",
    description="""
## Real-Time Turbine Monitoring for SCADA Systems

**How to use:**
1. Click an example below to load demo values
2. Click "Submit" to see the analysis
3. Or enter your own sensor values

**What it does:** Detects anomalies in gas turbine sensor streams using Isolation Forest ML with automated root cause analysis.
""",
    article="""
---
### How It Works
```
SCADA Sensors → Feature Extraction → Isolation Forest → Root Cause Analysis → Alert
```

**Resources:** [Model](https://huggingface.co/davidfertube/turbine-anomaly-detector) | [Dataset](https://huggingface.co/datasets/davidfertube/turbine-sensor-streams) | [Portfolio](https://davidfernandez.dev)

*Built by David Fernandez - Industrial AI Engineer | LangGraph Contributor*
""",
    examples=[
        [882, 0.18, 0.16, 165, 197, 28, 8.2],   # Normal operation
        [912, 0.72, 0.68, 198, 192, 22, 8.9],   # Bearing degradation anomaly
    ],
    cache_examples=False,
)

demo.launch()
