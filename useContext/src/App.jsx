import React from 'react';
import '../../style-global.css';
import CreateContext from './CreateContext';
import Produto from './Produto';

function App() {
  return (
    <CreateContext.Provider value={{ nome: 'Ruan' }}>
      <h1>UseContext</h1>
      <Produto />
    </CreateContext.Provider>
  );
}

export default App;
