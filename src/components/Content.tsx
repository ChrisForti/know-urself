import styles from "./Content.module.css";
import { One } from "./numerology/One";

export function Content() {
  return (
    <main className={styles.main}>
      <One />
    </main>
  );
}
