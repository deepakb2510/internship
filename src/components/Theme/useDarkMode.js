import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

<<<<<<< HEAD
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
=======
  const setMode = (mode) => {
    // window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
>>>>>>> 361b16fc6e1af92647270a0222831a04cd8d3b24
  };

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme");
  //   localTheme && setTheme(localTheme);
  // }, []);
  return [theme, themeToggler];
};
