import React from "react";
import classes from "./Home.module.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className={classes["home"]}>
      <div className={classes["home__container"]}>
        <img
          className={classes["home__image"]}
          src="https://hips.hearstapps.com/hmg-prod/images/coolest-tech-2022-1669144775.jpg"
          alt="img of eshop"
        />
        <div className={classes["home__row"]}>
          <Product
            id={1}
            title="A premium smartphone with a large OLED screen, professional-grade camera system, and powerful A14 Bionic chip."
            name="Apple iPhone 12 Pro Max"
            price={20}
            rating={4}
            image="https://www.mobiledokan.com/wp-content/uploads/2020/10/Apple-iphone-12-Pro-Max.jpg"
          />
          <Product
            id={2}
            title="Over-ear wireless headphones with active noise-cancellation technology for immersive audio experience."
            name="Bose QuietComfort 35 II"
            price={8}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SL1500_.jpg"
          />
        </div>
        <div className={classes["home__row"]}>
          <Product
            id={3}
            title="A high-performance tablet with a large AMOLED display, fast processor, and long battery life for productive use"
            name="Samsung Galaxy Tab S7"
            price={14}
            rating={5}
            image="https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Samsung/Tab/Tab%20S7/2-800x800.jpg"
          />
          <Product
            id={4}
            title="A smart home thermostat that learns your preferences and automatically adjusts to your schedule to save energy and provide optimal comfort"
            name="Nest Learning Thermostat"
            price={11}
            rating={5}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4346/4346501_sd.jpg"
          />
          <Product
            id={5}
            title="A fitness tracker with GPS, heart rate monitoring, and long battery life, allowing you to track your activities, workouts, and sleep patterns with ease"
            name="Fitbit Charge 4"
            price={8}
            rating={4}
            image="https://gadgetnmusic.com/wp-content/uploads/2021/07/71smqRr0pmL.jpg"
          />
        </div>
        <div className={classes["home__row"]}>
          <Product
            id={6}
            title="A next-generation gaming console that delivers stunning graphics, fast load times, and immersive gaming experiences with exclusive games."
            name="Sony PlayStation 5"
            price={18}
            rating={5}
            image="https://www.startech.com.bd/image/cache/catalog/gaming-console/playstation/playstation-5/playstation-5-02-500x500.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
