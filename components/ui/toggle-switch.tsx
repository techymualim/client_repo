import React, { useState } from 'react';

interface Option {
    label: string,
    value: string,
}

interface Props {
    options: Array<Option>
    onSelect: (value: string) => void
    centered?: boolean
}

const ToggleSwitch = ({ options, onSelect, centered }: Props) => {
  const [selected, setSelected] = useState(options[0].value);

  const handleToggle = (value: string) => {
    setSelected(value);
    onSelect(value);
  };

  const containerClasses = centered ? 'mx-auto' : '';

  return (
    <div className={`${containerClasses} w-80 max-w-xs border-2 border-white rounded-full overflow-hidden p-2`}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`w-1/2 py-3 rounded-full ${
            selected === option.value ? 'bg-[#017AD1] text-white transition-colors duration-500' : 'bg-transparent text-white'
          }`}
          onClick={() => handleToggle(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;
