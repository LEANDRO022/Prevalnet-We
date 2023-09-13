import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Icon } from '@iconify/react';
import { FaEdit } from 'react-icons/fa';

const timelineData = [
  {
    date: '2023 - present',
    title: 'Inició en PrevalentWare',
    type: 'Aprendiz SENA',
    icon: 'fa-solid:suitcase',
  },
  {
    date: '2022 - present',
    title: 'Inicio en Sena',
    type: 'Tecnologo en Analisis y Desarrollo en Sistemas de Información',
    icon: 'fa-solid:university',
  },
  {
    date: '2020 - 2021',
    title: 'Finalizó en Liceo Antioqueño',
    type: 'Tecnica Profesional de Sistemas en Programacion y Mantenimiento de Computadores',
    icon: 'fa-solid:check-double',
  },
  
  {
    date: '2017 - 2018',
    title: 'Inició en PrevalentWare',
    type: 'Aprendiz SENA',
    icon: 'fa-solid:suitcase',
  },
  {
    date: '2017 - 2017',
    title: 'Inicio en Sena',
    type: 'Tecnologo en Analisis y Desarrollo en Sistemas de Información',
    icon: 'fa-solid:university',
  },
];

// timelineData.sort((a, b) => {
//   const dateA = new Date(a.date.split(' - ')[0]);
//   const dateB = new Date(b.date.split(' - ')[0]);
//   return dateB - dateA;
// });

const iconColors = {
  'fa-solid:university': '#facc15',
  'fa-solid:suitcase': '#4ade80',
  'fa-solid:check-double': '#ef4444',
};

const TimeLineVertical = () => {
  return (
    <div className='py-16'>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work relative'
            contentStyle={{
              background: index % 2 === 0 ? '#3498db' : '#fff',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
              color: index % 2 === 0 ? '#fff' : '#333',
              fontFamily: 'Arial, sans-serif',
            }}
            contentArrowStyle={{ borderRight: '12px solid #3498db' }}
            date={<span style={{ color: '#333' }}>{item.date}</span>}
            iconStyle={{
              background: iconColors[item.icon],
              color: '#fff',
            }}
            icon={<Icon icon={item.icon} />}
          >
            <h3 className='vertical-timeline-element-title'>{item.title}</h3>
            <p>{item.type}</p>
            <div className='absolute lg:top-2 right-2'>
              <button className='font-normal'>
                <Icon icon='tabler:edit' width={25} className='m-2' />
              </button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLineVertical;
