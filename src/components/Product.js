import React from "react";
import Button from "../UI/Button";
import classes from "./Product.module.css";
const Product = ({ id, title, name, price, rating, image }) => {
  return (
    <div className={classes["product"]}>
      <div className={classes["product__info"]}>
        <p>{title}</p>
        <p className={classes["product__price"]}>
          <span>Price: </span>
          <strong>${price}</strong>
        </p>
        <div className={classes["product__rating"]}>
          <span>Rating:</span>
          <strong className={classes["product__rating"]}>
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </strong>
        </div>
      </div>
      <img src={image} alt="Hand Watch" />
      <Button>Add to cart</Button>
    </div>
  );
};

export default Product;
