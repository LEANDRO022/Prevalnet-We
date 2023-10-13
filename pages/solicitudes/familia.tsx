import Button from '@components/atoms/Buttons/Button';
import InputDate from '@components/atoms/Inputs/InputDate';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import Tabs from '@components/organisms/Tabs';
import Head from 'next/head';
import { useState } from 'react';
import { MdFamilyRestroom } from 'react-icons/md';

const optAprobadores = [
  { value: 'Mariangel Acosta', label: 'Mariangel Acosta' },
  { value: 'Andrea Pelaez', label: 'Andrea Pelaez' },
  { value: 'Katherin Gonzales', label: 'Katherin Gonzales' },
];

function Familia() {
  const [aprobadores, setAprobadores] = useState(null);
  const [fechaDia, setFechaDia] = useState(null);


  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Head>
        <title>Solicitar día de la familia</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      
      <Tabs activePage='familia' />
      <div className='bg-gray-100 container mx-auto mt-6 p-8 rounded-lg shadow-md'>
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
}

export default Familia;
