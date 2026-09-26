import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudy from '@/components/CaseStudy';
import { portfolioProjects, getProjectBySlug } from '@/data/projects';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const current = portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
  const aliases = [
    { slug: 'aura-home' },
    { slug: 'krithi-makeover-artistry' },
    { slug: 'seyon-lab' },
  ];
  return [...current, ...aliases];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found — Frameless Hub',
    };
  }

  return {
    title: `${project.title} — Frameless Hub Case Study`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Frameless Hub`,
      description: project.overview,
      images: ['/logo.png'],
    },
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}
