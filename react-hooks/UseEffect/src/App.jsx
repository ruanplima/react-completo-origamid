import React from 'react';
import '../../style-global.css';

function App() {
  const [contar, setContar] = React.useState(1);
  const [dados, setDados] = React.useState(null);
  function handleClick() {
    setContar(contar + 1);
  }

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((response) => setDados(response));
  }, []);

  const preco = dados && Number(dados.preco * contar);
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);

  return (
    <div>
      <h1>UseEffect</h1>

      {dados && (
        <div>
          <h3>{dados.nome}</h3>
          <p>{precoFormatado}</p>
          <img
            style={{ maxWidth: '300px' }}
            src={dados.fotos[0].src}
            alt={dados.fotos[0].titulo}
          />
        </div>
      )}
      <button onClick={handleClick}>Comprando: {contar}</button>
    </div>
  );
}

export default App;
