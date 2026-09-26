import React from 'react';
import AboutPageContent from '../components/AboutPageContent';

interface AboutPageProps {
  onNavigateContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return <AboutPageContent />;
};

export default AboutPage;
