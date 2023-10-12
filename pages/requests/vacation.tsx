import Tabs from '@components/organisms/Tabs';
import React from 'react';
import { Icon } from '@iconify/react';

const vacaciones = () => (
  <div className='container mx-auto mt-8 p-8 grid justify-center font-bold'>
    <Tabs activePage='vacaciones' />
    
    <form action="" className='bg-gray-100 mt-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className='flex items-center'>
          <Icon icon="solar:glasses-bold" className='text-7xl' />
          <p className='text-xl font-semibold'>Solicitud Vacaciones</p>
        </div>
        <div>{ }</div>
        <div>
          <label htmlFor="" className="block text-gray-700 font-bold">Aprobadores<span className=' text-blue-500 '>*</span></label>
          <input type="text" className="border border-black p-2 w-full rounded" placeholder='escriba aca los destinatarios' />
        </div>
        <div />
        <div>
          <label htmlFor="" className="block text-gray-700 font-bold">Fecha de inicio de tu solicitud de vacaciones<span className=' text-blue-500 '>*</span></label>
          <input type="date" className="border border-black p-2 w-full rounded" />
        </div>
        <div>
          <label htmlFor="" className="block text-gray-700 font-bold">Fecha de terminación de tu solicitud de vacaciones<span className=' text-blue-500 '>*</span></label>
          <input type="date" className="border border-black p-2 w-full rounded" />
        </div>

        
      </div>
      
    </form>
  </div>
);

export default vacaciones;
