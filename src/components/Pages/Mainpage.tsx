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
        <li>
          <table className={styles.table}>
            <caption>letter to number layout</caption>
            <thead>
              <tr>
                <th scope="col">number</th>
                <th scope="col">letters</th>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>A</td>
                <td>J</td>
                <td>S</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>B</td>
                <td>K</td>
                <td>T</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>C</td>
                <td>L</td>
                <td>U</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>D</td>
                <td>M</td>
                <td>V</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>E</td>
                <td>N</td>
                <td>W</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>F</td>
                <td>O</td>
                <td>X</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>G</td>
                <td>P</td>
                <td>Y</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>H</td>
                <td>Q</td>
                <td>Z</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>I</td>
                <td>R</td>
              </tr>
            </thead>
            {/* A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=1, K=2, L=3, M=4,
            N=5, O=6, P=7, Q=8, R=9, S=1, T=2, U=3, V=4, W=5, X=6, Y=7, Z=8. */}
          </table>
        </li>
        <br />
        <li>
          this app will do this letter to number conversion, then add up each of
          these numbers, reducing each pair into a single number.
        </li>
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
