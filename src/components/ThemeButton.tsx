import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

const loadTheme = () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return localStorage.theme == "dark";
};

function ThemeButton() {
  const [darkTheme, setDarkTheme] = useState(loadTheme());

  useEffect(() => {
    setNewTheme();
  }, [darkTheme]);

  const setNewTheme = () => {
    if (darkTheme) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  const showIcon = (flag: boolean) => {
    return flag ? "" : "opacity-0";
  };

  return (
    <ToggleSwitch
      label=""
      size={"sm"}
      value={darkTheme}
      onToggle={setDarkTheme}
      background={"#6298e9"}
      checkedBackground={"#353535"}
    >
      <FaMoon
        className={
          "absolute text-base duration-150 ease-linear pointer-events-none text-amber-400 " +
          showIcon(darkTheme)
        }
        style={{ left: "15px" }}
      />
      <FaSun
        className={
          "absolute text-base duration-150 ease-linear text-yellow-300 pointer-events-none " +
          showIcon(!darkTheme)
        }
        style={{ right: "15px" }}
      />
    </ToggleSwitch>
  );
}

export { ThemeButton };
