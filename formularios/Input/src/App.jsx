import React from 'react';
import '../../../style-global.css';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      nome,
      email,
    });
  }

  return (
    <div>
      <h1>Input</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={({ target }) => {
            setNome(target.value);
          }}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
