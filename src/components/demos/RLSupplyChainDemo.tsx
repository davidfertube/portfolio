'use client';

import { useState, useEffect } from 'react';
import styles from './RLSupplyChainDemo.module.css';

interface InventoryData {
    month: string;
    level: number;
    reorderTriggered: boolean;
}

interface SimulationResult {
    beforeCost: number;
    afterCost: number;
    savings: number;
    stockouts: { before: number; after: number };
    overstock: { before: number; after: number };
}

const INVENTORY_DATA: InventoryData[] = [
    { month: 'Jan', level: 450, reorderTriggered: false },
    { month: 'Feb', level: 320, reorderTriggered: true },
    { month: 'Mar', level: 580, reorderTriggered: false },
    { month: 'Apr', level: 280, reorderTriggered: true },
    { month: 'May', level: 420, reorderTriggered: false },
    { month: 'Jun', level: 350, reorderTriggered: true },
    { month: 'Jul', level: 510, reorderTriggered: false },
    { month: 'Aug', level: 290, reorderTriggered: true },
    { month: 'Sep', level: 480, reorderTriggered: false },
    { month: 'Oct', level: 310, reorderTriggered: true },
    { month: 'Nov', level: 550, reorderTriggered: false },
    { month: 'Dec', level: 400, reorderTriggered: false },
];

const DEMO_RESULT: SimulationResult = {
    beforeCost: 1420000,
    afterCost: 1093400,
    savings: 23,
    stockouts: { before: 12, after: 2 },
    overstock: { before: 18, after: 5 },
};

