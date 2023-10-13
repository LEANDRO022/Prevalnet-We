import Head from "next/head";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Bnav from '@components/organisms/Bnav';

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

            <Bnav activePage='infoLaboral'/>

            <div className="bg-white rounded-lg shadow-md mt-10 p-5 ml-5 mr-5 "> 
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
                                    <span>Si</span><input type="radio" id="Si" name="alqPc" value="Si" />
                                    <span>No</span><input type="radio" id="No" name="alqPc" value="No" />
                                </div>
                            </div>
                            <hr className="lg:hidden" />
                            <div>
                                <label>Auxilio de conectividad <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="auxilioCo" value="Si" />
                                    <span>No</span><input type="radio" id="No" name="auxilioCo" value="No" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Afiliacion a poliza de salud corporativa <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="afisalud" value="Si" />
                                    <span>No</span><input type="radio" id="No" name="afisalud" value="No" />
                                    <span>Na</span><input type="radio" id="Na" name="afisalud" value="Na" />
                                </div>
                            </div>

                        </div>
                        <hr className="lg:mt-5" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                            <div>
                                <label htmlFor="maquinasHerramientas">Maquinas y herramientas</label>
                                <div className="flex space-x-2">
                                    <span>Si</span><input type="radio" id="Si" name="Maquinas" value="Si" onClick={toggleMaquinasHerramientas} />
                                    <span>No</span><input type="radio" id="No" name="Maquinas" value="No" />
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
                                    <span>Si</span><input type="radio" id="Si" name="elementosPp" value="Si" onClick={toggleElementosProteccion} />
                                    <span>No</span><input type="radio" id="No" name="elementosPp" value="No" />
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
