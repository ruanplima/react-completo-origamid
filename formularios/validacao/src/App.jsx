import React from 'react';
import '../../../style-global.css';
import Input from '../../form-components/src/Form/Input';

function App() {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlurCep({ target }) {
    validateCep(target.value);
  }


  return (
    <div>
      <h1>Validação</h1>
      <form>
        {' '}
        <Input
          value={cep}
          setDados={setCep}
          label="CEP"
          type="text"
          id="cep"
          placeholder="00000-000"
          onBlur={handleBlurCep}
        />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default App;
