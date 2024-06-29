import styles from "./Mainpage.module.css";

export function Table() {
  return (
    <div>
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
    </div>
  );
}
