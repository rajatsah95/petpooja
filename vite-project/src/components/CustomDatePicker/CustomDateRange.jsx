import React from 'react';
import DateInput from './DateInput';
import './CustomDatePicker.css';

const CustomDateRange = ({ fromDate, toDate, onChange }) => {
  return (
    <div className="custom-date-range">
      <DateInput
        label="From"
        value={fromDate}
        onChange={(date) => onChange(date, toDate)}
        max={toDate}
      />
      <DateInput
        label="To"
        value={toDate}
        onChange={(date) => onChange(fromDate, date)}
        min={fromDate}
      />
    </div>
  );
};

export default CustomDateRange;
