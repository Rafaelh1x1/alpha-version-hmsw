import React from "react";
import topviewfood from "./images/topviewfood1.jpg";
function TopBanner(props) {
  return (
    <div>
      <p className="top-banner">{props.text}</p>
      <img src={topviewfood} alt="top view of food" />
    </div>
  );
}

export default TopBanner;
