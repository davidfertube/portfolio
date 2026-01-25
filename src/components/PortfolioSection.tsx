import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  const ventures = projects.filter(p => p.category === 'venture');
  const endToEndProjects = projects.filter(p => p.category === 'project');
  const experiments = projects.filter(p => p.category === 'experiment');

  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.sectionTitle}>Portfolio</h2>
      <p className={styles.subtitle}>
        Production-grade GenAI solutions | RAG pipelines and multi-agent orchestration to enterprise-scale LLM applications for the energy industry.
      </p>

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Ventures</h3>
        <div className={styles.grid}>
          {ventures.map((project) => (
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

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>Production Projects</h3>
        <div className={styles.grid}>
          {endToEndProjects.map((project) => (
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

      {experiments.length > 0 && (
        <div className={styles.category}>
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
