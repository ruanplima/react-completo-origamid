import React from 'react';
import '../../style-global.css';

function App() {
  const times = ['Vasco da Gama', 'Palmeiras', 'Atlético MG'];
  const filmes = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const produtosFiltrados = produtos.filter((item) => {
    const precoProdutos = Number(item.preco.replaceAll('R$ ', ''));
    return precoProdutos > 1500;
  });

  console.log(produtosFiltrados);

  return (
    <div>
      <h1>Array</h1>
      <ul>
        {times.map((time) => {
          return <li key={time}>{time}</li>;
        })}
      </ul>

      <h1>Array de Objetos</h1>
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.nome}>
              {filme.nome}, {filme.ano}
            </li>
          );
        })}
      </ul>

      <h1>Exercícios</h1>
      <div>
        {produtosFiltrados.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.nome}</h2>
              <p>Preço: {item.preco}</p>
              <ul>
                {item.cores.map((cor) => {
                  return (
                    <li key={cor} style={{ backgroundColor: cor }}>
                      {cor}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
