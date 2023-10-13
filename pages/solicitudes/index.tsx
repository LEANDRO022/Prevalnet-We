import React, { useState } from 'react';
import Tabs from '@components/organisms/Tabs';
import Modal from './Modal';
import Head from 'next/head';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardData, setCardData] = useState({});

  const openModal = (data) => {
    setCardData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cardsData = [
    {
      id: 1,
      type: 'Vacaciones',
      createdDate: '18 de Octubre de 2023',
      sentTo: 'Mariangel Acosta',
      certificateStatus: '',
      status: 'Aprobado',
    },
    {
      id: 2,
      type: 'Cesantía',
      createdDate: '20 de Octubre de 2023',
      sentTo: 'Andrea Pelaez',
      certificateStatus: '',
      status: 'Pendiente',
    },
    {
      id: 3,
      type: 'Permiso especial',
      createdDate: '21 de Octubre de 2023',
      sentTo: 'Katherin Gonzales',
      certificateStatus: '',
      status: 'Rechazado',
    },
  ];

  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Head>
        <title>Mis solicitudes</title>
        <link rel='icon' href='/img/Favicon.png' />
      </Head>
      <Tabs activePage='solicitudes' />

      <div className='bg-gray-100 mt-6 p-4 sm:p-8 rounded-lg shadow-lg'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {cardsData.map((card) => (
            <div
              key={card.id}
              className='bg-white rounded-lg shadow-xl p-5 cursor-pointer'
              onClick={() => openModal(card)}
            >
              <div className='mt-2 mb-7'>
                <span className='font-semibold text-sm sm:text-lg grid justify-center mb-2'>
                  Solicitud de {card.type}
                </span>
                <hr />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='mb-4'>
                  <p className='font-semibold text-sm sm:text-base mb-2'>
                    Creado
                  </p>
                  <p className='text-sm sm:text-base mx-4'>
                    {card.createdDate}
                  </p>
                </div>
                <div className='mb-4'>
                  <p className='font-semibold text-sm sm:text-base mb-2'>
                    Enviado a
                  </p>
                  <p className='text-sm sm:text-base mx-4'>{card.sentTo}</p>
                </div>
                <div className='mb-4'>
                  <p className='font-semibold text-sm sm:text-base mb-2'>
                    Certificado
                  </p>
                  <button
                    className={`font-semibold text-sm sm:text-base py-2 px-4 
                      ${
                        card.status === 'Pendiente'
                          ? 'text-orange-500'
                          : card.status === 'Rechazado'
                          ? 'text-red-500'
                          : 'text-green-500 '
                      }`}
                  >
                    {card.status === 'Pendiente'
                      ? 'Pendiente'
                      : card.status === 'Rechazado'
                      ? 'Solicitud rechazada'
                      : 'Listo para descargar'}
                  </button>
                </div>
                <div className='mb-4'>
                  <p className='font-semibold text-sm sm:text-base mb-2'>
                    Estado
                  </p>
                  <button
                    className={`font-semibold text-sm sm:text-base py-2 px-4 rounded-lg mx-4 ${
                      card.status === 'Pendiente'
                        ? 'bg-orange-500 text-white'
                        : card.status === 'Rechazado'
                        ? 'bg-red-500 text-white'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {card.status}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} cardData={cardData} />
    </div>
  );
};

export default Index;
