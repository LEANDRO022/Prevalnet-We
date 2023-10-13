import React from 'react';

const Modal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen) {
    return null;
  }

  const statusColorClass =
    cardData.status === 'Pendiente'
      ? 'text-orange-500'
      : cardData.status === 'Rechazado'
      ? 'text-red-500'
      : 'text-green-500';

  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'
      onClick={onClose}
    >
      <div className='modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75'></div>
      <div className='modal-container bg-white w-full md:w-2/3 p-8 rounded-lg shadow-lg border-2 border-gray-300 z-50'>
        <div className='mb-8'>
          <p className='text-2xl font-semibold mb-2'>Tipo de solicitud</p>
          <p className='text-lg ml-2'>{cardData.type}</p>
        </div>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <p className='font-semibold mb-1'>Creado:</p>
            <p className='ml-2'>{cardData.createdDate}</p>
          </div>
          <div>
            <p className='font-semibold mb-1'>Enviado a:</p>
            <p className='ml-2'>{cardData.sentTo}</p>
          </div>
          <div>
            <p className='font-semibold mb-1'>Certificado:</p>
            <p className='ml-2'>
              {cardData.status === 'Pendiente'
                ? 'Pendiente'
                : cardData.status === 'Rechazado'
                ? 'Solicitud rechazada'
                : 'Listo para descargar'}
            </p>
          </div>
          <div>
            <p className='font-semibold mb-1'>Estado:</p>
            <p className={`ml-2 ${statusColorClass}`}>{cardData.status}</p>
          </div>
        </div>
        <hr className='my-8' />
        <div className='grid justify-start'>
          {cardData.status === 'Aprobado' && (
            <button className='bg-colorCyan text-white py-2 px-4 rounded-lg mt-2'>
              Descargar Certificado
            </button>
          )}
        </div>
        <div className='grid justify-end'>
          <button
            className='bg-gray-500 text-white py-2 px-4 rounded-lg mt-2'
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
