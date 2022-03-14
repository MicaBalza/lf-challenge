import { ChangeEvent, HTMLProps, useState } from 'react';
import { isMobile } from 'react-device-detect';

import ProgressBar from '../ProgressBar';

import { imageUploaded } from '../../utils/convertBase64';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  getTransformedFile: (file: string) => void;
}

const FileInput = ({ className, accept, getTransformedFile }: Props) => {
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    imageUploaded(file).then((base64) => getTransformedFile(base64));
    setIsFilePicked(true);
  };

  const labelText = isMobile ? (
    <span>Agregá un archivo</span>
  ) : (
    <>
      <span className="bold">Agregá un archivo</span> o arrastralo y soltalo
      aquí
    </>
  );

  return (
    <div className={className}>
      {isFilePicked ? (
        <ProgressBar />
      ) : (
        <label className={styles.input}>
          <input type="file" accept={accept} onChange={handleChange} />
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FileInput;
