import styles from "./Mainpage.module.css";
import { Input } from "../Input";

type InputPageProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function InputPage({ setChoice }: InputPageProps) {
  return (
    <div className={styles.main}>
      <Input setChoice={setChoice} />
    </div>
  );
}
