import Tabs from '@components/organisms/Tabs';
import React from 'react';
import { Icon } from '@iconify/react';


const regalo = () => (
  <div className='container mx-auto mt-8 p-8 grid justify-center font-bold'>
    <Tabs activePage='regalo' />

    <form action="" className='bg-gray-100 grid gap-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className='flex items-center gap-4'>
          <Icon icon="mdi:medal-outline" className='text-7xl text-color-gray-600' /><p className='text-xl font-semibold'>Medio dia libre por cumpleaños</p>
        </div>
        <div></div>

        <div className='gap-4'>
          <label htmlFor="" className="block text-gray-700 font-bold">Aprobadores<span className=' text-blue-500 '>*</span></label>
          <input type="text" className="border border-black p-2 w-full rounded" placeholder='escriba aca los destinatarios'/>
        </div>
        
        <div className='gap-4'>
          <label htmlFor="" className="block text-gray-700 font-bold">Fecha<span className=' text-blue-500 '>*</span></label>
          <input type="date" className="border border-black p-2 w-full rounded" />
        </div>

        <div className='gap-4'>
          <label htmlFor="">Franja horaria<span className=' text-blue-500 '>*</span></label>
          <div className='ml-2'>
          <input type="radio" id='jornada' name='jornada' value={'si'}/> <span className='text-gray-400'>Mañana</span>
          </div>
          <div className='ml-2'>
          <input type="radio" id='jornada' name='jornada' value={'no'}/> <span className='text-gray-400'>Tarde</span>
          </div>
        </div>

      </div>
    </form>

  </div>

);

export default regalo;
