import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { getCategoryData } from "../../Redux/AppStore";
import "./CategoryPage.scss";
import ProductCard from "../Card/ProductCard";
function CategoryPage() {
  const { categoryProduct } = useSelector((store) => store?.AppStore);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(getCategoryData(categoryName));
  }, []);
  return (
    <div className="category_container">
      {categoryProduct?.map((product, index) => {
        return (
          <ProductCard
            className="category"
            title={product?.title}
            category={product?.category}
            image={product?.image}
            description={product?.description}
            price={product?.price}
            id={product?.id}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default CategoryPage;
