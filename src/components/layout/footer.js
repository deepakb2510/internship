import React from "react";
import "./footer.css";
import classes from "./test.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "./images/logodevarena.png";
function Footer() {
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About the DevArena</span> Ut congue augue non tellus bibendum,
          in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus
          odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer
          tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo.
          Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue.
          Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div class="icons">
          <a href="https://en-gb.facebook.com/">
            <FacebookIcon className={classes.icons}> </FacebookIcon>
          </a>
          <a href="https://web.whatsapp.com/">
            <WhatsAppIcon className={classes.icons} />
          </a>
          <a href="https://mobile.twitter.com/login">
            <TwitterIcon className={classes.icons} />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon className={classes.icons} />
          </a>
        </div>
      </div>
      <div class="footer-center col-md-auto col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span> Office Address</span> Kalyan, India
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> +123456789 </p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#"> email.com </a>
          </p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <h2>
          <img src={logo} alt="logo" />
        </h2>
        <p class="menu">
          <a href="#"> Home</a> |<a href="#"> About</a> |
          <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
          <a href="#"> News</a> |<a href="#"> Contact</a>
        </p>
        <p class="name"> DevArena 2021</p>
      </div>
    </footer>
  );
}
export default Footer;
