import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./components/Landing/Mainpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
