import React from 'react';
import Tabs from '@components/organisms/Tabs';

const Index = () => (
  <div className="container mx-auto mt-8 px-4 sm:px-8">
    <Tabs activePage="solicitudes" />
    <div className="bg-gray-100 mt-6 p-4 sm:p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-xl p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="font-semibold text-sm sm:text-base mb-2">Creado</p>
              <p className="text-sm sm:text-base mx-4">11 de Octubre de 2023</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-sm sm:text-base mb-2">Enviado a</p>
              <p className="text-sm sm:text-base mx-4">Mariangel Acosta</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-sm sm:text-base mb-2">Certificado</p>
              <button className="text-green-500 font-semibold text-sm sm:text-base py-2 px-4">
                Listo para descargar
              </button>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-sm sm:text-base mb-2">Estado</p>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mx-4">
                Aprobado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
