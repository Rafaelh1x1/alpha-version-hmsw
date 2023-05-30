import React from "react";

function menuItemImg(props) {
  return (
    <div>
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className="menu-item-img"
      />
    </div>
  );
}

function menuItemType(props) {
  return (
    <div>
      <p>{props.Type}</p>
    </div>
  );
}

function menuItem(props) {
  return (
    <div>
      <p>{props.itemName}</p>
      <p>{props.itemDescription}</p>
      <p>{props.itemPrice}</p>
    </div>
  );
}

export { menuItemImg, menuItemType, menuItem };
