import styles from './index.module.scss';

interface Props {
  className?: string;
}

const Spinner = ({ className = '' }: Props) => {
  return (
    <div className={`${styles.spinner} ${className}`}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
