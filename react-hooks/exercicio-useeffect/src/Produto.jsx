import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      {dados ? (
        <div>
          <p>{dados.nome}</p>
          <p>R$ {dados.preco}</p>
        </div>
      ) : (
        <p>Nenhum item foi selecionado</p>
      )}
    </div>
  );
};

export default Produto;
