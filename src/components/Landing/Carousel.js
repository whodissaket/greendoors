import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from "./Mainpage.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default () => (
  <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showArrows={false} showIndicators={false} showStatus={false}>
    <div>
      <h1 className={classes.h1}>The Safest and Best Service in COVID19 - Greendoors</h1>
      <span className={classes.caption}>Available All Over The India</span>
    </div>
    <div>
      <h1 className={classes.h1}>Get Your Houses painted at Cheapest Prices - @Greendoors</h1>
      <span className={classes.star}><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt></span>
    </div>
    <div>
      <h1 className={classes.h1}>Proffesional Painting of Your Dream House - @Greendoors</h1>
      <span className={classes.caption}>Paint Your Home, The Best way</span>
    </div>
  </Carousel >
);
