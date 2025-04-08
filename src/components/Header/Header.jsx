import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MovieVibe</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/favorites" className={styles.navLink}>Favorites</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/watch-later" className={styles.navLink}>Watch Later</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
