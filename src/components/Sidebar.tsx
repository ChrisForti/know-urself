import { useState } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./Input";
import Logobutton from "../assets/original-logo-symbol.png";

type SidebarProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function Sidebar({ setChoice }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.show : ""}`}>
      <Input setChoice={setChoice} /> <hr />
      <h4 className={styles.h4}>Navigation through all the destiny numbers</h4>
      <ul className={styles.linkContainer}>
        <li
          onClick={() => {
            setChoice(0);
          }}
        >
          <a href="#">Main page</a>
        </li>
        <li
          onClick={() => {
            setChoice(1);
          }}
        >
          <a href="#">Number 1</a>
        </li>
        <li
          onClick={() => {
            setChoice(2);
          }}
        >
          <a href="#">Number 2</a>
        </li>
        <li
          onClick={() => {
            setChoice(3);
          }}
        >
          <a href="#">Number 3</a>
        </li>
        <li
          onClick={() => {
            setChoice(4);
          }}
        >
          <a href="#">Number 4</a>
        </li>
        <li
          onClick={() => {
            setChoice(5);
          }}
        >
          <a href="#">Number 5</a>
        </li>
        <li
          onClick={() => {
            setChoice(6);
          }}
        >
          <a href="#">Number 6</a>
        </li>
        <li
          onClick={() => {
            setChoice(7);
          }}
        >
          <a href="#">Number 7</a>
        </li>
        <li
          onClick={() => {
            setChoice(8);
          }}
        >
          <a href="#">Number 8</a>
        </li>
        <li
          onClick={() => {
            setChoice(9);
          }}
        >
          <a href="#">Number 9</a>
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
      </ul>
      <button
        className={`${styles.button} ${sidebarOpen ? styles.show : ""}`}
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </button>
      {/* <a href="https://codevessel.org"> */}
      <img src={Logobutton} className={styles.logobutton} />
      {/* </a> */}
    </aside>
  );
}
