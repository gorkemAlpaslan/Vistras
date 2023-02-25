import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; My E-commerce {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
