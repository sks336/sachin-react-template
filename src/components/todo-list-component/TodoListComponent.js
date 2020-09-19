import React, { useState } from "react";

import ItemComponent from "../item-component";

const TodoListComponent = () => {
  const items = [
    { name: "Pen", checked: false },
    { name: "Pencil", checked: false },
    { name: "Black Board", checked: false },
    { name: "Slate", checked: false },
  ];

  const [itemsState, setItemsState] = useState({'items': items});

  function onClickHandler(index, checked) {
    let itemsCopy = [...itemsState.items]
    itemsCopy[index].checked = checked

    setItemsState( (s) => {
      return {...s, items:itemsCopy}
    }); 

    var checkStrStatus = checked ? "Checked" : "Un-Checked";
    alert('{'+itemsCopy[index].name+'} '+checkStrStatus+' Successfully!!!!');
  }

  return (
    <div>
      <ul>      

        {itemsState.items.map((k, i) => {
          //console.log('Okay - ' + JSON.stringify(k))
          return <ItemComponent onClickHandler={onClickHandler} name={k.name} indexVal={i} checked={k.checked}/>;
        })}
      </ul>
    </div>
  );
};

export default TodoListComponent;
