import React, { useState } from 'react';

import Button from '@components/atoms/Buttons/Button';
import { FaPlus } from 'react-icons/fa';
import { TbBellQuestion } from 'react-icons/tb';

function Bnav({ activePage }) {
  const [activeTab, setActiveTab] = useState(activePage);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabItems = [
    { id: 'infoLaboral', label: 'Informacion Laboral' },
    { id: 'education', label: 'Educación' },
    { id: 'familia', label: 'Informacion Familiar' },
    { id: 'salud', label: 'Condiciones de salud' },
  ];

  return (
    <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
      <div className='mb-3 flex flex-wrap -m-px justify-between'>
        <a className={`text-3xl font-medium inline-block pb-4 `}>Gestión de perfil</a>       
      </div>
      
      <ul className='flex flex-wrap -mb-px'>
        {tabItems.map((tab) => (
          <li key={tab.id} className='mr-2'>
            <a
              href={`/ProfileProject/${tab.id}`}
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

export default Bnav;
