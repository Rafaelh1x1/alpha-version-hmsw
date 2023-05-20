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
        <p>{props.text}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default bestSellers;
