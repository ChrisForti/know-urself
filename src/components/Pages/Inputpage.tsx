import styles from "./Mainpage.module.css";
import { Input } from "../Input";
import { useState } from "react";

type InputPageProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function InputPage({ setChoice }: InputPageProps) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className={styles.main}>
      <h1>Enter entire name given at birth</h1>
      <h2>First, Middle, Last</h2>
      <Input setChoice={setChoice} />
    </div>
  );
}
