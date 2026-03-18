import React from 'react';
import '../../style-global.css';

const Titulo = (props) => {
  return <h1>{props.texto}</h1>
}

function App() {
  return (
    <div>
      App
      <Titulo texto='Testeee'/> 
    </div>
  );
}

export default App;
