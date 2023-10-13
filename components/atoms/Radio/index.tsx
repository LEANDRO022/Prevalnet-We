import React from 'react';

interface RadioButtonProps {
  label: string;
  options: { value: string; label: string }[];
  selectedOption: string;
  onOptionChange: (value: string) => void;
  required?: boolean;
}

function RadioButton({
  label,
  options,
  selectedOption,
  onOptionChange,
  required,
}: RadioButtonProps) {
  return (
    <div className="mb-4">
      <label className="input__label">
        {label}
        {required && (
          <span className="ml-1 text-colorCyan font-bold">*</span>
        )}
      </label>
      <div className="flex flex-col space-y-2 mt-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center text-sm">
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onOptionChange(option.value)}
              className="form-radio h-5 w-5 text-cyan-600"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioButton;
