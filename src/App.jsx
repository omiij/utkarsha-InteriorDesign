import { useState } from "react";
import "./App.scss";
import Navbar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AboutUs from "./Components/Overview/AboutUs";
import ContactForm from "./Components/ContactUs/ContactForm";
import InteriorServices from "./Components/InteriorServices/InteriorServices";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<InteriorServices />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
