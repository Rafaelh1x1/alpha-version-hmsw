import React from "react";

function bestSellers(images) {
  return (
    <div>
      <p className="sub-heading">Best Sellers</p>
      <div className="best-sellers-images">
        <img
          src={images.image1}
          alt={images.image1alt}
          className="best-seller-img"
        />
        <img
          src={images.image2}
          alt={images.image2alt}
          className="best-seller-img"
        />
        <img
          src={images.image3}
          alt={images.image3alt}
          className="best-seller-img"
        />
        <img
          src={images.image4}
          alt={images.image4alt}
          className="best-seller-img"
        />
      </div>
    </div>
  );
}

export default bestSellers;
