import Head from "next/head";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function working_information() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleOptionClick = (path) => {
        router.push(path);
        setIsOpen(false);
    };
    return (
        <div className="grid justify-center font-bold">
            <div>
                <Head>
                    <title>Educacion</title>
                    <link rel='icon' href='/public/img/icons/favicon.ico' />
                </Head>
            </div>

            <div className="relative inline-block text-left">
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"                    >
                        <span className="mt-2">Educacion</span>
                        <svg
                            className={`-mr-1 ml-2 h-8 w-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                            <button
                                onClick={() => handleOptionClick('../eyelashes/working_information')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                            >
                                Informacion Laboral
                            </button>
                            <button
                                onClick={() => handleOptionClick('../account')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                            >
                                Informacion personal
                            </button>
                            <button
                                onClick={() => handleOptionClick('../education/education')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                            >
                                Educacion
                            </button>
                            <button
                                onClick={() => handleOptionClick('../family')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                            >
                                Familiar
                            </button>
                            <button
                                onClick={() => handleOptionClick('/pagina5')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                            >
                                Condiciones de salud
                            </button>
                            <button
                                onClick={() => handleOptionClick('/pagina6')}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                            >
                                Solicitudes
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="lg:bg-blue-500 lg:p-3 lg:text-white lg:shadow-md lg:rounded-lg lg:mx-auto lg:mt-5 flex justify-center font-normal">
                <ul className="lg:flex lg:space-x-10 grid hidden">
                    <li><a href="../eyelashes/working_information">Informacion laboral</a></li>
                    <li><a href="../account">Informacion Personal</a></li>
                    <li><a href="../education/education" className='font-bold underline'>Educacion</a></li>
                    <li><a href="../family">Familiar</a></li>
                    <li><a href="#">Condicion de salud</a></li>
                    <li><a href="#">Solicitudes</a></li>
                </ul>
            </div>

            <div>
                <div className="bg-white rounded-lg shadow-md mt-10 p-5 ml-5 mr-5 ">
                    <div className=""><span className="text-3xl font-bold text-gray-500">Educacion</span></div>
                    <form action="" >

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                            <div className="">
                                <label htmlFor="" className="block text-gray-700 font-bold ">Nivel de escolaridad<span className=' text-blue-500 '>*</span>{' '}</label>
                                <select name="" id="" className="border border-black p-2 w-full rounded">
                                    <option value="">Seleccione uno...</option>
                                    <option value="">####</option>
                                    <option value="">####</option>
                                    <option value="">####</option>
                                    <option value="">####</option>
                                </select>
                            </div>
                            <div className="">
                                <label className="block text-gray-700 font-bold ">Nombre de la institución educativa<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="text" id="institucion" name="institucion" required className="border border-black p-2 w-full rounded" />
                            </div>

                            <div className="">
                                <label className="block text-gray-700 font-bold ">Nivel de estudios<span className=' text-blue-500 '>*</span>{' '}</label>
                                <select id="nivel" name="nivel" required className="border border-black p-2 w-full rounded">
                                    <option value="Maestría">Maestría</option>
                                    <option value="Doctorado">Doctorado</option>
                                </select>
                            </div>

                            <div className="">
                                <label className="block text-gray-700 font-bold ">Título obtenido<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="text" id="titulo" name="titulo" required className="border border-black p-2 w-full rounded" />
                            </div>

                            <div className="">
                                <label className="block text-gray-700 font-bold ">Fecha de graduación<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="date" id="fecha" name="fecha" required className="border border-black p-2 w-full rounded" />
                            </div>

                            <div className="">
                                <label className="block text-gray-700 font-bold ">Ciudad/País<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="text" id="ciudad_pais" name="ciudad_pais" required className="border border-black p-2 w-full rounded" />
                            </div>

                            <div className="">
                                <label className="block text-gray-700 font-bold ">Anexar certificados<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="file" id="certificados" name="certificados" accept=".pdf, .jpg, .png" required className="border border-black p-2 w-full rounded" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}