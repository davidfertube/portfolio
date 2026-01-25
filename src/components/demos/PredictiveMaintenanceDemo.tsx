'use client';

import { useState, useEffect } from 'react';
import styles from './PredictiveMaintenanceDemo.module.css';

interface SensorReading {
    time: string;
    value: number;
    status: 'normal' | 'warning' | 'critical';
}

const SENSOR_DATA: SensorReading[] = [
    { time: '00:00', value: 42, status: 'normal' },
    { time: '04:00', value: 45, status: 'normal' },
    { time: '08:00', value: 48, status: 'normal' },
    { time: '12:00', value: 52, status: 'normal' },
    { time: '16:00', value: 61, status: 'warning' },
    { time: '20:00', value: 73, status: 'warning' },
    { time: '24:00', value: 89, status: 'critical' },
];

export default function PredictiveMaintenanceDemo() {
    const [isSimulating, setIsSimulating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rul, setRul] = useState(168); // Hours to failure

    useEffect(() => {
        if (isSimulating && currentIndex < SENSOR_DATA.length - 1) {
            const timer = setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                setRul(prev => Math.max(0, prev - 24));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isSimulating, currentIndex]);

    const handleSimulate = () => {
        setCurrentIndex(0);
        setRul(168);
        setIsSimulating(true);
    };

    const handleReset = () => {
        setIsSimulating(false);
        setCurrentIndex(0);
        setRul(168);
    };

    const currentReading = SENSOR_DATA[currentIndex];
    const maxValue = Math.max(...SENSOR_DATA.map(d => d.value));

    return (
        <section className={styles.demoSection}>
            <h2>Predictive Maintenance Demo</h2>

            <div className={styles.demoContainer}>
                {/* Left: Visualization */}
                <div className={styles.vizColumn}>
                    <div className={styles.chartArea}>
                        <div className={styles.chartHeader}>
                            <span>Vibration Sensor Data</span>
                            <span className={`${styles.status} ${styles[currentReading.status]}`}>
                                {currentReading.status.toUpperCase()}
                            </span>
                        </div>

                        <div className={styles.chart}>
                            <div className={styles.warningZone} />
                            <div className={styles.criticalZone} />
                            {SENSOR_DATA.slice(0, currentIndex + 1).map((reading, idx) => (
                                <div
                                    key={idx}
                                    className={`${styles.bar} ${styles[reading.status]}`}
                                    style={{
                                        height: `${(reading.value / maxValue) * 80}%`,
                                        left: `${(idx / (SENSOR_DATA.length - 1)) * 85 + 5}%`,
                                    }}
                                >
                                    <span className={styles.barValue}>{reading.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.timeAxis}>
                            {SENSOR_DATA.map((d, idx) => (
                                <span key={idx}>{d.time}</span>
                            ))}
                        </div>
                    </div>

                    {/* RUL Gauge */}
                    <div className={styles.rulGauge}>
                        <div className={styles.gaugeCircle}>
                            <svg viewBox="0 0 100 100" className={styles.gaugeSvg}>
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#e5e5e5"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke={rul > 72 ? '#10b981' : rul > 24 ? '#f59e0b' : '#ef4444'}
                                    strokeWidth="8"
                                    strokeDasharray={`${(rul / 168) * 283} 283`}
                                    strokeLinecap="round"
                                    transform="rotate(-90 50 50)"
                                    className={styles.gaugeProgress}
                                />
                            </svg>
                            <div className={styles.gaugeValue}>
                                <span className={styles.rulNumber}>{rul}</span>
                                <span className={styles.rulUnit}>HOURS</span>
                            </div>
                        </div>
                        <span className={styles.rulLabel}>Remaining Useful Life</span>
                    </div>
                </div>

                {/* Right: Controls & Info */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>LSTM Prediction Model</h3>
                        <p>Real Time vibration analysis using Fast Fourier Transform (FFT) and LSTM neural networks trained on NASA turbofan dataset.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>92%</span>
                            <span className={styles.metricLabel}>F1 Score</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>48hrs</span>
                            <span className={styles.metricLabel}>Lead Time</span>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        {!isSimulating ? (
                            <button className={styles.btnPrimary} onClick={handleSimulate}>
                                Run Simulation
                            </button>
                        ) : (
                            <button className={styles.btnSecondary} onClick={handleReset}>
                                Reset
                            </button>
                        )}
                    </div>

                    {currentReading.status !== 'normal' && (
                        <div className={`${styles.alert} ${styles[currentReading.status]}`}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L1 21h22L12 2zm0 3.8L19.5 19h-15L12 5.8zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
                            </svg>
                            <span>
                                {currentReading.status === 'critical'
                                    ? 'CRITICAL: Schedule immediate maintenance'
                                    : 'WARNING: Monitor closely, potential failure detected'}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
