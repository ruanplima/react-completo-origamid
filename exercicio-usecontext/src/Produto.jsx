import React from 'react';
import { CreateContext } from './CreateContext';

const Produto = () => {
  const { dados } = React.useContext(CreateContext);

  return (
    <div>
      <ul>
        {dados.map((produto) => {
          return <li key={produto.id}>{produto.nome}</li>;
        })}
      </ul>
    </div>
  );
};

export default Produto;
