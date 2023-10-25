import NavLeft from '@components/organisms/NavLeft';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';
import Head from 'next/head';
import Modal from '@components/organisms/Modals/CesantiasModal/regalo'
import { useState } from 'react';

function Regalo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='container mx-auto mt-8 p-8 grid '>
            <Head>
                <title>Solicitar medio día cumpleaños</title>
                <link rel='icon' href='/img/Favicon.png' />
            </Head>
            <NavLeft activePage="regalo" />

            <div>
                <div>
                    <button onClick={handleModalOpen}>Abrir Modal</button>
                    <Modal isOpen={isModalOpen} onClose={handleModalClose} />
                </div>
            </div>
        </div>
    )
};

export default Regalo;