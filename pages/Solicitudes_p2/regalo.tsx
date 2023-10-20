import Tabs from '@components/organisms/Tabs';
import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';
import Head from 'next/head';

const regalo = () => (
  <div className='container mx-auto mt-8 p-8 grid justify-center'>
    <Head>
      <title>Solicitar medio día</title>
      <link rel='icon' href='/img/Favicon.png' />
    </Head>
    <Tabs activePage='regalo' />
    <div className='bg-gray-100 container mx-auto mt-6 p-8 rounded-lg shadow-md'>
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

export default regalo;
