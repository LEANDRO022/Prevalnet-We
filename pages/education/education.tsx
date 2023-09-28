import Head from "next/head";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function working_information() {
    return (
        <div className="grid justify-center font-bold">
            <div>
                <Head>
                    <title>Educacion</title>
                    <link rel='icon' href='/public/img/icons/favicon.ico' />
                </Head>
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