import { Content } from "./components/Content";
import { Header } from "./components/Header";
import "./App.css";
import { Container } from "./components/Container";
import { useState } from "react";

function App() {
  const state = useState("default");
  const text = state[0];
  const setText = state[1];
  function handleClick() {
    setText("You pushed me");
  }

  return (
    <>
      <Header />

      <Container>hello world</Container>
      <Container>
        <Content content={text} />
      </Container>
      <button onClick={handleClick}>click me</button>
    </>
  );
}

export default App;
