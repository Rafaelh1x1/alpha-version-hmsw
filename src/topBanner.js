import React from "react";
import QuickNav from "./QuickNav";
import topviewfood from "./images/topviewfood2.jpg";
function TopBanner(props) {
  return (
    <div>
      <p className="top-banner">{props.text}</p>
      <div className="mobile-nav-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="24px"
          height="24px"
          class="open-nav"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          height="24px"
          width="24px"
          class="close-nav"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
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
