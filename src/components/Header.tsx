import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white py-2 pe-10 ps-7 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-semibold dark:text-white "> Know Urself</h1>
      <ThemeToggle />
    </header>
  );
}
