import React from "react";
import { useSelector } from "react-redux";
import "./ProductCart.scss";
import CartProduct from "../Card/CartProduct";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

function ProductCart() {
  const { selectedProducts } = useSelector((store) => store?.AppStore);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    categoryName !== "home"
      ? navigate(`/category/${encodeURIComponent(categoryName)}`)
      : navigate("/");
  };
  return (
    <div className="category_container_main">
      <Button
        startIcon={<ArrowBackIcon />}
        className="back_button"
        onClick={() => handleGoBack()}
      >
        Back
      </Button>
      {selectedProducts?.length <= 0 ? (
        <h1 className="heading_add">Add Products To Cart</h1>
      ) : (
        <>
          {selectedProducts?.map((product, index) => {
            return (
              <CartProduct
                className="category"
                title={product?.title}
                category={product?.category}
                image={product?.image}
                description={product?.description}
                price={product?.price}
                totalPrice={product?.totalPrice}
                count={product?.count}
                id={product?.id}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProductCart;
