import React from 'react';
import '../../../style-global.css';

function App() {
  const [valor, setValor] = React.useState('');
  function handleChange({ target }) {
    setValor(target.value);
  }

  return (
    <div>
      <h1>Textarea</h1>

      <form>
        <textarea
          onChange={handleChange}
          value={valor}
          name="observacao"
          id="observacao"
        />
        <p>{valor}</p>
      </form>
    </div>
  );
}

export default App;
