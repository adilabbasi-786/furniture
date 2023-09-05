import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import ProductList from "../components/ProductList";
import SaleOffer from "../components/SaleOffer";
import BestSeller from "../components/BestSeller";
import NewLetter from "../components/NewLetter";
import Footer from "../components/Footer";
import Client from "../components/Client";

function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <ProductList />
      <SaleOffer />
      <BestSeller />
      <NewLetter />
      <Client />
      <Footer />
    </div>
  );
}

export default Home;
