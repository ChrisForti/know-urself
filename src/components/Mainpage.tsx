import styles from "./Mainpage.module.css";

export function Mainpage() {
  return (
    <main className={styles.main}>
      <h2>In my experience I wondered aimlessly until I truly knew myself.</h2>
      <p>
        Pythagorean Numerology is a system of interpreting the meaning of
        certain core numbers in your life, which are calculated from your birth
        date or name. This app will calculate take each letter of your name
        convert it to an integer, and add together.
      </p>
      <em>"Knowing yourself is the beginning of all wisdom."~~Socrates~~</em>
      <h2>In my experience I wondered aimlessly until I truly knew myself.</h2>
      <em>
        "Knowing others is intelligence; knowing yourself is true wisdom.
        Mastering others is strength; mastering yourself is true power."
        ~~Laozi~~
      </em>
      <ul>
        <h2>
          Your Expression Number reveals your strengths and weaknesses. Also
          called your Destiny Number, this number provides insight into your
          natural abilities that will help propel you to your life goals, as
          well as the challenges you will need to overcome to reach your full
          potential. You can calculate your Expression Number using your full
          name.
        </h2>
        <li>
          In Pythagorean Numerology, each letter of the alphabet has a
          corresponding number. To calculate your Expression Number, first
          assign the correct number to each letter of your name using the values
          below:
        </li>
        <li>
          A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=1, K=2, L=3, M=4, N=5,
          O=6, P=7, Q=8, R=9, S=1, T=2, U=3, V=4, W=5, X=6, Y=7, Z=8.
        </li>
        <li>
          Add up each of these numbers, then reduce the result until you have a
          single digit number.
        </li>
      </ul>
    </main>
  );
}
