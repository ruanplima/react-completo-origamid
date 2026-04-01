import React from 'react';

const useLocalStorage = (key, valor) => {
  const [state, setState] = React.useState(() => {
    const localStorage = window.localStorage.getItem(key);
    return localStorage ? localStorage : valor;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
