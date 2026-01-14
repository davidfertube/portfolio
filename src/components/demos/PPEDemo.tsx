'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './PPEDemo.module.css';

interface Detection {
  class: string;
  confidence: number;
  color: string;
  bbox: { x: number; y: number; width: number; height: number };
}

interface DetectionResult {
  detections: Detection[];
  inferenceTime: number;
}

const DEMO_RESULTS: Record<string, DetectionResult> = {
  construction: {
    detections: [
      // Left Worker
      { class: 'Protective Helmet', confidence: 0.96, color: '#10b981', bbox: { x: 0.28, y: 0.09, width: 0.11, height: 0.12 } },
      { class: 'Jacket', confidence: 0.94, color: '#f59e0b', bbox: { x: 0.20, y: 0.23, width: 0.20, height: 0.40 } },
      { class: 'Glove', confidence: 0.88, color: '#8b5cf6', bbox: { x: 0.35, y: 0.50, width: 0.07, height: 0.08 } },
      
      // Middle Worker
      { class: 'Protective Helmet', confidence: 0.95, color: '#10b981', bbox: { x: 0.53, y: 0.08, width: 0.12, height: 0.12 } },
      { class: 'Jacket', confidence: 0.92, color: '#f59e0b', bbox: { x: 0.48, y: 0.23, width: 0.21, height: 0.42 } },
      
      // Right Worker
      { class: 'Protective Helmet', confidence: 0.97, color: '#10b981', bbox: { x: 0.77, y: 0.17, width: 0.12, height: 0.13 } },
      { class: 'Jacket', confidence: 0.93, color: '#f59e0b', bbox: { x: 0.73, y: 0.32, width: 0.22, height: 0.38 } },
    ],
    inferenceTime: 47
  },
  factory: {
    detections: [
      { class: 'Protective Helmet', confidence: 0.98, color: '#10b981', bbox: { x: 0.44, y: 0.15, width: 0.08, height: 0.10 } },
      { class: 'Eye Wear', confidence: 0.92, color: '#3b82f6', bbox: { x: 0.46, y: 0.20, width: 0.05, height: 0.03 } },
      { class: 'Jacket', confidence: 0.95, color: '#f59e0b', bbox: { x: 0.40, y: 0.28, width: 0.15, height: 0.35 } },
      { class: 'Glove', confidence: 0.88, color: '#8b5cf6', bbox: { x: 0.38, y: 0.50, width: 0.06, height: 0.06 } },
      { class: 'Glove', confidence: 0.86, color: '#8b5cf6', bbox: { x: 0.52, y: 0.50, width: 0.06, height: 0.06 } },
    ],
    inferenceTime: 52
  }
};

export default function PPEDemo() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawDetections = useCallback((imgSrc: string, detections: Detection[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new window.Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      detections.forEach(det => {
        const x = det.bbox.x * img.width;
        const y = det.bbox.y * img.height;
        const w = det.bbox.width * img.width;
        const h = det.bbox.height * img.height;

        ctx.strokeStyle = det.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);

        ctx.fillStyle = det.color;
        
        const text = `${det.class} ${(det.confidence * 100).toFixed(0)}%`;
        const textWidth = ctx.measureText(text).width + 10;
        const textHeight = 20;
        
        // Ensure label doesn't go off top
        let labelY = y - textHeight;
        if (labelY < 0) labelY = y;
        
        ctx.fillRect(x, labelY, textWidth, textHeight);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 11px JetBrains Mono, monospace';
        ctx.fillText(text, x + 5, labelY + 14);
      });
    };
    img.src = imgSrc;
  }, []);

  const processImage = useCallback((type: string, imgSrc: string) => {
    setIsProcessing(true);
    setImageUrl(imgSrc);

    setTimeout(() => {
      const demoResult = DEMO_RESULTS[type] || DEMO_RESULTS.construction;
      setResult(demoResult);
      drawDetections(imgSrc, demoResult.detections);
      setIsProcessing(false);
    }, 800);
  }, [drawDetections]);

  const handleDemoClick = (type: string) => {
    const imgSrc = `/assets/demos/demo_${type}.png`;
    processImage(type, imgSrc);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgSrc = event.target?.result as string;
        processImage('construction', imgSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgSrc = event.target?.result as string;
        processImage('construction', imgSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  const groupedDetections = result?.detections.reduce((acc, det) => {
    acc[det.class] = (acc[det.class] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};

  return (
    <section className={styles.demoSection}>
      <h2>Try PPE Detection</h2>

      <div className={styles.demoContainer}>
        {/* Left: Upload Zone */}
        <div className={styles.uploadColumn}>
          <div 
            className={`${styles.dropZone} ${isDragOver ? styles.dragOver : ''}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
          >
            <svg className={styles.dropIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span className={styles.dropText}>DROP IMAGE HERE</span>
            <span className={styles.dropHint}>or click to browse</span>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          {/* Demo Images */}
          <div className={styles.demoImages}>
            <h3>OR TRY DEMO IMAGES</h3>
            <div className={styles.demoGrid}>
              <button 
                className={styles.demoItem}
                onClick={() => handleDemoClick('construction')}
              >
                <Image 
                  src="/assets/demos/demo_construction.png" 
                  alt="Construction Demo"
                  width={120}
                  height={80}
                />
              </button>
              <button 
                className={styles.demoItem}
                onClick={() => handleDemoClick('factory')}
              >
                <Image 
                  src="/assets/demos/demo_factory.png" 
                  alt="Factory Demo"
                  width={120}
                  height={80}
                />
              </button>
            </div>
          </div>

          {/* Preview Canvas */}
          {imageUrl && (
            <div className={styles.preview}>
              <canvas ref={canvasRef} className={styles.canvas} />
            </div>
          )}
        </div>

        {/* Right: Results */}
        <div className={styles.results}>
          {isProcessing ? (
            <div className={styles.loading}>Analyzing image...</div>
          ) : result ? (
            <>
              <div className={styles.resultHeader}>
                <span className={styles.totalCount}>{result.detections.length}</span>
                <span className={styles.totalLabel}>PPE Items Detected</span>
              </div>

              <div className={styles.detectionList}>
                {Object.entries(groupedDetections).map(([className, count]) => {
                  const det = result.detections.find(d => d.class === className);
                  return (
                    <div key={className} className={styles.detectionItem}>
                      <span className={styles.detectionColor} style={{ background: det?.color }} />
                      <span className={styles.detectionName}>{className}</span>
                      <span className={styles.detectionCount}>{count}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{result.inferenceTime}ms</span>
                  <span className={styles.metricLabel}>Inference</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>YOLOv8m</span>
                  <span className={styles.metricLabel}>Model</span>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.placeholder}>
              <p>Upload an image or click a demo to see PPE detection results</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
