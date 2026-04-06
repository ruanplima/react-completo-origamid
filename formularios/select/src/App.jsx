import React from 'react';
import '../../../style-global.css';

function App() {
  const [valor, setValor] = React.useState('');
  function handleChange({ target }) {
    setValor(target.value);
  }

  return (
    <div>
      <h1>Select</h1>
      <form>
        <select value={valor} onChange={handleChange} name="frutas" id="frutas">
          <option disabled value="">
            Selecione...
          </option>
          <option value="Maçã">Maçã</option>
          <option value="Uva">Uva</option>
          <option value="Laranja">Laranja</option>
        </select>

        <p>
          {valor === '' ? (
            <p>Selecione uma opção de fruta...</p>
          ) : (
            <p>Usuário selecionou: {valor}</p>
          )}
        </p>
      </form>
    </div>
  );
}

export default App;
