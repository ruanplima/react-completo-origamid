import React, { useState } from 'react';
import '../../style-global.css';
import Produto from './Produto';
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
function App() {
  const arrayBtn = ['notebook', 'smartphone'];
  const [dados, setDados] = useState(null);
  const [preferencia, setPreferencia] = useState('');

  React.useEffect(() => {
    const preferenciaSalva = localStorage.getItem('preferencia');
    setPreferencia(preferenciaSalva);
  }, []);

  React.useEffect(() => {
    if (!preferencia) return;
    localStorage.setItem('preferencia', preferencia);

    fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`)
      .then((response) => response.json())
      .then((response) => setDados(response));
  }, [preferencia]);

  function handleClick(event) {
    const botaoClicado = event.target.innerText;
    setPreferencia(botaoClicado);
  }

  return (
    <div>
      <p>
        Preferência:{' '}
        {preferencia ? preferencia : 'O usuário não tem preferência'}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {arrayBtn.map((botao) => {
          return (
            <button onClick={handleClick} key={botao}>
              {botao}
            </button>
          );
        })}
      </div>
      <Produto dados={dados} preferencia={preferencia} />
    </div>
  );
}

export default App;
