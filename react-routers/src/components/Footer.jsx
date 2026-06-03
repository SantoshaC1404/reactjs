import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <ul className={styles.footerNav}>
          <li>
            <a href="#" className={styles.footerLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.footerLink}>
              Features
            </a>
          </li>
          <li>
            <a href="#" className={styles.footerLink}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className={styles.footerLink}>
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className={styles.footerLink}>
              About
            </a>
          </li>
        </ul>
        <p className={styles.footerText}>© 2025 Social Studio, Inc.</p>
      </footer>
    </div>
  );
};

export default Footer;
