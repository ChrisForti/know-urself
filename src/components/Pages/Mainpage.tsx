import styles from "./Mainpage.module.css";
import Aurora from "../../assets/Aurora.jpg";
import Quantum from "../../assets/Quantum-ints.jpg";
import Thepath from "../../assets/Road-2-freedom.jpg";
import Cvlogo from "../../assets/grayscale-transparent.png";
import { Table } from "./Table";

export function Mainpage() {
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
      <img src={Aurora} />
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
      <img src={Quantum} />
      <p>
        Pythagoras declared arithmetic to be the mother of the mathematical
        sciences. This is proved by the fact that geometry, music, and astronomy
        are dependent upon it but it is not dependent upon them. Thus, geometry
        may be removed but arithmetic will remain; but if arithmetic be removed,
        geometry is eliminated. <br /> In the same manner music depends upon
        arithmetic, but the elimination of music affects arithmetic only by
        limiting one of its expressions. <br />
        The Pythagoreans also demonstrated arithmetic to be prior to astronomy,
        for the latter is dependent upon both geometry and music. The size,
        form, and motion of the celestial bodies is determined by the use of
        geometry; their harmony and rhythm by the use of music. If astronomy be
        removed, neither geometry nor music is injured; but if geometry and
        music be eliminated, astronomy is destroyed. <br /> The priority of both
        geometry and music to astronomy is therefore established. Arithmetic,
        however, is prior to all; it is primary and fundamental.
        <a href="https://archive.org/details/theoreticarithme0000tayl">
          <em> Theoretic Arithmetic</em>
        </a>
      </p>
      <p>
        In Pythagorean Numerology, each letter of the alphabet has a
        corresponding number. To calculate your Expression Number, first assign
        the correct number to each letter of your name using the values below:
      </p>
      <br />
      <Table />
      <br />
      <b>
        Until we have a single root number, or the last two digits are 11, 22,
        33.
      </b>
      <h2>Master Numbers in Numerology</h2>
      <p>
        Usually, there are numbers from 1 to 9 that numerology utilizes to
        explore life and predictions for the future. But, some specific number
        sets are considered special and unique. This set of numbers possesses a
        universal impact and immense significance to the people who have it.
        Such numbers are known as the Master numbers.
      </p>
      <p>
        Since the origin of Numerology, numbers 11, 22, and 33 are considered
        the Master numbers. Numerologists believe that these numbers have a
        superior presence in the Universe. As per the Chaldean numerology, there
        occurs a mysterious force surrounding these special Master numbers.
        These numbers just repeat themselves. However, as per numerology, they
        are of utter importance.
      </p>
      <img src={Thepath} />
      <img src={Cvlogo} />
    </div>
  );
}
