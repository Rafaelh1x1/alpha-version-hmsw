import React from "react";

function bestSellers(props) {
  return (
    <div>
      <div className="best-sellers-images">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="best-seller-img"
        />

        <div class="best-seller-text">
          <p>{props.text}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default bestSellers;
