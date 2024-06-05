import { useState } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
      <h2 className={styles.h2}>Sidebar</h2>
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
      <button
        className={`${styles.button} ${sidebarOpen ? styles.show : ""}`}
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </aside>
  );
}
