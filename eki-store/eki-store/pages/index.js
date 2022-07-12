import React from "react";

const Home = () => {
  return (
    <div>
      HeroBanner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["prod01 ", "prod02, product3 "].map((product) => product)}
      </div>
      Footer
    </div>
  );
};

export default Home;
