import React from "react";
import "./Description.css"

const Description = () => {
  return (
    <div className="description">
      <div className="description-content">
        <h2>4.0</h2>
        <p>5,28 reviews</p>
      </div>
      <span/>
      <div className="description-content">
        <h2>1M+</h2>
        <p>Downloads</p>
      </div>
      <span/>
      <div className="description-content">
        <h2>150</h2>
        <p>MB</p>
      </div>
    </div>
  );
};

export default Description;
