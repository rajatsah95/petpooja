import React from 'react';
import './CustomDatePicker.css';

const DateInput = ({ label, value, onChange, min, max }) => {
  return (
    <div className="date-input">
      <label>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
      />
    </div>
  );
};

export default DateInput;
