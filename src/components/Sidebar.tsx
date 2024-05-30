import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2>Sidebar</h2>
      <ul className={styles.linkContainer}>
        <li>
          <a href="#">link 1</a>
        </li>{" "}
        <li>
          <a href="#">link 2</a>
        </li>{" "}
        <li>
          <a href="#">link 3</a>
        </li>{" "}
        <li>
          <a href="#">link 4</a>
        </li>{" "}
        <li>
          <a href="#">link 5</a>
        </li>{" "}
        <li>
          <a href="#">link 6</a>
        </li>
      </ul>
    </aside>
  );
}
