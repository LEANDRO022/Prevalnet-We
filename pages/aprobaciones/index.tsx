import NavLeft from '@components/organisms/NavLeft';
import React from 'react';
import { Icon } from '@iconify/react';
import Button from '@components/atoms/Buttons/Button';
import Head from 'next/head';

const inicio = () => (
    <div className='container mx-auto mt-8 p-8 grid '>
        <Head>
            <title>Solicitar medio día</title>
            <link rel='icon' href='/img/Favicon.png' />
        </Head>
        <NavLeft activePage="" />
    </div>
);

export default inicio;