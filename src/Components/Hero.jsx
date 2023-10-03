import React from "react";
import "./HeroStyle.css";
import "../assets/1.jpg";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.HeroImg} alt="HeroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        </div>
      </div>
    </>
  );
};

export default Hero;
