import React from 'react'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import classes from './testheader.module.css';
import {Link, Router} from 'react-router-dom';
import Switches from '../switch/switch'

function Testnavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
  {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      className={classes.headertxt}
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Link className = {classes.link} to = '/'>Home</Link>
      <Link className = {classes.link} to='/About'>AboutUs</Link>
      <Link className = {classes.link} to='/Contactus'>Contactus</Link>
      <Switches></Switches>
      <Button className = {classes.Button}>Login</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Testnavbar;
