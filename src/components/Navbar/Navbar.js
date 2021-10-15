/*eslint-disable */
import classes from "./Navbar.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "0px";
  }
}

const Navbar = () => {


  return (

    <nav className={classes.menu}>
      <ul className={classes.leftNav}>
        {/* <li><a href="/"><img className={classes["logo-image"]} src="https://aapkapainter.com/assets/newdesign/images/logo/logo.png" alt="logo" /></a></li> */}
        <li>
          <a href="/" to="/home">
            Home
          </a>
        </li>
        <li>
          <a className={classes["dropdown-arrows"]} style={{ cursor: "pointer" }}>
            Services <span className={classes.arrow}>&#8595;</span>
          </a>
          <ul className={classes["sub-menus"]}>
            <li>
              <a href="/paintquotation" to="/paintquotation">Paint Quotation</a>
            </li>
            <li>
              <a href="/interiorpainting" to="/interiorpainting">Interior Paintaing</a>
            </li>
            <li>
              <a href="/exteriorpainting" to="/exteriorpainting">Exterior Paintaing</a>
            </li>
            <li>
              <a href="/waterproofing" to="/waterproofing">Waterproofing</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/gallery" to="/gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className={classes["dropdown-arrows"]} href="#">
            Products <span className={classes.arrow}>&#8595;</span>
          </a>
          <ul className={classes["sub-menus"]}>
            <li>
              <a href="#">Textures</a>
            </li>
            <li>
              <a href="#">Paints</a>
            </li>
            <li>
              <a href="#">Waterproofing</a>
            </li>
            <li>
              <a href="#">Shade Cards</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>
      <ul className={classes.rightNav}>
        <li>
          <a className={classes.mobile} href="tel:+919867456321">
            <span className={classes["icon"]}>+919867456321</span>
          </a>
        </li>
      </ul>
    </nav>

  );
};
export default Navbar;
