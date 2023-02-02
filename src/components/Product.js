import React from "react";
import Button from "../UI/Button";
import classes from "./Product.module.css";
const Product = () => {
  return (
    <div className={classes["product"]}>
      <div className={classes["product__info"]}>
        <p>Title</p>
        <p className={classes["product__price"]}>30$</p>
        <div className={classes["product__rating"]}>⭐⭐⭐⭐⭐</div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="Hand Watch"
      />
      <Button>Add to cart</Button>
    </div>
  );
};

export default Product;
