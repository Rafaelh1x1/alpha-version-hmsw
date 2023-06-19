import React from "react";
import QuickNav from "./QuickNav";
import topviewfood from "./images/topviewfood2.jpg";
function TopBanner(props) {
  return (
    <div>
      <p className="top-banner">{props.text}</p>
      <QuickNav></QuickNav>
      <div class="top-banner-img-container">
        <img src={topviewfood} alt="top view of food" class="top-banner-img" />
        <div class="text-overlay">
          <p class="top-banner-img-bold-text">HALF MOON </p>
          <p class="top-banner-img-bold-text">Seafood Co.</p>
          <p class="top-banner-img-ss-text">Sustainably Sourced seafood</p>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
