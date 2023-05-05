import React from "react";
import "./Hero.css";
import { Canvas } from "@react-three/fiber";
import PlanetH from "./SubComp/Planet";

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
      <div className="col-lg-6 col-12">
        <Canvas className="Hero_Planet">
          <PlanetH />
          <directionalLight position={[0, 0, 5]} intensity={0.5} />
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;
