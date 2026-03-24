import React from 'react';

const Produto = ({ produto }) => {
  console.log(produto);
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco}</p>
      <img
        style={{ maxWidth: '300px' }}
        src={produto.fotos[0].src}
        alt={produto.fotos[0].titulo}
      />
    </div>
  );
};

export default Produto;
