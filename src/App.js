import "./App.css";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./components/Landing/Mainpage";
import ContactUs from "./components/ContactUs/ContactUs";
import Faq from "./components/Faqs/Faq";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Navbar Routing */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Mainpage />
            <ContactUs />
            <Faq />
            <Footer/>
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>

          {/* Navbar Routing ends */}
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
