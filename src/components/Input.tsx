import styles from "./Input.module.css";
import { useState } from "react";
import { getGematriaValue } from "../gematria-logic";

type InputProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function Input({ setChoice }: InputProps) {
  const [value, setValue] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChoice(getGematriaValue(value));
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>Name converter box</div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
