"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Page() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling 200px
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal website for Edgar Chang." />
      </Head>
      <div className="min-h-screen flex flex-col bg-teal-500">
        <Navbar />
        <HomeSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        {/* Conditionally render the button */}
        {showButton && (
          <button
            onClick={scrollToHome}
            className="fixed bottom-4 left-4 bg-emerald-200 text-lime-800 border font-bold px-4 py-2 rounded-full shadow-lg hover:bg-emerald-500 transition-all duration-300"
          >
            Back to top
          </button>
        )}
      </div>
    </>
  );
}
