import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../Redux/AppStore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function ProductCard({ title, category, image, price, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProductToCartHandler = (Id) => {
    dispatch(addProductToCart(Id));
    navigate(`/cart/${encodeURIComponent(category)}`);
  };
  return (
    <Card sx={{ maxWidth: 400, margin: "1rem", width: "35rem" }}>
      <CardHeader
        title={title}
        subheader={category}
        titleTypographyProps={{ variant: "h4", fontSize: "3rem" }}
        subheaderTypographyProps={{ variant: "h6", fontSize: "1.5rem" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
        style={{ objectFit: "contain", width: "100%" }}
      />
      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        disableSpacing
      >
        <Button
          onClick={() => addProductToCartHandler(id)}
          variant="text"
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "2rem",
          }}
        >
          Add To Cart
          <ShoppingCartIcon style={{ fontSize: "2rem", marginLeft: "1rem" }} />
        </Button>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "2rem",
          }}
        >
          <CurrencyRupeeIcon style={{ fontSize: "2rem" }} />
          {price}
        </Typography>
      </CardActions>
    </Card>
  );
}
