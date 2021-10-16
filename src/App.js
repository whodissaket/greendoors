import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./components/Landing/Mainpage";
import ContactUs from "./components/ContactUs/ContactUs";
import Faq from "./components/Faqs/Faq";
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/SectionServices/Services"
import PaintQuotation from "./components/SectionServices/PaintQuotation/PaintQuotation"
import InteriorPainting from "./components/SectionServices/InteriorPainting/InteriorPainting"
import MetalPainting from "./components/SectionServices/MetalPainting/MetalPainting"
import ExteriorPainting from "./components/SectionServices/ExteriorPainting/ExteriorPainting"
import Waterproofing from "./components/SectionServices/Waterproofing/Waterproofing"
import SimpleReactLightbox from "simple-react-lightbox";

function App() {


  return (
    <div className="App">
      <Navbar />
      {/* Navbar Routing */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Mainpage />
            <Services />
            <About />
            <Faq />
            <ContactUs />
            <Footer />
          </Route>
          <Route path="/gallery">
            <SimpleReactLightbox>
              <Gallery />
            </SimpleReactLightbox>
          </Route>

          {/* Navbar Routing ends */}

          {/* Service page routing starts */}
          <Route path="/paintquotation" component={PaintQuotation} />
          <Route path="/interiorpainting" component={InteriorPainting} />
          <Route path="/exteriorpainting" component={ExteriorPainting} />
          <Route path="/waterproofing" component={Waterproofing} />
          <Route path="/metalpainting" component={MetalPainting} />
          {/* Service page routing ends */}
        </Switch>
      </Router>
    </div >
  );
}

export default App;
