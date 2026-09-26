import React from 'react';
import WorkPageContent from '../components/WorkPageContent';

interface WorkPageProps {
  onNavigateContact?: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = () => {
  return <WorkPageContent />;
};

export default WorkPage;
