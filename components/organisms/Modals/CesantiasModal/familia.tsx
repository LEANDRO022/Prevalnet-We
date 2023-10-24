import React from 'react';
import InputDate from '@components/atoms/Inputs/InputDate';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';
import { useState } from 'react';
import { MdFamilyRestroom } from 'react-icons/md';

const optAprobadores = [
    { value: 'Mariangel Acosta', label: 'Mariangel Acosta' },
    { value: 'Andrea Pelaez', label: 'Andrea Pelaez' },
    { value: 'Katherin Gonzales', label: 'Katherin Gonzales' },
  ];

const ModalFamilia = ({ isOpen, onClose}) => {
    const [aprobadores, setAprobadores] = useState(null);
  const [fechaDia, setFechaDia] = useState(null);
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
            <MdFamilyRestroom className='text-7xl text-gray-600 bg-white mr-4 p-2' />
            <p className='text-xl font-semibold'>Solicitud Dia de la familia</p>
          </div>
          <div className='mt-8 grid gap-6 grid-cols-2'>
            <InputSelectForm
              text='Aprobadores'
              placeholder='Selecciona aquí los destinatarios'
              required
              opts={optAprobadores}
              value={aprobadores}
              onChange={(selected) => setAprobadores(selected)}
            />
            <InputDate
              label='Seleccionar fecha que desea para el día de la familia'
              selectedDate={fechaDia}
              onChange={(date) => setFechaDia(date)}
              required
            />{' '}
          </div>
          <div className='flex justify-end mt-5 p-10'>
            <Button type='button' priority='primary' text='Enviar solicitud' />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ModalFamilia;
