import React from 'react';
import CreateContext from './CreateContext';

const Produto = () => {
  const dados = React.useContext(CreateContext);
  return (
    <div>
      <p>{dados.nome}</p>
    </div>
  );
};

export default Produto;
