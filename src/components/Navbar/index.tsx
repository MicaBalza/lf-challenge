import styles from './index.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className="left">
        <div className='logo'>
            LITEFLIX
        </div>
        <p>+ Agregar Película</p>
    </div>
    <div className="right">
        <p>icono1</p>
        <p>icono2</p>
        <p>iconoPerfil</p>
    </div>
    </div>
  )
};

export default Navbar;