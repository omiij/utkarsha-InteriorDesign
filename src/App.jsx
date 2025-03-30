import { useState } from "react";
import "./App.scss";
import Navbar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import InteriorServices from "./Components/InteriorServices/InteriorServices";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import ProductCart from "./Components/Cart/ProductCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/cart/:categoryName" element={<ProductCart />} />
          <Route path="/services" element={<InteriorServices />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
