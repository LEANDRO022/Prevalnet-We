import Head from "next/head";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function working_information() {
    const [mostrarElementosProteccion, setMostrarElementosProteccion] = useState(false);
    const [mostrarMaquinasHerramientas, setMostrarMaquinasHerramientas] = useState(false);

    const toggleElementosProteccion = () => {
        setMostrarElementosProteccion(!mostrarElementosProteccion);
    };

    const toggleMaquinasHerramientas = () => {
        setMostrarMaquinasHerramientas(!mostrarMaquinasHerramientas);
    };
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
                    <title>Informacion Laboral</title>
                    <link rel='icon' href='/public/img/icons/favicon.ico' />
                </Head>
            </div>

            <div className="relative inline-block text-left">
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 bg-blue-500 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"                    >
                        <span className="mt-2">Informacion laboral</span>
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

            <div className="lg:bg-blue-500 lg:p-3 lg:text-white lg:shadow-md lg:rounded-lg lg:mx-auto lg:mt-5 ">
                <ul className="lg:flex lg:space-x-10 grid hidden font-normal">
                    <li><a href="../eyelashes/working_information" className='font-bold underline'>Informacion laboral</a></li>
                    <li><a href="../account">Informacion Personal</a></li>
                    <li><a href="../education/education" >Educacion</a></li>
                    <li><a href="../family">Familiar</a></li>
                    <li><a href="#">Condicion de salud</a></li>
                    <li><a href="#">Solicitudes</a></li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md mt-10 p-5 ml-5 mr-5 "> {/* Added padding */}
                <span className="text-3xl font-bold text-gray-500">Informacion Laboral</span>

                <div className="mt-5">
                    <form action="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Used grid for better alignment */}
                            <div>
                                <label htmlFor="fechaIngreso">Fecha ingreso a la empresa <span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="date" id="fechaIngreso" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="cargoActual">Cargo actual <span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="text" id="cargoActual" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="salario">Salario <span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="number" step="0.01" min="0.01" placeholder="$" id="salario" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="tipoContrato">Tipo de contrato <span className=' text-blue-500 '>*</span>{' '}</label>
                                <select id="tipoContrato" className="w-full p-2 border border-black rounded-lg">
                                    <option value="">Seleccione uno...</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="jefeInmediato">Nombre de jefe inmediato <span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="text" id="jefeInmediato" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="fabrica">Fabrica a la que pertenece <span className=' text-blue-500 '>*</span>{' '}</label>
                                <select id="fabrica" className="w-full p-2 border border-black rounded-lg">
                                    <option value="">Seleccione uno...</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                    <option value="###">###</option>
                                </select>
                            </div>
                            <div>
                                <label>Auxilio de alquiler computador personal para el trabajo <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="" value="Si" />
                                    <span>No</span><input type="radio" id="No" name="" value="No" />
                                </div>
                            </div>
                            <hr className="lg:hidden" />
                            <div>
                                <label>Auxilio de conectividad <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="" value="Si" />
                                    <span>No</span><input type="radio" id="No" name="" value="No" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Afiliacion a poliza de salud corporativa <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="" value="Si" />
                                    <span>No</span><input type="radio" id="No" name="" value="No" />
                                    <span>Na</span><input type="radio" id="Na" name="" value="Na" />
                                </div>
                            </div>

                        </div>
                        <hr className="lg:mt-5" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                            <div>
                                <label htmlFor="maquinasHerramientas">Maquinas y herramientas</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="" value="Si" onClick={toggleMaquinasHerramientas} />
                                    <span>No</span><input type="radio" id="No" name="" value="No" />
                                </div>
                            </div>
                            <div>
                                {mostrarMaquinasHerramientas && (
                                    <div className="gap-5">
                                        <div>
                                            <label htmlFor="descripcion">Descripción</label>
                                            <input type="text" id="descripcion" className="w-full p-2 border border-black rounded-lg" />
                                        </div>
                                        <div className="mt-5">
                                            <label htmlFor="serialCodigo">Serial/Código</label>
                                            <input type="text" id="serialCodigo" className="w-full p-2 border border-black rounded-lg" />
                                        </div>
                                        <div className="mt-5">
                                            <label htmlFor="fechaEntrega">Fecha de entrega</label>
                                            <input type="date" id="fechaEntrega" className="w-full p-2 border border-black rounded-lg" />
                                        </div>
                                        <div className="mt-5">
                                            <label htmlFor="observaciones1">Observaciones</label>
                                            <textarea id="observaciones1" className="w-full p-2 border border-black rounded-lg" cols="5" rows="5"></textarea>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <hr className="lg:mt-5" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5 ">
                            <div>
                                <label htmlFor="epp">Elementos de protección personal</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="" value="Si" onClick={toggleElementosProteccion} />
                                    <span>No</span><input type="radio" id="No" name="" value="No" />
                                </div>
                            </div>
                            {mostrarElementosProteccion && (
                                <div className="">
                                    <div className="">
                                        <label htmlFor="nombreEPP">Nombre del EPP</label>
                                        <input type="text" id="nombreEPP" className="w-full p-2 border border-black rounded-lg" />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="fechaEntregaEPP">Fecha de entrega</label>
                                        <input type="date" id="fechaEntregaEPP" className="w-full p-2 border border-black rounded-lg" />
                                    </div>
                                    <div className="mt-5">
                                        <label htmlFor="observaciones2">Observaciones</label>
                                        <textarea id="observaciones2" className="w-full p-2 border border-black rounded-lg" cols="5" rows="5"></textarea>
                                    </div>
                                </div>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
