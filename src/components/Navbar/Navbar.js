/*eslint-disable */
import classes from "./Navbar.module.css";

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '0px';
  }
}


const Navbar = () => {
  return (
    <nav className={classes.menu}>
      <ul className={classes.leftNav}>
        {/* <li><a href="#"><img className={classes["logo-image"]} src="https://aapkapainter.com/assets/newdesign/images/logo/logo.png" alt="logo" /></a></li> */}
        <li><a href="#">Home</a></li>
        <li><a className={classes["dropdown-arrows"]} href="#">Services <span className={classes.arrow}>&#8595;</span></a>
          <ul className={classes["sub-menus"]}>
            <li><a href="#">Price Quote</a></li>
            <li><a href="#">Interior Paintaing</a></li>
            <li><a href="#">Exterior Paintaing</a></li>
            <li><a href="#">Waterproofing</a></li>
          </ul>
        </li>
        <li><a href="#">Gallery</a></li>
        <li><a className={classes["dropdown-arrows"]} href="#">Products <span className={classes.arrow}>&#8595;</span></a>
          <ul className={classes["sub-menus"]}>
            <li><a href="#">Textures</a></li>
            <li><a href="#">Paints</a></li>
            <li><a href="#">Waterproofing</a></li>
            <li><a href="#">Shade Cards</a></li>
          </ul>
        </li>
        <li><a href="#">About Us</a></li>
      </ul>
      <ul className={classes.rightNav}>
        <li><a className={classes.mobile} href="tel:+919867456321"><span className={classes["icon"]}>+919867456321</span></a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
