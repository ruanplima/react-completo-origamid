import React from 'react';
import '../../style-global.css';
import Botao from './Botao';
import Modal from './Modal';

function App() {
  //const [ativo, setAtivo] = React.useState(false);
  //const [dados, setDados] = React.useState({ nome: 'Ruan', idade: '22' });
  const [modal, setModal] = React.useState(false);

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Possui Faculdade' });
  // }
  return (
    <div>
      {/* <div>
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade}</p>
        <p>{dados.faculdade}</p>
      </div>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button> */}

      <div
        style={{
          marginTop: '3rem',
          border: '1px solid #6b6b6b',
          padding: '2rem',
        }}
      >
        <Modal modal={modal} setModal={setModal}/>
        <Botao setModal={setModal} />
      </div>
    </div>
  );
}

export default App;
