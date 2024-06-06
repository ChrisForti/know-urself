import { useState } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type SidebarProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function Sidebar({ setChoice }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
      <h2 className={styles.h2}>Destiny numbers 1 thru 9</h2>
      <ul className={styles.linkContainer}>
        <li
          onClick={() => {
            setChoice(0);
          }}
        >
          <a href="#">Home</a>
        </li>
        <li
          onClick={() => {
            setChoice(1);
          }}
        >
          <a href="#">Numero 1</a>
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
