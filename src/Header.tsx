import { ThemeToggle } from "./components/ThemeToggle";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h3 className={styles.h3}>
          Knowing yourself is the beginning of all wisdom
        </h3>
        <ThemeToggle />
      </div>
    </header>
  );
}
