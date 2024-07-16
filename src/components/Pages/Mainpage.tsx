import styles from "./Mainpage.module.css";
import Aurora from "../../assets/Aurora.jpg";
import Quantum from "../../assets/Quantum-ints.jpg";
import Thepath from "../../assets/Road-2-freedom.jpg";
import Cvlogo from "../../assets/grayscale-transparent.png";
import { Table } from "./Table";

export function Mainpage() {
  return (
    <div className={styles.main}>
      <p>
        Welcome to our Know youself, where we delve into the ancient teachings
        of Pythagoras and unlock the secrets of your destiny through the power
        of Pythagorean name numerology. Just as Pythagoras believed in the
        profound connection between mathematics, and the spiritual world, we
        invite you to explore the vibrations of your name and discover the
        hidden meanings encoded within. Let us guide you on a journey to uncover
        your destiny number and reveal the cosmic significance of your name.
        Open your mind, embrace the numerological wisdom, and step into the
        realm of infinite possibilities.
      </p>

      <img src={Aurora} />
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
      <img src={Quantum} />
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
      <a href="/InputPage">
        <button className={styles.main}>
          <img src={Cvlogo} />
        </button>
      </a>
    </div>
  );
}
