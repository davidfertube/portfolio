'use client';

import { useState } from 'react';
import styles from './LASParserDemo.module.css';

interface LASHeader {
    well: string;
    company: string;
    field: string;
    date: string;
    startDepth: number;
    stopDepth: number;
    step: number;
}

interface CurveData {
    name: string;
    unit: string;
    description: string;
    color: string;
    values: number[];
}

const DEMO_HEADER_EXPLORER: LASHeader = {
    well: 'EXPLORER-1',
    company: 'GeoTech Inc.',
    field: 'North Sea Block 4',
    date: '2024-03-15',
    startDepth: 2000,
    stopDepth: 2150,
    step: 0.5,
};

const DEMO_HEADER_WILDCAT: LASHeader = {
    well: 'WILDCAT-3',
    company: 'Maverick Energy',
    field: 'Eagle Ford',
    date: '2023-11-22',
    startDepth: 5500,
    stopDepth: 5650,
    step: 0.5,
};

const DEMO_CURVES_EXPLORER: CurveData[] = [
    {
        name: 'GR',
        unit: 'GAPI',
        description: 'Gamma Ray',
        color: '#22c55e',
        values: [45, 52, 48, 62, 78, 85, 91, 88, 72, 65, 58, 52, 48, 55, 63, 71, 82, 95, 89, 76]
    },
    {
        name: 'RHOB',
        unit: 'G/CC',
        description: 'Bulk Density',
        color: '#f59e0b',
        values: [2.45, 2.48, 2.52, 2.58, 2.62, 2.65, 2.61, 2.55, 2.50, 2.48, 2.52, 2.56, 2.60, 2.63, 2.58, 2.54, 2.50, 2.47, 2.51, 2.55]
    },
    {
        name: 'NPHI',
        unit: 'V/V',
        description: 'Neutron Porosity',
        color: '#3b82f6',
        values: [0.18, 0.16, 0.14, 0.12, 0.10, 0.08, 0.09, 0.11, 0.14, 0.16, 0.15, 0.13, 0.11, 0.09, 0.10, 0.12, 0.15, 0.17, 0.15, 0.13]
    },
];

const DEMO_CURVES_WILDCAT: CurveData[] = [
    {
        name: 'GR',
        unit: 'GAPI',
        description: 'Gamma Ray',
        color: '#22c55e',
        values: [120, 115, 110, 105, 95, 88, 75, 60, 52, 48, 45, 55, 68, 82, 95, 108, 125, 132, 128, 122]
    },
    {
        name: 'RHOB',
        unit: 'G/CC',
        description: 'Bulk Density',
        color: '#f59e0b',
        values: [2.65, 2.64, 2.62, 2.60, 2.55, 2.50, 2.45, 2.40, 2.38, 2.35, 2.38, 2.42, 2.50, 2.58, 2.62, 2.65, 2.55, 2.45, 2.55, 2.60]
    },
    {
        name: 'NPHI',
        unit: 'V/V',
        description: 'Neutron Porosity',
        color: '#3b82f6',
        values: [0.08, 0.09, 0.10, 0.12, 0.15, 0.18, 0.22, 0.25, 0.28, 0.30, 0.28, 0.25, 0.20, 0.15, 0.12, 0.10, 0.12, 0.14, 0.12, 0.10]
    },
];

