import { HTMLProps } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  className?: string;
  iconSrc?: string;
  iconAltText?: string;
  text?: string;
  type?: 'button' | 'submit';
  variant?: 'contained' | 'contained-light' | 'outlined' | 'text';
}

const Button = ({
  className = '',
  disabled = false,
  iconSrc = '',
  iconAltText = '',
  text,
  type = 'button',
  variant = 'contained',
  onClick,
  hidden,
}: Props) => {
  return (
    <button
      className={classNames(
        styles[variant],
        { [styles.disabled]: disabled },
        { [styles.noText]: !text },
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
      hidden={hidden}
    >
      {iconSrc && (
        <img src={iconSrc} className={styles.icon} alt={iconAltText} />
      )}
      {text}
    </button>
  );
};

export default Button;
