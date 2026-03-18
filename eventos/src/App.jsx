import React from 'react';
import '../../style-global.css';

function App() {
  function handleClick(event) {
    return alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <h1>Eventos em React/JSX</h1>
      <button onClick={handleClick}>Camisa</button>
    </div>
  );
}

export default App;
