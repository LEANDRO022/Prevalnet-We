import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Healthy_Conditions() {

    const [hacerEjercicio, setHacerEjercicio] = useState('NO'); 
    const [Tratamiento, setTratamiento] = useState('NO'); 
    const [Enfermedad, SetEnfermedad] = useState('NO'); 

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleOptionClick = (path) => {
        router.push(path);
        setIsOpen(false);
    };


    return (
        <div className="grid justify-center font-bold items-center">
            <div>
                <Head>
                    <title>Condiciones de Salud</title>
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

            <div className="lg:bg-blue-500 lg:p-3 lg:text-white lg:shadow-md lg:rounded-lg lg:mx-auto lg:mt-5  ">
                <ul className="lg:flex lg:space-x-10 grid hidden font-normal">
                    <li><a href="../eyelashes/working_information" className='font-bold underline'>Informacion laboral</a></li>
                    <li><a href="../account">Informacion Personal</a></li>
                    <li><a href="../education/education" >Educacion</a></li>
                    <li><a href="../family">Familiar</a></li>
                    <li><a href="#">Condicion de salud</a></li>
                    <li><a href="#">Solicitudes</a></li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md mt-10 p-5 ml-5 mr-5 lg:w-11/12 lg:ml-16">
                <span className='text-3xl font-bold text-gray-500'>Condiciones de Salud</span>
                <div className='mt-5'>
                    <form action="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="Peso">Peso<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="number" id="Peso" step="0.01" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="Estatura">Estatura<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="number" id="Estatura" step="0.01" className="w-full p-2 border border-black rounded-lg" />
                            </div>

                            <div>
                                <label htmlFor="Grupo_Sanguineo">Grupo Sanguineo<span className=' text-blue-500 '>*</span>{' '}</label>
                                <input type="text" id="Grupo_Sanguineo" className="w-full p-2 border border-black rounded-lg" />
                            </div>

                        </div>

                        <hr className='mt-5' />
                        <span className='mt-5 text-3xl font-bold text-gray-500'>Habitos</span>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5">
                            <div className=''>
                                <label htmlFor="ejercicio">¿Haces ejercicio? <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className='flex space-x-2'>
                                    <span>SI</span><input type="radio" id="ejercicio" name="ejercicio" value={'SI'} checked={hacerEjercicio === 'SI'} // Establece el estado en 'SI' cuando se selecciona
                                        onChange={() => setHacerEjercicio('SI')} 
                                    />
                                    <span>NO</span><input type="radio" id="ejercicio" name="ejercicio" value={'NO'} checked={hacerEjercicio === 'NO'} // Establece el estado en 'NO' cuando se selecciona
                                        onChange={() => setHacerEjercicio('NO')} 
                                    />
                                </div>
                            </div>
                            {hacerEjercicio === 'SI' && (

                                <div>
                                    <label htmlFor="tipoEjercicio">Tipo de ejercicio:</label>
                                    <input type="text" id="tipoEjercicio" name="tipoEjercicio" className="w-full p-2 border border-black rounded-lg" />
                                </div>

                            )}
                            {hacerEjercicio === 'SI' && (
                                <div>
                                    <label htmlFor="frecuencia">Frecuencia a la semana:</label>
                                    <input type="number" id="frecuencia" name="frecuencia" min="1" max="7" className="w-full p-2 border border-black rounded-lg" />
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5">
                            <div>
                                <label htmlFor="">Con que frecuencia fuma</label>
                                <select name="" id="" className="w-full p-2 border border-black rounded-lg">
                                    <option value="">Selecciona una...</option>
                                    <option value="no_fuma">No fuma</option>
                                    <option value="Ocasionalmente">Ocasionalmente</option>
                                    <option value="Semanalmente">Semanalmente</option>
                                    <option value="Diariamente">Diariamente</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Con que frecuencia consume alcohol</label>
                                <select name="" id="" className="w-full p-2 border border-black rounded-lg">
                                    <option value="">Selecciona una...</option>
                                    <option value="no_consume">No consume</option>
                                    <option value="Ocasionalmente">Ocasionalmente</option>
                                    <option value="cada_15_dias">Cada 15 dias</option>
                                    <option value="Semanalmente">Semanalmente</option>
                                </select>
                            </div>
                        </div>

                        <hr className='mt-5' />
                        <span className='mt-5 text-3xl font-bold text-gray-500'>Control de examenes medicos ocupacionales</span> <br />
                        <span>Examen medico de ingreso</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            <div className=''>
                                <label htmlFor="">Fecha</label>
                                <input type="date" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="">Proveedor</label>
                                <input type="text" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="">Cargar concepto de actitud</label>
                                <input type="file" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                        </div>

                        <hr className='mt-5' />

                        <span>Examen medico periodico</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            <div className=''>
                                <label htmlFor="">Fecha</label>
                                <input type="date" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="">Proveedor</label>
                                <input type="text" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            <div>
                                <label htmlFor="">Cargar concepto de actitud</label>
                                <input type="file" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5">
                            <div className=''>
                                <label htmlFor="ejercicio">¿actualmente padece alguna enfermedad? <span className=' text-blue-500 '>*</span>{' '}</label>
                                <div className='flex space-x-2'>
                                    <span>SI</span><input type="radio" id="Enfermedad" name="Enfermedad" value={'SI'} checked={hacerEjercicio === 'SI'} // Establece el estado en 'SI' cuando se selecciona
                                        onChange={() => SetEnfermedad('SI')} // Cambia el estado a 'SI' cuando se seleccion
                                         />
                                    <span>NO</span><input type="radio" id="Enfermedad" name="Enfermedad" value={'NO'}  checked={hacerEjercicio === 'NO'} // Establece el estado en 'NO' cuando se selecciona
                                        onChange={() => SetEnfermedad('NO')} // Cambia el estado a 'NO' cuando se selecciona
                                        />
                                </div>
                            </div>
                            {Enfermedad === 'SI' && (
                            <div>
                                <label htmlFor="">Que enfermedad</label>
                                <select name="" id="" className="w-full p-2 border border-black rounded-lg">
                                    <option value="">Seleccione una...</option>
                                    <option value="Cancer">Cancer</option>
                                    <option value="Hipertencio_arterial">Hipertencio arterial</option>
                                    <option value="Colesterol_alto">Colesterol alto</option>
                                    <option value="diabetes">diabetes</option>
                                    <option value="Enfermedades_cardiovasculares">Enfermedades cardiovasculares</option>
                                    <option value="Ansiedad/Depresion">Ansiedad/Depresion</option>
                                    <option value="otro">otro</option>
                                </select>
                            </div>
                            )}
                            {Enfermedad === 'SI' && (
                            <div>
                                <label htmlFor="">Cual?</label>
                                <input type="text" className="w-full p-2 border border-black rounded-lg" />
                            </div>
                            )} 
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5">
                            <div>
                                <label htmlFor="">Se encuentra actualmente en algun tratamiento medico</label>
                                <div className='flex space-x-2'>
                                    <span>SI</span><input type="radio" id="Tratamiento" name="Tratamiento" value={'SI'} checked={Tratamiento === 'SI'} // Establece el estado en 'SI' cuando se selecciona
                                        onChange={() => setTratamiento('SI')} // Cambia el estado a 'SI' cuando se seleccion
                                    />
                                    <span>NO</span><input type="radio" id="Tratamiento" name="Tratamiento" value={'NO'} checked={Tratamiento === 'NO'} // Establece el estado en 'NO' cuando se selecciona
                                        onChange={() => setTratamiento('NO')} // Cambia el estado a 'NO' cuando se selecciona
                                    />
                                </div>
                            </div>
                            {Tratamiento === 'SI' && (
                                <div>
                                    <label htmlFor="">Para que enfermedad</label>
                                    <input type="text" className="w-full p-2 border border-black rounded-lg" />
                                </div>
                            )}
                        </div>


                    </form>
                </div>
            </div>



        </div>

    )

}