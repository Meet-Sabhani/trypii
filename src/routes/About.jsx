import React from 'react'
import Navbar from '../Components/Navbar'
import AboutImg from'../assets/night.jpg'

import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero-mid"
        HeroImg={AboutImg}
        title="About"
        url="/"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About
