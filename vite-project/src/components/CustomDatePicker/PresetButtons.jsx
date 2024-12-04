import React from 'react';

const PresetButtons = ({ selectedPreset, onPresetClick }) => {
  const presets = ['Today', 'Yesterday', 'This Month', 'Last Month', 'Custom Range'];

  return (
    <div className="preset-buttons">
      {presets.map((preset) => (
        <button
          key={preset}
          className={selectedPreset === preset ? 'active' : ''}
          onClick={() => onPresetClick(preset)}
        >
          {preset}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons;
