import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import Button from '../Button';
import Modal from '../Modal';

import logo from '../../assets/img/liteflix-logo.svg';
import plus from '../../assets/img/plus.svg';
import plusCircle from '../../assets/img/plus-circle.svg';
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
          <img src={logo} alt="Liteflix Logo" className={styles.logo} />
          <Button
            text={!isMobile ? 'Agregar Película' : ''}
            variant="text"
            iconSrc={isMobile ? plusCircle : plus}
            onClick={handleClick}
            className={styles.addMovie}
          />
          <div className={styles.navButtons}>
            <img src={menu} alt="Menú" className={styles.menu} />
            <img
              src={bell}
              alt="Notificaciones"
              className={styles.notifications}
            />
            <img src={profile} alt="Mi perfil" />
          </div>
        </div>
      </nav>
      <Modal isVisible={showModal} onClose={handleClick} />
    </>
  );
};

export default Navbar;
