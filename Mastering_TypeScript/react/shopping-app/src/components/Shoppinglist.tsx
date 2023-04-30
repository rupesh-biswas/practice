import React from "react";
import item from "../models/item";

interface ShoppingListProps {
  items: item[];
}

function ShoppingList(props: ShoppingListProps): JSX.Element {
  const { items } = props;
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
