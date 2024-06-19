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
import { Eleven } from "./numerology/Eleven";
import { Twentytwo } from "./numerology/Twentytwo";
import { Thirtythree } from "./numerology/Thirtythree";

type ContentProps = { choice: number };

export function Content({ choice }: ContentProps) {
  const pages: { [key: number]: JSX.Element } = {
    0: <Mainpage />,
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
    5: <Five />,
    6: <Six />,
    7: <Seven />,
    8: <Eight />,
    9: <Nine />,
    11: <Eleven />,
    22: <Twentytwo />,
    33: <Thirtythree />,
  };

  return <main className={styles.main}>{pages[choice]}</main>;
}
