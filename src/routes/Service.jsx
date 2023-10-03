import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from "../assets/2.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero-mid"
        HeroImg={ServiceImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  );
};

export default Service;
