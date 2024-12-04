import React from 'react';

const CustomDateRange = ({ value, onChange }) => {
  const handleChange = (field, date) => {
    onChange({ ...value, [field]: date });
  };

  return (
    <div className="custom-date-range">
      <div>
        <label>From:</label>
        <input
          type="date"
          value={value.from}
          onChange={(e) => handleChange('from', e.target.value)}
        />
      </div>
      <div>
        <label>To:</label>
        <input
          type="date"
          value={value.to}
          onChange={(e) => handleChange('to', e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomDateRange;