export default function RLSupplyChainDemo() {
    const [isSimulating, setIsSimulating] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [agentActions, setAgentActions] = useState<string[]>([]);

    useEffect(() => {
        if (isSimulating && currentMonth < INVENTORY_DATA.length) {
            const timer = setTimeout(() => {
                const data = INVENTORY_DATA[currentMonth];
                if (data.reorderTriggered) {
                    setAgentActions(prev => [...prev, `${data.month}: Reorder triggered at level ${data.level}`]);
                }
                setCurrentMonth(prev => prev + 1);
            }, 300);
            return () => clearTimeout(timer);
        } else if (isSimulating && currentMonth >= INVENTORY_DATA.length) {
            setTimeout(() => {
                setShowResults(true);
                setIsSimulating(false);
            }, 500);
        }
    }, [isSimulating, currentMonth]);

    const runSimulation = () => {
        setIsSimulating(true);
        setCurrentMonth(0);
        setShowResults(false);
        setAgentActions([]);
    };

    const handleReset = () => {
        setIsSimulating(false);
        setCurrentMonth(0);
        setShowResults(false);
        setAgentActions([]);
    };

    const maxLevel = Math.max(...INVENTORY_DATA.map(d => d.level));
    const reorderPoint = 350;

    return (
        <section className={styles.demoSection}>
            <h2>RL Supply Chain Optimization</h2>

            <div className={styles.demoContainer}>
                {/* Left: Visualization */}
                <div className={styles.vizColumn}>
                    <div className={styles.chartCard}>
                        <div className={styles.chartHeader}>
                            <span>Inventory Levels (PPO Agent)</span>
                            <div className={styles.legend}>
                                <span className={styles.legendItem}>
                                    <span className={styles.legendDot} style={{ background: '#10b981' }}></span>
                                    Optimal
                                </span>
                                <span className={styles.legendItem}>
                                    <span className={styles.legendDot} style={{ background: '#ef4444' }}></span>
                                    Reorder
                                </span>
                            </div>
                        </div>

                        <div className={styles.chart}>
                            <div
                                className={styles.reorderLine}
                                style={{ bottom: `${(reorderPoint / maxLevel) * 100}%` }}
                            >
                                <span>Reorder Point</span>
                            </div>

                            {INVENTORY_DATA.slice(0, currentMonth).map((data, idx) => (
                                <div
                                    key={idx}
                                    className={`${styles.bar} ${data.reorderTriggered ? styles.reorder : ''}`}
                                    style={{
                                        height: `${(data.level / maxLevel) * 85}%`,
                                        left: `${(idx / INVENTORY_DATA.length) * 95 + 2}%`,
                                    }}
                                >
                                    {data.reorderTriggered && (
                                        <div className={styles.reorderIndicator}>⚡</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className={styles.monthAxis}>
                            {INVENTORY_DATA.map((d, idx) => (
                                <span key={idx} className={idx < currentMonth ? styles.active : ''}>
                                    {d.month}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Results Panel */}
                    {showResults && (
                        <div className={styles.resultsPanel}>
                            <div className={styles.savingsHighlight}>
                                <span className={styles.savingsNum}>{DEMO_RESULT.savings}%</span>
                                <span className={styles.savingsLabel}>Cost Reduction</span>
                            </div>

                            <div className={styles.costComparison}>
                                <div className={styles.costItem}>
                                    <span className={styles.costLabel}>Before AI</span>
                                    <span className={styles.costValue}>${(DEMO_RESULT.beforeCost / 1000).toFixed(0)}K</span>
                                    <div className={styles.costBar}>
                                        <div className={styles.costFill} style={{ width: '100%', background: '#94a3b8' }}></div>
                                    </div>
                                </div>
                                <div className={styles.costItem}>
                                    <span className={styles.costLabel}>After AI</span>
                                    <span className={styles.costValue}>${(DEMO_RESULT.afterCost / 1000).toFixed(0)}K</span>
                                    <div className={styles.costBar}>
                                        <div className={styles.costFill} style={{ width: '77%', background: '#10b981' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.metricsGrid}>
                                <div className={styles.metricBox}>
                                    <span className={styles.metricTitle}>Stockouts</span>
                                    <div className={styles.metricComparison}>
                                        <span className={styles.before}>{DEMO_RESULT.stockouts.before}</span>
                                        <span className={styles.arrow}>→</span>
                                        <span className={styles.after}>{DEMO_RESULT.stockouts.after}</span>
                                    </div>
                                </div>
                                <div className={styles.metricBox}>
                                    <span className={styles.metricTitle}>Overstock Days</span>
                                    <div className={styles.metricComparison}>
                                        <span className={styles.before}>{DEMO_RESULT.overstock.before}</span>
                                        <span className={styles.arrow}>→</span>
                                        <span className={styles.after}>{DEMO_RESULT.overstock.after}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Agent Actions Log */}
                    {agentActions.length > 0 && (
                        <div className={styles.actionsLog}>
                            <h4>PPO Agent Decisions</h4>
                            <div className={styles.logItems}>
                                {agentActions.map((action, idx) => (
                                    <div key={idx} className={styles.logItem}>
                                        <span className={styles.logIcon}>🤖</span>
                                        {action}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Controls */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>PPO Reinforcement Learning</h3>
                        <p>Proximal Policy Optimization agent trained in custom Gymnasium environment. Learns optimal reorder policies by minimizing cost while avoiding stockouts.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>PPO</span>
                            <span className={styles.metricLabel}>Algorithm</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>Real Time</span>
                            <span className={styles.metricLabel}>Decisions</span>
                        </div>
                    </div>

                    <div className={styles.techStack}>
                        <span className={styles.techTag}>Stable Baselines3</span>
                        <span className={styles.techTag}>Azure ML</span>
                        <span className={styles.techTag}>Gymnasium</span>
                    </div>

                    <div className={styles.controls}>
                        {!showResults ? (
                            <button
                                className={styles.btnPrimary}
                                onClick={runSimulation}
                                disabled={isSimulating}
                            >
                                {isSimulating ? `Simulating... ${currentMonth}/${INVENTORY_DATA.length}` : 'Run Simulation'}
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
