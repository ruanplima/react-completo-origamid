import React from 'react';
import '../../../style-global.css';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produtos, setProdutos] = React.useState('');
  const [cor, setCor] = React.useState('Azul');
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
        />{' '}
        <Radio
          options={['Azul', 'Vermelho']}
          nome="cor"
          value={cor}
          setDados={setCor}
        />
      </form>

      <p>{nome}</p>
      <p>{email}</p>
      <p>{produtos}</p>
      <p>{cor}</p>
    </div>
  );
}

export default App;
