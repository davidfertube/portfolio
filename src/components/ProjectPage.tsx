'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './ProjectPage.module.css';
import { ProjectData } from '@/data/projects';

interface ProjectPageProps {
  project: ProjectData;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <main className={styles.projectPage}>
      <div className={styles.container}>

        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.navBar}>
            <Link href="/#portfolio" className={styles.backLink}>
              ← Back to Portfolio
            </Link>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.tags}>
            {project.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <div className={styles.actions}>
            {project.huggingFaceUrl && (
              <a
                href={project.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Run Demo
              </a>
            )}
            {project.category !== 'venture' && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                View Code
              </a>
            )}
          </div>
        </header>

        {/* Tech Stack Section */}
        <section className={styles.techSection}>
          <h2>Tech Stack</h2>
          <p className={styles.techStackText}>{project.techStack}</p>
        </section>

        {/* Metrics Grid */}
        <section className={styles.metricsSection}>
          <div className={styles.metricsGrid}>
            {project.metrics.map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <h2>Overview</h2>
          <p className={styles.overviewText}>{project.description}</p>
        </section>

        {/* Details Content */}
        <section className={styles.detailsSection}>
          <div className={styles.textContent}>
            <div className={styles.sectionBlock}>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </div>

            <div className={styles.sectionBlock}>
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </div>

            <div className={styles.sectionBlock}>
              <h2>Architecture</h2>
              <p className={styles.architectureText}>{project.architecture}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Explore This Project</h3>
            <p>{project.category === 'venture' ? 'Run the live demo.' : 'View the source code, architecture, and run the live demo.'}</p>
            <div className={styles.ctaActions}>
              {project.huggingFaceUrl && (
                <a
                  href={project.huggingFaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                >
                  Run Demo
                </a>
              )}
              {project.category !== 'venture' && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSecondary}
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
