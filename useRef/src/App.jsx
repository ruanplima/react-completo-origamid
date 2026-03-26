import React from 'react';
import '../../style-global.css';

function App() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputFocus = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputFocus.current.focus();
  }
  return (
    <div>
      <h1>UseRef</h1>
      {
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
      }

      <input
        type="text"
        value={input}
        ref={inputFocus}
        onChange={({ target }) => {
          setInput(target.value);
        }}
      />
      <br />
      <button onClick={handleClick}>Enviar comentário</button>
    </div>
  );
}

export default App;
