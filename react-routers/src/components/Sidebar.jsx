import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  // const handleTabClick = (tab) => {
  //   setSelectedTab(tab);
  // };

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
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-post" className="nav-link text-white">
              Create Post
            </Link>
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
