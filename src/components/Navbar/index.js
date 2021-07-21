import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink 
} from './NavbarElements';
import logo from './images/logodevarena.png'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
