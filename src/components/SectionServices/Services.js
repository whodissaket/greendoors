import React from "react";
import classes from "./Services.module.css"
import Card from "./Cards/Cards"

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.title}>
        <h3>Services<span className={classes.underline}></span></h3>
      </div>
      <div className={classes.card1Section}>
        <Card
          image={process.env.PUBLIC_URL + "/assets/interior-painting.jpg"}
          alt="Interior Painting"
          titleText="Interior Painting"
          description="Get Your Home painted with Greendoors Interior Painting. We assist you with finding the correct one Colour . Regardless of whether it's emotional, unwinding or adjusting, we have thoughts and tips on the best way to pick the ideal color palette." />
        <Card
          image={process.env.PUBLIC_URL + "/assets/exterior-painting.png"}
          alt="Exterior Painting"
          titleText="Exterior Painting"
          description="Get Your Home painted with Greendoors Exterior Painting. We assist you with finding the correct one Colour . The colour that matches your home and impresses everyone and protects your home from Dust, Sunrays and Heat." />
      </div>

      <div className={classes.card2Section}>
        <Card
          image={process.env.PUBLIC_URL + "/assets/paint-quotation.jpg"}
          alt="Paint Quotation"
          titleText="Paint Quotation"
          description="Get Your Home painted with Greendoors Interior Painting. We assist you with finding the correct one Colour . Regardless of whether it's emotional, unwinding or adjusting, we have thoughts and tips on the best way to pick the ideal color palette." />
      </div>

      <div className={classes.card3Section}>
        <Card
          image={process.env.PUBLIC_URL + "/assets/waterproofing.jpg"}
          alt="Waterproofing"
          titleText="Waterproofing"
          description="Get Your Home painted with Greendoors Interior Painting. We assist you with finding the correct one Colour . Regardless of whether it's emotional, unwinding or adjusting, we have thoughts and tips on the best way to pick the ideal color palette." />
        <Card
          image={process.env.PUBLIC_URL + "/assets/metal.jpg"}
          alt="Metal Painting"
          titleText="Metal Painting"
          description="Get Your Home painted with Greendoors Interior Painting. We assist you with finding the correct one Colour . Regardless of whether it's emotional, unwinding or adjusting, we have thoughts and tips on the best way to pick the ideal color palette." />
      </div>
    </div>
  )
};

export default Services;