import { notFound } from 'next/navigation';
import { projects, getProjectById } from '@/data/projects';
import ProjectPage from '@/components/ProjectPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const url = `https://davidfernandez.dev/projects/${id}/`;

  return {
    title: `${project.title} | David Fernandez`,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | David Fernandez`,
      description: project.description,
      type: 'article',
      url,
    },
    twitter: {
      card: 'summary' as const,
      title: `${project.title} | David Fernandez`,
      description: project.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
