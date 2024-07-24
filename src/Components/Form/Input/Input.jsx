import React, { useState } from 'react';
import './Input.css';

const Input = ({ id, placeholder,onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (input.length > 6) {
      input = input.slice(0, 6); // Limit to 6 characters
    }

    if (input.length > 4) {
      input = `${input.slice(0, 4)}-${input.slice(4)}`; // Insert hyphen after 4th digit
    }

    setValue(input);
  };

  return (
    <div className='inp'>
      <label htmlFor={id}>{id}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={handleChange}
      />
    </div>
  );
};

export default Input;
