import styles from "./Content.module.css";
import { Mainpage } from "./Pages/Mainpage";
import { One } from "./Pages/One";
import { Two } from "./Pages/Two";
import { Three } from "./Pages/Three";
import { Four } from "./Pages/Four";
import { Five } from "./Pages/Five";
import { Six } from "./Pages/Six";
import { Seven } from "./Pages/Seven";
import { Eight } from "./Pages/Eight";
import { Nine } from "./Pages/Nine";
import { Eleven } from "./Pages/Eleven";
import { Twentytwo } from "./Pages/Twentytwo";
import { Thirtythree } from "./Pages/Thirtythree";
import { InputPage } from "./Pages/Inputpage";

type ContentProps = { choice: number };

export function Content({ choice }: ContentProps) {
  const pages: { [key: number]: JSX.Element } = {
    34: <InputPage />,
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
