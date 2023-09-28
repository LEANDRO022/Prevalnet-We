import React, { useState } from 'react';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import InputPhone from '@components/atoms/Inputs/InputPhone';
import Head from 'next/head';
import Button from '@components/atoms/Buttons/Button';

import { useRouter } from 'next/router';
export const personasCargo = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
];

export default function Family() {
  const [familyInfo, setFamilyInfo] = useState([
    {
      name: '',
      relationship: '',
      age: '',
      documentType: '',
      identityDocument: '',
      livesWithYou: false,
    },
  ]);

  const addFamilyMember = () => {
    setFamilyInfo([
      ...familyInfo,
      {
        name: '',
        relationship: '',
        age: '',
        documentType: '',
        identityDocument: '',
        livesWithYou: false,
      },
    ]);
  };

  const removeFamilyMember = indexToRemove => {
    if (familyInfo.length > 1) {
      const newFamilyInfo = familyInfo.filter(
        (_, index) => index !== indexToRemove
      );
      setFamilyInfo(newFamilyInfo);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOptionClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Mi Cuenta</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"                    >
          <span className="mt-2">Informacion familiar</span>
          <svg
            className={`-mr-1 ml-2 h-8 w-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
            <button
              onClick={() => handleOptionClick('../eyelashes/working_information')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              Informacion Laboral
            </button>
            <button
              onClick={() => handleOptionClick('../account')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              Informacion personal
            </button>
            <button
              onClick={() => handleOptionClick('../education/education')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              Educacion
            </button>
            <button
              onClick={() => handleOptionClick('../family')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              Familiar
            </button>
            <button
              onClick={() => handleOptionClick('/pagina5')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              Condiciones de salud
            </button>
            <button
              onClick={() => handleOptionClick('/pagina6')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              Solicitudes
            </button>
          </div>
        </div>
      )}

      <div className="lg:bg-blue-500 lg:p-3 lg:text-white lg:shadow-md lg:rounded-lg lg:mx-auto lg:mt-5 flex justify-center font-normal">
        <ul className="lg:flex lg:space-x-10 grid hidden">
          <li><a href="../eyelashes/working_information">Informacion laboral</a></li>
          <li><a href="../account">Informacion Personal</a></li>
          <li><a href="../education/education">Educacion</a></li>
          <li><a href="../family" className='font-bold underline'>Familiar</a></li>
          <li><a href="#">Condicion de salud</a></li>
          <li><a href="#">Solicitudes</a></li>
        </ul>
      </div>

      <div className='container mx-auto mt-8 p-8 max-w-screen-lg rounded-lg shadow-md'>
        <div className='text-gray-700 text-3xl font-semibold text-center mb-10'>
          Información Familiar
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <InputSelectForm
            text='# de personas a cargo económicamente'
            opts={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: 'Más', value: 'Más' },
            ]}
          />
        </div>
        <hr className='my-6 border-t border-gray-300' />
        <div className='mt-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Por favor describa la información familiar
          </label>
          <div className='grid md:grid-cols-2 gap-4'>
            {familyInfo.map((member, index) => (
              <React.Fragment key={index}>
                <InputText label='Nombre' name={`name_${index}`} required />
                <InputText
                  label='Parentesco'
                  name={`relationship_${index}`}
                  required
                />
                <InputText label='Edad' name={`age_${index}`} required />
                <InputText
                  label='Tipo de documento'
                  name={`documentType_${index}`}
                  required
                />
                <InputText
                  label='Documento de identidad'
                  name={`identityDocument_${index}`}
                  required
                />
                <div className='mb-2'>
                  <label className='block text-gray-700 text-sm font-bold'>
                    Vive con usted
                  </label>
                  <input
                    type='checkbox'
                    name={`livesWithYou_${index}`}
                    className='form-checkbox h-5 w-5 text-blue-600'
                  />
                  {index > 0 && (
                    <Button
                      type='button'
                      onClick={() => removeFamilyMember(index)}
                      text='Eliminar Miembro Familiar'
                      priority='secondary'
                    />
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className='mt-5'>
            <Button
              type='button'
              onClick={addFamilyMember}
              text='Agregar Miembro Familiar'
              priority='primary'
            />
          </div>
        </div>
        <div className='mt-8'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Por favor registre un contacto personal o familiar con el que nos
            podamos comunicar en caso de emergencia
          </label>
          <div className='grid md:grid-cols-4 gap-4'>
            <InputText label='Nombre' name='emergencyContactName' required />
            <InputText
              label='Parentesco'
              name='emergencyContactRelationship'
              required
            />
            <InputPhone label='Celular' name='emergencyContactPhone' required />
            <InputText
              label='Correo electrónico'
              name='emergencyContactEmail'
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}
