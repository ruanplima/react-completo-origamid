import React from 'react';
import '../../../style-global.css';
import Input from '../../form-components/src/Form/Input';
import useForm from './Hooks/useForm';

function App() {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('nome');
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não Enviar');
    }
  }
  return (
    <div>
      <h1>useForm</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" id="nome" type="text" {...nome} />
        <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
        <Input
          label="CEP"
          id="cep"
          type="text"
          {...cep}
          placeholder="00000-000"
        />
        <Input label="E-mail" id="email" type="email" {...email} />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
