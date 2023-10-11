import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import Tabs from '@components/organisms/Tabs';
import { MdOutlineWorkOutline } from 'react-icons/md';

function Cesantias() {
  return (
    <div className='container mx-auto mt-8 p-8'>
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
            <InputSelectForm text='Tipo de Documento' required opts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cesantias;
