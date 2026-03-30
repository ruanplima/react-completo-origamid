import React from 'react';
import '../../style-global.css';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';

function App() {
  return (
    <GlobalStorage>
      <h1>UseContext</h1>
      <Produto />
    </GlobalStorage>
  );
}

export default App;
