import { useState } from 'react';

import check from '../../assets/img/check.svg';

import styles from './index.module.scss';

interface Props {
  className?: string;
  options: {
      text: string,
      value: string
  }[];
  setOption: (option: string) => void;
}

const Dropdown = ({ className, options, setOption }: Props) => {
  const [dropdownOption, setDropdownOption] = useState('popular');
  const [showDropdown, setshowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  const handleOptionClick = (option: any) => {
    setDropdownOption(option);
    setOption(option);
    handleShowDropdown();
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div onClick={handleShowDropdown}>
        <p>Ver:
          <span className={`${styles.label} bold`}> {options[options.findIndex(opt => opt.value === dropdownOption)]?.text}</span>
        </p>
      </div>
      { showDropdown && <div className={styles.dropdown}>
        { options.map(opt => (
          <div key={opt.value} onClick={() => handleOptionClick(opt.value)} className={styles.option}>
            <label htmlFor={opt.value} className={opt.value === dropdownOption ? 'bold' : ''}>{opt.text}</label>
            <input type="radio" name="movieGroup" value={opt.value} id={opt.value} hidden />
            {opt.value === dropdownOption && <img src={check}/>}
          </div>
        )) }
      </div> }
    </div>
  );
};

export default Dropdown;
