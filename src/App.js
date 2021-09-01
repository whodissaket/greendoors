import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./components/Landing/Mainpage";

function App() {
  library.add(fab);
  return (
    <div className="App">
      <Navbar />
      <Mainpage />

      <Footer />
    </div>
  );
}

export default App;
