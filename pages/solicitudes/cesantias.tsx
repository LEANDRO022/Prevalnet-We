import Button from '@components/atoms/Buttons/Button';
import InputNumber from '@components/atoms/Inputs/InputNumber';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import Tabs from '@components/organisms/Tabs';
import { useState } from 'react';
import { MdOutlineWorkOutline } from 'react-icons/md';

const optTipoDocumento = [
  { value: 'Cedula de Ciudadanía', label: 'Cédula de Ciudadanía' },
  { value: 'Cedula de Extranjería', label: 'Cédula de Extranjería' },
  { value: 'Tarjeta de Identidad', label: 'Tarjeta de Identidad' },
];

const optFinalidad = [
  { value: 'Compra de vivienda', label: 'Compra de vivienda' },
  { value: 'Educación', label: 'Educación' },
  { value: 'Desempleo involuntario', label: 'Desempleo involuntario' },
  { value: 'Emergencias médicas', label: 'Emergencias médicas' },
];

function Cesantias() {
  const [tipoDocumento, setTipoDocumento] = useState(null);
  const [finalidad, setFinalidad] = useState(null);

  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Tabs activePage='cesantias' />
      <div className='bg-gray-100 container mx-auto mt-6 p-8 rounded-lg shadow-md'>
        <div>
          <div className='flex items-center mb-4'>
            <MdOutlineWorkOutline className='text-7xl text-gray-600 bg-white mr-4 p-2' />
            <p className='text-xl font-semibold'>Solicitud Cesantías</p>
          </div>
          <div className='mt-8 grid gap-6'>
            <InputText label='Nombre completo' name='' required />
            <InputText label='Documento de Identidad' name='' required />
            <InputSelectForm
              text='Tipo de Documento'
              required
              opts={optTipoDocumento}
              value={tipoDocumento}
              onChange={(selected) => setTipoDocumento(selected)}
            />
            <InputNumber label='Monto a retirar' name='' placeholder='$' />
            <InputSelectForm
              text='Finalidad de retiro'
              required
              opts={optFinalidad}
              value={finalidad}
              onChange={(selected) => setFinalidad(selected)}
            />
          </div>
          <div className='flex justify-end mt-5 p-10'>
            <Button type='button' priority='primary' text='Enviar solicitud' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cesantias;
