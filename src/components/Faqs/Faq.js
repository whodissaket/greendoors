import classes from "./Faq.module.css";

import Accordion from './Accordion';
import { accordionData } from './content';

const Faq = () => {
  return (
   <div className={classes.container}>
    <div >
      <h1>FAQs</h1>
      <div className={classes.accordion}>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
   </div> 
  );
};

export default Faq;