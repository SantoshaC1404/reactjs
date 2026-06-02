import styles from "./Sidebar.module.css";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

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
            <a
              href="#"
              className={`${styles.navLink} ${selectedTab === "Home" ? styles.navLinkActive : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("Home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${styles.navLink} ${selectedTab === "Create Post" ? styles.navLinkActive : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("Create Post");
              }}
            >
              Create Post
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
