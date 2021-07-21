import React, { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import { Route, Switch } from "react-router-dom";
>>>>>>> 361b16fc6e1af92647270a0222831a04cd8d3b24
import Defaultpage from "./components/pages/Defaultpage";
import About from "./components/pages/About";
import Contactus from "./components/pages/Contactus";
import { useDarkMode } from "./components/Theme/useDarkMode";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
<<<<<<< HEAD
import { AuthProvider } from "./components/pages/contexts/AuthContext";
import PrivateRoute from "./components/pages/PrivateRoute";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Loginsucess from "./components/pages/Loginsucess";
import UpdateProfile from "./components/pages/UpdateProfile";
import ForgotPassword from "./components/pages/ForgotPassword";
=======

>>>>>>> 361b16fc6e1af92647270a0222831a04cd8d3b24
function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
<<<<<<< HEAD
    <AuthProvider>
      <Router>
        <ThemeProvider theme={themeMode}>
          <div className="Main">
            <GlobalStyles />
            <Layout theme={theme} toggleTheme={themeToggler}>
              <Switch>
                <Route path="/" exact component={Defaultpage} />
                <Route path="/about" component={About} />
                <Route path="/contact-us" component={Contactus} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/loginsucess" component={Loginsucess} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </Layout>
          </div>
        </ThemeProvider>
      </Router>
    </AuthProvider>
=======
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
>>>>>>> 361b16fc6e1af92647270a0222831a04cd8d3b24
  );
}

export default App;
