import React from 'react';

const Checkbox = ({ options, value, setDados }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setDados([...value, target.value]);
    } else {
      setDados(
        value.filter((itemValue) => {
          return itemValue !== target.value;
        }),
      );
    }
  }

  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              value={option}
              type="checkbox"
              checked={value.includes(option)}
              onChange={handleChange}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;
