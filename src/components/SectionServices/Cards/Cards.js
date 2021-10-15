import React from "react";
import classes from "./Cards.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div>
        <div className={classes.image}>
          <img src={props.image} alt={props.alt} />
        </div>
        <p className={classes.title}>{props.titleText}</p>
      </div>
      <div className={classes.details}>
        <div className={classes.center}>
          <h1>{props.titleText}</h1>
          <p>{props.description}</p>
          <div className={classes["submit-btn"]}>
            <button className={classes.btn}>Visit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;