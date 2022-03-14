import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import FileInput from '../FileInput';
import TextInput from '../TextInput';
import Button from '../Button';

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
  const [isUploadComplete, setIsUploadComplete] = useState(false);
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

  const handleUploadComplete = () => {
    setIsUploadComplete(true);
  };

  const handleInputChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleClose = (e: any) => {
    setIsUploadComplete(false);
    setIsUploaded(false);
    setTitle('');
    setImg('');
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
                <img
                  src={liteflixLogo}
                  alt="Liteflix logo"
                  className={styles.logo}
                />
                <p className={styles.header}>¡Felicitaciones!</p>
                <p className={styles.subheader}>
                  {title} fue correctamente subida.
                </p>
              </>
            ) : (
              <>
                <p className={styles.title}>Agregar película</p>
                <FileInput
                  className={styles.input}
                  accept="image/png, image/jpeg"
                  getTransformedFile={handleFileUpload}
                  isCompleted={handleUploadComplete}
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
              variant="contained-light"
              onClick={isUploaded ? handleClose : handleClick}
              disabled={!isUploadComplete || !title}
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
