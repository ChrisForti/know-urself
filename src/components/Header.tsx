import styles from "./Header.module.css";

type HeaderProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setChoice }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h3 className={styles.h3}>Character Compass</h3>
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
