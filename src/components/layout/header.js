import React, { useContext, useState } from "react";
import { NavDropdown, Navbar, Container, Nav, Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import classes from "./testheader.module.css";
import { useAuth } from "../pages/contexts/AuthContext";
import { Link } from "react-router-dom";
import { positions } from "@material-ui/system";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/logodevarena.png";
import { UserContext } from "../../App";
import auth from "../../Firebase";

const Toggle = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 20%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

function Header(props) {
  const [error, setError] = useState("");

  const { state, dispatch } = useContext(UserContext);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleSignUp = () => history.push("/login");
  const handleSignIn = () => history.push("/signup");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      dispatch({ type: "USER", payload: false });
      history.push("/login"); /* redirectuser to login on logout */
    } catch {
      setError("Failed to log out");
    }
  }

  const icon =
    props.theme === "light" ? <CgSun size={15} /> : <HiMoon size={15} />;

  const RenderMenu = () => {
    if (state === "USER") {
      return (
        <Navbar
          className={classes.navbar}
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container className="mw-100">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Link to="/">
              <img src={logo} alt="logo" className={classes.img} />
            </Link>
            <Toggle className="mx-4" onClick={props.toggleTheme}>
              {icon}
            </Toggle>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link className={classes.link} to="/about">
                  <h5>About us</h5>
                </Link>
                {/* <Link className = {classes.link} to='/About'>AboutUs</Link> */}
                <Link className={classes.link} to="/contact-us">
                  <h5>Contact us</h5>
                </Link>
                <Button
                  onClick={handleLogout}
                  className={classes.btn}
                  variant="dark outline-secondary"
                >
                  Log Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else if (state === "ADMIN") {
      return (
        <Navbar
          className={classes.navbar}
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container className="mw-100">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Link to="/">
              <img src={logo} alt="logo" className={classes.img} />
            </Link>
            <Toggle className="mx-4" onClick={props.toggleTheme}>
              {icon}
            </Toggle>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link className={classes.link} to="/admin">
                  <h5>Admin</h5>
                </Link>
                <Button
                  onClick={handleLogout}
                  className={classes.btn}
                  variant="dark outline-secondary"
                >
                  Log Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar
          className={classes.navbar}
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container className="mw-100">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Link to="/">
              <img src={logo} alt="logo" className={classes.img} />
            </Link>
            <Toggle className="mx-4" onClick={props.toggleTheme}>
              {icon}
            </Toggle>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link className={classes.link} to="/about">
                  <h5>About us</h5>
                </Link>
                {/* <Link className = {classes.link} to='/About'>AboutUs</Link> */}
                <Link className={classes.link} to="/contact-us">
                  <h5>Contact us</h5>
                </Link>
                <Button
                  onClick={handleSignIn}
                  className={classes.btn}
                  variant="dark outline-secondary"
                >
                  Sign up
                </Button>
                <Button
                  onClick={handleSignUp}
                  className={classes.btn}
                  variant="dark outline-secondary"
                >
                  Log in
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  };
  return <RenderMenu />;
}

export default Header;
