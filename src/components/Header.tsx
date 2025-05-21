
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Jiwon's Portfolio</h1>
        <nav className="space-x-4 hidden sm:block">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:underline">Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Projects</Link>
          <Link to="career" smooth={true} duration={500} className="cursor-pointer hover:underline">Career</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
