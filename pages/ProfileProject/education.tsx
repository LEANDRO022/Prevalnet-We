import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Bnav from '@components/organisms/Bnav';

export default function working_information() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOptionClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };
  return (
    <div className='container mx-auto mt-8 grid justify-center'>
      <Head>
        <title>Educación</title>
        <link rel='icon' href='/public/img/icons/favicon.ico' />
      </Head>

      <div className='relative inline-block text-left'>
        <div className='lg:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100'
          >
            <span className='mt-2'>Educacion</span>
            <svg
              className={`-mr-1 ml-2 h-8 w-5 transform ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 14l-5-5h10l-5 5z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        
      </div>

      <Bnav activePage='education' />

      <div className='bg-white container mx-auto mt-8 p-8 max-w-screen-lg rounded-lg shadow-md'>
        <div>
          <span className='text-3xl font-bold text-gray-500'>Educacion</span>
        </div>
        <form action=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            <div className=''>
              <label htmlFor='' className='block text-gray-700 font-bold '>
                Nivel de escolaridad<span className=' text-blue-500 '>*</span>{' '}
              </label>
              <select
                name=''
                id=''
                className='border border-black p-2 w-full rounded'
              >
                <option value=''>Seleccione uno...</option>
                <option value=''>####</option>
                <option value=''>####</option>
                <option value=''>####</option>
                <option value=''>####</option>
              </select>
            </div>
            <div className=''>
              <label className='block text-gray-700 font-bold'>
                Nombre de la institución educativa
                <span className=' text-blue-500 '>*</span>{' '}
              </label>
              <input
                type='text'
                id='institucion'
                name='institucion'
                required
                className='border border-black p-2 w-full rounded'
              />
            </div>

            <div className=''>
              <label className='block text-gray-700 font-bold '>
                Nivel de estudios<span className=' text-blue-500 '>*</span>{' '}
              </label>
              <select
                id='nivel'
                name='nivel'
                required
                className='border border-black p-2 w-full rounded'
              >
                <option value='Maestría'>Maestría</option>
                <option value='Doctorado'>Doctorado</option>
              </select>
            </div>

            <div className=''>
              <label className='block text-gray-700 font-bold '>
                Título obtenido<span className=' text-blue-500 '>*</span>{' '}
              </label>
              <input
                type='text'
                id='titulo'
                name='titulo'
                required
                className='border border-black p-2 w-full rounded'
              />
            </div>

            <div className=''>
              <label className='block text-gray-700 font-bold '>
                Fecha de graduación<span className=' text-blue-500 '>*</span>{' '}
              </label>
              <input
                type='date'
                id='fecha'
                name='fecha'
                required
                className='border border-black p-2 w-full rounded'
              />
            </div>

            <div className=''>
              <label className='block text-gray-700 font-bold '>
                Ciudad/País<span className=' text-blue-500 '>*</span>{' '}
              </label>
              <input
                type='text'
                id='ciudad_pais'
                name='ciudad_pais'
                required
                className='border border-black p-2 w-full rounded'
              />
            </div>

            <div className=''>
              <label className='block text-gray-700 font-bold '>
                Anexar certificados<span className=' text-blue-500 '>*</span>{' '}
              </label>
              <input
                type='file'
                id='certificados'
                name='certificados'
                accept='.pdf, .jpg, .png'
                required
                className='border border-black p-2 w-full rounded'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
