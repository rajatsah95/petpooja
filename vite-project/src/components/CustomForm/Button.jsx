import React from 'react';
import './CustomForm.css';

const Button = ({ type, onClick, children }) => (
  <button type={type} onClick={onClick} className="form-button">
    {children}
  </button>
);

export default Button;
