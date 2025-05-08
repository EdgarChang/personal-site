"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 transition-all duration-300 shadow-lg ${
        isScrolled ? "py-1 px-1" : "py-4 px-6"
      } ${isScrolled ? "bg-emerald-100" : "bg-emerald-200"}`}
    >
      <div className="flex justify-end gap-4">
        <a href="#experience" className="px-4 py-2 text-xl font-bold rounded-lg">
          Experience
        </a>
        <a href="#projects" className="px-4 py-2 text-xl font-bold rounded-lg">
          Projects
        </a>
        <a href="#contact" className="px-4 py-2 text-xl font-bold rounded-lg">
          Contact
        </a>
      </div>
    </div>
  );
}