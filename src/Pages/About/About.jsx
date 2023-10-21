import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Navbar from '../../Components/Navbar';
import { Typography } from '@mui/material';
import "./About.css"
import Footer from '../../Components/Footer';
import image2 from "../../assets/c4.jpg";
import image3 from "../../assets/c5.jpg";
import image4 from "../../assets/groupimage.jpg"

export default function About() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2} style={{ marginBottom: 50 }}>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ paddingTop: 100 }}
          className="about-header"
        >
          <div>
            <h1>About us</h1>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className='about'
        style={{ marginBottom: 50 }}
      >
        <Grid item lg={6} md={12} xs={12} sm={12} className="aboutus">
          <h1 style={{ color: "#000" }}>
            We’re on a mission to provide Good residence and TO rent Residence
          </h1>
          <Typography style={{ marginBottom: "20px" }}>
            RESID+ is an application allowing anyone to find a residence throughout the Ivorian territory. We make your searches easier and reduce the scope, leaving you spoiled for choice.
            At Resid pro, our mission is clear and unwavering – to provide quality residences for those in search of a comfortable and convenient place to stay. Whether you're a traveler looking for a temporary abode or a property owner seeking to rent out your space, our platform is dedicated to bringing you together. We're committed to connecting individuals with good residences that meet their unique needs while also offering property owners a trusted platform to showcase and rent their valuable spaces. With a strong sense of purpose, we strive to make the process of finding or listing a residence as seamless and enjoyable as possible. Your journey is our priority, and we're here to help you find the perfect place to call home, no matter how far from your own.
          </Typography>

          <Typography>
            On a continent where over half the population has no bank account,
            Wave is building the first modern financial network — no account
            fees, instantly available.On a continent where over half the population has no bank account,
            Wave is building the first modern financial network — no account
            fees, instantly available.
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sm={12}
          className="aboutus"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className="container">
            <img
              src={image2}
              style={{ borderRadius: "20px" }}
              className="first-image"
            />
            <img
              src={image3}
              style={{ borderRadius: "20px" }}
              className="corner-image"
            />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className="about-second-part"
        style={{


          paddingBottom: "100px"
        }}
      >
        <Grid item lg={6} md={6} xs={12} sm={12} className="aboutus2">
          <img src={image4} style={{ borderRadius: "20px", height: "100%" }} />
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12} className="aboutus">
          <h1 style={{ color: "#000" }}>
            Who We Are
          </h1>
          <Typography>
            We are a passionate team of individuals who believe that finding comfortable and secure accommodation should be effortless. With years of experience in the travel and hospitality industry, we created Resid app to make your journey smoother and your stay more enjoyable.
          </Typography>

          <Typography style={{ marginTop: "30px" }}>
            We are dedicated to helping you discover, book, and manage residences that suit your needs, and we are committed to maintaining the highest standards of service, security, and convenience.

            Feel free to tailor and expand upon this information to better reflect the unique characteristics and values of your residence booking app.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}