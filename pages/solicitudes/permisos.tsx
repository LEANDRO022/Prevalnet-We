import Button from '@components/atoms/Buttons/Button';
import InputDate from '@components/atoms/Inputs/InputDate';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputText from '@components/atoms/Inputs/InputText';
import RadioButton from '@components/atoms/Radio';
import TextArea from '@components/atoms/Textarea';
import Tabs from '@components/organisms/Tabs';
import { ChangeEvent, useState } from 'react';
import { TbLicense } from 'react-icons/tb';

const optAprobadores = [
  { value: 'Mariangel Acosta', label: 'Mariangel Acosta' },
  { value: 'Andrea Pelaez', label: 'Andrea Pelaez' },
  { value: 'Katherin Gonzales', label: 'Katherin Gonzales' },
];

function permisos() {
  const [aprobadores, setAprobadores] = useState(null);
  const [fecha, setFecha] = useState(null);

  const [selectedOption, setSelectedOption] = useState();
  const options = [
    { value: 'Mañana', label: 'Mañana' },
    { value: 'Tarde', label: 'Tarde' },
    { value: 'Todo el día', label: 'Todo el día' },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className='container mx-auto mt-8 p-8 grid justify-center'>
      <Tabs activePage='permisos' />
      <div className='bg-gray-100 container mx-auto mt-6 p-8 rounded-lg shadow-md'>
        <div>
          <div className='flex items-center mb-4'>
            <TbLicense className='text-7xl text-gray-600 bg-white mr-4 p-2' />
            <p className='text-xl font-semibold'>Solicitud Permiso especial</p>
          </div>
          <div className='mt-8 grid gap-6 grid-cols-2'>
            <InputSelectForm
              text='Aprobadores'
              placeholder='Selecciona aquí los destinatarios'
              required
              opts={optAprobadores}
              value={aprobadores}
              onChange={(selected) => setAprobadores(selected)}
            />
            <InputDate
              label='Seleccionar fecha'
              selectedDate={fecha}
              onChange={(date) => setFecha(date)}
              required
            />
            <RadioButton
              options={options}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              label='Franja Horaria'
              required
            />
            <TextArea
              label='Detalles adicionales'
              placeholder='Razón por la cual solicita el permiso'
              required
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

export default permisos;
