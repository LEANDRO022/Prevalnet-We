import NavLeft from '@components/organisms/NavLeft';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';
import Head from 'next/head';

import { useState } from 'react';

function inicio() {
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
                <title>Inicio</title>
                <link rel='icon' href='/img/Favicon.png' />
            </Head>
            <NavLeft activePage="Solicitudes_p2" />

           
        </div>
    )
};

export default inicio;