import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Fade, Grid } from '@mui/material'
import "./Home.css"
import bannerImage from '../../assets/featureimage.png';
import Card from '@mui/material/Card';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "swiper/css/autoplay";
import image1 from "../../assets/c3.jpg"
import image2 from "../../assets/c4.jpg"
import image3 from "../../assets/c5.jpg"
import googlebtn from "../../assets/googlebutton.png"
import applebtn from "../../assets/applebutton.png"


import number3 from "../../assets/number3.png";
import number4 from "../../assets/number4.png";

import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';

const drawerWidth = 240;
const navItems = [{ "menuName": 'Home', "menuLink": "/" }, { "menuName": 'About', "menuLink": "/about-policies" }];




function Home() {


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };



  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={2}
        className="header-banner"
        style={{ marginBottom: 50 }}
      >
        <Grid item lg={6} xs={12} className="header-text">
          <h1 style={{ color: "white" }}>
            Awesome App, Sign Up now and Rent your Residence and user can booking your residence
          </h1>
          <Typography>
          Welcome to Resid App, your all-in-one solution for finding, booking, and enjoying the ideal residence for your unique needs. Whether you're a globetrotter looking for a home away from home or a property owner seeking to rent out your space, our platform is designed to meet your requirements with ease and efficiency.
          </Typography>

          <div className="playstore-button">
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
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Swiper
            className="header-slider"
            modules={[Autoplay,Pagination,Zoom, Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1440: {
                slidesPerView: 1,
              },
            }}
            
            className="mySwiper"
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
              "--swiper-pagination-bottom": "28px",
            }}
            zoom={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
           
            
          >
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img src={number3} style={{ height: 600 }} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img src={number4} style={{ height: 600 }} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img src={bannerImage} style={{ height: 600 }} />
              </div>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: 50 }}>
        <Grid item lg={12} className="second-part-header">
          <h1>Features</h1>
          <p>
          Explore the incredible features of Resid App. Streamlined bookings, secure payments, in-app communication, and more for an unparalleled residence booking experience
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="fetures-section"
      >
        <Grid item lg={3}md={4} xs={12} sm={12}  >
          <Card variant="outlined" className="feature">
          <img width="64" height="64" src="https://img.icons8.com/ios-filled/50/opacity.png" alt="opacity"/>
            <h1>Fully Transparent</h1>
            <p>
              Accurate information of work. Visualization achieved through the
              board.
            </p>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} xs={12} sm={12}>
          <Card variant="outlined" className="feature">
          <img width="64" height="64" src="https://img.icons8.com/wired/64/easy.png" alt="easy"/>
            <h1>Easy to Use</h1>
            <p>
              Accurate information of work. Visualization achieved through the
              board.
            </p>
          </Card>
        </Grid>
        <Grid item lg={3}md={4} xs={12} sm={12}>
          <Card variant="outlined" className="feature">
          <img width="64" height="64" src="https://img.icons8.com/carbon-copy/100/24-hours-day-support.png" alt="24-hours-day-support"/>
            <h1>24 x 7 Support</h1>
            <p>
              Accurate information of work. Visualization achieved through the
              board.
            </p>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} xs={12} sm={12}>
          <Card variant="outlined" className="feature">
          <img width="64" height="64" src="https://img.icons8.com/dotty/80/sell-property.png" alt="sell-property"/>
            <h1>Rent your Residence</h1>
            <p>
              Accurate information of work. Visualization achieved through the
              board.
            </p>
          </Card>
        </Grid>

        <Grid item lg={3}md={4} xs={12} sm={12}>
          <Card variant="outlined" className="feature">
          <img width="64" height="64" src="https://img.icons8.com/ios/50/booking.png" alt="booking"/>
            <h1>Booking your residence</h1>
            <p>
              Accurate information of work. Visualization achieved through the
              board.
            </p>
          </Card>
        </Grid>
        <Grid item lg={3}md={4} xs={12} sm={12}>
          <Card variant="outlined" className="feature">
          <img width="64" height="64" src="https://img.icons8.com/external-others-pike-picture/50/external-Reviews-cinema-others-pike-picture.png" alt="external-Reviews-cinema-others-pike-picture"/>
            <h1>Review</h1>
            <p>
              Accurate information of work. Visualization achieved through the
              board.
            </p>
          </Card>
        </Grid>
        
        
      </Grid>
      {/* testimonial section */}

      <Grid container spacing={2}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h1 style={{ padding: "0 100px" }}>
            See what our customers have to say about Resid
          </h1>
          <p style={{ padding: "0 100px" }}>
          "Resid: Where Comfort Meets Community" is not just a tagline; it's a testament to the experiences and feedback of our valued customers. Discover what our satisfied users have to say about their journey with Resid. From travelers finding their ideal home away from home to property owners enjoying a hassle-free way to rent their spaces, our platform is the bridge that connects people with comfort and convenience. 
          </p>
        </Grid>

        <Grid item xs={12}></Grid>

        <Grid
          className="testimonial"
          container
          spacing={2}
          style={{
            width: "100vw",
            padding: "0 100px",
            marginBottom: "100px",
            marginTop: "0px",
          }}
        >
          <Swiper
            slidesPerView={1}
           
            modules={[Autoplay,Pagination,Zoom, Navigation]}
            spaceBetween={10}
            autoplay={{
              delay: 1500,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
           
            className="mySwiper"
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            zoom={true}
            navigation={true}
           
            
          >
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img
                  src={image1}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    border: "5px solid #afaead",
                  }}
                />
                <h3>Raouth Samuel</h3>
                <p>
                  vehicula pharetra est. Phasellus sagittis turpis diam.
                  Maecenas faucibus mollis diam, at facilisis ex sagittis vel
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img
                  src={image2}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    border: "5px solid #afaead",
                  }}
                />
                <h3>Raouth Samuel</h3>
                <p>
                  vehicula pharetra est. Phasellus sagittis turpis diam.
                  Maecenas faucibus mollis diam, at facilisis ex sagittis vel
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img
                  src={image3}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    border: "5px solid #afaead",
                  }}
                />
                <h3>Raouth Samuel</h3>
                <p>
                  vehicula pharetra est. Phasellus sagittis turpis diam.
                  Maecenas faucibus mollis diam, at facilisis ex sagittis vel
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img
                  src={image1}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    border: "5px solid #afaead",
                  }}
                />
                <h3>Raouth Samuel</h3>
                <p>
                  vehicula pharetra est. Phasellus sagittis turpis diam.
                  Maecenas faucibus mollis diam, at facilisis ex sagittis vel
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img
                  src={image2}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    border: "5px solid #afaead",
                  }}
                />
                <h3>Raouth Samuel</h3>
                <p>
                  vehicula pharetra est. Phasellus sagittis turpis diam.
                  Maecenas faucibus mollis diam, at facilisis ex sagittis vel
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ textAlign: "center" }}>
                <img
                  src={image3}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                    border: "5px solid #afaead",
                  }}
                />
                <h3>Raouth Samuel</h3>
                <p>
                  vehicula pharetra est. Phasellus sagittis turpis diam.
                  Maecenas faucibus mollis diam, at facilisis ex sagittis vel
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
      
      <Footer />
    </div>
  );
}



export default Home