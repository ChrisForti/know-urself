import styles from "./Content.module.css";
import { Mainpage } from "./Mainpage";
import { One } from "./numerology/One";
import { Two } from "./numerology/Two";
import { Three } from "./numerology/Three";
import { Four } from "./numerology/Four";
import { Five } from "./numerology/Five";
import { Six } from "./numerology/Six";
import { Seven } from "./numerology/Seven";
import { Eight } from "./numerology/Eight";
import { Nine } from "./numerology/Nine";

type ContentProps = { choice: number };

export function Content({ choice }: ContentProps) {
  const pages = [
    <Mainpage />,
    <One />,
    <Two />,
    <Three />,
    <Four />,
    <Five />,
    <Six />,
    <Seven />,
    <Eight />,
    <Nine />,
  ];

  return <main className={styles.main}>{pages[choice]}</main>;
}
