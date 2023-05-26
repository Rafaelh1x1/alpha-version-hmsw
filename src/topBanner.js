import React from "react";
import topviewfood from "./images/topviewfood2.jpg";
function TopBanner(props) {
  return (
    <div>
      <p className="top-banner">{props.text}</p>
      <div class="top-banner-img-container">
        <img src={topviewfood} alt="top view of food" class="top-banner-img" />
        <div class="text-overlay">
          <p class="top-banner-img-bold-text">HALF MOON </p>
          <p class="top-banner-img-bold-text">Seafood Co.</p>
          <p class="top-banner-img-ss-text">Sustainably Sourced seafood</p>
        </div>
        <div class="quick-nav">
          <p class="quick-nav-text">HOME</p>
          <p class="quick-nav-text">BEST-SELLERS</p>
          <p class="quick-nav-text">MENU</p>
          <p class="quick-nav-text">LOCATIONS</p>
          <p class="quick-nav-text">ABOUT US</p>
          <p class="quick-nav-text">CAREERS</p>
          <p class="quick-nav-text">CONTACT</p>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
