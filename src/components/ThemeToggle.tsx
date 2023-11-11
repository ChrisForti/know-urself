import { useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.theme ?? "light",
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
  return (
    <button
      onClick={handleClick}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="flex h-11 w-11 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
    >
      {/* Sun icon */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="h-10 w-10 stroke-zinc-900 dark:hidden"
      >
        <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path
          strokeLinecap="round"
          d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
        />
      </svg>
      {/* Moon icon */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="hidden h-10 w-10 stroke-white dark:block"
      >
        <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
      </svg>
    </button>
  );
}
