import React from 'react';
import './CustomDatePicker.css';

const PresetButtons = ({ onClick, activePreset }) => {
  const presets = ['Today', 'Yesterday', 'This Month', 'Last Month', 'Custom Range'];

  return (
    <div className="preset-buttons">
      {presets.map((preset) => (
        <button
          key={preset}
          className={`preset-button ${activePreset === preset ? 'active' : ''}`}
          onClick={() => onClick(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
