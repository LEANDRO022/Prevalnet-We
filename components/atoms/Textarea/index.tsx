import React from 'react';

interface TextAreaProps {
  label: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}

function TextArea({
  label,
  name,
  placeholder,
  value,
  defaultValue = '',
  onChange,
  disabled,
  required,
}: TextAreaProps) {
  const commonStyles = {
    fontFamily: 'font-primary-regular',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <label htmlFor={name} className="input__label">
      <span>
        {label}
        {required && <span className="ml-1 text-colorCyan font-bold">*</span>}
      </span>
      <div>
        {defaultValue ? (
          <textarea
            name={name}
            placeholder={placeholder}
            className={`${
              disabled ? 'input input_disabled' : 'input'
            } p-2 h-10 max-h-96`}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disabled}
            required={required}
            style={commonStyles}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            className={`${
              disabled ? 'input input_disabled' : 'input'
            } p-2 h-10 max-h-96`} 
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            style={commonStyles}
          />
        )}
      </div>
    </label>
  );
}

export default TextArea;
