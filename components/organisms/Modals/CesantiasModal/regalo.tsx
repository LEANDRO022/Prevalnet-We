import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';


const ModalCumpleaños = ({ isOpen, onClose}) => {
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
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
          <div className='flex items-center gap-4'>
            <Icon icon='mdi:medal-outline' className='text-7xl text-gray-600' />
            <p className='text-xl font-semibold'>
              Medio dia libre por cumpleaños
            </p>
          </div>
          <div></div>

          <div className='gap-4 '>
            <label htmlFor='' className='block font-bold'>
              Aprobadores<span className=' text-blue-500 '>*</span>
            </label>
            <input
              type='text'
              className='border border-black p-2 w-full rounded'
              placeholder='escriba aca los destinatarios'
            />
          </div>

          <div className='gap-4 '>
            <label htmlFor='' className='block font-bold'>
              Fecha<span className=' text-blue-500 '>*</span>
            </label>
            <input
              type='date'
              className='border border-black p-2 w-full rounded'
            />
          </div>

          <div className='gap-4'>
            <label htmlFor=''>
              Franja horaria<span className=' text-blue-500 '>*</span>
            </label>
            <div className='ml-2'>
              <input type='radio' id='jornada' name='jornada' value={'si'} />{' '}
              <span className='text-gray-400'>Mañana</span>
            </div>
            <div className='ml-2'>
              <input type='radio' id='jornada' name='jornada' value={'no'} />{' '}
              <span className='text-gray-400'>Tarde</span>
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-5 p-10'>
          <Button type='button' priority='primary' text='Enviar' />
        </div>
      </form>
      </div>
    </div>
  );
};

export default ModalCumpleaños;
