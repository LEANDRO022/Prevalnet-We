import Button from '@components/atoms/Buttons/Button';
import Tabs from '@components/organisms/Tabs';
import Head from 'next/head';
import React from 'react';

const Certificado = () => {
  const pdfUrl = 'https://www.scribd.com/doc/5439035/certificacion-laboral';

  const handleDownloadClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Head>
        <title>Certificado laboral</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>      
      
    </div>
  );
};

export default Certificado;
