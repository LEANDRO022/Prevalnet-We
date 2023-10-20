import Button from '@components/atoms/Buttons/Button';
import InputNumber from '@components/atoms/Inputs/InputNumber';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import Tabs from '@components/organisms/Tabs';
import Head from 'next/head';
import { useState } from 'react';
import { MdOutlineWorkOutline } from 'react-icons/md';

const optTipoDocumento = [
  { value: 'Cedula de Ciudadanía', label: 'Cédula de Ciudadanía' },
  { value: 'Cedula de Extranjería', label: 'Cédula de Extranjería' },
  { value: 'Tarjeta de Identidad', label: 'Tarjeta de Identidad' },
];

const optFinalidad = [
  { value: 'Compra de vivienda', label: 'Compra de vivienda' },
  { value: 'Educación', label: 'Educación' },
  { value: 'Desempleo involuntario', label: 'Desempleo involuntario' },
  { value: 'Emergencias médicas', label: 'Emergencias médicas' },
];

function Cesantias() {
  const [tipoDocumento, setTipoDocumento] = useState(null);
  const [finalidad, setFinalidad] = useState(null);

  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Head>
        <title>Solicitar cesantías</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>

      <Tabs activePage='cesantias' />
      
    </div>
  );
}

export default Cesantias;
