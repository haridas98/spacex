import CustomNavbar from "./Components/Navbar/CustomNavbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Technologies from "./Pages/technologies";
import Flight from "./Pages/flight";
import Guarantee from "./Pages/guarantee";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [advList, setAdvList] = useState([]);
  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    // Функция для выполнения запроса и обновления состояния
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/adv/");
        setAdvList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchNavbarItemsData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/navbar/");
        setNavbarItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Вызываем функцию при монтировании компонента
    fetchData();
    fetchNavbarItemsData();
  }, []);
  return (
    <div className="">
      <CustomNavbar navbarItems={navbarItems} />
      <Routes>
        <Route path="/" element={<Home advList={advList} />} />
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
