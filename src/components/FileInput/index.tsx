import { HTMLProps } from 'react';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

const FileInput = ({ className, accept, onChange }: Props) => {
  return (
    <label className={`${styles.input} ${className}`}>
      <input type="file" accept={accept} onChange={onChange} />
      <span className="bold">Agregá un archivo </span>o arrastralo y soltalo aquí
    </label>
  );
};

export default FileInput;
