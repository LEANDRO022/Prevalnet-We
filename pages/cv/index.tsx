import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

const timelineData = [
  {
    date: '2023 - Presente',
    title: 'Inició en PrevalentWare',
    type: 'Aprendiz SENA',
    icon: 'fa-solid:suitcase',
  },
  {
    date: '2022 - Presente',
    title: 'Inicio en Sena',
    type: 'Tecnólogo en Análisis y Desarrollo en Sistemas de Información',
    icon: 'fa-solid:university',
  },
  {
    date: '2020 - 2021',
    title: 'Finalizó en Liceo Antioqueño',
    type: 'Técnica Profesional de Sistemas en Programación y Mantenimiento de Computadores',
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
    type: 'Tecnólogo en Análisis y Desarrollo en Sistemas de Información',
    icon: 'fa-solid:university',
  },
];

const iconColors = {
  'fa-solid:university': '#3498db',
  'fa-solid:suitcase': '#4ade80',
  'fa-solid:check-double': '#ef4444',
};

const TimeLineVertical = () => {
  return (
    <div className="py-10">
      <VerticalTimeline layout="1-column">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element p-4 bg-white border border-gray-200 rounded-lg shadow-md"
            contentArrowStyle={{ borderRight: '7px solid #3498db' }}
            date={item.date}
            iconStyle={{
              background: iconColors[item.icon],
              color: '#fff',
            }}
            icon={<Icon icon={item.icon} className="text-3xl" />}
          >
            <h3 className="text-xl font-semibold text-blue-500">{item.title}</h3>
            <p className="text-gray-700 text-lg">{item.type}</p>
            <div className="absolute top-3 right-3">
              <button className="p-2 bg-blue-500 text-white rounded-full">
                <Icon icon="tabler:edit" width={18} />
              </button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLineVertical;
