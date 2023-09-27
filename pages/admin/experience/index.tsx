import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const data = [
  {
    id: 1,
    firstName: 'Sebastian',
    lastName: 'Londoño',
    email: 'sebaslon@gmail.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2022',
      },
      {
        type: 'Certificado 2',
        title: 'Título 2',
        year: '2021',
      },
    ],
    isExpanded: false,
  },
  {
    id: 2,
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan@example.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2022',
      },
      {
        type: 'Certificado 2',
        title: 'Título 2',
        year: '2021',
      },
    ],
    isExpanded: false,
  },
  {
    id: 3,
    firstName: 'Ana',
    lastName: 'Gómez',
    email: 'ana@example.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2023',
      },
    ],
    isExpanded: false,
  },
  {
    id: 4,
    firstName: 'Pedro',
    lastName: 'Sánchez',
    email: 'pedro@example.com',
    certificates: [],
    isExpanded: false,
  },
  {
    id: 5,
    firstName: 'María',
    lastName: 'López',
    email: 'maria@example.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2022',
      },
      {
        type: 'Certificado 2',
        title: 'Título 2',
        year: '2021',
      },
    ],
    isExpanded: false,
  },
  {
    id: 6,
    firstName: 'Carlos',
    lastName: 'Martínez',
    email: 'carlos@example.com',
    certificates: [
      {
        type: 'Certificado 1',
        title: 'Título 1',
        year: '2023',
      },
      {
        type: 'Certificado 2',
        title: 'Título 2',
        year: '2020',
      },
    ],
    isExpanded: false,
  },
];

function CertificateTable({ rowData }) {
  if (!rowData.certificates || rowData.certificates.length === 0) {
    return null;
  }

  return (
    <table className='w-full border-collapse border-t mb-2'>
      <thead className='bg-gray-300'>
        <tr className='text-left'>
          <th className='py-4 px-4 border-gray-400 font-n'>Tipo</th>
          <th className='py-4 px-4 border-gray-400'>Titulo</th>
          <th className='py-4 px-4 border-gray-400'>Año que finalizó</th>
        </tr>
      </thead>
      <tbody>
        {rowData.certificates.map((certificate, index) => (
          <tr key={index} className={rowData.isExpanded ? 'bg-gray-300' : ''}>
            <td className='px-6 py-4 border-r border-gray-200'>
              {certificate.type}
            </td>
            <td className='px-4 py-2 border-r border-gray-200'>
              {certificate.title}
            </td>
            <td className='px-4 py-2'>{certificate.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Experience() {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleRowClick = index => {
    if (data[index].certificates.length > 0) {
      setExpandedRowIndex(index === expandedRowIndex ? null : index);
    }
  };

  const [filtro, setFiltro] = useState('');

  const filteredData = data.filter(item =>
    item.firstName.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className='overflow-x-auto p-8 md:p-16'>
      <p className='text-gray-500 lg:text-3xl font-semibold pb-3'>
        Usuarios con certificados
      </p>
      <div className='w-full my-4 relative'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-4'>
          <FaSearch className='text-gray-400' />
        </span>
        <input
          type='text'
          placeholder='Buscar...'
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          className='border border-gray-300 rounded-md pl-12 py-2 w-full focus:outline-none focus:border-colorCyan'
        />
      </div>
      <div className='shadow-lg'>
        <table className='w-full overflow-hidden border border-gray-200 shadow-md rounded'>
          <thead className='bg-colorCyan text-white'>
            <tr className='text-left'>
              <th className='py-3 px-6 border-r border-gray-200'>Nombre</th>
              <th className='py-3 px-6 border-r border-gray-200'>Apellidos</th>
              <th className='py-3 px-6 border-r border-gray-200'>Correo</th>
              <th className='py-3 px-6 border-r border-gray-200'>
                Certificados
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr
                  onClick={() => handleRowClick(index)}
                  className={`cursor-pointer ${
                    data[index].certificates.length > 0 &&
                    index === expandedRowIndex
                      ? 'bg-gray-300'
                      : ''
                  }`}
                >
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.firstName}
                  </td>
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.lastName}
                  </td>
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.email}
                  </td>
                  <td className='py-4 px-6 border-r border-gray-200'>
                    {item.certificates.length > 0 ? 'Si' : 'No'}
                  </td>
                </tr>
                {index === expandedRowIndex && (
                  <tr>
                    <td colSpan={100}>
                      <div className='p-4'>
                        <CertificateTable rowData={item} />
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
