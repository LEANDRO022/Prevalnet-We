import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Rating from '@mui/material/Rating';
import { Icon } from '@iconify/react';


export default function MyGrade() {
    const [mostrarTabla, setMostrarTabla] = useState(true);

    const toggleMostrarTabla = () => {
        setMostrarTabla(!mostrarTabla);
    };

    useEffect(() => {
        // Si la tabla está oculta inicialmente, cambia el estado para mostrar el formulario.
        if (!mostrarTabla) {
            toggleMostrarTabla();
        }
    }, []);

    const [mostrarTabla1, setMostrarTabla1] = useState(true);

    const toggleMostrarTabla1 = () => {
        setMostrarTabla1(!mostrarTabla1);
    };

    useEffect(() => {
        // Si la tabla está oculta inicialmente, cambia el estado para mostrar el formulario.
        if (!mostrarTabla) {
            toggleMostrarTabla();
        }
    }, []);
    const [backendGrades, setBackendGrades] = useState({
        GO: 0.0,
        PHP: 0.0,
        "C+": 0.0,
        JAVA: 0.0,
        PYTHON: 0.0,
    });
    const [frontendGrades, setFrontendGrades] = useState({
        HTML: 0.0,
        CSS: 0.0,
        JAVASCRIPT: 0.0, 
        VUE: 0.0,
        REACT: 0.0,
    });

    return (
<div className="lg:grid lg:justify-center lg:items-center font-bold">
                <Head>
                <title>Mi Calificación</title>
                <link rel='icon' href='/public/img/icons/favicon.ico' />
            </Head>

            <div className="grid justify-center mt-5 items-center">
                <h1 className="text-gray-400 flex items-center">
                    Mi Calificación
                    <Icon icon="material-symbols:star-outline" className="text-yellow-300 text-4xl ml-2" />
                </h1>
            </div>

            <div className="lg:grid lg:grid-cols-2">

                <div className=" ml-16 grid mt-5 items-center lg:w-full lg:col-span-1 lg:ml-0">
                    <div className="flex" onClick={toggleMostrarTabla} >
                        <span>Backed</span>
                        <span className="mb-1 ml-5">
                            {mostrarTabla ? (
                                <Icon icon="fe:arrow-down" className="cursor-pointer" />
                            ) : (
                                <Icon icon="fe:arrow-up" className="cursor-pointer" />
                            )}
                        </span>
                    </div>

                    {mostrarTabla ? (
                        <table></table>
                    ) : (
                        <form className="grid gap-5 ">
                            <div>
                                <span className="text-gray-400">calificaciones personales backend</span>
                            </div>
                            <div className="grid gap-5">
                                <div className="flex items-center">
                                    <span>GO</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={backendGrades.GO} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setBackendGrades({ ...backendGrades, GO: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>PHP</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={backendGrades.PHP} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setBackendGrades({ ...backendGrades, PHP: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>C+</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={backendGrades["C+"]} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setBackendGrades({ ...backendGrades, ["C+"]: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>JAVA</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={backendGrades.JAVA} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setBackendGrades({ ...backendGrades, JAVA: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>PYTHON</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={backendGrades.PYTHON} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setBackendGrades({ ...backendGrades, PYTHON: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                            </div>
                           

                        </form>

                    )}
                </div>

                <div className="ml-16 grid mt-5 items-center lg:col-span-1 lg:w-full">
                    <div className="flex" onClick={toggleMostrarTabla1} >
                        <span>Frontend</span>
                        <span className="mb-1 ml-5">
                            {mostrarTabla1 ? (
                                <Icon
                                    icon="fe:arrow-down"
                                    className="cursor-pointer"
                                />
                            ) : (
                                <Icon
                                    icon="fe:arrow-up"
                                    className="cursor-pointer"
                                />
                            )}
                        </span>
                    </div>

                    {mostrarTabla1 ? (
                        <table></table>
                    ) : (
                        <form className="grid grid-cols-1 gap-5 ">
                            <div>
                                <span className="text-gray-400" >calificaciones personales Frontend</span>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex items-center">
                                    <span>HTML</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={frontendGrades.HTML} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setFrontendGrades({ ...frontendGrades, HTML: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>CSS</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={frontendGrades.CSS} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setFrontendGrades({ ...frontendGrades, CSS: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>JAVASCRIPT</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={frontendGrades.JAVASCRIPT} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setFrontendGrades({ ...frontendGrades, JAVASCRIPT: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>VUE</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={frontendGrades.VUE} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setFrontendGrades({ ...frontendGrades, VUE: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                                <div className="flex items-center">
                                    <span>REACT</span>
                                    <span className="ml-auto mr-16"><Rating
                                        name="half-rating"
                                        value={frontendGrades.REACT} // Valor de la calificación
                                        onChange={(event, newValue) => {
                                            // Actualiza el estado local con la nueva calificación
                                            setFrontendGrades({ ...frontendGrades, REACT: newValue });
                                        }}
                                        precision={0.10}
                                    /></span>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
