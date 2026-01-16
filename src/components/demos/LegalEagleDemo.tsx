'use client';

import { useState } from 'react';
import styles from './LegalEagleDemo.module.css';

interface Agent {
    id: string;
    name: string;
    icon: string;
    status: 'idle' | 'processing' | 'complete';
    output?: string;
}

interface AnalysisResult {
    riskScore: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    clauses: { name: string; status: 'ok' | 'warning' | 'risk' }[];
    summary: string;
}

const INITIAL_AGENTS: Agent[] = [
    { id: 'supervisor', name: 'Supervisor', icon: '👔', status: 'idle' },
    { id: 'risk', name: 'Risk Analyzer', icon: '⚠️', status: 'idle' },
    { id: 'clause', name: 'Clause Extractor', icon: '📋', status: 'idle' },
    { id: 'summary', name: 'Summary Agent', icon: '📝', status: 'idle' },
];

const DEMO_RESULT_MSA: AnalysisResult = {
    riskScore: 72,
    riskLevel: 'Medium',
    clauses: [
        { name: 'Indemnification', status: 'risk' },
        { name: 'Limitation of Liability', status: 'warning' },
        { name: 'Termination', status: 'ok' },
        { name: 'Confidentiality', status: 'ok' },
        { name: 'Force Majeure', status: 'warning' },
    ],
    summary: 'This MSA contains standard commercial terms with notable risk in indemnification clause (unlimited liability exposure). Recommend negotiation on Section 8.2.'
};

const DEMO_RESULT_NDA: AnalysisResult = {
    riskScore: 35,
    riskLevel: 'Low',
    clauses: [
        { name: 'Indemnification', status: 'ok' },
        { name: 'Limitation of Liability', status: 'ok' },
        { name: 'Termination', status: 'ok' },
        { name: 'Confidentiality', status: 'warning' },
        { name: 'Force Majeure', status: 'ok' },
    ],
    summary: 'Standard Mutual NDA. The Confidentiality term is 5 years which is slightly longer than market standard (3 years), but acceptable for IP-heavy collaborations.'
};

export default function LegalEagleDemo() {
    const [agents, setAgents] = useState<Agent[]>(INITIAL_AGENTS);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [selectedContract, setSelectedContract] = useState<string | null>(null);

    const runAnalysis = (contractName: string) => {
        setIsAnalyzing(true);
        setResult(null);
        setAgents(INITIAL_AGENTS.map(a => ({ ...a, status: 'idle' })));

        // Simulate multi-agent processing
        const sequence = ['supervisor', 'risk', 'clause', 'summary'];

        sequence.forEach((agentId, index) => {
            setTimeout(() => {
                setAgents(prev => prev.map(a =>
                    a.id === agentId ? { ...a, status: 'processing' } : a
                ));
            }, index * 800);

            setTimeout(() => {
                setAgents(prev => prev.map(a =>
                    a.id === agentId ? { ...a, status: 'complete' } : a
                ));

                if (index === sequence.length - 1) {
                    setTimeout(() => {
                        const finalResult = contractName.includes('NDA') ? DEMO_RESULT_NDA : DEMO_RESULT_MSA;
                        setResult(finalResult);
                        setIsAnalyzing(false);
                    }, 500);
                }
            }, (index + 1) * 800);
        });
    };

    const handleContractSelect = (contract: string) => {
        setSelectedContract(contract);
        runAnalysis(contract);
    };

    const handleReset = () => {
        setAgents(INITIAL_AGENTS);
        setResult(null);
        setSelectedContract(null);
        setIsAnalyzing(false);
    };

    return (
        <section className={styles.demoSection}>
            <h2>Multi-Agent Contract Review</h2>

            <div className={styles.demoContainer}>
                {/* Left: Agent Workflow */}
                <div className={styles.workflowColumn}>
                    <div className={styles.agentFlow}>
                        <div className={styles.contractInput}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                            <span>{selectedContract || 'Select Contract'}</span>
                        </div>

                        <div className={styles.agentGrid}>
                            {agents.map((agent) => (
                                <div
                                    key={agent.id}
                                    className={`${styles.agentCard} ${styles[agent.status]}`}
                                >
                                    <span className={styles.agentIcon}>{agent.icon}</span>
                                    <span className={styles.agentName}>{agent.name}</span>
                                    {agent.status === 'processing' && (
                                        <div className={styles.processingIndicator}>
                                            <span></span><span></span><span></span>
                                        </div>
                                    )}
                                    {agent.status === 'complete' && (
                                        <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className={`${styles.outputBox} ${result ? styles.hasResult : ''}`}>
                            <span>Structured Report</span>
                        </div>
                    </div>

                    {/* Results Panel */}
                    {result && (
                        <div className={styles.resultsPanel}>
                            <div className={styles.riskScore}>
                                <div className={styles.scoreCircle}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e5e5" strokeWidth="8" />
                                        <circle
                                            cx="50" cy="50" r="40"
                                            fill="none"
                                            stroke={result.riskScore > 70 ? '#f59e0b' : result.riskScore > 40 ? '#10b981' : '#ef4444'}
                                            strokeWidth="8"
                                            strokeDasharray={`${result.riskScore * 2.51} 251`}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>
                                    <div className={styles.scoreValue}>{result.riskScore}</div>
                                </div>
                                <div className={styles.scoreLabel}>
                                    <span className={`${styles.riskBadge} ${styles[result.riskLevel.toLowerCase()]}`}>
                                        {result.riskLevel} Risk
                                    </span>
                                </div>
                            </div>

                            <div className={styles.clausesList}>
                                {result.clauses.map((clause, idx) => (
                                    <div key={idx} className={`${styles.clauseItem} ${styles[clause.status]}`}>
                                        <span className={styles.clauseStatus}>
                                            {clause.status === 'ok' ? '✓' : clause.status === 'warning' ? '!' : '✗'}
                                        </span>
                                        <span>{clause.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.summaryBox}>
                                <h4>AI Summary</h4>
                                <p>{result.summary}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Controls */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>LangGraph Orchestration</h3>
                        <p>Multi-agent system using specialized LLMs for contract analysis. Supervisor routes tasks to Risk, Clause, and Summary agents for parallel processing.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>5</span>
                            <span className={styles.metricLabel}>Agents</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>80%</span>
                            <span className={styles.metricLabel}>Time Saved</span>
                        </div>
                    </div>

                    <div className={styles.contractList}>
                        <h4>Sample Contracts</h4>
                        <button
                            className={styles.contractBtn}
                            onClick={() => handleContractSelect('MSA_Vendor_2024.pdf')}
                            disabled={isAnalyzing}
                        >
                            📄 MSA_Vendor_2024.pdf
                        </button>
                        <button
                            className={styles.contractBtn}
                            onClick={() => handleContractSelect('NDA_Confidential.pdf')}
                            disabled={isAnalyzing}
                        >
                            📄 NDA_Confidential.pdf
                        </button>
                    </div>

                    {selectedContract && (
                        <button className={styles.resetBtn} onClick={handleReset}>
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
