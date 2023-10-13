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
      
      <Tabs activePage='certificado' />
      <div className='bg-gray-100 container mx-auto mt-6 p-8 rounded-lg shadow-md'>
        <div className='flex justify-center my-4'>
          <Button
            type='button'
            priority='primary'
            text='Descargar certificado laboral'
            onClick={handleDownloadClick}
          />
        </div>
        <div className='mt-4 md:w-3/4 lg:w-full mx-auto'>
          <div className='p-2'>
            <embed
              src={pdfUrl}
              type='application/pdf'
              className='w-full'
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificado;
