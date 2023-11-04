import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const state = useState("default");
  const text = state[0];
  const setText = state[1];
  function handleClick() {
    setText("You pushed me");
  }

  return (
    <>
      <h1 className="text-7xl dark:text-white">
        My people are destroyed for lack of knowledge
      </h1>
      <ThemeToggle />
    </>
  );
}

export default App;
