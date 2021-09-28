import React, { useState } from 'react';
import classes from "./Faq.module.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.container1}>
    <div className={classes.accordionitem}>
      <div className={classes.accordiontitle} onClick={() => setIsActive(!isActive)}>
        <div className={classes.Q} >{title}</div>
        <div className={classes.act}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={classes.accordioncontent}>{content}</div>}
    </div>
    </div>
  );
};

export default Accordion;

