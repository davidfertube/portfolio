# HuggingFace Spaces Deployment Guide

## Quick Deploy

Deploy each space by pushing to HuggingFace:

```bash
# Set your HuggingFace token
export HF_TOKEN=your_token_here

# Deploy Anomaly Agent
cd huggingface-spaces/anomaly-agent
git init
git remote add origin https://huggingface.co/spaces/davidfertube/anomaly-agent
git add .
git commit -m "Fix: Add proper Gradio app with demo examples"
git push --force https://davidfertube:$HF_TOKEN@huggingface.co/spaces/davidfertube/anomaly-agent main

# Deploy Compliance Agent
cd ../compliance-agent
git init
git remote add origin https://huggingface.co/spaces/davidfertube/compliance-agent
git add .
git commit -m "Fix: Add proper Gradio app with demo examples"
git push --force https://davidfertube:$HF_TOKEN@huggingface.co/spaces/davidfertube/compliance-agent main

# Deploy Predictive Agent
cd ../predictive-agent
git init
git remote add origin https://huggingface.co/spaces/davidfertube/predictive-agent
git add .
git commit -m "Fix: Add proper Gradio app with demo examples"
git push --force https://davidfertube:$HF_TOKEN@huggingface.co/spaces/davidfertube/predictive-agent main
```

## What Each Space Does

### Anomaly Agent
- **Purpose**: Detect anomalies in gas turbine sensor streams
- **Model**: Isolation Forest (turbine-anomaly-detector)
- **Dataset**: turbine-sensor-streams (35 rows, 7 sensors)
- **Demo 1**: Normal Operations - all sensors in range
- **Demo 2**: Bearing Degradation - classic failure pattern

### Compliance Agent
- **Purpose**: Validate procedures against NERC CIP-006-6
- **Model**: Text classification (nerc-cip-validator)
- **Dataset**: nerc-cip-procedures (219 documents)
- **Demo 1**: Compliant Procedure - passes all 8 requirements
- **Demo 2**: Procedure with Gaps - missing retention/monitoring

### Predictive Agent
- **Purpose**: Predict Remaining Useful Life for CCGT equipment
- **Model**: LSTM regression (rul-predictor-ccgt)
- **Dataset**: ccgt-health-history (equipment health patterns)
- **Demo 1**: Healthy Equipment - 150+ cycles remaining
- **Demo 2**: Degraded Equipment - <30 cycles, immediate action

## Architecture Summary

```
User Input (Demo/Manual/Upload)
        |
        v
   Gradio Interface (gr.Blocks + .queue())
        |
        v
   Analysis Function (model logic)
        |
        v
   Markdown Report (with resource links)
```

## Why "No API found" Was Happening

The previous apps likely:
1. Missing `.queue()` call before `.launch()`
2. No event handlers connected to outputs
3. Functions not properly returning to Gradio components

These new apps fix all of these with proper Gradio Blocks structure.
