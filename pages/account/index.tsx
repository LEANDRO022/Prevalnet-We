import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Button from '@components/atoms/Buttons/Button';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import InputDate from '@components/atoms/Inputs/InputDate';

const DEFAULT_PROFILE_IMAGE =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

export default function Account() {
  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_IMAGE);
  const [name, setName] = useState('Sebastian Londoño');
  const [email, setEmail] = useState('slondono@prevalentware.com');
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState('');
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
  const [calculatedAge, setCalculatedAge] = useState('');

  useEffect(() => {
    const formIsValid =
      updatedName.trim() !== '' &&
      updatedEmail.trim() !== '' &&
      updatedBirthday &&
      updatedGender &&
      updatedDocumentType &&
      updatedDocumentNumber.trim() !== '';

    setIsFormValid(formIsValid);

    const newAge = calculateAge(updatedBirthday);

    if (typeof newAge === 'number' && newAge < 10) {
      setShowAgeAlert(true);
      setIsFormValid(false);
    } else {
      setShowAgeAlert(false);
    }
  }, [
    updatedName,
    updatedEmail,
    updatedBirthday,
    updatedGender,
    updatedDocumentType,
    updatedDocumentNumber,
  ]);

  const calculateAge = birthDate => {
    if (!birthDate) {
      return '';
    }

    const today = new Date();
    const birth = new Date(birthDate);

    const yearsDiff = today.getFullYear() - birth.getFullYear();
    const isBeforeBirthday =
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate());

    const newCalculatedAge = isBeforeBirthday ? yearsDiff - 1 : yearsDiff;

    return newCalculatedAge;
  };

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

      const newAge = calculateAge(updatedBirthday);
      if (typeof newAge === 'number') {
        setShowAgeAlert(newAge <= 10);
        setCalculatedAge(newAge.toString());
      } else {
        setShowAgeAlert(false);
        setCalculatedAge('');
      }
    }
  };

  const handleCancelChanges = () => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedBirthday(birthday);
    setUpdatedGender(gender);
    setUpdatedDocumentType(documentType);
    setUpdatedDocumentNumber(documentNumber);
  };

  const documentTypeOptions = [
    { value: 'Cedula de Ciudadanía', label: 'Cedula de Ciudadanía' },
    { value: 'Cedula de Extranjería', label: 'Cedula de Extranjería' },
    { value: 'Tarjeta de Identidad', label: 'Tarjeta de Identidad' },
    { value: 'Pasaporte', label: 'Pasaporte' },
    {
      value: 'Registro Civil de Nacimiento',
      label: 'Registro Civil de Nacimiento',
    },
  ];

  const genderOptions = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
  ];

  return (
    <>
      <Head>
        <title>Mi Cuenta</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      <div className='flex justify-center items-center mt-4'>
        <div className='p-10'>
          <p className='text-gray-500 lg:text-3xl font-semibold text-center mb-5'>
            Mi Cuenta
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='lg:order-1 w-52 h-52 md:w-80 md:h-80 mx-auto relative'>
              <div className='rounded-full overflow-hidden w-full h-full'>
                <img
                  src={profileImage}
                  alt='Perfil'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='absolute bottom-0 left-0 right-0 flex justify-center mt-2'>
                <label
                  htmlFor='imageInput'
                  className='bg-colorCyan text-white rounded px-3 py-1 text-xs cursor-pointer transition duration-300 ease-in-out hover:bg-opacity-90'
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
                  className='bg-red-500 text-white rounded px-3 py-1 text-xs ml-2 transition duration-300 ease-in-out hover:bg-opacity-90'
                  onClick={handleImageDelete}
                >
                  Eliminar
                </button>
              </div>
            </div>
            <div className='lg:order-2 flex flex-col justify-center'>
              <p className='text-black font-semibold lg:text-xl text-center mb-4'>
                {name}
              </p>
              <div className='text-gray-500 text-sm font-semibold'>
                <p>
                  Correo Electrónico:{' '}
                  <span className='text-black font-normal'>{email}</span>
                </p>
                <p>
                  Edad:{' '}
                  <span className='text-black font-normal'>
                    {calculatedAge}
                  </span>
                </p>
                <p>
                  Género:{' '}
                  <span className='text-black font-normal'>{gender}</span>
                </p>
                <p>
                  Tipo de Documento:{' '}
                  <span className='text-black font-normal'>{documentType}</span>
                </p>
                <p>
                  Documento:{' '}
                  <span className='text-black font-normal'>
                    {documentNumber}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-1 gap-4 mt-8'>
            {showAgeAlert && (
              <div className='text-red-500 text-sm'>
                Debes tener al menos 10 años.
              </div>
            )}
            <div className='lg:col-span-2 mt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-4'>
                  <div>
                    <InputText
                      label='Nombre'
                      name='newName'
                      value={updatedName}
                      onChange={e => setUpdatedName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <InputText
                      label='Correo Electrónico'
                      name='newEmail'
                      value={updatedEmail}
                      onChange={e => setUpdatedEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <InputSelectForm
                      text='Género'
                      opts={genderOptions}
                      value={{ value: updatedGender, label: updatedGender }}
                      onChange={selectedOption =>
                        setUpdatedGender(selectedOption.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <InputDate
                      label='Fecha de Nacimiento'
                      selectedDate={updatedBirthday}
                      onChange={date => setUpdatedBirthday(date)}
                      required
                    />
                  </div>
                  <div>
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
                  </div>
                  <div>
                    <InputText
                      label='Número de Documento'
                      name='newDocumentNumber'
                      value={updatedDocumentNumber}
                      onChange={e => setUpdatedDocumentNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row lg:justify-end justify-center mt-6 mb-3 gap-3'>
            <Button
              text='Guardar'
              type='button'
              priority='primary'
              onClick={handleSaveChanges}
              disabled={!isFormValid || showAgeAlert}
            />
            <Button
              text='Cancelar'
              type='button'
              priority='secondary'
              onClick={handleCancelChanges}
            />
          </div>
        </div>
      </div>
    </>
  );
}
