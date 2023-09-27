import React from 'react';

interface InputDateProps {
  label: string;
  name?: string;
  selectedDate?: Date | null;
  onChange?: (date: Date | null) => void;
  isDisabled?: boolean;
  required?: boolean;
}

function formatDate(date: Date | null): string {
  return date ? date.toISOString().split('T')[0] : '';
}

function InputDate({
  label,
  name,
  selectedDate = null,
  onChange = () => {},
  isDisabled = false,
  required = false,
}: InputDateProps) {
  const commonStyles = {
    fontFamily: 'font-primary-regular',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <div className='text-sm space-y-1 font-fontPrimaryRegular font-bold'>
      <label htmlFor={name} className='input__label'>
        <span className='font-fontPrimaryRegular font-bold text-sm'>
          {label}
          {required && <span className='ml-1 font-bold text-colorCyan'>*</span>}
        </span>

        <div className='relative'>
          <input
            type='date'
            value={formatDate(selectedDate)}
            onChange={event => {
              const selectedDate = event.target.value;
              onChange(selectedDate ? new Date(selectedDate) : null);
            }}
            className={`input ${isDisabled ? 'input_disabled' : ''}`}
            disabled={isDisabled}
            required={required}
            style={commonStyles}
          />
        </div>
      </label>
    </div>
  );
}

export default InputDate;
