import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string;
  externalUrl?: string | null;
}

export default function ProjectCard({ id, title, description, techStack, externalUrl }: ProjectCardProps) {
  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.techStack}>{techStack}</span>
      </a>
    );
  }

  return (
    <Link href={`/projects/${id}`} className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.techStack}>{techStack}</span>
    </Link>
  );
}