export default function LASParserDemo() {
    const [isParsing, setIsParsing] = useState(false);
    const [parseComplete, setParseComplete] = useState(false);
    const [parseStep, setParseStep] = useState(0);
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [header, setHeader] = useState<LASHeader>(DEMO_HEADER_EXPLORER);
    const [curves, setCurves] = useState<CurveData[]>(DEMO_CURVES_EXPLORER);

    const parseSteps = [
        'Reading file header...',
        'Parsing curve definitions...',
        'Normalizing depth values...',
        'Validating data quality...',
        'Vectorizing output...',
    ];

    const runParse = (filename: string) => {
        setSelectedFile(filename);
        setIsParsing(true);
        setParseComplete(false);
        setParseStep(0);

        // Select data based on filename
        if (filename.includes('WILDCAT')) {
            setHeader(DEMO_HEADER_WILDCAT);
            setCurves(DEMO_CURVES_WILDCAT);
        } else {
            setHeader(DEMO_HEADER_EXPLORER);
            setCurves(DEMO_CURVES_EXPLORER);
        }

        parseSteps.forEach((_, idx) => {
            setTimeout(() => {
                setParseStep(idx + 1);

                if (idx === parseSteps.length - 1) {
                    setTimeout(() => {
                        setParseComplete(true);
                        setIsParsing(false);
                    }, 400);
                }
            }, (idx + 1) * 500);
        });
    };

    const handleReset = () => {
        setIsParsing(false);
        setParseComplete(false);
        setParseStep(0);
        setSelectedFile(null);
    };

    const maxGR = Math.max(...curves[0].values);
    const minGR = Math.min(...curves[0].values);

    return (
        <section className={styles.demoSection}>
            <h2>Intelligent LAS Parser</h2>

            <div className={styles.demoContainer}>
                {/* Left: Visualization */}
                <div className={styles.vizColumn}>
                    {parseComplete ? (
                        <>
                            <div className={styles.headerCard}>
                                <h4>Well Header (Parsed)</h4>
                                <div className={styles.headerGrid}>
                                    <div className={styles.headerItem}>
                                        <span className={styles.headerLabel}>WELL</span>
                                        <span className={styles.headerValue}>{header.well}</span>
                                    </div>
                                    <div className={styles.headerItem}>
                                        <span className={styles.headerLabel}>COMPANY</span>
                                        <span className={styles.headerValue}>{header.company}</span>
                                    </div>
                                    <div className={styles.headerItem}>
                                        <span className={styles.headerLabel}>FIELD</span>
                                        <span className={styles.headerValue}>{header.field}</span>
                                    </div>
                                    <div className={styles.headerItem}>
                                        <span className={styles.headerLabel}>DATE</span>
                                        <span className={styles.headerValue}>{header.date}</span>
                                    </div>
                                    <div className={styles.headerItem}>
                                        <span className={styles.headerLabel}>STRT</span>
                                        <span className={styles.headerValue}>{header.startDepth}m</span>
                                    </div>
                                    <div className={styles.headerItem}>
                                        <span className={styles.headerLabel}>STOP</span>
                                        <span className={styles.headerValue}>{header.stopDepth}m</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.curvesCard}>
                                <h4>Well Log Curves</h4>
                                <div className={styles.curvesContainer}>
                                    {curves.map((curve) => (
                                        <div key={curve.name} className={styles.curveTrack}>
                                            <div className={styles.curveHeader}>
                                                <span className={styles.curveName} style={{ color: curve.color }}>
                                                    {curve.name}
                                                </span>
                                                <span className={styles.curveUnit}>{curve.unit}</span>
                                            </div>
                                            <div className={styles.curveChart}>
                                                <svg viewBox="0 0 100 200" preserveAspectRatio="none">
                                                    <polyline
                                                        fill="none"
                                                        stroke={curve.color}
                                                        strokeWidth="2"
                                                        points={curve.values.map((v, i) => {
                                                            const x = curve.name === 'NPHI'
                                                                ? ((v - 0.08) / 0.12) * 90 + 5
                                                                : curve.name === 'RHOB'
                                                                    ? ((v - 2.45) / 0.20) * 90 + 5
                                                                    : ((v - minGR) / (maxGR - minGR)) * 90 + 5;
                                                            const y = (i / (curve.values.length - 1)) * 190 + 5;
                                                            return `${x},${y}`;
                                                        }).join(' ')}
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}

                                    <div className={styles.depthTrack}>
                                        <span className={styles.depthLabel}>DEPTH (m)</span>
                                        <div className={styles.depthScale}>
                                            {[
                                                header.startDepth,
                                                header.startDepth + 50,
                                                header.startDepth + 100,
                                                header.startDepth + 150
                                            ].map((d) => (
                                                <span key={d}>{d}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.outputCard}>
                                <h4>Vectorized Output</h4>
                                <div className={styles.outputFormats}>
                                    <span className={styles.formatTag}>
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                                        </svg>
                                        Parquet
                                    </span>
                                    <span className={styles.formatTag}>
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                            <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4" />
                                        </svg>
                                        PostgreSQL
                                    </span>
                                    <span className={styles.formatTag}>
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        Vector DB
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={styles.uploadArea}>
                            <div className={styles.uploadIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            {isParsing ? (
                                <div className={styles.parsingStatus}>
                                    <div className={styles.parseProgress}>
                                        <div
                                            className={styles.progressFill}
                                            style={{ width: `${(parseStep / parseSteps.length) * 100}%` }}
                                        />
                                    </div>
                                    <span className={styles.parseStep}>{parseSteps[parseStep - 1] || 'Initializing...'}</span>
                                    <span className={styles.fileName}>{selectedFile}</span>
                                </div>
                            ) : (
                                <>
                                    <span className={styles.uploadText}>Select a LAS file to parse</span>
                                    <span className={styles.uploadHint}>Supports LAS 1.2, 2.0, and 3.0</span>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Right: Controls */}
                <div className={styles.controlsColumn}>
                    <div className={styles.infoCard}>
                        <h3>Intelligent Parsing</h3>
                        <p>Handles all LAS versions with auto-correction for common issues: inconsistent headers, missing metadata, encoding problems. Outputs clean, vectorized data ready for ML pipelines.</p>
                    </div>

                    <div className={styles.metrics}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>50+</span>
                            <span className={styles.metricLabel}>Years of Data</span>
                        </div>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>99.5%</span>
                            <span className={styles.metricLabel}>Parse Rate</span>
                        </div>
                    </div>

                    <div className={styles.sampleFiles}>
                        <h4>Sample LAS Files</h4>
                        <button
                            className={styles.fileBtn}
                            onClick={() => runParse('EXPLORER-1_2024.las')}
                            disabled={isParsing}
                        >
                            📄 EXPLORER-1_2024.las
                        </button>
                        <button
                            className={styles.fileBtn}
                            onClick={() => runParse('WILDCAT_NorthSea.las')}
                            disabled={isParsing}
                        >
                            📄 WILDCAT_NorthSea.las
                        </button>

                    </div>

                    {parseComplete && (
                        <button className={styles.btnSecondary} onClick={handleReset}>
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
