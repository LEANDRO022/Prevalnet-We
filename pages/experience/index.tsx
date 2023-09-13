import React, { useState } from 'react';

const data = [
  {
    tipo: 'Tecnología',
    titulo: 'Tecnólogo en Sistemas',
    institucion: 'Institución A',
    año: 2020,
  },
  {
    tipo: 'Bachillerato',
    titulo: 'Título 2',
    institucion: 'Institución B',
    año: 2021,
  },
  {
    tipo: 'Secundaria',
    titulo: 'Título 3',
    institucion: 'Institución C',
    año: 2022,
  },
  {
    tipo: 'Bachillerato',
    titulo: 'Título 4',
    institucion: 'Institución D',
    año: 2023,
  },
  {
    tipo: 'Primaria',
    titulo: 'Título 5',
    institucion: 'Institución E',
    año: 2024,
  },
];

function Experience() {
  const [filtro, setFiltro] = useState('');

  const filteredData = data.filter((item) =>
    item.tipo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className='overflow-x-auto md:p-16 p-10'>
      <p className='text-gray-500 lg:text-3xl font-semibold pb-3'>
        Lista de certificados
      </p>
      <div className='md:flex items-center'>
        <a
          href='../academy'
          className='bg-colorCyan text-white font-bold py-2 px-4 rounded-md md:w-1/5 mr-2 hover:bg-opacity-80 transition duration-300'
        >
          Agregar Certificado
        </a>
        <div className='w-full my-4'>
          <input
            type='text'
            placeholder='Filtrar por tipo...'
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className='border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-colorCyan'
          />
        </div>
      </div>
      <div className='shadow-lg'>
        <table className='w-full overflow-hidden border border-gray-200 shadow-md rounded'>
          <thead className='bg-colorCyan text-white'>
            <tr className='text-left'>
              <th className='py-3 px-6 border-r border-gray-200'>Tipo</th>
              <th className='py-3 px-6 border-r border-gray-200'>Título</th>
              <th className='py-3 px-6 border-r border-gray-200'>
                Institución
              </th>
              <th className='py-3 px-6 border-r border-gray-200'>
                Año que finalizó
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className='py-4 px-6 border-r border-gray-200'>
                  {item.tipo}
                </td>
                <td className='py-4 px-6 border-r border-gray-200'>
                  {item.titulo}
                </td>
                <td className='py-4 px-6 border-r border-gray-200'>
                  {item.institucion}
                </td>
                <td className='py-4 px-6'>{item.año}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
