import React from "react";

const Home = () => {
  return (
    <>
      heroBanner
      <div>
        <h1>Best Selling Product</h1>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {["product01 ", "product02 ", "product03 "].map((product) => product)}
      </div>

      footer
    </>
  );
};

export default Home;
