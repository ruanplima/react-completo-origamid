import React from 'react';
import '../../style-global.css';
import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  const arrayProdutos = ['tablet', 'smartphone', 'notebook'];
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  function fetchProduto(event) {
    setCarregando(true);
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((response) => {
        setProduto(response);
        setCarregando(false);
      });
  }

  return (
    <div>
      <header style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {arrayProdutos.map((produto) => {
          return (
            <button key={produto} onClick={fetchProduto}>
              {produto}
            </button>
          );
        })}
      </header>
      {carregando && <p>Carregando...</p>}
      <main>
        {!carregando && produto && produto ? (
          <Produto produto={produto} />
        ) : (
          'Nenhum produto selecionado'
        )}
      </main>
    </div>
  );
}

export default App;
