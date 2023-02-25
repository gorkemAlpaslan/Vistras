import styles from "./header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        My E-commerce
      </a>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/products" className={styles.navLink}>
              Products
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/cart" className={styles.navLink}>
              Cart
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/login" className={styles.navLink}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
