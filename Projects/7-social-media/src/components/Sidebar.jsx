import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.brandIcon}>SS</div>
        <div>
          <p className={styles.sidebarTitle}>Social Studio</p>
          <small>Community hub</small>
        </div>
      </div>

      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Create Post
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Friends
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Settings
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.profileCard}>
        <div className={styles.profileMedia}>
          <div className={styles.profileAvatar}></div>
          <div>
            <p className={styles.profileName}>Mira Patel</p>
            <p className={styles.profileRole}>Community manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
