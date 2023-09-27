import React, { useState } from 'react';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import InputPhone from '@components/atoms/Inputs/InputPhone';
import Head from 'next/head';
import Button from '@components/atoms/Buttons/Button';

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
