import React from 'react';
import Titulo from './Titulo';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
     { nome: 'PC Gamer', propriedades: ['32gb ram', '1TB'] },
  ];
  return (
    <div>
      <Titulo texto='Produtos' />
      <div>
        <div>
          {produtos.map((produto) => {
            return (
              <div
                style={{
                  border: '1px solid black',
                  padding: '1rem',
                  marginBottom: '1rem',
                }}
                key={produto.nome}
              >
                <h2>{produto.nome}</h2>
                <ul>
                  {produto.propriedades.map((propriedade) => {
                    return <li key={propriedade}>{propriedade}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Produtos;
