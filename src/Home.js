import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
        <Product
          id="23456"
          title="SILVERX M5 Smart Band – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging..."
          price={400.89}
          rating={4}
          image="https://m.media-amazon.com/images/I/61BOk+NPOhL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="34567"
          title="Prestige IRIS Plus 750 watt mixer grinder"
          price={200.69}
          rating={4}
          image="https://m.media-amazon.com/images/I/81yobRRV8nL._SL1500_.jpg"
        />{" "}
        <Product
          id="45678"
          title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
          price={99.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"
        />{" "}
        <Product
          id="53424"
          title="Nike
          Men's Air Zoom G.t. Cut Low TOP"
          price={110.98}
          rating={3}
          image="https://m.media-amazon.com/images/I/3150hwpEMmL.jpg"
        />
      </div>
      <div className="home__row">
      <Product
        id="67890"
        title="LG UltraWide 34 (86.6 cm) WFHD (2560 x 1080) IPS Display - HDR 10, Radeon FreeSync, sRGB 99%, Inbuilt..."
        price={4000.96}
        rating={4}
        image="https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
      />
      </div>
    </div>
  );
}

export default Home;
