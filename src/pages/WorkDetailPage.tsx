import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { getProjectBySlug, portfolioProjects } from '../data/projects';

interface WorkDetailPageProps {
  slug: string;
  onNavigate?: (route: string) => void;
}

export const WorkDetailPage: React.FC<WorkDetailPageProps> = ({ slug, onNavigate }) => {
  const project = getProjectBySlug(slug) || portfolioProjects[0];

  return <CaseStudy project={project} />;
};

export default WorkDetailPage;
