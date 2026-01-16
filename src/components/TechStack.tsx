'use client';

import styles from './TechStack.module.css';

interface TechCategory {
    title: string;
    tools: string[];
}

const techCategories: TechCategory[] = [
    {
        title: 'COMPUTER VISION',
        tools: ['YOLOv8', 'ONNX Runtime', 'Edge AI', 'Azure Vision']
    },
    {
        title: 'NLP / RAG',
        tools: ['LangChain', 'LlamaIndex', 'Azure AI Search', 'DSPy']
    },
    {
        title: 'AGENTS',
        tools: ['LangGraph', 'AutoGen', 'Multi-Agent', 'Semantic Kernel']
    },
    {
        title: 'TIME SERIES / ML',
        tools: ['LSTM', 'FFT Analysis', 'Stable Baselines3', 'Azure ML']
    },
    {
        title: 'MLOPS & CLOUD',
        tools: ['FastAPI', 'Docker', 'Terraform', 'Bicep', 'GitHub Actions']
    },
    {
        title: 'INDUSTRIAL / OT',
        tools: ['OPC UA', 'SCADA', 'OSIsoft PI', 'Digital Twins']
    }
];

export default function TechStack() {
    return (
        <div className={styles.techStack}>
            <div className={styles.header}>
                <span className={styles.title}>INDUSTRIAL AI ENGINEER</span>
                <span className={styles.subtitle}>AZURE NATIVE</span>
            </div>

            <div className={styles.grid}>
                {techCategories.map((category, idx) => (
                    <div key={idx} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <ul className={styles.toolList}>
                            {category.tools.map((tool, toolIdx) => (
                                <li key={toolIdx}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
