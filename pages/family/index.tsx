import React, { useState } from 'react';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import InputPhone from '@components/atoms/Inputs/InputPhone';
import Head from 'next/head';
import Button from '@components/atoms/Buttons/Button';
import InputNumber from '@components/atoms/Inputs/InputNumber';

export const numPersonasCargo = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
];

const parentescoOptions = [
  { value: 'padre', label: 'Padre' },
  { value: 'madre', label: 'Madre' },
];

const typeDocumentoOptions = [
  { value: 'Cedula de Ciudadanía', label: 'Cédula de Ciudadanía' },
  { value: 'Cedula de Extranjería', label: 'Cédula de Extranjería' },
  { value: 'Tarjeta de Identidad', label: 'Tarjeta de Identidad' },
  { value: 'Pasaporte', label: 'Pasaporte' },
  {
    value: 'Registro Civil de Nacimiento',
    label: 'Registro Civil de Nacimiento',
  },
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
      const newFamilyInfo = [...familyInfo];
      newFamilyInfo.splice(indexToRemove, 1);
      setFamilyInfo(newFamilyInfo);
    }
  };

  const [personasCargo, setPersonasCargo] = useState(null);
  const [parentesco, setParentesco] = useState(null);
  const [typeDocumento, setTypeDocumento] = useState(null);

  return (
    <>
      <Head>
        <title>Mi Cuenta</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      <div className='container mx-auto mt-8 p-8 max-w-screen-lg rounded-lg shadow-md'>
        <div className='text-gray-700 text-3xl font-semibold text-center mb-10'>
          Información Familiar
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <InputSelectForm
            text='# de personas a cargo económicamente'
            opts={numPersonasCargo}
            value={personasCargo}
            onChange={selected => setPersonasCargo(selected)}
          />
        </div>
        <hr className='my-6 border-t border-gray-300' />
        <div className='mt-4'>
          <span className='block text-gray-700 text-sm font-bold mb-2'>
            Por favor describa la información familiar
          </span>
          <div className='grid md:grid-cols-2 gap-4'>
            {familyInfo.map((member, index) => (
              <div key={index} className='space-y-4 shadow-md p-6'>
                <p className='text-xl font-semibold mb-2'>
                  Miembro Familiar {index + 1}
                </p>
                <div className='mb-5 flex items-center'>
                  <span className='text-gray-700 text-sm font-bold'>
                    Marque si esta persona vive con usted
                  </span>
                  <input
                    type='checkbox'
                    name={`livesWithYou_${index}`}
                    className='form-checkbox h-5 w-5 text-blue-600 ml-2'
                  />
                </div>
                <div className='grid gap-4'>
                  <InputText label='Nombre' name={`name_${index}`} required />
                  <InputSelectForm
                    text='Parentesco'
                    opts={parentescoOptions}
                    required
                  />
                  <InputNumber label='Edad' name={`age_${index}`} required />
                  <InputSelectForm
                    text='Tipo de documento'
                    opts={typeDocumentoOptions}
                    required
                  />
                  <InputNumber
                    label='Documento de identidad'
                    name={`identityDocument_${index}`}
                    required
                  />
                </div>

                <div className='text-center pt-2'>
                  {index > 0 && (
                    <Button
                      type='button'
                      onClick={() => removeFamilyMember(index)}
                      text='Eliminar Miembro Familiar'
                      priority='secondary'
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='mt-5 text-center md:text-left'>
            <Button
              type='button'
              onClick={addFamilyMember}
              text='Agregar Miembro Familiar'
              priority='primary'
            />
          </div>
        </div>
        <div className='mt-8'>
          <hr className='my-6 border-t border-gray-300' />
          <span className='block text-gray-700 text-sm font-bold mb-5'>
            Por favor registre un contacto personal o familiar con el que nos
            podamos comunicar en caso de emergencia
          </span>
          <div className='grid md:grid-cols-2 gap-4'>
            <InputText label='Nombre' name='emergencyContactName' required />
            <InputSelectForm
              text='Parentesco'
              opts={parentescoOptions}
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
        <div className='mt-10 flex justify-center'>
          <Button text='Guardar' type='button' priority='primary' />
        </div>
      </div>
    </>
  );
}
