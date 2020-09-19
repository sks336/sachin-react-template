import React from "react";

import ItemComponent from "../item-component";

const TodoListComponent = () => {
  const items = ["Pen", "Pencil", "Black Board", "Slate"];

  return (
    <div>
      <ul>
        {items.map((k, i) => {
          return <ItemComponent name={k} />;
        })}
      </ul>
    </div>
  );
};

export default TodoListComponent;
