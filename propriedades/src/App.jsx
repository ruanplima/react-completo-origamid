import React from 'react';
import '../../style-global.css';
import Form from './Form/Form';

const Titulo = ({ cor, classe, texto, fontSize }) => {
  return (
    <h1 style={{ color: cor, fontSize: fontSize }} className={classe}>
      {texto}
    </h1>
  );
};

function App() {
  return (
    <div>
      App
      <Titulo classe="ativo" texto="Testeee" cor="red" fontSize="1.3rem" />
      <div>
        <h2>Rest e Spread</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;
