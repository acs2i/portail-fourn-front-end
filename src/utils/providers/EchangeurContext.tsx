// EchangeurContext.tsx
import React, { createContext, useContext, useMemo } from 'react';
import { Echangeur } from "../echangeur/Echangeur"

interface EchangeurContextType {
  echangeur: Echangeur;
}

const EchangeurContext = createContext<EchangeurContextType | undefined>(undefined);

export const EchangeurProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const echangeur = useMemo(() => new Echangeur("mainEchangeur"), []);

  return (
    <EchangeurContext.Provider value={{ echangeur }}>
      {children}
    </EchangeurContext.Provider>
  );
};

export const useEchangeur = (): EchangeurContextType => {
  const context = useContext(EchangeurContext);
  if (context === undefined) {
    throw new Error('useEchangeur must be used within a EchangeurProvider');
  }
  return context;
};
