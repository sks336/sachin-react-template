import React, { useState } from "react";
// import { Text, StyleSheet } from "react-native";

import ItemComponent from "../item-component";

function getToDoItemsArr(items) {
  var returnItems = [];
  items.forEach((element) => {
    var obj = { name: "", checked: false };
    obj.name = element;
    returnItems.push(obj);
  });
  return returnItems;
}

const TodoListComponent = () => {
  const items = getToDoItemsArr(["Pen", "Pencil", "Note Book"]);

  const [itemsState, setItemsState] = useState({ items: items });
  const [itemValueState, setItemValueState] = useState("");

  function onClickHandler(index, checked) {
    let itemsCopy = [...itemsState.items];
    itemsCopy[index].checked = checked;

    setItemsState((s) => {
      return { ...s, items: itemsCopy };
    });

    var checkStrStatus = checked ? "Checked" : "Un-Checked";
    // alert(
    //   "{" + itemsCopy[index].name + "} " + checkStrStatus + " Successfully!!!!"
    // );
  }

  function addTodoItem(itemName) {
    var itemCopy = [...itemsState.items];
    itemCopy.push(getToDoItemsArr([itemName])[0]);

    setItemsState((s) => {
      return { ...s, items: itemCopy };
    });
  }

  return (
    <div>
      {/* <Text style={{ textDecorationLine: 'line-through' }}>Strike through text</Text> */}

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
