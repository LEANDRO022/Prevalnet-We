import Button from '@components/atoms/Buttons/Button';
import InputDate from '@components/atoms/Inputs/InputDate';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import Tabs from '@components/organisms/Tabs';
import Head from 'next/head';
import { useState } from 'react';
import { MdFamilyRestroom } from 'react-icons/md';

const optAprobadores = [
  { value: 'Mariangel Acosta', label: 'Mariangel Acosta' },
  { value: 'Andrea Pelaez', label: 'Andrea Pelaez' },
  { value: 'Katherin Gonzales', label: 'Katherin Gonzales' },
];

function Familia() {
  const [aprobadores, setAprobadores] = useState(null);
  const [fechaDia, setFechaDia] = useState(null);


  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Head>
        <title>Solicitar día de la familia</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      
      <Tabs activePage='familia' />
      
    </div>
  );
}

export default Familia;
