import styles from './index.module.scss';

const FileInput = () => {
  return (
    <label className={styles.input}>
      <input type="file" accept="image/png, image/jpeg"/>
      <span className="bold">Agregá un archivo </span>o arrastralo y soltalo aquí
    </label>
  );
};

export default FileInput;
