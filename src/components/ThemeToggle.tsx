import { useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.theme ?? "light"
  );
  function handleClick() {
    if (theme === "light") {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }
  return <button onClick={handleClick}>switch</button>;
}
