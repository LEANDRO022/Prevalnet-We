import React from 'react';
import ReactLoading from 'react-loading';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  priority: 'primary' | 'secondary';
  extraClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
}

function Button({
  text,
  type = 'button',
  priority = 'primary',
  extraClassName = '',
  children,
  onClick,
  loading = false,
  loadingColor = '#FFFFFF',
  disabled = false,
}: ButtonProps) {
  const buttonPriority = () => {
    if (priority === 'primary') {
      return `bg-colorCyan text-white focus:outline-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`;
    }
    if (priority === 'secondary') {
      return `border border-colorCyan text-colorCyan focus:outline-none ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`;
    }

    return '';
  };

  const classNameButton = `rounded px-4 py-2 ${buttonPriority()} ${extraClassName}`;

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={classNameButton}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center space-x-2'>
        {loading && (
          <ReactLoading
            type='spin'
            height={24}
            width={24}
            color={loadingColor}
          />
        )}
        {children}
        {text}
      </div>
    </button>
  );
}

export default Button;
