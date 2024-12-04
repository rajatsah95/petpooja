import React from 'react';
import ValidationMessage from './ValidationMessage';
import './CustomForm.css';

const FormField = ({ field, value, onChange, error }) => {
  const handleChange = (e) => {
    onChange(field.name, field.type === 'checkbox' ? e.target.checked : e.target.value);
  };

  return (
    <div className="form-field">
      <label>
        {field.label}
        {field.required && <span className="required">*</span>}
      </label>
      {field.type === 'textarea' ? (
        <textarea value={value} onChange={handleChange} placeholder={field.placeholder} />
      ) : field.type === 'select' ? (
        <select value={value} onChange={handleChange}>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          value={value}
          onChange={handleChange}
          placeholder={field.placeholder}
        />
      )}
      {error && <ValidationMessage message={error} />}
    </div>
  );
};

export default FormField;
