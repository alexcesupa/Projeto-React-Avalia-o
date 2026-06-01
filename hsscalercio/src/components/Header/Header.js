import { navItems } from '../../data/siteData';
import styles from './Header.module.css';

function Header({ activeRoute, onNavigate }) {
  return (
    <header className={styles.header}>
      <button className={styles.brand} type="button" onClick={() => onNavigate('inicio')}>
        <span className={styles.logo}>HS</span>
        <span>
          <strong>HS Uniformes</strong>
          <small>Profissional, seguro e sob medida</small>
        </span>
      </button>

      <nav className={styles.nav} aria-label="Rotas principais">
        {navItems.map((item) => (
          <button
            className={activeRoute === item.route ? styles.active : styles.navButton}
            key={item.route}
            type="button"
            onClick={() => onNavigate(item.route)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
