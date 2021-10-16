import classes from "./ContactUs.module.css";
import {
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCity,
} from "react-icons/fa";

const ContactUs = () => {
  return (

    <div className={classes.contact}>
      <div className={classes.reviews}>
        <div className={classes["photo-section"]}>
          <img className={classes["user-image"]} src={process.env.PUBLIC_URL + "/assets/user.png"} alt="user1" />
        </div>
        <div className={classes["name-section"]}>
          <h2>Lorem Ipsum</h2>
          <div className={classes.star}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quo, assumenda autem consequuntur cupiditate fugiat a laudantium
              minus totam? Delectus perferendis, fugiat aspernatur quia eaque
              laborum suscipit ullam labore mollitia!
            </p>
          </div>
        </div>
      </div>
      <div className={classes.contactForm}>
        <div className={classes.box}>
          <h1 style={{ color: "#ffffff" }}>Book Free Visit</h1>
          <div className={classes.user}>
            <FaUser className={classes.fas}></FaUser>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Full name"
            />
            <FaPhone className={classes.fas}></FaPhone>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
            <FaEnvelope className={classes.fas}></FaEnvelope>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <FaCity className={classes.fas}></FaCity>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter City"
            />
          </div>

          <div className={classes["submit-btn"]}>
            <button className={classes.btn}>
              <FaCheckCircle style={{ margin: "0 10px" }}></FaCheckCircle>{" "}
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;