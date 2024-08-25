import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutMe/About";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/ContactMe/Contact";
import { Box } from "@chakra-ui/layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/PortfolioWebsite" element={<Home />} />
        <Route exact path="/PortfolioWebsite/about" element={<About />} />
        <Route exact path="/PortfolioWebsite/resume" element={<Resume />} />
        <Route exact path="/PortfolioWebsite/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
