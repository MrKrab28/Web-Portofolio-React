import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <>
      <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      <About />
      </div>
    </>
  );
}

export default App;
