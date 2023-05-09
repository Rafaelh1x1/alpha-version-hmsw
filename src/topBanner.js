import React from "react";
import topviewfood from "./images/topviewfood1.jpg";
function TopBanner() {
  return (
    <div>
      <p className="top-banner">
        11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 813-437-3474
      </p>
      <img src={topviewfood} alt="top view of food" />
    </div>
  );
}

export default TopBanner;
