import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id= "12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            id="49538894"
            title="Smart Watch, AGPTEK 1.69(43mm) Smartwatch for Android and iOS Phones IP68 Waterproof Fitness Tracker Watch Heart Rate Monitor Pedometer Sleep Monitor for Men Women Black"
            price={239.0}
            image="https://m.media-amazon.com/images/I/61PeDgbNxrS._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">

            <Product 
            id="4903050"
            title = "Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
            price = {199.99}
            rating = {3}
            image = 'https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY218_.jpg'
            />
            <Product 
            id="23445930"
            title = "SAMSUNG Galaxy Tab S7 11-inch Android Tablet 128GB Wi-Fi Bluetooth S Pen Fast Charging USB-C Port, Mystic Black"
            price = {98.99}
            rating = {5}
            image = 'https://m.media-amazon.com/images/I/815C4A+5VCL._AC_UL640_QL65_.jpg'
            />
            <Product 
            id= "3254354345"
            title = "2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
            price = {598.99}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY218_.jpg'
            />


        </div>

        <div className="home__row">
        <Product 
            id= "98829322"
            title = "Samsung Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Mobile Gaming Smartphone Long-Lasting Battery, Mystic White2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
            price = {598.99}
            rating = {4}
            image = 'https://m.media-amazon.com/images/I/81NKXayE47L._AC_UY218_.jpg'
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
