import { HTMLProps } from 'react';
import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
    className?: string;
}

const TextInput = ({ className, placeholder, onChange }: Props) => {
  return (
    <input type="text" placeholder={placeholder} className={`${styles.input} ${className}`} onChange={onChange} />
  );
};

export default TextInput;
