import { useEffect, useState } from 'react';

import styles from './index.module.scss';

interface Props {
  isCompleted: () => void;
}

const ProgressBar = ({ isCompleted }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      isCompleted();
    }
  }, [progress, isCompleted]);

  return (
    <>
      <p className={styles.label}>
        Cargando <span className="bold">{`${progress}%`}</span>
      </p>
      <div className={styles.container}>
        <div className={styles.filler} style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
