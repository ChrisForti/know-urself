import styles from "./Mainpage.module.css";
import { Input } from "../Input";
import Cvlogo from "../../assets/grayscale-transparent.png";

type InputPageProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function InputPage({ setChoice }: InputPageProps) {
  return (
    <main className={styles.main}>
      <h1>Pythagorean name numerology in a nutshell</h1>
      <p>
        Pythagorean name Numerology is a system of interpreting all the numbers
        of your life, via the letters of your name. Then with simple math we can
        extrapolating the meaning of the root numbers that are your life. This
        app will convert each letter of your name, to its corresponding integer.
        Then by reduction, adding each double integer to a single integer{" "}
        <b>( example: number is 12, 1+2=3 )</b>. Unless of course, the algorythm
        finds special circumstances, for now we will call those master numbers.
      </p>
      <b> Which will leave us with your Expression number.</b>
      <br />
      <p>
        Your Expression Number reveals your strengths and weaknesses. Also
        called your <b>Destiny Number</b>, this number provides insight into
        your natural abilities that will help propel you to your life goals, as
        well as the challenges you will need to overcome to reach your full
        potential. You can calculate your destiny Number using your full name
        given at birth.
      </p>
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
      <hr className={styles.hr} />
      <span className={styles.input}>
        <h1>Enter your full name given at birth in the box</h1>
        <Input setChoice={setChoice} />
      </span>
      <hr className={styles.hr} />
      <h1 className={styles.h1}>
        In my experience I wandered aimlessly until I truly knew myself.
      </h1>
      <h4>
        "Restore your connection with the self" <br />
        ~~Carl jung~~
      </h4>
      <h4>
        "You have got to stop being machine men, and machine women. Go back to
        being real human beings"
        <br /> ~~Charlie Chaplin~~
      </h4>
      <h4>
        "No problems have ever been solved by the same consciousness that
        created them"
        <br />
        ~~Albert Einstein~~
      </h4>
      <a href={import.meta.env.BASE_URL + "/Mainpage"}>
        <button className={styles.main}>
          <img src={Cvlogo} />
        </button>
      </a>
    </main>
  );
}
