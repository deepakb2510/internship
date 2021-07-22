import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme");
  //   localTheme && setTheme(localTheme);
  // }, []);
  return [theme, themeToggler];
};
