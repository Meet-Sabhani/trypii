import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        HeroImg="https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="Show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
};

export default Home;
