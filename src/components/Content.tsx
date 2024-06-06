import styles from "./Content.module.css";
import { Mainpage } from "./Mainpage";
import { One } from "./numerology/One";

type ContentProps = { choice: number };

export function Content({ choice }: ContentProps) {
  const pages = [<Mainpage />, <One />];

  return <main className={styles.main}>{pages[choice]}</main>;
}
