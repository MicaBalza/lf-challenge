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

  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      {isVisible &&
      <div className={styles.background}>
        <div className={styles.modal}>
          <img src={closeButton} className={styles.closeButton} onClick={onClose} />
          <p className={styles.title}>Agregar película</p>
          <FileInput className={styles.input} accept="image/png, image/jpeg" />
          <TextInput className={styles.input} placeholder="Título" />
          <Button text="Subir Película" onClick={handleClick} disabled />
        </div>
      </div>
      }
    </>
  );
};

export default Modal;
