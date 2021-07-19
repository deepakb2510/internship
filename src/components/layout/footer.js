import React from 'react';
import classes from './test.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() 
{
    return (
        <div className={classes.footer}>
          <div >
              <a href="https://en-gb.facebook.com/" ><FacebookIcon  className={classes.icons}> </FacebookIcon></a> 
              <a href="https://web.whatsapp.com/" ><WhatsAppIcon className={classes.icons}/></a>
              <a href="https://mobile.twitter.com/login" ><TwitterIcon className={classes.icons}/></a>
              <a href="https://www.instagram.com/" ><InstagramIcon className={classes.icons}/></a>
          </div>
        
      </div>
    )
}
export default Footer;
