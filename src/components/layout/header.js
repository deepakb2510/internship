import React from 'react';
import {Link} from 'react-router-dom';
import classes from './test.module.css';
import { AppBar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
function Header()
{
 
    return (
      <AppBar position="static">
          <header className={classes.header}>
                <nav className={classes.nav}>
                        <Button><MenuIcon className = {classes.icon}/></Button>
                        <Link className = {classes.link} to = '/'>Home</Link>
                        <Link className = {classes.link} to='/About'>AboutUs</Link>
                        <Link className = {classes.link} to='/Contactus'>Contactus</Link>
                        <Button className = {classes.Button} color="inherit" >Login</Button>
                </nav>
            </header>
      </AppBar>  
        
    )
}
export default Header;