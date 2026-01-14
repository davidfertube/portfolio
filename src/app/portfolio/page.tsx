import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Portfolio | David Fernandez',
  description: 'Production-ready AI projects for energy and enterprise including computer vision, RAG pipelines, and multi-agent systems',
};

export default function PortfolioPage() {
  return (
    <main className={styles.portfolioPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Portfolio</h1>
          <p className={styles.subtitle}>Production-ready AI projects for energy and enterprise</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
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
    </main>
  );
}
