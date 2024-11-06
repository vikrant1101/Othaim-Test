import React from 'react';
import Styles from './index.module.scss';

const Input = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: any) => {
  return (
    <div className={`${Styles.inputWrapper} ${error ? Styles.inputError : ''}`}>
      <label htmlFor={name} className={Styles.inputLabel}>
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={Styles.inputField}
      />
      {error && <span className={Styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Input;
