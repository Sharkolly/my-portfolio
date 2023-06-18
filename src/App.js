import "./App.css";
import MyPicture from "../src/Component/Pictures/IMG_8907.JPG";
import Intro from "./Component/Intro/Intro";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Projects from "./Component/Projects/Projects";
import RaC from "./Component/ReviewsAndContact/RaC";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
      <div className="Container">
        <Intro MyPicture={MyPicture} />
        <About MyPicture={MyPicture} />
        <Skills />
        <Projects />
        <RaC />
      <Footer />
      </div>
     
  );
}

export default App;
