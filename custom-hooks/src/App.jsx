import React from 'react';
import useLocalStorage from './useLocalStorage';
import '../../style-global.css';

function App() {
  const buttonsArray = ['notebook', 'tablet'];
  const [preferencia, setPreferencia] = useLocalStorage('preferencia', '');
  function handleClick({ target }) {
    setPreferencia(target.innerText);
  }
  return (
    <div>
      <h1>Custom Hooks</h1>
      <p>Preferência: {preferencia}</p>
      <div onClick={handleClick} style={{ display: 'flex', gap: '1rem' }}>
        {buttonsArray.map((botao) => {
          return <button key={botao}>{botao}</button>;
        })}
      </div>
    </div>
  );
}

export default App;
