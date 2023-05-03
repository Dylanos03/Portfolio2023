import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero_whole row">
      <div className="Hero_text col-12 col-lg-6">
        <h1 className="Hero_title">
          Front-end <br></br> Web Developer
        </h1>
        <h3>Digital Media Student</h3>
        <button className="Hero_Button">Contact Me!</button>
      </div>
    </div>
  );
}

export default Hero;
