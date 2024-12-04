import React, { useState } from 'react';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';
import './CustomDatePicker.css';

const DatePickerContainer = ({ onDateChange, styles }) => {
  const [preset, setPreset] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handlePresetClick = (selectedPreset) => {
    setPreset(selectedPreset);
    const today = new Date();
    let newFromDate = '';
    let newToDate = '';

    switch (selectedPreset) {
      case 'Today':
        newFromDate = today.toISOString().split('T')[0];
        newToDate = newFromDate;
        break;
      case 'Yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        newFromDate = yesterday.toISOString().split('T')[0];
        newToDate = newFromDate;
        break;
      case 'This Month':
        newFromDate = new Date(today.getFullYear(), today.getMonth(), 1)
          .toISOString()
          .split('T')[0];
        newToDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
          .toISOString()
          .split('T')[0];
        break;
      case 'Last Month':
        newFromDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
          .toISOString()
          .split('T')[0];
        newToDate = new Date(today.getFullYear(), today.getMonth(), 0)
          .toISOString()
          .split('T')[0];
        break;
      default:
        break;
    }

    setFromDate(newFromDate);
    setToDate(newToDate);
    onDateChange({ from: newFromDate, to: newToDate });
  };

  const handleCustomDateChange = (from, to) => {
    setPreset('Custom Range');
    setFromDate(from);
    setToDate(to);
    onDateChange({ from, to });
  };

  return (
    <div className="date-picker-container" style={styles}>
      <PresetButtons onClick={handlePresetClick} activePreset={preset} />
      {preset === 'Custom Range' && (
        <CustomDateRange
          fromDate={fromDate}
          toDate={toDate}
          onChange={handleCustomDateChange}
        />
      )}
    </div>
  );
};

export default DatePickerContainer;
