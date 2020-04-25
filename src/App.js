import React from "react";
// import logo from "./logo.svg";

import NavBarTop from "./components/navbartop";
import NavBarBottom from "./components/navbarbottom";
import Slider from "./components/slider";
import AboutMe from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBarTop />
      <Slider />
      <NavBarBottom />
      {""}
      <AboutMe />
      <Projects />
      {""}
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
