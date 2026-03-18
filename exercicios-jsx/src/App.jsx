import React from 'react';
import '../../style-global.css';

function App() {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const pessoa = luana;
  const arrayGastos = pessoa.compras.map((preco) => {
    const arrayPrecos = preco.preco;
    const arrayFormatada = Number(arrayPrecos.replaceAll('R$ ', ''));
    return arrayFormatada;
  });

  const totalGasto = arrayGastos.reduce((acumulador, inicial) => {
    return acumulador + inicial;
  }, 0);

  const styleAtivo = { color: pessoa.ativa ? 'green' : 'red' };

  return (
    <div>
      <p>Nome: {pessoa.cliente}</p>
      <p>Idade: {pessoa.idade}</p>
      <p>
        Situação:
        <span style={styleAtivo}>{pessoa.ativa ? ' Ativa' : ' Inativa'}</span>
      </p>
      <p>Total gasto: {totalGasto}</p>
      {totalGasto >= 10000 && <p>Você está gastando muito!!</p>}
    </div>
  );
}

export default App;
