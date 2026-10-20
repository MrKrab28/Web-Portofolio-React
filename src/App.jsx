import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      </div>
    </>
  );
}

export default App;
