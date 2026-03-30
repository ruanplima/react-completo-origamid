import React from 'react';
import { CreateContext } from './CreateContext';

const Limpar = () => {
  const { limparDados } = React.useContext(CreateContext);

  return (
    <div>
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};

export default Limpar;
