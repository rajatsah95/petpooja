import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import './CustomForm.css';

const FormContainer = ({ formConfig, onSubmit }) => {
  const [formData, setFormData] = useState(
    formConfig.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || '';
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    formConfig.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      }
      if (field.minLength && formData[field.name]?.length < field.minLength) {
        newErrors[field.name] = `${field.label} must be at least ${field.minLength} characters.`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}
      <div className="form-actions">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => setFormData({})}>Reset</Button>
      </div>
    </form>
  );
};

export default FormContainer;
