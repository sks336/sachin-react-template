import React from "react";

const ItemComponent = (props) => {
  return (
    <li key={"key-" + props.indexVal}>
      <input
        type="checkbox"
        checked={props.checked}
        onClick={function () {
          props.onClickHandler(props.indexVal, !props.checked);
        }}
      ></input>
      <label>{props.name}</label>
    </li>
  );
};

export default ItemComponent;
