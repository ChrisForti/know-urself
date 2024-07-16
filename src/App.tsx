import { useState } from "react";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

function App() {
  const [choice, setChoice] = useState(0);

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar setChoice={setChoice} />
        <Content choice={choice} setChoice={setChoice} />
      </div>
    </>
  );
}

export default App;
