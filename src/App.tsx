
import React from "react";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Element name="hero"><Intro /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="career"><Career /></Element>
      <Footer />
    </div>
  );
};

export default App;
