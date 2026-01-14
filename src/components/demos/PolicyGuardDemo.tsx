'use client';

import { useState } from 'react';
import styles from './PolicyGuardDemo.module.css';

interface PolicyRule {
    id: string;
    name: string;
    category: string;
    status: 'pass' | 'fail' | 'warning';
    confidence: number;
}

const DEMO_POLICIES: PolicyRule[] = [
    { id: '1', name: 'GDPR Data Privacy', category: 'Privacy', status: 'pass', confidence: 98 },
    { id: '2', name: 'SOC 2 Type II', category: 'Security', status: 'pass', confidence: 95 },
    { id: '3', name: 'HIPAA Security Rule', category: 'Healthcare', status: 'warning', confidence: 78 },
    { id: '4', name: 'PCI DSS v4.0', category: 'Payment', status: 'fail', confidence: 42 },
    { id: '5', name: 'ISO 27001', category: 'Security', status: 'pass', confidence: 92 },
];

export default function PolicyGuardDemo() {
    const [isChecking, setIsChecking] = useState(false);
    const [checkedPolicies, setCheckedPolicies] = useState<PolicyRule[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const runCheck = () => {
        setIsChecking(true);
        setCheckedPolicies([]);
        setCurrentIndex(0);

        DEMO_POLICIES.forEach((policy, idx) => {
            setTimeout(() => {
                setCurrentIndex(idx + 1);
                setCheckedPolicies(prev => [...prev, policy]);

                if (idx === DEMO_POLICIES.length - 1) {
                    setTimeout(() => setIsChecking(false), 300);
                }
            }, (idx + 1) * 400);
        });
    };

    const handleReset = () => {
        setCheckedPolicies([]);
        setCurrentIndex(0);
        setIsChecking(false);
    };

    const passCount = checkedPolicies.filter(p => p.status === 'pass').length;
    const warningCount = checkedPolicies.filter(p => p.status === 'warning').length;
    const failCount = checkedPolicies.filter(p => p.status === 'fail').length;
    const overallScore = checkedPolicies.length > 0
        ? Math.round(checkedPolicies.reduce((sum, p) => sum + p.confidence, 0) / checkedPolicies.length)
        : 0;

    return (
        <section className={styles.demoSection}>
            <h2>Policy Compliance Check</h2>

            <div className={styles.demoContainer}>
                {/* Left: Results */}
                <div className={styles.resultsColumn}>
                    {checkedPolicies.length > 0 && (
                        <div className={styles.scoreCard}>
                            <div className={styles.scoreGauge}>
                                <svg viewBox="0 0 100 50">
                                    <path
                                        d="M 10 50 A 40 40 0 0 1 90 50"
                                        fill="none"
                                        stroke="#e5e5e5"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 10 50 A 40 40 0 0 1 90 50"
                                        fill="none"
                                        stroke={overallScore >= 80 ? '#10b981' : overallScore >= 60 ? '#f59e0b' : '#ef4444'}
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                        strokeDasharray={`${overallScore * 1.26} 126`}
                                        className={styles.gaugeProgress}
                                    />
                                </svg>
                                <div className={styles.scoreValue}>
                                    <span className={styles.scoreNum}>{overallScore}%</span>
                                    <span className={styles.scoreLabel}>Compliance Score</span>
                                </div>
                            </div>

                            <div className={styles.dspyBadge}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
                                </svg>
                                DSPy Optimization Active
                            </div>

                            <div className={styles.statsSummary}>
                                <div className={`${styles.statItem} ${styles.pass}`}>
                                    <span className={styles.statNum}>{passCount}</span>
                                    <span className={styles.statLabel}>Passed</span>
                                </div>
                                <div className={`${styles.statItem} ${styles.warning}`}>
                                    <span className={styles.statNum}>{warningCount}</span>
                                    <span className={styles.statLabel}>Warnings</span>
                                </div>
                                <div className={`${styles.statItem} ${styles.fail}`}>
                                    <span className={styles.statNum}>{failCount}</span>
                                    <span className={styles.statLabel}>Failed</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={styles.policyList}>
                        <div className={styles.listHeader}>
                            <span>Policy Rules</span>
                            {isChecking && (
                                <span className={styles.checkingBadge}>
                                    Checking {currentIndex}/{DEMO_POLICIES.length}
                                </span>
                            )}
                        </div>

                        {checkedPolicies.length === 0 && !isChecking ? (
                            <div className={styles.emptyState}>
                                <p>Run a compliance check to see policy results</p>
                            </div>
                        ) : (
                            <div className={styles.policyItems}>
                                {checkedPolicies.map((policy) => (
                                    <div
                                        key={policy.id}
                                        className={`${styles.policyItem} ${styles[policy.status]}`}
                                    >
                                        <div className={styles.policyStatus}>
                                            {policy.status === 'pass' && '✓'}
                                            {policy.status === 'warning' && '!'}
                                            {policy.status === 'fail' && '✗'}
                                        </div>
                                        <div className={styles.policyInfo}>
                                            <span className={styles.policyName}>{policy.name}</span>
                                            <span className={styles.policyCategory}>{policy.category}</span>
                                        </div>
                                        <div className={styles.confidenceBar}>
                                            <div
                                                className={styles.confidenceFill}
                                                style={{ width: `${policy.confidence}%` }}
                                            />
                                        </div>
                                        <span className={styles.confidenceValue}>{policy.confidence}%</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Controls */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>DSPy-Optimized Prompts</h3>
                        <p>Policy rules compiled into optimized prompts using DSPy. Achieves higher accuracy through automated prompt tuning and self-refinement.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>100+</span>
                            <span className={styles.metricLabel}>Policies</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>Real Time</span>
                            <span className={styles.metricLabel}>Checking</span>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        {checkedPolicies.length === 0 ? (
                            <button
                                className={styles.btnPrimary}
                                onClick={runCheck}
                                disabled={isChecking}
                            >
                                {isChecking ? 'Checking...' : 'Run Compliance Check'}
                            </button>
                        ) : (
                            <button className={styles.btnSecondary} onClick={handleReset}>
                                Reset
                            </button>
                        )}
                    </div>

                    <div className={styles.documentInfo}>
                        <h4>Sample Document</h4>
                        <div className={styles.docPreview}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                            <div>
                                <span className={styles.docName}>Security_Policy_2024.pdf</span>
                                <span className={styles.docMeta}>24 pages • Last updated Jan 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
