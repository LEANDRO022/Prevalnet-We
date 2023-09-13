import Button from '@components/atoms/Buttons/Button';
import React, { useState, useEffect } from 'react';

interface FileInputProps {
  label: string;
  accept: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (file: File | null) => void;
}

function FileInput({ label, accept, onChange }: FileInputProps) {
  const inputId = `${label.replace(/\s+/g, '-').toLowerCase()}-input`;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);

      setIsImage(selectedFile.type.startsWith('image/'));
    } else {
      setPreviewUrl(null);
      setIsImage(false);
    }
  }, [selectedFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
    onChange(file);
  };

  return (
    <div className='input__label'>
      <label htmlFor={inputId} className='block font-semibold mb-2'>
        {label}
      </label>
      <div className='flex items-center space-x-2'>
        <Button
          onClick={() => document.getElementById(inputId)?.click()}
          text=''
          type='button'
          priority='primary'
        >
          {selectedFile ? 'Cambiar archivo' : 'Seleccionar archivo'}
        </Button>
        <input
          type='file'
          accept={accept}
          id={inputId}
          onChange={handleFileChange}
          className='hidden'
        />
      </div>
      {selectedFile && (
        <div className='mt-4'>
          {isImage ? (
            <img
              src={previewUrl as string}
              alt='Preview Certificate'
              className='max-w-full h-auto border border-gray-300'
            />
          ) : (
            <iframe
              title='File Preview'
              src={previewUrl as string}
              className='w-full h-40 border border-gray-300'
            />
          )}
        </div>
      )}
    </div>
  );
}

export default FileInput;
