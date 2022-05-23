import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact/index";
import Resume from "../Resume/index";

export const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};
