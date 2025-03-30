import React, { useEffect } from "react";
import "./CartProduct.scss";
import { Button, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../../Redux/AppStore";
import { useNavigate } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
function CartProduct({ title, description, image, id, totalPrice, count }) {
  const { selectedProducts } = useSelector((store) => store?.AppStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart_products_caontainer">
      <div className="left">
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "2rem",
            gap: 10,
            width: "fit-content",
          }}
        >
          <div>
            Total Price :
            <CurrencyRupeeIcon style={{ fontSize: "2rem" }} />
            {totalPrice}
          </div>
          <div>No Of Units : {count}</div>
        </Typography>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="action_div">
          <Button
            endIcon={<DeleteForeverIcon />}
            onClick={() => dispatch(removeProductFromCart(id))}
          >
            Remove Product
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={image} alt={title} className="collage-img" />
      </div>
    </div>
  );
}

export default CartProduct;
