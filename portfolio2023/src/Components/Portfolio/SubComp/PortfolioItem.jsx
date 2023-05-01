import React from "react";
import "./PortfolioItem.css";

function PortfolioItem({
  portfolioImg,
  portfolioItemTitle,
  portfolioItemDesc,
}) {
  return (
    <div className="PortItem_whole container">
      <div className="row">
        <div className="Port_image_box col-4">
          <img src={portfolioImg} className="Port_image" />
        </div>
        <div className="Port_Text col-8">
          <h3 className="Port_ItemTitle">{portfolioItemTitle}</h3>
          <p className="Port_ItemDesc">{portfolioItemDesc}</p>
          <div>
            <button className="Port_Button">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
