import CustomNavbar from "./Components/Navbar/CustomNavbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Technologies from "./Pages/technologies";
import Flight from "./Pages/flight";
import Guarantee from "./Pages/guarantee";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import React from "react";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/guarantee/" element={<Guarantee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
