import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Defaultpage from "./components/pages/Defaultpage";
import About from "./components/pages/About";
import Contactus from "./components/pages/Contactus";
import { useDarkMode } from "./components/Theme/useDarkMode";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Theme";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <div className="Main">
        <GlobalStyles />
        <Layout theme={theme} toggleTheme={themeToggler}>
          <Switch>
            <Route path="/" exact>
              <Defaultpage></Defaultpage>
            </Route>
            <Route path="/About">
              <About></About>
            </Route>
            <Route path="/Contactus">
              <Contactus></Contactus>
            </Route>
          </Switch>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
