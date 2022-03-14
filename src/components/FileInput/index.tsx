import { ChangeEvent, HTMLProps, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { imageUploaded } from '../../utils/convertBase64';
import ProgressBar from '../ProgressBar';

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

  const renderLabelText = () => {
    if (isMobile) {
      return <span>Agregá un archivo</span>;
    }
    return (
      <>
        <span className="bold">Agregá un archivo</span> o arrastralo y soltalo
        aquí
      </>
    );
  };

  return (
    <div className={className}>
      {isFilePicked ? (
        <ProgressBar />
      ) : (
        <label className={styles.container}>
          <input type="file" accept={accept} onChange={handleChange} />
          {renderLabelText()}
        </label>
      )}
    </div>
  );
};

export default FileInput;
