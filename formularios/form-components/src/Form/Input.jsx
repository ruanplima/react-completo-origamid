import React from 'react';

const Input = ({ label, id, setDados, value, ...props }) => {
  function handleChange({ target }) {
    setDados(target.value);
  }

  return (
    <div>
      <label>
        {label}
        <input
          onChange={handleChange}
          name={id}
          id={id}
          type="text"
          value={value}
          {...props}
        />
      </label>
    </div>
  );
};

export default Input;
