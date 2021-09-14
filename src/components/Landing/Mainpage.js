import classes from "./Mainpage.module.css";
import Carousel from "./Carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MiniCarousel from "./MiniCarousel";

const Mainpage = () => {
  return (
    <div className={classes.mainpage}>
      <div className={classes["text-caro"]}>
        <Carousel />
        <div className={classes.buttons}>
          <a href=""><button className={classes.btn}>Price Quote</button></a>
          <a href=""><button className={classes.btn}>Book Appointment</button></a>
        </div>
      </div>
      <MiniCarousel />
    </div>
  );
};
export default Mainpage;
