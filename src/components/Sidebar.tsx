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
        <li
          onClick={() => {
            setChoice(2);
          }}
        >
          <a href="#">Numero 2</a>
        </li>
        <li
          onClick={() => {
            setChoice(3);
          }}
        >
          <a href="#">Numero 3</a>
        </li>
        <li
          onClick={() => {
            setChoice(4);
          }}
        >
          <a href="#">Numero 4</a>
        </li>
        <li
          onClick={() => {
            setChoice(5);
          }}
        >
          <a href="#">Numero 5</a>
        </li>
        <li
          onClick={() => {
            setChoice(6);
          }}
        >
          <a href="#">Numero 6</a>
        </li>
        <li
          onClick={() => {
            setChoice(7);
          }}
        >
          <a href="#">Numero 7</a>
        </li>
        <li
          onClick={() => {
            setChoice(8);
          }}
        >
          <a href="#">
            Numero 8{" "}
            <li
              onClick={() => {
                setChoice(9);
              }}
            >
              <a href="#">Numero 9</a>
            </li>
            <li
              onClick={() => {
                setChoice(11);
              }}
            >
              <a href="#">Master number 11</a>
            </li>
            <li
              onClick={() => {
                setChoice(22);
              }}
            >
              <a href="#">Master number 22</a>
            </li>
            <li
              onClick={() => {
                setChoice(33);
              }}
            >
              <a href="#">Master number 33</a>
            </li>
          </a>
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
