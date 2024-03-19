"use client";
import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Navbar from "./Navbar";
/* import Theme_Toggle from "./ThemeButton"; */
/* import ThemeProvider from "./ThemeContext"; */

const Home = () => {
  return (
    <>
      {/* <Theme_Toggle /> */}
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
