import { HTMLProps } from 'react';
import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
    className?: string;
}

const TextInput = ({ className, placeholder }: Props) => {
  return (
    <input type="text" placeholder={placeholder} className={`${styles.input} ${className}`} />
  );
};

export default TextInput;
