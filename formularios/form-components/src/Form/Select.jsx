import React from 'react';

const Select = ({ options, setDados, value }) => {
  function handleChange({ target }) {
    setDados(target.value);
  }
  return (
    <select value={value} onChange={handleChange}>
      <option disabled value="">
        Selecione
      </option>
      {options.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
