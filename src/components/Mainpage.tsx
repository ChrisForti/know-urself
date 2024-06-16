import styles from "./Mainpage.module.css";
import Myimage from "../assets/alex-block-PdDBTrkGYLo-unsplash (1).jpg";
import Myimage2 from "../assets/istockphoto-1197499442-1024x1024.jpg";
import Pyscave from "../assets/makis-hristaras-5oZgQ2VQpz8-unsplash.jpg";

export function Mainpage() {
  return (
    <main className={styles.main}>
      <img src={Myimage} width="800px" height="500px" />
      <p>
        Pythagorean Numerology is a system of interpreting the meaning of
        certain core numbers in your life, which are calculated from your birth
        date or name. This app will convert each letter of your name, to its
        corresponding integer. Then add them together, and reducing each double
        integer to a single integer.
      </p>
      <b> Which will leave us with your root number.</b>
      <img src={Myimage2} width="800px" height="500px" />
      <h2>In my experience I wandered aimlessly until I truly knew myself.</h2>

      <h4>"Knowing yourself is the beginning of all wisdom."~~Socrates~~</h4>

      <h4>
        "Knowing others is intelligence; knowing yourself is true wisdom.
        Mastering others is strength; mastering yourself is true power."
        ~~Laozi~~
      </h4>
      <img src={Pyscave} width="800px" height="500px" />
      <ul>
        <h2>
          Your Expression Number reveals your strengths and weaknesses. Also
          called your Destiny Number, this number provides insight into your
          natural abilities that will help propel you to your life goals, as
          well as the challenges you will need to overcome to reach your full
          potential. You can calculate your destiny Number using your full name.
        </h2>
        <li>
          In Pythagorean Numerology, each letter of the alphabet has a
          corresponding number. To calculate your Expression Number, first
          assign the correct number to each letter of your name using the values
          below:
        </li>
        <br />
        <li>
          A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=1, K=2, L=3, M=4, N=5,
          O=6, P=7, Q=8, R=9, S=1, T=2, U=3, V=4, W=5, X=6, Y=7, Z=8.
        </li>
        <br />
        <li>
          this app will do this letter to number conversion, then add up each of
          these numbers, reducing each pair into a single number.
        </li>
        <br />
        <b>Until we have a single root number.</b>
      </ul>
    </main>
  );
}
