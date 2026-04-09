import React from 'react';

const Input = ({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label>
        {label}
        <input
          onChange={onChange}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          type={type}
        />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
