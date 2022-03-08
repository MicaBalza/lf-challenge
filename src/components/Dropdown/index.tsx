import { useState } from 'react';

import check from '../../assets/img/check.svg';

import styles from './index.module.scss';

interface Props {
  className?: string;
    options: {
        text: string,
        value: string
    }[];
}

const Dropdown = ({ className, options }: Props) => {
  const [option, setOption] = useState('popular');
  const [showDropdown, setshowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  const handleOptionClick = (option: any) => {
    setOption(option);
    handleShowDropdown();
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div onClick={handleShowDropdown}>
        <p>Ver:
          <span className={`${styles.label} bold`}> {options[options.findIndex(opt => opt.value === option)]?.text}</span>
        </p>
      </div>
      { showDropdown && <div className={styles.dropdown}>
        { options.map(opt => (
          <div key={opt.value} onClick={() => handleOptionClick(opt.value)} className={styles.option}>
            <label htmlFor={opt.value} className={opt.value === option ? 'bold' : ''}>{opt.text}</label>
            <input type="radio" name="movieGroup" value={opt.value} id={opt.value} hidden />
            {opt.value === option && <img src={check}/>}
          </div>
        )) }
      </div> }
    </div>
  );
};

export default Dropdown;
