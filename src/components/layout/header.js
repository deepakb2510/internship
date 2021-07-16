import React from 'react';
import {Link, Router} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import classes from './header.module.css';
import classes from './test.module.css';
function Header()
{
 
    return (
        <header className={classes.header}>
        <div className={classes.logo}>Intern Project</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/About'>Aboutus</Link>
                </li>
                <li>
                    <Link to='/Contactus'>Contactus</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}
export default Header;