import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string;
}

export default function ProjectCard({ id, title, description, techStack }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.techStack}>{techStack}</span>
    </Link>
  );
}
