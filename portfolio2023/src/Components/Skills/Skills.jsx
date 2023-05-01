import React from "react";
import "./Skills.css";

function Skill() {
  return (
    <div className="Skills_whole">
      <h2 className="Skills_title col-12">Skills</h2>
      <div className="Skills_list Container">
        <div className="row">
          <div className="col-3">
            <p>HTML</p>
          </div>
          <div className="col-3">
            <p>CSS</p>
          </div>
          <div className="col-3">
            <p>JS</p>
          </div>
          <div className="col-3">
            <p>React.js</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Three.js</p>
          </div>
          <div className="col-4">
            <p>Figma</p>
          </div>
          <div className="col-4">
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
