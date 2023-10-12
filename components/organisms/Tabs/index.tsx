import React, { useState } from 'react';

import Button from '@components/atoms/Buttons/Button';
import { FaPlus } from 'react-icons/fa';
import { TbBellQuestion } from 'react-icons/tb';

function Tabs({ activePage }) {
  const [activeTab, setActiveTab] = useState(activePage);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabItems = [
    { id: 'cesantias', label: 'Cesantías' },
    { id: 'vacaciones', label: 'Vacaciones' },
    { id: 'familia', label: 'Día de la familia' },
    { id: 'regalo', label: 'Regalo medio día de cumpleaños' },
    { id: 'permisos', label: 'Permisos especiales' },
    { id: 'certificado', label: 'Descargar certificado laboral' },
  ];

  return (
    <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
      <div className='mb-3 flex flex-wrap -m-px justify-between'>
        <a
          className={`text-3xl font-medium inline-block pb-4 border-b-4 ${
            activeTab === 'solicitudes'
              ? 'text-colorCyan border-colorCyan'
              : 'border-transparent'
          } hover:text-colorCyan hover:border-colorCyan`}
          href='/solicitudes'
        >
          Mis Solicitudes
        </a>
        <div className='flex items-center mt-4'>
          <a
            className='flex items-center mx-6 text-colorCyan'
            href='/solicitudes'
          >
            <TbBellQuestion className='text-lg mr-2' />
            Ver mis solicitudes
          </a>

          <Button type='button' priority='primary' text='Nueva Solicitud'>
            <FaPlus className='mr-2' />
          </Button>
        </div>
      </div>
      <ul className='flex flex-wrap -mb-px'>
        {tabItems.map((tab) => (
          <li key={tab.id} className='mr-2'>
            <a
              href={`/solicitudes/${tab.id}`}
              className={`inline-block p-4 border-b-4 rounded-t-lg ${
                activeTab === tab.id
                  ? 'text-colorCyan border-colorCyan'
                  : 'border-transparent'
              } hover:text-colorCyan hover:border-colorCyan`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
