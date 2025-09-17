import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 fixed top-4 right-4 z-50"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="w-5 h-5"
      />
    </button>
  );
}
