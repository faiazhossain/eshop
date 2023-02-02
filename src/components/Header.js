import React from "react";
import classes from "./Header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className={classes["header"]}>
      <div className={classes["header__logo"]}>
        <StorefrontIcon
          className={classes["header__logoImage"]}
        ></StorefrontIcon>
        <h2 className={classes["header__logoTitle"]}>Eshop</h2>
      </div>
      <div className={classes["header__search"]}>
        <input type="text" className={classes["header__searchInput"]} />
        <SearchIcon className={classes["header__searchIcon"]}></SearchIcon>
      </div>
      <div className={classes["header__nav"]}>
        <div className={classes["nav__item"]}>
          <span className={classes["nav__itemLineOne"]}>Hello Guest</span>
          <span className={classes["nav__itemLineTwo"]}>Sign In</span>
        </div>
        <div className={classes["nav__item"]}>
          <span className={classes["nav__itemLineOne"]}>Your</span>
          <span className={classes["nav__itemLineTwo"]}>Shop</span>
        </div>
        <div className={classes["nav__item"]}>
          <span className={classes["nav__itemLineOne"]}>
            <ShoppingCartIcon
              className={classes["nav__itemBasket"]}
            ></ShoppingCartIcon>
          </span>
          <span
            className={`${classes["nav__itemLineTwo"]} ${classes["nav__basketCount"]}`}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
