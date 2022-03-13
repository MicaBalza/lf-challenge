import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import Button from '../Button';
import FileInput from '../FileInput';
import TextInput from '../TextInput';

import closeButton from '../../assets/img/close.svg';

import styles from './index.module.scss';

interface Props {
    isVisible: boolean;
    title?: string;
    buttonText?: string;
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onClose: React.MouseEventHandler;
}

const Modal = ({ isVisible, onClose }: Props) => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [, setValue] = useLocalStorage(title, '');

  const handleClick = () => {
    setValue(img);
  };

  const handleFileUpload = (convertedFile: string) => {
    setImg(convertedFile);
  };

  const handleInputChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <>
      {isVisible &&
      <div className={styles.background}>
        <div className={styles.modal}>
          <img src={closeButton} className={styles.closeButton} onClick={onClose} alt="Cerrar" />
          <p className={styles.title}>Agregar película</p>
          <FileInput className={styles.input} accept="image/png, image/jpeg" getTransformedFile={handleFileUpload} />
          <TextInput className={styles.input} placeholder="Título" onChange={handleInputChange} />
          <Button text="Subir Película" onClick={handleClick} disabled={!img || !title} />
        </div>
      </div>
      }
    </>
  );
};

export default Modal;
