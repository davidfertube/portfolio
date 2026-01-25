---
description: Automates Hugging Face space, model, and dataset deployments
---
// turbo-all
1. Ensure README.md has correct metadata (title, sdk, etc.)
2. If using python, ensure requirements.txt is up to date
3. For Spaces:
   - Copy relevant src/components/demos logic if using Gradio/Streamlit
   - Push to HF Space repo: `git push https://davidfertube:$HF_TOKEN@huggingface.co/spaces/davidfertube/<space-name> main`
4. For Models/Datasets:
   - Use `huggingface-cli upload davidfertube/<repo-name> ./folder`
