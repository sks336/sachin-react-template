import React from "react";
import "./ItemComponent.scss";

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
      <label className={props.checked ? "strikeThrough" : ""}>
        {props.name}
      </label>
    </li>
  );
};

export default ItemComponent;
