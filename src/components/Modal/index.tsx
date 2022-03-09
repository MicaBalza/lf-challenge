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
  const [, setValue] = useLocalStorage('imagen', '');

  const handleClick = () => {
    console.log('click');
  };

  const handleFileUpload = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <>
      {isVisible &&
      <div className={styles.background}>
        <div className={styles.modal}>
          <img src={closeButton} className={styles.closeButton} onClick={onClose} />
          <p className={styles.title}>Agregar película</p>
          <FileInput className={styles.input} accept="image/png, image/jpeg" onChange={handleFileUpload} />
          <TextInput className={styles.input} placeholder="Título" onChange={handleInputChange} />
          <Button text="Subir Película" onClick={handleClick} disabled />
        </div>
      </div>
      }
    </>
  );
};

export default Modal;
