import CustomNavbar from "./Components/Navbar/CustomNavbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
