'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './ProjectPage.module.css';
import { ProjectData } from '@/data/projects';
import PPEDemo from './demos/PPEDemo';
import PredictiveMaintenanceDemo from './demos/PredictiveMaintenanceDemo';
import ChatWithAssetsDemo from './demos/ChatWithAssetsDemo';
import LegalEagleDemo from './demos/LegalEagleDemo';
import PolicyGuardDemo from './demos/PolicyGuardDemo';
import RLSupplyChainDemo from './demos/RLSupplyChainDemo';
import HallucinationHunterDemo from './demos/HallucinationHunterDemo';
import LASParserDemo from './demos/LASParserDemo';

interface ProjectPageProps {
  project: ProjectData;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const renderDemo = () => {
    switch (project.id) {
      case 'geo-insight':
        return <PPEDemo />;
      case 'predictive-maintenance':
        return <PredictiveMaintenanceDemo />;
      case 'chat-with-assets':
        return <ChatWithAssetsDemo />;
      case 'legal-eagle':
        return <LegalEagleDemo />;
      case 'policy-guard':
        return <PolicyGuardDemo />;
      case 'rl-supply-chain':
        return <RLSupplyChainDemo />;
      case 'hallucination-hunter':
        return <HallucinationHunterDemo />;
      case 'intelligent-las-parser':
        return <LASParserDemo />;
      default:
        return null;
    }
  };

  return (
    <main className={styles.projectPage}>
      <div className={styles.projectLayout}>
        {/* Left: Info */}
        <div className={styles.projectInfo}>
          <h1>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.tags}>
            {project.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <div className={styles.metrics}>
            {project.metrics.map((metric, index) => (
              <div key={index} className={styles.metricItem}>
                <span className={styles.metricNum}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <a
              href="https://github.com/davidfertube/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
            >
              GitHub
            </a>
            <Link href="/portfolio" className={styles.btnSecondary}>
              Back
            </Link>
          </div>
        </div>

        {/* Right: Details */}
        <div className={styles.projectDetails}>
          <section className={styles.detailCard}>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>

          <section className={styles.detailCard}>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </section>

          <section className={styles.detailCard}>
            <h2>Architecture</h2>
            <p>{project.architecture}</p>
          </section>
        </div>
      </div>

      {/* Demo Section */}
      {renderDemo()}
    </main>
  );
}
