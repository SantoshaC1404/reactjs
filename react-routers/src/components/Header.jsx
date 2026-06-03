import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container d-flex align-items-center justify-content-between gap-3">
        <a href="/" className={styles.brand}>
          <div className={styles.brandIcon}>S</div>
          <span>Social Studio</span>
        </a>

        <nav className={styles.navLinks}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            Feed
          </a>
          <a href="#" className={styles.navLink}>
            Explore
          </a>
          <a href="#" className={styles.navLink}>
            Messages
          </a>
        </nav>

        <div className={styles.toolbar}>
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search"
          />
          <button type="button" className="btn btn-outline-light btn-sm ms-3">
            Login
          </button>
          <button type="button" className="btn btn-warning btn-sm ms-2">
            Sign-up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
