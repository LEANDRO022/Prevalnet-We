import Tabs from '@components/organisms/Tabs';
import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';
import Head from 'next/head';

const vacaciones = () => (
  <div className='container mx-auto mt-8 p-8 grid justify-center'>
    <Head>
        <title>Solicitar vacaciones</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
    <Tabs activePage='vacaciones' />
    <div className='bg-gray-100 container mx-auto mt-6 p-8 rounded-lg shadow-md'>
      <form action=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          <div className='flex items-center'>
            <Icon icon='solar:glasses-bold' className='text-7xl' />
            <p className='text-xl font-semibold'>Solicitud Vacaciones</p>
          </div>
          <div>{}</div>
          <div className='w-9/12'>
            <label htmlFor='' className='block font-bold'>
              Aprobadores<span className=' text-blue-500 '>*</span>
            </label>
            <input
              type='text'
              className='border border-black p-2 w-full rounded'
              placeholder='escriba aca los destinatarios'
            />
          </div>
          <div />
          <div className='w-9/12'>
            <label htmlFor='' className='block font-bold'>
              Fecha de inicio de tu solicitud de vacaciones
              <span className=' text-blue-500 '>*</span>
            </label>
            <input
              type='date'
              className='border border-black p-2 w-full rounded'
            />
          </div>
          <div className='w-9/12'>
            <label htmlFor='' className='block font-bold'>
              Fecha de terminación de tu solicitud de vacaciones
              <span className=' text-blue-500 '>*</span>
            </label>
            <input
              type='date'
              className='border border-black p-2 w-full rounded'
            />
          </div>
        </div>
        <div className='flex justify-end mt-5 p-10'>
          <Button type='button' priority='primary' text='Enviar' />
        </div>
      </form>
    </div>
  </div>
);

export default vacaciones;
