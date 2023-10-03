import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ContactImg from "../assets/4.jpg";
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero 
    cName="Hero-mid"
    HeroImg={ContactImg}
    title="Contact"
    url="/"
    btnClass="hide"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact
