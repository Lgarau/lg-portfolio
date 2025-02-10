
import React, { useState } from 'react';
import logo from "../src/assets/logoph.png";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";
import Work from "../src/components/Work";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Landing from "../src/components/Landing";
import Footer from "../src/components/Footer";

const App = () => {
  const [showHome, setShowHome] = useState(false);

  
  const handleEnter = () => {
    setShowHome(true);
  };

  return (
    <>
      {!showHome ? (
        <Landing onEnter={handleEnter} />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Projects />
          <Work />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
