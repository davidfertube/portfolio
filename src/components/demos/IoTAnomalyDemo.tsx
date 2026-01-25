'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './IoTAnomalyDemo.module.css';

interface Sensor {
    id: string;
    name: string;
    icon: string;
    value: number;
    unit: string;
    min: number;
    max: number;
    warningThreshold: number;
    criticalThreshold: number;
    status: 'normal' | 'warning' | 'critical';
}

interface LogEntry {
    time: string;
    message: string;
    type: 'info' | 'detect' | 'action' | 'success' | 'critical';
}

const INITIAL_SENSORS: Sensor[] = [
    { id: 'pressure', name: 'Wellhead Pressure', icon: '⬆️', value: 2450, unit: 'PSI', min: 2000, max: 3500, warningThreshold: 2800, criticalThreshold: 3200, status: 'normal' },
    { id: 'temp', name: 'Process Temp', icon: '🌡️', value: 185, unit: '°F', min: 150, max: 250, warningThreshold: 210, criticalThreshold: 235, status: 'normal' },
    { id: 'flow', name: 'Flow Rate', icon: '💧', value: 850, unit: 'BBL/D', min: 500, max: 1200, warningThreshold: 1000, criticalThreshold: 1100, status: 'normal' },
    { id: 'vibration', name: 'Pump Vibration', icon: '📳', value: 2.1, unit: 'mm/s', min: 0, max: 10, warningThreshold: 4.5, criticalThreshold: 7.5, status: 'normal' },
    { id: 'h2s', name: 'H2S Level', icon: '☁️', value: 3, unit: 'PPM', min: 0, max: 50, warningThreshold: 10, criticalThreshold: 20, status: 'normal' },
    { id: 'power', name: 'Power Draw', icon: '⚡', value: 42, unit: 'kW', min: 20, max: 80, warningThreshold: 55, criticalThreshold: 70, status: 'normal' },
];

const ANOMALY_SCENARIO = [
    { sensorId: 'vibration', targetValue: 5.2, delay: 2000 },
    { sensorId: 'vibration', targetValue: 6.8, delay: 3000 },
    { sensorId: 'temp', targetValue: 218, delay: 4000 },
    { sensorId: 'vibration', targetValue: 8.1, delay: 5000 },
    { sensorId: 'power', targetValue: 58, delay: 5500 },
];

