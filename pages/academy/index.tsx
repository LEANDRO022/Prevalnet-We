import React, { useState, useEffect } from 'react';
import Button from '@components/atoms/Buttons/Button';
import InputSelectForm from '@components/atoms/Inputs/InputSelectForm';
import InputDate from '@components/atoms/Inputs/InputDate';
import InputText from '@components/atoms/Inputs/InputText';
import InputCheckBox from '@components/atoms/Inputs/InputCheckbox';
import FileInput from '@components/atoms/Inputs/InputFile';

export default function Academy() {
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [selectedDesde, setSelectedDesde] = useState(null);
  const [selectedHasta, setSelectedHasta] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [selectedInstitucion, setSelectedInstitucion] = useState(null);
  const [isStillStudying, setIsStillStudying] = useState(false);
  const [entregoCertificado, setEntregoCertificado] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [programa, setPrograma] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const requiredFields = [
      selectedTipo,
      selectedDesde,
      selectedCountries,
      selectedInstitucion,
    ];

    if (!isStillStudying) {
      requiredFields.push(selectedHasta);
    }

    if (entregoCertificado) {
      requiredFields.push(titulo, programa);
    }

    const allFieldsFilled = requiredFields.every(
      field => field !== null && field !== ''
    );
    setIsFormValid(allFieldsFilled);
  }, [
    selectedTipo,
    selectedDesde,
    selectedHasta,
    selectedCountries,
    selectedInstitucion,
    isStillStudying,
    entregoCertificado,
    titulo,
    programa,
  ]);

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='mx-auto p-6 max-w-4xl'>
        <div className='bg-white rounded-lg shadow-md p-8'>
          <div className='flex justify-between items-center mb-8'>
            <p className='text-gray-500 lg:text-3xl font-semibold'>
              Crear Información Académica
            </p>
          </div>
          <form>
            <div className='mb-6'>
              <div className='space-y-2 grid lg:grid-cols-2 gap-5'>
                <InputSelectForm
                  text='Tipo'
                  required
                  opts={[
                    { label: 'Primaria', value: 'Primaria' },
                    { label: 'Bachillerato', value: 'Bachillerato' },
                    { label: 'Secundaria', value: 'Secundaria' },
                  ]}
                  value={selectedTipo}
                  onChange={selected => setSelectedTipo(selected)}
                />
                <InputCheckBox
                  label='¿Este estudio te entregó un título?'
                  name='entregoCertificado'
                  isChecked={entregoCertificado}
                  setIsChecked={setEntregoCertificado}
                />
              </div>
              {entregoCertificado && (
                <div className='mt-5 grid lg:grid-cols-2 gap-5'>
                  <InputText
                    label='Título'
                    placeholder='Ingresa el título'
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    name=''
                  />
                  <InputText
                    label='Programa'
                    placeholder='Ingresa el programa'
                    value={programa}
                    onChange={e => setPrograma(e.target.value)}
                    name=''
                  />
                  <FileInput
                    label='Certificado'
                    accept='.pdf,.doc,.docx,.xls,.xlsx/*'
                    onChange={file => file}
                  />{' '}
                </div>
              )}
              <hr className='my-6 border-t border-gray-300' />
            </div>
            <div className='mb-6'>
              <div className='my-4'>
                <InputCheckBox
                  label='¿Aún estás cursándolo?'
                  name='isStillStudying'
                  isChecked={isStillStudying}
                  setIsChecked={setIsStillStudying}
                />
              </div>
              <div className='grid lg:grid-cols-2 gap-5'>
                <div className='col-span-1'>
                  <InputDate
                    label='Desde cuándo'
                    required
                    selectedDate={selectedDesde}
                    onChange={date => setSelectedDesde(date)}
                  />
                </div>
                <div className='col-span-1'>
                  {!isStillStudying && (
                    <div>
                      <InputDate
                        label='Hasta cuando'
                        selectedDate={selectedHasta}
                        onChange={date => setSelectedHasta(date)}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
              <hr className='my-6 border-t border-gray-300' />
            </div>
            <div className='mb-6'>
              <div className='grid lg:grid-cols-2 gap-5'>
                <div>
                  <InputSelectForm
                    text='País'
                    required
                    opts={[
                      { label: 'Colombia', value: 'Colombia' },
                      { label: 'Brasil', value: 'Brasil' },
                      { label: 'Argentina', value: 'Argentina' },
                    ]}
                    value={selectedCountries}
                    onChange={selected => setSelectedCountries(selected)}
                  />
                </div>
                <div>
                  <InputSelectForm
                    text='Institución'
                    required
                    opts={[
                      { label: 'Institución 1', value: 'Institución 1' },
                      { label: 'Institución 2', value: 'Institución 2' },
                      { label: 'Otro', value: 'Otro' },
                    ]}
                    value={selectedInstitucion}
                    onChange={selected => setSelectedInstitucion(selected)}
                  />
                </div>
              </div>
              {selectedInstitucion?.label === 'Otro' && (
                <InputText
                  placeholder='Especificar otra institución'
                  label='Escribe el nombre de la institución'
                  name=''
                />
              )}
            </div>
            <div className='mt-6 flex justify-center'>
              <Button
                text='Guardar'
                type='button'
                priority='primary'
                disabled={!isFormValid}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
