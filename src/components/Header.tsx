import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white py-2 pe-10 ps-7 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-semibold dark:text-white ">
        The mystery of life is not a problem to solve, but a reality to
        experience. A process that can not be understood by stopping it. We must
        move with the flow of the process. We must join it. We must flow with
        it.{" "}
      </h1>
      <ThemeToggle />
    </header>
  );
}
