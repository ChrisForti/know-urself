import styles from "./Mainpage.module.css";
import Aurora from "../../assets/Aurora.jpg";
import Quantum from "../../assets/Quantum-ints.jpg";
import Thepath from "../../assets/Road-2-freedom.jpg";
import Cvlogo from "../../assets/grayscale-transparent.png";

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
      <ul>
        <li>
          In Pythagorean Numerology, each letter of the alphabet has a
          corresponding number. To calculate your Expression Number, first
          assign the correct number to each letter of your name using the values
          below:
        </li>
        <br />
        <p className={styles.caption}>
          Letter to number conversion for the english alphabet
        </p>
        <table>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td>I</td>
          </tr>
          <tr>
            <td>J</td>
            <td>K</td>
            <td>L</td>
            <td>M</td>
            <td>N</td>
            <td>O</td>
            <td>P</td>
            <td>Q</td>
            <td>R</td>
          </tr>
          <tr>
            <td>S</td>
            <td>T</td>
            <td>U</td>
            <td>V</td>
            <td>W</td>
            <td>X</td>
            <td>Y</td>
            <td>Z</td>
          </tr>
        </table>
        <tfoot>
          this app will do this letter to number conversion, then add up each of
          these numbers, reducing each pair into a single number.
        </tfoot>
        <br />
        <b>
          Until we have a single root number, or the last two digits are 11, 22,
          33.
        </b>
      </ul>
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
