import React, { useEffect, useState } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Footer from "./components/Footer";

const App = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans relative">
      <Header />

      <Element name="hero">
        <Intro />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="career">
        <Career />
      </Element>
      <Footer />

      <button
        onClick={() => scroll.scrollToTop({ duration: 500 })}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-lg transition-opacity duration-300 ${
          showTopButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
