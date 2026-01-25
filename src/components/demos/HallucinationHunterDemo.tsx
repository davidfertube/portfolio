'use client';

import { useState } from 'react';
import styles from './HallucinationHunterDemo.module.css';

interface EvalResult {
    id: string;
    prompt: string;
    groundedness: number;
    relevance: number;
    coherence: number;
    status: 'pass' | 'fail';
}

const DEMO_RESULTS: EvalResult[] = [
    { id: 'T1024', prompt: 'Summarize well log interpretation...', groundedness: 96, relevance: 94, coherence: 98, status: 'pass' },
    { id: 'T1025', prompt: 'Explain drilling mud weight...', groundedness: 92, relevance: 89, coherence: 95, status: 'pass' },
    { id: 'T1026', prompt: 'Calculate BOP test pressure...', groundedness: 45, relevance: 52, coherence: 88, status: 'fail' },
    { id: 'T1027', prompt: 'Describe cementing procedures...', groundedness: 94, relevance: 91, coherence: 96, status: 'pass' },
    { id: 'T1028', prompt: 'Interpret formation tops...', groundedness: 98, relevance: 97, coherence: 99, status: 'pass' },
];

export default function HallucinationHunterDemo() {
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [results, setResults] = useState<EvalResult[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const runEvaluation = () => {
        setIsEvaluating(true);
        setResults([]);
        setCurrentIndex(0);

        DEMO_RESULTS.forEach((result, idx) => {
            setTimeout(() => {
                setCurrentIndex(idx + 1);
                setResults(prev => [...prev, result]);

                if (idx === DEMO_RESULTS.length - 1) {
                    setTimeout(() => setIsEvaluating(false), 300);
                }
            }, (idx + 1) * 600);
        });
    };

    const handleReset = () => {
        setResults([]);
        setCurrentIndex(0);
        setIsEvaluating(false);
    };

    const avgGroundedness = results.length > 0
        ? Math.round(results.reduce((sum, r) => sum + r.groundedness, 0) / results.length)
        : 0;
    const avgRelevance = results.length > 0
        ? Math.round(results.reduce((sum, r) => sum + r.relevance, 0) / results.length)
        : 0;
    const avgCoherence = results.length > 0
        ? Math.round(results.reduce((sum, r) => sum + r.coherence, 0) / results.length)
        : 0;
    const passRate = results.length > 0
        ? Math.round((results.filter(r => r.status === 'pass').length / results.length) * 100)
        : 0;

    const getScoreColor = (score: number) => {
        if (score >= 80) return '#10b981';
        if (score >= 60) return '#f59e0b';
        return '#ef4444';
    };

    return (
        <section className={styles.demoSection}>
            <h2>Hallucination Hunter Demo</h2>

            <div className={styles.demoContainer}>
                {/* Left: Metrics Dashboard */}
                <div className={styles.dashboardColumn}>
                    {results.length > 0 && (
                        <div className={styles.metricsRow}>
                            <div className={styles.scoreCard}>
                                <div className={styles.circleGauge}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e5e5" strokeWidth="8" />
                                        <circle
                                            cx="50" cy="50" r="40"
                                            fill="none"
                                            stroke={getScoreColor(avgGroundedness)}
                                            strokeWidth="8"
                                            strokeDasharray={`${avgGroundedness * 2.51} 251`}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                            className={styles.gaugeProgress}
                                        />
                                    </svg>
                                    <div className={styles.gaugeValue}>{avgGroundedness}%</div>
                                </div>
                                <span className={styles.scoreLabel}>Groundedness</span>
                            </div>

                            <div className={styles.scoreCard}>
                                <div className={styles.circleGauge}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e5e5" strokeWidth="8" />
                                        <circle
                                            cx="50" cy="50" r="40"
                                            fill="none"
                                            stroke={getScoreColor(avgRelevance)}
                                            strokeWidth="8"
                                            strokeDasharray={`${avgRelevance * 2.51} 251`}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                            className={styles.gaugeProgress}
                                        />
                                    </svg>
                                    <div className={styles.gaugeValue}>{avgRelevance}%</div>
                                </div>
                                <span className={styles.scoreLabel}>Relevance</span>
                            </div>

                            <div className={styles.scoreCard}>
                                <div className={styles.circleGauge}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e5e5" strokeWidth="8" />
                                        <circle
                                            cx="50" cy="50" r="40"
                                            fill="none"
                                            stroke={getScoreColor(avgCoherence)}
                                            strokeWidth="8"
                                            strokeDasharray={`${avgCoherence * 2.51} 251`}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                            className={styles.gaugeProgress}
                                        />
                                    </svg>
                                    <div className={styles.gaugeValue}>{avgCoherence}%</div>
                                </div>
                                <span className={styles.scoreLabel}>Coherence</span>
                            </div>
                        </div>
                    )}

                    <div className={styles.testResults}>
                        <div className={styles.resultsHeader}>
                            <span>Test Results</span>
                            {isEvaluating && (
                                <span className={styles.evalBadge}>
                                    Evaluating {currentIndex}/{DEMO_RESULTS.length}
                                </span>
                            )}
                            {results.length > 0 && !isEvaluating && (
                                <span className={styles.passRate}>
                                    Pass Rate: {passRate}%
                                </span>
                            )}
                        </div>

                        {results.length === 0 && !isEvaluating ? (
                            <div className={styles.emptyState}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>Run evaluation to test agent responses against golden dataset</p>
                            </div>
                        ) : (
                            <div className={styles.resultsList}>
                                {results.map((result) => (
                                    <div key={result.id} className={`${styles.resultItem} ${styles[result.status]}`}>
                                        <div className={styles.resultStatus}>
                                            {result.status === 'pass' ? '✓' : '✗'}
                                        </div>
                                        <div className={styles.resultInfo}>
                                            <span className={styles.testId}>Test #{result.id}</span>
                                            <span className={styles.testPrompt}>{result.prompt}</span>
                                        </div>
                                        <div className={styles.resultScores}>
                                            <span>G: {result.groundedness}%</span>
                                            <span>R: {result.relevance}%</span>
                                            <span>C: {result.coherence}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Controls */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>Azure AI Studio Evaluation</h3>
                        <p>Automated EvalOps pipeline using GPT-4o as evaluator. Scores agent responses on Groundedness, Relevance, and Coherence against human-verified Golden Dataset.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>50</span>
                            <span className={styles.metricLabel}>Golden Q/A</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>94%</span>
                            <span className={styles.metricLabel}>Accuracy</span>
                        </div>
                    </div>

                    <div className={styles.pipelineInfo}>
                        <h4>EvalOps Pipeline</h4>
                        <div className={styles.pipelineSteps}>
                            <div className={styles.pipelineStep}>
                                <span className={styles.stepNum}>1</span>
                                <span>Agent generates response</span>
                            </div>
                            <div className={styles.pipelineStep}>
                                <span className={styles.stepNum}>2</span>
                                <span>Evaluator LLM scores output</span>
                            </div>
                            <div className={styles.pipelineStep}>
                                <span className={styles.stepNum}>3</span>
                                <span>Compare against golden dataset</span>
                            </div>
                            <div className={styles.pipelineStep}>
                                <span className={styles.stepNum}>4</span>
                                <span>CI/CD blocks if accuracy drops</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        {results.length === 0 ? (
                            <button
                                className={styles.btnPrimary}
                                onClick={runEvaluation}
                                disabled={isEvaluating}
                            >
                                {isEvaluating ? 'Evaluating...' : 'Run Evaluation'}
                            </button>
                        ) : (
                            <button className={styles.btnSecondary} onClick={handleReset}>
                                Reset
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
