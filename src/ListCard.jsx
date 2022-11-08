import React from "react";

const ListCard = (props) => {
    return (
      <div className="list_item">
      <div className="list_icon-wrapper">
          <div className="list_icon">
          {props.itemIcon}
          </div>
      </div>
      <div className="list_information">
          <h1 className="list_information-title">{props.itemTitel}</h1>
          <p className="list_information-description">{props.itemDescription}</p>
      </div>
  </div>
    )
}
export default ListCard;