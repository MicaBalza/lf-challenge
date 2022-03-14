import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';

import Button from '../Button';
import Modal from '../Modal';

import {
  liteflixLogo,
  plus,
  plusCircle,
  menu,
  bell,
  profileAvatar,
} from '../../assets/img';

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
          <img src={liteflixLogo} alt="Liteflix Logo" className={styles.logo} />
          <Button
            text={!isMobile ? 'Agregar Película' : ''}
            variant="text"
            iconSrc={isMobile ? plusCircle : plus}
            iconAltText="Agregar Película"
            onClick={handleClick}
            className={classNames(styles.addMovie)}
            hidden={showModal}
          />
          <div className={styles.navButtons}>
            <img src={menu} alt="Menú" className={styles.menu} />
            <img
              src={bell}
              alt="Notificaciones"
              className={styles.notifications}
            />
            <img
              src={profileAvatar}
              alt="Mi perfil"
              className={styles.profile}
            />
          </div>
        </div>
      </nav>
      <Modal isVisible={showModal} onClose={handleClick} />
    </>
  );
};

export default Navbar;
