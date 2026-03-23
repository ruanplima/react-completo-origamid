import React from 'react';

const Botao = ({ setModal }) => {
  return (
    <div>
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Abrir
      </button>
    </div>
  );
};

export default Botao;
