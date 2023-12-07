import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Footer.css";
import logo from "../../src/assets/residlogo.png";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import googlebtn from "../../src/assets/googlebutton.png";
import applebtn from "../../src/assets/applebutton.png";
function Footer() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          style={{ padding: "50px 100px" }}
          className="footer"
        >
          <Grid item lg={3} sm={6}>
            <Link to="/">
              <img src={logo} style={{ borderRadius: 20 }} />
            </Link>
            <p className="copyright" style={{color:"#fff",fontSize:"20px"}}>© Resid booking Inc.</p>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} className="footer-menu">
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Quick link
            </Typography>
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-angle-double-right"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fas fa-angle-double-right"></i> About us
                </Link>
              </li>
              <li>
                <Link to="/policy-term">
                  <i className="fas fa-angle-double-right"></i> Privacy and term
                  & <br />
                  condition
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Download the App
            </Typography>

            <Link to="https://play.google.com/store/games?hl=en&gl=US&pli=1">
              <img
                src={googlebtn}
                style={{
                  width: "200px",
                  height: "70px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link to="https://www.apple.com/app-store/">
              <img
                src={applebtn}
                style={{ width: "200px", height: "70px", cursor: "pointer" }}
              />
            </Link>
          </Grid>

          <Grid item lg={3} sm={6} xs={12}>
            <Box className="contactus">
              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  fontSize: "30px",
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                Contact us
              </Typography>
              <Typography sx={{ color: "#fff",fontWeight:"bold" }}>
               
                  <i className="fas fa-phone-alt"></i>+2250757063629
               
              </Typography>
              <Typography sx={{ my: 3,fontWeight:"bold" }}>France</Typography>
              <Typography sx={{ mb: 3,fontWeight:"bold" }}>francksylv21@gmail.com</Typography>
              <Box className="social-link">
                <a href="//twitter.com/" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="//www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="//www.youtube.com/" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
}

export default Footer