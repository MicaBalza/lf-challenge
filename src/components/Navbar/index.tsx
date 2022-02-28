import styles from './index.module.scss';

import logo from '../../assets/img/liteflix-logo.svg';
import menu from '../../assets/img/menu.svg';
import bell from '../../assets/img/bell.svg';
import profile from '../../assets/img/profile-avatar.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navContentLeft}>
          <img src={logo} />
          <p className={styles.addButton}>Agregar Película</p>
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
