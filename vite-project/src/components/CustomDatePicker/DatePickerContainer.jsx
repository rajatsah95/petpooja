import React, { useState } from 'react';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';
import './CustomDatePicker.css';

const DatePickerContainer = ({ onDateSelect }) => {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [customRange, setCustomRange] = useState({ from: '', to: '' });

  const handlePresetClick = (preset) => {
    setSelectedPreset(preset);
    let date = new Date();
    switch (preset) {
      case 'Today':
        onDateSelect({ from: date.toISOString().split('T')[0], to: date.toISOString().split('T')[0] });
        break;
      case 'Yesterday':
        date.setDate(date.getDate() - 1);
        onDateSelect({ from: date.toISOString().split('T')[0], to: date.toISOString().split('T')[0] });
        break;
      case 'This Month':
        onDateSelect({
          from: new Date(date.getFullYear(), date.getMonth(), 1).toISOString().split('T')[0],
          to: new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().split('T')[0],
        });
        break;
      case 'Last Month':
        onDateSelect({
          from: new Date(date.getFullYear(), date.getMonth() - 1, 1).toISOString().split('T')[0],
          to: new Date(date.getFullYear(), date.getMonth(), 0).toISOString().split('T')[0],
        });
        break;
      default:
        break;
    }
  };

  const handleCustomRangeChange = (range) => {
    setCustomRange(range);
    onDateSelect(range);
  };

  return (
    <div className="date-picker-container">
      <PresetButtons selectedPreset={selectedPreset} onPresetClick={handlePresetClick} />
      {selectedPreset === 'Custom Range' && (
        <CustomDateRange value={customRange} onChange={handleCustomRangeChange} />
      )}
    </div>
  );
};

export default DatePickerContainer;
