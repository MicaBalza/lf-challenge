import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { isMobile } from 'react-device-detect';

import Button from '../Button';
import FileInput from '../FileInput';
import TextInput from '../TextInput';

import { close, liteflixLogo } from '../../assets/img';

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
  const [userMovies, setUserMovies] = useLocalStorage('userMovies', '');
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body!.style.overflow = isVisible ? 'hidden' : 'auto';
  }, [isVisible]);

  const handleClick = () => {
    const parsedMovies = JSON.parse(userMovies || '[]');
    setUserMovies(JSON.stringify([...parsedMovies, { title, img }]));
    setIsUploaded(true);
  };

  const handleFileUpload = (convertedFile: string) => {
    setImg(convertedFile);
  };

  const handleInputChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleClose = (e: any) => {
    setIsUploaded(false);
    onClose(e);
  };

  return (
    <>
      {isVisible && (
        <div className={styles.background}>
          <div className={styles.modal}>
            {!isMobile && (
              <img
                src={close}
                className={styles.closeButton}
                onClick={handleClose}
                alt="Cerrar"
              />
            )}
            {isUploaded ? (
              <>
                <img src={liteflixLogo} alt="Liteflix logo" />
              </>
            ) : (
              <>
                <p className={styles.title}>Agregar película</p>
                <FileInput
                  className={styles.input}
                  accept="image/png, image/jpeg"
                  getTransformedFile={handleFileUpload}
                />
                <TextInput
                  className={styles.input}
                  placeholder="Título"
                  onChange={handleInputChange}
                />
              </>
            )}
            <Button
              text={isUploaded ? 'Ir a home' : 'Subir Película'}
              onClick={isUploaded ? handleClose : handleClick}
              disabled={!img || !title}
              className={styles.uploadButton}
            />
            {isMobile && (
              <Button text="Salir" onClick={handleClose} variant="outlined" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
