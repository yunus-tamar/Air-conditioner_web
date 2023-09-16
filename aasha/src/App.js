import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Services";
import About from "./Components/About";
import Foot from "./Components/Footer";
import Cont from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Cont />} />
          <Route path="/footer" element={<Foot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
