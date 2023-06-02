import styles from "./footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>&copy; Vistras {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
