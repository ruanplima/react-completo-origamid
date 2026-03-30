import React from 'react';
import { GlobalContext } from './CreateContext';

export const GlobalStorage = ({ children }) => {
  const pessoa = {
    nome: 'Ruan',
    idade: 22,
    faculdade: true,
  };

  return (
    <GlobalContext.Provider value={pessoa}>{children}</GlobalContext.Provider>
  );
};
