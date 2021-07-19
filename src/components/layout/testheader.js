 import React from 'react';
 import {Link, Router} from 'react-router-dom';
import { Button, Navbar , Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './testheader.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import Switches from '../switch/switch'
 function Testheader() {
     return (
         <div>
           <Navbar bg="primary" variant="dark">
                <Container className={classes.container}>
                    {/* <Navbar.Brand >Navbar</Navbar.Brand> */}
                    <Button><MenuIcon className = {classes.icon}/></Button>
                    <Nav className="me-auto">
                        <Link className = {classes.link} to = '/'>Home</Link>
                        <Link className = {classes.link} to='/About'>AboutUs</Link>
                        <Link className = {classes.link} to='/Contactus'>Contactus</Link>
                        <Switches></Switches>
                        <Button>Login</Button>
                     </Nav>
                 </Container>
             </Navbar>
         </div>
     )
 }
 
 export default Testheader;
 