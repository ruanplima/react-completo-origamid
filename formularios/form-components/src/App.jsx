import React from 'react';
import '../../../style-global.css';
import Input from './Form/Input';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <div>
      <form>
        <Input setDados={setNome} id="nome" label="Nome" value={nome} required/>
        <Input setDados={setEmail} id="email" label="Email" value={email} />
      </form>

      <p>{nome}</p>
      <p>{email}</p>
    </div>
  );
}

export default App;
