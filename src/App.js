import React, {
  useState,
  createContext,
  useContext,
  Suspense,
  useReducer,
  lazy,
} from "react";
import "./App.css";
import { reducer, initialState } from "./reducer/UseReducer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDarkMode } from "./components/Theme/useDarkMode";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { AuthProvider } from "./components/pages/contexts/AuthContext";
import PrivateRoute from "./components/pages/PrivateRoute";

const Defaultpage = lazy(() => import("./components/pages/Defaultpage"));
const About = lazy(() => import("./components/pages/About"));
const Contactus = lazy(() => import("./components/pages/Contactus"));
const Signup = lazy(() => import("./components/pages/Signup"));
const Login = lazy(() => import("./components/pages/Login"));
const Loginsucess = lazy(() => import("./components/pages/Loginsucess"));
const UpdateProfile = lazy(() => import("./components/pages/UpdateProfile"));
const ForgotPassword = lazy(() => import("./components/pages/ForgotPassword"));
const AdminLogin = lazy(() => import("./components/pages/AdminLogin"));

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <AuthProvider>
        <Router>
          <ThemeProvider theme={themeMode}>
            <div className="Main">
              <GlobalStyles />
              <Layout theme={theme} toggleTheme={themeToggler}>
                <Suspense fallback={<div>Loading...</div>}>
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
                    <PrivateRoute path="/admin" component={AdminLogin} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                  </Switch>
                </Suspense>
              </Layout>
            </div>
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </UserContext.Provider>
  );
}

export default App;
