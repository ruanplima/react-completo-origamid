import React from 'react';
import '../../../style-global.css';
import Input from './Form/Input';
import Select from './Form/Select';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produtos, setProdutos] = React.useState('');
  return (
    <div>
      <form>
        <Input
          setDados={setNome}
          id="nome"
          label="Nome"
          value={nome}
          required
        />
        <Input setDados={setEmail} id="email" label="Email" value={email} />
        <Select
          setDados={setProdutos}
          options={['Notebook', 'Smartphone']}
          value={produtos}
        />
      </form>

      <p>{nome}</p>
      <p>{email}</p>
      <p>{produtos}</p>
    </div>
  );
}

export default App;
