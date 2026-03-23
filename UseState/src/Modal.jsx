import React from 'react';

const Modal = ({ modal, setModal }) => {
  if(modal)
  return (
    <div>
      <p>Este é o modal</p>
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        Fechar
      </button>
    </div>
  );
  return null
};

export default Modal;
