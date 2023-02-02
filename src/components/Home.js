import React from "react";
import classes from "./Home.module.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className={classes["home"]}>
      <div className={classes["home__container"]}>
        <img
          className={classes["home__image"]}
          src="https://img.freepik.com/free-photo/online-shopping-web-shop-e-shopping-concept_53876-120632.jpg?w=996&t=st=1675321326~exp=1675321926~hmac=79a2c2f46fcadb4857431ab134dfe4cf37d306fdb94746e67682a79c296e2115"
          alt="img of eshop"
        />
        <div className={classes["home__row"]}>
          <Product />
          <Product />
        </div>
        <div className={classes["home__row"]}>
          <Product />
          <Product />
          <Product />
        </div>
        <div className={classes["home__row"]}>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