export default function IoTAnomalyDemo() {
    const [sensors, setSensors] = useState<Sensor[]>(INITIAL_SENSORS);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [workOrderVisible, setWorkOrderVisible] = useState(false);
    const [activeArch, setActiveArch] = useState<string[]>([]);
    const [workOrderId] = useState(`WO-${Date.now().toString().slice(-6)}`);

    const getTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const addLog = useCallback((message: string, type: LogEntry['type']) => {
        setLogs(prev => [...prev.slice(-8), { time: getTime(), message, type }]);
    }, []);

    const updateSensor = useCallback((id: string, newValue: number) => {
        setSensors(prev => prev.map(sensor => {
            if (sensor.id !== id) return sensor;

            let status: 'normal' | 'warning' | 'critical' = 'normal';
            if (newValue >= sensor.criticalThreshold) status = 'critical';
            else if (newValue >= sensor.warningThreshold) status = 'warning';

            return { ...sensor, value: newValue, status };
        }));
    }, []);

    const runSimulation = useCallback(async () => {
        setIsRunning(true);
        setLogs([]);
        setWorkOrderVisible(false);
        setSensors(INITIAL_SENSORS);
        setActiveArch([]);

        // Initial telemetry
        addLog('Connecting to Azure IoT Hub...', 'info');
        setActiveArch(['sensors']);
        await new Promise(r => setTimeout(r, 800));

        addLog('Receiving telemetry from 6 sensors', 'info');
        setActiveArch(['sensors', 'iot']);
        await new Promise(r => setTimeout(r, 1000));

        addLog('Agent monitoring initialized', 'info');
        setActiveArch(['sensors', 'iot', 'agent']);

        // Run anomaly scenario
        for (const step of ANOMALY_SCENARIO) {
            await new Promise(r => setTimeout(r, step.delay - (ANOMALY_SCENARIO.indexOf(step) > 0 ? ANOMALY_SCENARIO[ANOMALY_SCENARIO.indexOf(step) - 1].delay : 0)));
            updateSensor(step.sensorId, step.targetValue);

            const sensor = INITIAL_SENSORS.find(s => s.id === step.sensorId)!;
            let status: 'normal' | 'warning' | 'critical' = 'normal';
            if (step.targetValue >= sensor.criticalThreshold) status = 'critical';
            else if (step.targetValue >= sensor.warningThreshold) status = 'warning';

            if (status === 'warning') {
                addLog(`⚠️ ${sensor.name}: ${step.targetValue}${sensor.unit} exceeds threshold`, 'detect');
            } else if (status === 'critical') {
                addLog(`🚨 CRITICAL: ${sensor.name} at ${step.targetValue}${sensor.unit}`, 'critical');
            }
        }

        // Agent response
        await new Promise(r => setTimeout(r, 1500));
        addLog('Anomaly pattern detected: Pump bearing failure', 'detect');
        setActiveArch(['sensors', 'iot', 'agent', 'ml']);

        await new Promise(r => setTimeout(r, 1000));
        addLog('Initiating automated response workflow...', 'action');
        setActiveArch(['sensors', 'iot', 'agent', 'ml', 'action']);

        await new Promise(r => setTimeout(r, 1200));
        addLog(`Work order ${workOrderId} created`, 'action');

        await new Promise(r => setTimeout(r, 800));
        addLog('Notifying on-call engineer via Teams', 'action');

        await new Promise(r => setTimeout(r, 600));
        setWorkOrderVisible(true);
        addLog('✓ Automated response complete', 'success');

        setIsRunning(false);
    }, [addLog, updateSensor, workOrderId]);

    const handleReset = () => {
        setIsRunning(false);
        setSensors(INITIAL_SENSORS);
        setLogs([]);
        setWorkOrderVisible(false);
        setActiveArch([]);
    };

    return (
        <section className={styles.demoSection}>
            <h2>IoT Anomaly Detection Demo</h2>

            <div className={styles.demoContainer}>
                {/* Left: Sensor Grid */}
                <div>
                    <div className={styles.sensorGrid}>
                        {sensors.map(sensor => (
                            <div key={sensor.id} className={`${styles.sensorCard} ${styles[sensor.status]}`}>
                                <div className={styles.sensorIcon}>{sensor.icon}</div>
                                <div className={styles.sensorName}>{sensor.name}</div>
                                <div className={styles.sensorValue}>
                                    {typeof sensor.value === 'number' && sensor.value % 1 !== 0
                                        ? sensor.value.toFixed(1)
                                        : sensor.value}
                                </div>
                                <div className={styles.sensorUnit}>{sensor.unit}</div>
                            </div>
                        ))}
                    </div>

                    {/* Architecture Diagram */}
                    <div className={styles.infoCard}>
                        <h3>Live Architecture</h3>
                        <div className={styles.architectureDiagram}>
                            <span className={`${styles.archNode} ${activeArch.includes('sensors') ? styles.active : ''}`}>
                                Sensors
                            </span>
                            <span className={styles.archArrow}>→</span>
                            <span className={`${styles.archNode} ${activeArch.includes('iot') ? styles.active : ''}`}>
                                Azure IoT Hub
                            </span>
                            <span className={styles.archArrow}>→</span>
                            <span className={`${styles.archNode} ${activeArch.includes('agent') ? styles.active : ''}`}>
                                Sim.ai Agent
                            </span>
                            <span className={styles.archArrow}>→</span>
                            <span className={`${styles.archNode} ${activeArch.includes('ml') ? styles.active : ''}`}>
                                Anomaly ML
                            </span>
                            <span className={styles.archArrow}>→</span>
                            <span className={`${styles.archNode} ${activeArch.includes('action') ? styles.active : ''}`}>
                                Work Order
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Agent Panel */}
                <div className={styles.agentPanel}>
                    <div className={styles.agentHeader}>
                        <div className={styles.agentIcon}>🤖</div>
                        <div>
                            <div className={styles.agentTitle}>IoT Monitor Agent</div>
                            <div className={`${styles.agentStatus} ${isRunning ? styles.processing : ''}`}>
                                {isRunning ? '● Processing...' : '○ Ready'}
                            </div>
                        </div>
                    </div>

                    <div className={styles.agentLog}>
                        {logs.length === 0 ? (
                            <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                Click &quot;Start Simulation&quot; to begin...
                            </span>
                        ) : (
                            logs.map((log, idx) => (
                                <div key={idx} className={styles.logEntry}>
                                    <span className={styles.logTime}>[{log.time}]</span>
                                    <span className={`${styles.logMessage} ${styles[log.type]}`}>
                                        {log.message}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>

                    <div className={`${styles.workOrder} ${workOrderVisible ? styles.visible : ''}`}>
                        <div className={styles.workOrderHeader}>
                            <span className={styles.workOrderTitle}>📋 Work Order Generated</span>
                            <span className={styles.workOrderId}>{workOrderId}</span>
                        </div>
                        <div className={styles.workOrderBody}>
                            <div className={styles.workOrderRow}>
                                <span className={styles.workOrderLabel}>Asset:</span>
                                <span className={styles.workOrderValue}>Pump Station P-101</span>
                            </div>
                            <div className={styles.workOrderRow}>
                                <span className={styles.workOrderLabel}>Issue:</span>
                                <span className={styles.workOrderValue}>Bearing failure detected</span>
                            </div>
                            <div className={styles.workOrderRow}>
                                <span className={styles.workOrderLabel}>Priority:</span>
                                <span className={`${styles.workOrderValue} ${styles.urgent}`}>URGENT</span>
                            </div>
                            <div className={styles.workOrderRow}>
                                <span className={styles.workOrderLabel}>ETA:</span>
                                <span className={styles.workOrderValue}>~4 hours to failure</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.controls}>
                        {!isRunning ? (
                            <button className={styles.btnPrimary} onClick={runSimulation}>
                                Start Simulation
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
