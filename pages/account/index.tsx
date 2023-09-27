import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from '@components/atoms/Buttons/Button';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import InputDate from '@components/atoms/Inputs/InputDate';
import InputPhone from '@components/atoms/Inputs/InputPhone';
import InputNumber from '@components/atoms/Inputs/InputNumber';
import {
  DEFAULT_PROFILE_IMAGE,
  documentTypeOptions,
  genderOptions,
  sections,
} from './constants';

export default function Account() {
  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_IMAGE);
  const [currentSection, setCurrentSection] = useState(1);
  const [name, setName] = useState('Sebastian Londoño');
  const [email, setEmail] = useState('slondono@prevalentware.com');
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState('');
  const [expeditionDate, setExpeditionDate] = useState(null);
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('1023625799');
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedBirthday, setUpdatedBirthday] = useState(birthday);
  const [updatedGender, setUpdatedGender] = useState(gender);
  const [updatedDocumentType, setUpdatedDocumentType] = useState(documentType);
  const [updatedDocumentNumber, setUpdatedDocumentNumber] = useState(
    documentNumber
  );
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAgeAlert, setShowAgeAlert] = useState(false);
  // const [calculatedAge, setCalculatedAge] = useState('');

  // const calculateAge = birthDate => {
  //   if (!birthDate) {
  //     return '';
  //   }

  //   const today = new Date();
  //   const birth = new Date(birthDate);

  //   const yearsDiff = today.getFullYear() - birth.getFullYear();
  //   const isBeforeBirthday =
  //     today.getMonth() < birth.getMonth() ||
  //     (today.getMonth() === birth.getMonth() &&
  //       today.getDate() < birth.getDate());

  //   const newCalculatedAge = isBeforeBirthday ? yearsDiff - 1 : yearsDiff;

  //   return newCalculatedAge;
  // };

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      (selectedFile instanceof Blob || selectedFile instanceof File)
    ) {
      const newImage = URL.createObjectURL(selectedFile);
      setProfileImage(newImage);
    }
  };

  const handleImageDelete = () => {
    setProfileImage(DEFAULT_PROFILE_IMAGE);
  };

  const handleSaveChanges = () => {
    if (isFormValid) {
      setName(updatedName);
      setEmail(updatedEmail);
      setGender(updatedGender);
      setDocumentType(updatedDocumentType);
      setDocumentNumber(updatedDocumentNumber);
      setBirthday(updatedBirthday);

      // const newAge = calculateAge(updatedBirthday);
      // if (typeof newAge === 'number') {
      //   setShowAgeAlert(newAge <= 10);
      //   setCalculatedAge(newAge.toString());
      // } else {
      //   setShowAgeAlert(false);
      //   setCalculatedAge('');
      // }
    }
  };

  useEffect(() => {
    const formIsValid =
      updatedName.trim() !== '' &&
      updatedEmail.trim() !== '' &&
      updatedBirthday &&
      updatedGender &&
      updatedDocumentType &&
      updatedDocumentNumber.trim() !== '';

    setIsFormValid(formIsValid);

    // const newAge = calculateAge(updatedBirthday);

    // if (typeof newAge === 'number' && newAge < 10) {
    //   setShowAgeAlert(true);
    //   setIsFormValid(false);
    // } else {
    //   setShowAgeAlert(false);
    // }
  }, [
    updatedName,
    updatedEmail,
    updatedBirthday,
    updatedGender,
    updatedDocumentType,
    updatedDocumentNumber,
  ]);

  return (
    <>
      <Head>
        <title>Mi Cuenta</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      <div className='container mx-auto mt-8 p-8  max-w-screen-lg  rounded-lg shadow-md'>
        {/* <div className='text-gray-700 text-3xl font-semibold text-center mb-5'>
          Mi Cuenta
        </div> */}
        <div>
          <div className='relative w-40 h-40 md:w-60 md:h-60 mx-auto mb-4'>
            <div className='rounded-full overflow-hidden w-full h-full border-4 border-white shadow-lg'>
              <Image
                src={profileImage}
                alt='Perfil'
                width={208}
                height={208}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex justify-center mt-2'>
              <label
                htmlFor='imageInput'
                className='bg-blue-500 text-white rounded px-3 py-1 text-xs cursor-pointer transition duration-300 ease-in-out hover-bg-opacity-90'
              >
                Cambiar
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden'
                  id='imageInput'
                />
              </label>
              <button
                type='button'
                className='bg-red-500 text-white rounded px-3 py-1 text-xs ml-2 transition duration-300 ease-in-out hover-bg-opacity-90'
                onClick={handleImageDelete}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <div className='pt-10'>
          {showAgeAlert && (
            <div className='text-red-500 text-sm mt-2'>
              Debes tener al menos 10 años.
            </div>
          )}
          <div className='mb-10 flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0 md:space-x-2'>
            {sections.map((section, index) => (
              <button
                key={section}
                type='button'
                className={`focus:outline-none px-4 py-2 md:text-lg font-semibold rounded-lg transition duration-300 ease-in-out ${
                  currentSection === index + 1
                    ? 'bg-colorCyan text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-colorCyan hover:text-white'
                }`}
                onClick={() => setCurrentSection(index + 1)}
              >
                {section}
              </button>
            ))}
          </div>

          {currentSection === 1 && (
            <div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <InputText
                  label='Nombre Completo'
                  name='newName'
                  value={updatedName}
                  onChange={e => setUpdatedName(e.target.value)}
                  required
                />
                <InputText
                  label='Correo Electrónico'
                  name='newEmail'
                  value={updatedEmail}
                  onChange={e => setUpdatedEmail(e.target.value)}
                  required
                />
                <InputPhone label='Telefono' name='' />
                <InputPhone label='Celular' name='' />
                <InputDate
                  label='Fecha de Nacimiento'
                  selectedDate={updatedBirthday}
                  onChange={date => setUpdatedBirthday(date)}
                  required
                />
                <InputSelectForm
                  text='Tipo de Documento'
                  opts={documentTypeOptions}
                  value={{
                    value: updatedDocumentType,
                    label: updatedDocumentType,
                  }}
                  onChange={selectedOption =>
                    setUpdatedDocumentType(selectedOption.value)
                  }
                  required
                />
                <InputNumber
                  label='Número de Documento'
                  name='newDocumentNumber'
                  value={updatedDocumentNumber}
                  onChange={e => setUpdatedDocumentNumber(e.target.value)}
                  required
                />
                <InputDate
                  label='Fecha de Expedicion'
                  selectedDate={expeditionDate}
                  onChange={date => setExpeditionDate(date)}
                  required
                />
                <InputText label='Lugar de Expedición' name='' required />
                <InputSelectForm text='País de Nacimiento' required opts={[]} />
                <InputSelectForm
                  text='Departamento de Nacimiento'
                  required
                  opts={[]}
                />
                <InputSelectForm
                  text='Municipio de Nacimiento'
                  required
                  opts={[]}
                />
                <InputSelectForm
                  text='Sexo'
                  opts={genderOptions}
                  value={{ value: updatedGender, label: updatedGender }}
                  onChange={selectedOption =>
                    setUpdatedGender(selectedOption.value)
                  }
                />
                <InputSelectForm text='Estado Civil' opts={[]} />
                <InputSelectForm text='Raza' opts={[]} />
              </div>
            </div>
          )}
          {currentSection === 2 && (
            <div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <InputText label='Dirección de Residencia' name='' required />
                <InputSelectForm text='Tipo de Vivienda' required opts={[]} />
                <InputSelectForm text='Estrato' required opts={[]} />
                <InputSelectForm
                  text='Municipio de Residencia'
                  required
                  opts={[]}
                />
                <InputSelectForm
                  text='Departamento de Residencia'
                  required
                  opts={[]}
                />
                <InputSelectForm text='País de Residencia' required opts={[]} />
              </div>
            </div>
          )}
          {currentSection === 3 && (
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InputSelectForm text='EPS' required opts={[]} />
                <InputSelectForm text='Fondo de Pensiones' required opts={[]} />
                <InputSelectForm text='Fondo de Cesantías' required opts={[]} />
                <InputSelectForm
                  text='Caja de Compensación'
                  required
                  opts={[]}
                />
              </div>
            </div>
          )}
        </div>
        <div className='flex justify-center mt-8'>
          <Button
            onClick={handleSaveChanges}
            disabled={!isFormValid}
            text='Guardar Cambios'
            type='button'
            priority='primary'
          />
        </div>
      </div>
    </>
  );
}
