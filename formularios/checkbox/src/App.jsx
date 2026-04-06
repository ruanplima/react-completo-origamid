import React from 'react';
import '../../../style-global.css';

function App() {
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState(['azul']);

  function handleChange({ target }) {
    setTermos(target.checked);
  }

  function coresChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  console.log(cores);

  return (
    <div>
      <h1>Checkbox</h1>
      <form>
        <h2>Cores</h2>
        <label>
          <input
            checked={cores.includes('branco')}
            type="checkbox"
            value="branco"
            onChange={coresChange}
          />
          Branco
        </label>
        <label>
          <input
            checked={cores.includes('azul')}
            type="checkbox"
            value="azul"
            onChange={coresChange}
          />
          Azul
        </label>

        <h2>Termos de Privacidade</h2>
        <label>
          <input
            onChange={handleChange}
            checked={termos}
            type="checkbox"
            name="termos"
            id="termos"
          />
          Li os termos e aceito
        </label>
        {termos ? (
          <p>Termos de Privacidade aceito</p>
        ) : (
          <p>Aceite os Termos de Privaciade para prosseguir</p>
        )}
      </form>
    </div>
  );
}

export default App;
