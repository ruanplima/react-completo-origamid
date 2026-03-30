import React from 'react';
import { GlobalContext } from './CreateContext';

const Produto = () => {
  const { nome } = React.useContext(GlobalContext);

  return (
    <div>
      <p>{nome}</p>
    </div>
  );
};

export default Produto;
