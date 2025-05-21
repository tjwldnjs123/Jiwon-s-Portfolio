import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Jiwon's Portfolio</h1>

        <div className="flex items-center gap-4">
          <nav className="space-x-4 hidden sm:block">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:underline">Home</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Projects</Link>
            <Link to="career" smooth={true} duration={500} className="cursor-pointer hover:underline">Career</Link>
          </nav>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            title="Toggle Dark Mode"
          >
            {isDark ? (
              <BsSun size={20} className="text-yellow-400" />
            ) : (
              <BsMoon size={20} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
