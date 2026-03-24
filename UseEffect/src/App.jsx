import React from 'react';
import '../../style-global.css';

function App() {
  const [contar, setContar] = React.useState(0);
  function handleClick() {
    setContar(contar + 1);
  }

  React.useEffect(() => {
    console.log('Clicou');
  }, []);

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default App;
