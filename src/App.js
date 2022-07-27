import "./assets/fonts/roboto.css";
import "./assets/fonts/razerf5.css";
import "./assets/css/main.css";
import "./assets/css/nav.css";
import "./assets/css/dropdown.css";
import "./assets/css/switch.css";
import "./assets/css/slider.css";
import "./assets/css/checkbox.css";
import "./assets/css/tooltip.css";
import "./assets/css/profile-bar.css";
import "./assets/css/body-widgets.css";
import Navbar from './Layout/Navbar';
import BodyWrapper from "./Layout/BodyWrapper";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BodyWrapper />
      <Footer />
    </>
  );
}

export default App;
