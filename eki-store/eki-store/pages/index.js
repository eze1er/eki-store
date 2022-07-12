import React from "react";

// a tester une autre possibility de client here

import { client } from "../lib/client";

import { HeroBanner, FooterBanner, Product } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["prod01 ", "prod02 ", "product3 "].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
