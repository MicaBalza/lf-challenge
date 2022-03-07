import { HTMLProps } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  className?: string;
  iconSrc?: string;
  text: string;
  type?: 'button' | 'submit';
  variant?: 'contained' | 'outlined' ;
}

const Button = ({
  className = '',
  disabled = false,
  iconSrc = '',
  text,
  type = 'button',
  variant = 'contained',
  onClick 
}: Props) => {
  return (
    <button
      className={classNames(styles[variant], { [styles.disabled]: disabled }, className)}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} className={styles.icon} />}
      {text}
    </button>
  );
};

export default Button;
