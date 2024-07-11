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
      <h1 className={styles.h1}>
        In my experience I wandered aimlessly until I truly knew myself.
      </h1>
      <h4 className={styles.h4}>
        “Mastering others is strength; mastering oneself is true power” ~~Lao
        Tsu~~
      </h4>
      <h4 className={styles.h4}>
        "Knowing yourself is the beginning of all wisdom."~~Socrates~~
      </h4>
      <h4 className={styles.h4}>
        Colossians 2:2-3 <br />
        2. My goal is that they may be encouraged in heart and united in love,
        so that they may have the full riches of complete understanding, in
        order that they may know the mystery of God, namely, Christ, 3. in whom
        are hidden all the treasures of wisdom and knowledge.
      </h4>
      <h1>Enter entire name given at birth</h1>
      <h2>First, Middle, Last</h2>
      <Input setChoice={setChoice} />
    </div>
  );
}
