import React from "react";
import topviewfood from "./images/topviewfood2.jpg";
function TopBanner(props) {
  return (
    <div>
      <p className="top-banner">{props.text}</p>
      <div class="top-banner-img-container">
        <img src={topviewfood} alt="top view of food" class="top-banner-img" />
        <div class="text-overlay">
          <p>HALF MOON SEAFOOD</p>
          <p>Sustainably Sourced</p>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
