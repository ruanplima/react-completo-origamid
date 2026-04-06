import React from 'react';
import '../../../style-global.css';

function App() {
  const [cor, setCor] = React.useState('');
  function handleChange({ target }) {
    setCor(target.value);
  }
  return (
    <div>
      <h1>Radio</h1>
      <form>
        <label htmlFor="azul">
          <input
            checked={cor === 'azul'}
            value="azul"
            id="azul"
            name="cor"
            type="radio"
            onChange={handleChange}
          />
          Azul
        </label>
        <label htmlFor="vermelho">
          <input
            checked={cor === 'vermelho'}
            value="vermelho"
            id="vermelho"
            name="cor"
            type="radio"
            onChange={handleChange}
          />
          Vermelho
        </label>
        <label htmlFor="roxo">
          <input
            checked={cor === 'roxo'}
            value="roxo"
            id="roxo"
            name="cor"
            type="radio"
            onChange={handleChange}
          />
          Roxo
        </label>
      </form>
      {cor === '' ? <p>Selecione uma cor</p> : <p>Cor selecionada: {cor}</p>}
    </div>
  );
}

export default App;
