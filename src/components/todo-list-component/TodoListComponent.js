import React, { useState } from "react";

import ItemComponent from "../item-component";

const TodoListComponent = () => {
  const items = [
    { name: "Pen", checked: false },
    { name: "Pencil", checked: false },
    { name: "Book", checked: false }
  ];

  const [itemsState, setItemsState] = useState({ items: items });
  const [itemValueState, setItemValueState] = useState("");

  function onClickHandler(index, checked) {
    let itemsCopy = [...itemsState.items];
    itemsCopy[index].checked = checked;

    setItemsState((s) => {
      return { ...s, items: itemsCopy };
    });

    var checkStrStatus = checked ? "Checked" : "Un-Checked";
    alert(
      "{" + itemsCopy[index].name + "} " + checkStrStatus + " Successfully!!!!"
    );
  }

  function addTodoItem(itemName) {
    var itemCopy = [...itemsState.items];
    var item = { name: "", checked: false };
    item.name = itemName;
    itemCopy.push(item);

    setItemsState((s) => {
      return { ...s, items: itemCopy };
    });
  }

  return (
    <div>
      <label>Enter the Item: </label>
      <input
        value={itemValueState}
        onChange={(e) => {
          setItemValueState(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodoItem(itemValueState);
            setItemValueState("");
          }
        }}
      />

      <ul>
        {itemsState.items.map((k, i) => {
          return (
            <ItemComponent
              onClickHandler={onClickHandler}
              name={k.name}
              indexVal={i}
              checked={k.checked}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListComponent;
