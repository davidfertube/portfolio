'use client';

import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const ventures = projects.filter(p => p.category === 'venture');
  const experiments = projects.filter(p => p.category === 'experiment');

  const titleRef = useScrollReveal<HTMLDivElement>();
  const venturesRef = useScrollReveal<HTMLDivElement>();
  const experimentsRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className={styles.portfolioContainer}>
      <div ref={titleRef} className="scroll-reveal">
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        <p className={styles.subtitle}>
          Production-grade GenAI solutions | RAG pipelines and multi-agent orchestration to enterprise-scale LLM applications for the energy industry.
        </p>
      </div>

      <div ref={venturesRef} className={`${styles.category} scroll-reveal`}>
        <h3 className={styles.categoryTitle}>Ventures</h3>
        <div className={styles.venturesGrid}>
          {ventures.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              externalUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>

      {experiments.length > 0 && (
        <div ref={experimentsRef} className={`${styles.category} scroll-reveal`}>
          <h3 className={styles.categoryTitle}>Experiments</h3>
          <div className={styles.experimentsGrid}>
            {experiments.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
