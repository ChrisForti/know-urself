import styles from "./EntryBox.module.css";
import { useState } from "react";
import { getGematriaValue } from "../gematria-logic";

type EntryBoxProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function EntryBox({ setChoice }: EntryBoxProps) {
  const [value, setValue] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChoice(getGematriaValue(value));
  }
  return (
    <form className={styles.entrybox} onSubmit={handleSubmit}>
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
