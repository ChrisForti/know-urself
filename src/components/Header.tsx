import styles from "./Header.module.css";
import Logobutton from "../assets/original-logo-symbol.png";

export function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.h3}>Character Compass</h3>
      <a href="https://codevessel.org">
        <img src={Logobutton} className={styles.logobutton} />
      </a>
    </header>
  );
}
