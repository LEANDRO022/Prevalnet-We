import Button from '@components/atoms/Buttons/Button';
import InputNumber from '@components/atoms/Inputs/InputNumber';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { MdOutlineWorkOutline } from 'react-icons/md';

const optTipoDocumento = [
    { value: 'Cedula de Ciudadanía', label: 'Cédula de Ciudadanía' },
    { value: 'Cedula de Extranjería', label: 'Cédula de Extranjería' },
    { value: 'Tarjeta de Identidad', label: 'Tarjeta de Identidad' },
  ];
  
  const optFinalidad = [
    { value: 'Compra de vivienda', label: 'Compra de vivienda' },
    { value: 'Educación', label: 'Educación' },
    { value: 'Desempleo involuntario', label: 'Desempleo involuntario' },
    { value: 'Emergencias médicas', label: 'Emergencias médicas' },
  ];

  
    

const ModalCesantia = ({ isOpen, onClose}) => {
    const [tipoDocumento, setTipoDocumento] = useState(null);
    const [finalidad, setFinalidad] = useState(null);
    
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div className='modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75'></div>
      <div className='modal-container bg-white w-full md:w-2/3 p-8 rounded-lg shadow-lg border-2 border-gray-300 z-50'>
      
      <div>
          <div className='flex items-center mb-4'>
            <MdOutlineWorkOutline className='text-7xl text-gray-600 bg-white mr-4 p-2' />
            <p className='text-xl font-semibold'>Solicitud Cesantías</p>
          </div>
          <div className='mt-8 grid gap-6'>
            <InputText label='Nombre completo' name='' required />
            <InputText label='Documento de Identidad' name='' required />
            <InputSelectForm
              text='Tipo de Documento'
              required
              opts={optTipoDocumento}
              value={tipoDocumento}
              onChange={(selected) => setTipoDocumento(selected)}
            />
            <InputNumber label='Monto a retirar' name='' placeholder='$' />
            <InputSelectForm
              text='Finalidad de retiro'
              required
              opts={optFinalidad}
              value={finalidad}
              onChange={(selected) => setFinalidad(selected)}
            />
          </div>
          <div className='flex justify-end mt-5 p-10'>
            <Button type='button' priority='primary' text='Enviar solicitud' />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ModalCesantia;
