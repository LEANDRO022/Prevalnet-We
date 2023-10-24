import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';


const ModalCertificado = ({ isOpen, onClose}) => {
    const pdfUrl = 'https://www.scribd.com/doc/5439035/certificacion-laboral';

    const handleDownloadClick = () => {
      window.open(pdfUrl, '_blank');
    };
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div className='modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75'></div>
      <div className='modal-container bg-white w-full md:w-2/3 p-8 rounded-lg shadow-lg border-2 border-gray-300 z-50'>
      
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

export default ModalCertificado;
