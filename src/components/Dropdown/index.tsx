import { useState } from 'react';

import { check } from '../../assets/img';

import styles from './index.module.scss';

interface Props {
  className?: string;
  options: {
    text: string;
    value: string;
  }[];
  setOption: (option: string) => void;
}

const Dropdown = ({ className, options, setOption }: Props) => {
  const [dropdownOption, setDropdownOption] = useState('popular');
  const [showDropdown, setshowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  const handleOptionClick = (option: string) => {
    setDropdownOption(option);
    setOption(option);
    handleShowDropdown();
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div onClick={handleShowDropdown}>
        <p>
          Ver:
          <span className={`${styles.label} bold`}>
            {' '}
            {
              options[options.findIndex((opt) => opt.value === dropdownOption)]
                ?.text
            }
          </span>
        </p>
      </div>
      {showDropdown && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleOptionClick(opt.value)}
              className={styles.option}
            >
              <p className={opt.value === dropdownOption ? 'bold' : ''}>
                {opt.text}
              </p>

              {opt.value === dropdownOption && (
                <img src={check} alt="Seleccionado" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
