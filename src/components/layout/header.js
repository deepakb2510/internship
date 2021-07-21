import React from "react";
import { NavDropdown, Navbar, Container, Nav, Button } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import classes from "./testheader.module.css";
import { Link } from "react-router-dom";
import { positions } from "@material-ui/system";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Toggle = styled.button`
  cursor: pointer;
  height: 25px;
  width: 25px;
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
  const history = useHistory();
  const handleSignUp = () => history.push("/login");
  const handleSignIn = () => history.push("/signup");

  const icon =
    props.theme === "light" ? <CgSun size={15} /> : <HiMoon size={15} />;
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

        <h2>DevArena Solution</h2>
        <Toggle className="mx-4" onClick={props.toggleTheme}>
          {icon}
        </Toggle>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className={classes.link} to="/">
              <h5>Home</h5>
            </Link>
            {/* <Link className = {classes.link} to='/About'>AboutUs</Link> */}
            <Link className={classes.link} to="/contact-us">
              <h5>Contactus</h5>
            </Link>
            <Button
              onClick={handleSignIn}
              className={classes.btn}
              variant="dark outline-secondary"
            >
              Signin
            </Button>
            <Button
              onClick={handleSignUp}
              className={classes.btn}
              variant="dark outline-secondary"
            >
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
