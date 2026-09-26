import React from 'react';
import ServicesPageContent from '../components/ServicesPageContent';

interface ServicesPageProps {
  onNavigate?: (route: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return <ServicesPageContent />;
};

export default ServicesPage;
