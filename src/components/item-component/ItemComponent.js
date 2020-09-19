import React from "react";

const ItemComponent = (props) => {
  return (
    <li key="1">
      <input type="checkbox" value="sachin"></input>
      <label>{props.name}</label>
    </li>
  );
};

export default ItemComponent;
