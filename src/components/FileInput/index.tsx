import { HTMLProps } from 'react';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

const FileInput = ({ className, accept }: Props) => {
  return (
    <label className={`${styles.input} ${className}`}>
      <input type="file" accept={accept} />
      <span className="bold">Agregá un archivo </span>o arrastralo y soltalo aquí
    </label>
  );
};

export default FileInput;
