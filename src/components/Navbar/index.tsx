import { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';

import logo from '../../assets/img/liteflix-logo.svg';
import plus from '../../assets/img/plus.svg';
import menu from '../../assets/img/menu.svg';
import bell from '../../assets/img/bell.svg';
import profile from '../../assets/img/profile-avatar.svg';

import styles from './index.module.scss';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.navContentLeft}>
            <img src={logo} />
            <Button text='Agregar Película' variant='text' iconSrc={plus} onClick={handleClick} />
          </div>
          <div className={styles.navContentRight}>
            <img src={menu} />
            <img src={bell} />
            <img src={profile} />
          </div>
        </div>
      </nav>
      <Modal isVisible={showModal} onClose={handleClick} />
    </>
  );
};

export default Navbar;
