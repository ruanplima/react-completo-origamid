import React from 'react';
import '../../style-global.css';
import Home from './Home';
import Produtos from './Produtos';

function App() {
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)
  const {pathname} = window.location
  console.log(pathname);
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
        {pathname == '/' ? <Home /> : <Produtos />}
      </ul>
    </div>
  );
}

export default App;
