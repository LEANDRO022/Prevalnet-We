import React from 'react';

// Props del componente tipado
interface InputNumberProps {
  label: string;
  name: string;
  placeholder?: string;
  value?: any;
  defaultValue?: any;
  onChange?: any;
  disabled?: boolean;
  required?: boolean;
}

function InputNumber({
  label,
  name,
  placeholder,
  value,
  defaultValue = '',
  onChange = () => {},
  disabled,
  required,
}: InputNumberProps) {
  const commonStyles = {
    fontFamily: 'font-primary-regular',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <label htmlFor={name} className='input__label'>
      <span>
        {label}
        {required && <span className='ml-1 font-bold text-colorCyan'>*</span>}
      </span>
      <div>
        {defaultValue ? (
          <input
            type='number'
            name={name}
            placeholder={placeholder}
            className={disabled ? 'input input_disabled' : ' input'}
            defaultValue={defaultValue}
            onChange={onChange}
            autoComplete='off'
            disabled={disabled}
            required={required}
            style={commonStyles}
          />
        ) : (
          <input
            type='number'
            name={name}
            placeholder={placeholder}
            className={disabled ? 'input input_disabled' : ' input'}
            value={value}
            onChange={onChange}
            disabled={disabled}
            autoComplete='off'
            required={required}
            style={commonStyles}
          />
        )}
      </div>
    </label>
  );
}

export default InputNumber;
