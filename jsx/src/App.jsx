import React from 'react';

function App() {
  const nome = 'Ruan';
  const classAtivo = false;

  return (
    <div>
      <a
        href="https://www.instagram.com/_ruanplima/"
        title="Este é o meu Instagram"
        target="_blank"
        className="ativo"
      >
        Meu instagram
      </a>

      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </div>

      <p className={classAtivo ? 'ativo' : 'inativo'}>
        Olá, meu nome é {nome + ' Pinheiro'}
      </p>
    </div>
  );
}

export default App;
