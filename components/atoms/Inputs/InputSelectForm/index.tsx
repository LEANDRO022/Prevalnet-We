import React, { useMemo } from 'react';
import Select from 'react-select';

// Props tipadas del componente
interface InputSelectFormProps {
  text?: string;
  placeholder?: string;
  value?: any;
  opts: any[];
  onChange?: any;
  isMulti?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  required?: boolean;
}

function InputSelectForm({
  text,
  placeholder = 'Seleccionar...',
  value = null,
  opts = [],
  onChange = () => {},
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  required = false,
}: InputSelectFormProps) {
  const commonStyles = {
    fontFamily: 'font-primary-regular',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  const stylesSelect = useMemo(
    () => ({
      container: (styles: any) => ({
        ...styles,
        maxWidth: '30rem',
        width: '100%',
        ...commonStyles,
      }),
      control: (styles: any) => ({
        ...styles,
        boxShadow: 'none',
        borderRadius: '.4rem',
        borderColor: '#27394F',
        height: '2.8rem',
        '&:hover': {},
        '&:focus': {},
        ...commonStyles,
      }),
      menuList: (styles: any) => ({
        ...styles,
        color: '#131313',
        ...commonStyles,
      }),
      placeholder: (styles: any) => ({
        ...styles,
        color: '#667080',
        ...commonStyles,
      }),
      dropdownIndicator: (styles: any) => ({
        ...styles,
        color: '#131313',
        ...commonStyles,
      }),
      indicatorSeparator: (styles: any) => ({ ...styles, display: 'none' }),
      menuPortal: (base: any) => ({ ...base, zIndex: 9999999 }),
    }),
    []
  );

  const themeSelect = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#9E9EA2',
      primary: '#00A2DF',
      primary50: '#C4C4C4',
      danger: '#FF3636',
      dangerLight: '#FBFCFC',
    },
  });

  return (
    <div className='text-sm space-y-1 font-fontPrimaryRegular font-bold'>
      <span className='font-fontPrimaryRegular font-bold text-sm'>
        {text}
        {required && <span className='ml-1 font-bold text-colorCyan'> * </span>}
      </span>

      <Select
        menuPortalTarget={document.body}
        placeholder={placeholder}
        styles={stylesSelect}
        theme={themeSelect}
        value={value}
        options={opts}
        onChange={
          isMulti
            ? (selected: any): void => {
                onChange(selected);
              }
            : (selected: any): void => onChange(selected)
        }
        isClearable={isClearable}
        isMulti={isMulti}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default InputSelectForm;
