import React, { useState } from 'react';
import Head from 'next/head';
import Rating from '@mui/material/Rating';
import { Icon } from '@iconify/react';

export default function MyGrade() {
  const [mostrarTablaBackend, setMostrarTablaBackend] = useState(false);
  const [mostrarTablaFrontend, setMostrarTablaFrontend] = useState(false);

  const toggleMostrarTablaBackend = () => {
    setMostrarTablaBackend(!mostrarTablaBackend);
  };

  const toggleMostrarTablaFrontend = () => {
    setMostrarTablaFrontend(!mostrarTablaFrontend);
  };

  const [backendGrades, setBackendGrades] = useState({
    GO: 0.0,
    PHP: 0.0,
    'C+': 0.0,
    JAVA: 0.0,
    PYTHON: 0.0,
  });

  const [frontendGrades, setFrontendGrades] = useState({
    HTML: 0.0,
    CSS: 0.0,
    JAVASCRIPT: 0.0,
    VUE: 0.0,
    REACT: 0.0,
  });

  const renderGrades = (grades, setGrades) => (
    <form className='grid gap-5 mt-4'>
      <div>
        <span className='text-gray-400'>Calificaciones personales</span>
      </div>
      <div className='grid gap-2'>
        {Object.entries(grades).map(([subject, grade]) => (
          <div key={subject} className='flex items-center'>
            <span className='pr-2'>{subject}</span>
            <Rating
              name={subject}
              value={grade}
              onChange={(event, newValue) => {
                // Actualiza el estado local con la nueva calificación
                setGrades({ ...grades, [subject]: newValue });
              }}
              precision={0.1}
              className='ml-auto'
            />
          </div>
        ))}
      </div>
    </form>
  );

  return (
    <>
      <Head>
        <title>Mi Calificación</title>
        <link rel='icon' href='/public/img/icons/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gray-100'>
        <div className='mx-auto p-6 max-w-4xl '>
          <div className='bg-white rounded-lg shadow-md p-8'>
            <div className='flex justify-between items-center mb-8'>
              <p className='flex items-center text-gray-500 text-3xl font-semibold'>
                Mi Calificación
                <Icon
                  icon='material-symbols:star-outline'
                  className='text-yellow-300 text-4xl ml-2'
                />
              </p>
            </div>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5'>
                <div
                  className={`bg-white p-4 rounded-lg ${
                    mostrarTablaBackend ? 'shadow-md' : ''
                  }`}
                >
                  <div
                    className='flex cursor-pointer'
                    onClick={toggleMostrarTablaBackend}
                  >
                    <span className='pr-2'>Backend</span>
                    <Icon
                      icon={
                        mostrarTablaBackend ? 'fe:arrow-down' : 'fe:arrow-up'
                      }
                      className='text-gray-500'
                    />
                  </div>

                  {mostrarTablaBackend &&
                    renderGrades(backendGrades, setBackendGrades)}
                </div>

                <div
                  className={`bg-white p-4 rounded-lg ${
                    mostrarTablaFrontend ? 'shadow-md' : ''
                  }`}
                >
                  <div
                    className='flex cursor-pointer'
                    onClick={toggleMostrarTablaFrontend}
                  >
                    <span className='pr-2'>Frontend</span>
                    <Icon
                      icon={
                        mostrarTablaFrontend ? 'fe:arrow-down' : 'fe:arrow-up'
                      }
                      className='text-gray-500'
                    />
                  </div>

                  {mostrarTablaFrontend &&
                    renderGrades(frontendGrades, setFrontendGrades)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
