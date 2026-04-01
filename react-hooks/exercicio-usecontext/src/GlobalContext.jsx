import React from 'react';
import { CreateContext } from './CreateContext';

export const GlobalContext = ({ children }) => {
  const [dados, setDados] = React.useState([]);
  React.useMemo(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((response) => setDados(response));
  }, []);

  function limparDados() {
    setDados([]);
  }

  return (
    <CreateContext.Provider value={{ dados, limparDados }}>
      {children}
    </CreateContext.Provider>
  );
};
