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
  placeholder,
  value = null,
  opts = [],
  onChange = () => {},
  isMulti = false,
  isClearable = false,
  isDisabled = false,
  required = false,
}: InputSelectFormProps) {
  const stylesSelect = useMemo(
    () => ({
      container: (styles: any) => ({
        ...styles,
        maxWidth: '30rem',
        width: '100%',
        fontFamily: 'font-primary-regular',
        fontWeight: 'bold',
        // fontSize: '20px',
      }),
      control: (styles: any) => ({
        ...styles,
        boxShadow: 'none',
        borderRadius: '.4rem',
        borderWidth: '1px',
        borderColor: '#27394F',
        height: '2.6rem',
        '&:hover': {}, // Establecer estilos vacíos para el hover
        '&:focus': {}, // Establecer estilos vacíos para el focus
      }),
      menuList: (styles: any) => ({
        ...styles,
        color: '#131313',
        fontFamily: 'font-primary-regular',
        fontSize: '14px',
      }),
      placeholder: (styles: any) => ({
        ...styles,
        color: '#667080',
        fontSize: '14px',
      }),
      // Color de icon
      dropdownIndicator: (styles: any) => ({
        ...styles,
        color: '#131313',
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
      primary25: '#9E9EA2', // hover a items de la lista --- ANTERIOR:#26B693
      primary: '#00A2DF', // Background de items list seleccionado --- ANTERIOR:#9E9EA2
      primary50: '#C4C4C4', // Background de items al hacer clik --- ANTERIOR:#C4C4C4
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
