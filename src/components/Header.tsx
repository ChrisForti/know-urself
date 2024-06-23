import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.h3}>Character Compass</h3>
    </header>
  );
}
