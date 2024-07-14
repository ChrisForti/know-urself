import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.h3}>
        Knowing yourself is the beginning of all wisdom
      </h3>
      {/* <em className={styles.h4}>
        "Knowing yourself is the beginning of all wisdom."~~Socrates~~
      </em> */}
    </header>
  );
}
