import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export const dynamic = 'force-static';

const BASE_URL = 'https://davidfernandez.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}/`,
    lastModified: new Date('2026-02-13'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2026-02-13'),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
