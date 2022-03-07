import Button from '../Button';

import logo from '../../assets/img/liteflix-logo.svg';
import plus from '../../assets/img/plus.svg';
import menu from '../../assets/img/menu.svg';
import bell from '../../assets/img/bell.svg';
import profile from '../../assets/img/profile-avatar.svg';

import styles from './index.module.scss';

const Navbar = () => {

  const handleClick = () => {
    console.log('click');
  };

  return (
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
  );
};

export default Navbar;
