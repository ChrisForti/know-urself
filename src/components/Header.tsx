import styles from "./Header.module.css";
import { Input } from "./Input.tsx";

type HeaderProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setChoice }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h3 className={styles.h3}>Know Urself</h3>
      <Input setChoice={setChoice} />
    </header>
  );
}

// export function Footer({ setChoice }: FooterProps) {
//   return (
//     <footer className={styles.footer}>
//       <h1>Enter your name here</h1>
//       <EntryBox setChoice={setChoice} />
//     </footer>
//   );
