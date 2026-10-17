'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScopingModalContextType {
  isOpen: boolean;
  preselectedDiscipline?: string;
  openScopingModal: (discipline?: string) => void;
  closeScopingModal: () => void;
}

const ScopingModalContext = createContext<ScopingModalContextType | undefined>(undefined);

export const ScopingModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedDiscipline, setPreselectedDiscipline] = useState<string | undefined>(undefined);

  const openScopingModal = (discipline?: string) => {
    setPreselectedDiscipline(discipline);
    setIsOpen(true);
  };

  const closeScopingModal = () => {
    setIsOpen(false);
    setPreselectedDiscipline(undefined);
  };

  return (
    <ScopingModalContext.Provider
      value={{
        isOpen,
        preselectedDiscipline,
        openScopingModal,
        closeScopingModal,
      }}
    >
      {children}
    </ScopingModalContext.Provider>
  );
};

const defaultContext: ScopingModalContextType = {
  isOpen: false,
  preselectedDiscipline: undefined,
  openScopingModal: () => {},
  closeScopingModal: () => {},
};

export const useScopingModal = (): ScopingModalContextType => {
  const context = useContext(ScopingModalContext);
  return context || defaultContext;
};
