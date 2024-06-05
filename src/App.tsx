// import { useState } from "react";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
// import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Mainpage } from "./components/Mainpage";

function App() {
  // const [choice, setChoice] = useState(Math.floor(Math.random() * 4));

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <Mainpage />
        {/* <Content /> */}
      </div>
    </>
  );
}

export default App;
