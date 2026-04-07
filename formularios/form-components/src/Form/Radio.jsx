import React from 'react';

const Radio = ({ options, nome, value, setDados, ...props }) => {
  function handleChange({ target }) {
    setDados(target.value);
  }
  return (
    <p>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              onChange={handleChange}
              type="radio"
              name={nome}
              value={option}
              checked={value === option}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </p>
  );
};

export default Radio;
