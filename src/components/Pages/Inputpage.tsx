import styles from "./Mainpage.module.css";
import { Input } from "../Input";

type InputPageProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function InputPage({ setChoice }: InputPageProps) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className={styles.form}>
      <em>Enter your full name in the box</em>
      <Input setChoice={setChoice} />
    </div>
  );
}
