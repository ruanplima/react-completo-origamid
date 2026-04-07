import React from 'react';
import '../../../style-global.css';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produtos, setProdutos] = React.useState('');
  const [cor, setCor] = React.useState('Azul');
  const [frutas, setFrutas] = React.useState([]);
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
        <Checkbox
          options={['Maçã', 'Uva', 'Morango']}
          value={frutas}
          setDados={setFrutas}
        />
      </form>

      <div
        style={{
          border: '1px solid #5c5c5c',
          padding: '1rem',
          marginTop: '2rem',
        }}
      >
        <h2>Respostas:</h2>
        <p>{nome}</p>
        <p>{email}</p>
        <p>{produtos}</p>
        <p>{cor}</p>
        {frutas.map((fruta) => {
          return <p key={fruta}>{fruta}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
