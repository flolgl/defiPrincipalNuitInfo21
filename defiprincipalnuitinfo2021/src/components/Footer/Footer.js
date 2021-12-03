import React, { useState } from "react";
import Button from "../Button/Button";
import "./Footer.css";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';






const Footer = (props) => {
  
  return (
    <div className="footer">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Ma<span>Libellule</span>
          </h3>

          <p class="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
            <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Group © 2021</p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
            
          </div>

                         
                    <div className="container">
                  <span style={{ color: props.stateDark ? "grey" : "yellow" }}>☀︎</span>
                  <div className="switch-checkbox">
                    <label className="switch">
                      <input type="checkbox" onChange={() => props.setStateDark(!props.stateDark)} />
                      <span className="slider round"> </span>
                    </label>
                  </div>
                  <span style={{ color: props.stateDark ? "#c96dfd" : "grey" }}>☽</span>
                    </div>
        </div>

        <div class="footer-right">
          <p>Contact Us</p>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <Button className="btn-border-2">Send</Button>
          </form>
        </div>
      </footer>
    </div>
  );
};



export default Footer;
