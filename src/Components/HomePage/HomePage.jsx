import React, { useEffect, useState } from "react";

import "./HomePage.scss";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Redux/AppStore";
import axios from "axios";
import mensFashion from "../../Images/MensFashion.jpg";
import womensFashion from "../../Images/womensFashion.jpg";
import { categoryData } from "../../data";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    setProducts(response.data);
    dispatch(addProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="home_page_container">
      <div className="home_page_container_01">
        <div className="left">
          <h1>THE SHOP-SPHERE</h1>
          <p>
            ShopSphere is your ultimate online shopping destination, offering a
            curated collection of fashion, electronics, home essentials, and
            more. With an intuitive interface, exclusive deals, and
            lightning-fast delivery, we bring the best brands and trending
            products straight to your doorstep.
          </p>
        </div>
        <div className="right">
          <img src={mensFashion} alt={`Mens Fashion`} className="collage-img" />

          <img
            src={womensFashion}
            alt={`Womens Fashion`}
            className="collage-img"
          />
        </div>
      </div>

      <div className="category_container">
        {categoryData?.map((category, index) => {
          return (
            <Link
              key={index}
              className="category"
              to={`/category/${encodeURIComponent(category?.title)}`}
            >
              <img src={category?.img} />
              <h1>{category?.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
