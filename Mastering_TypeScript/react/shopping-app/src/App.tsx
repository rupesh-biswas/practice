import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/Shoppinglist";
import item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState<item[]>([]);
  function addItem(item: string, quantity: number): void {
    setItems([...items, { id: uuidv4(), product: item, quantity }]);
  }
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 2 },
  // ];
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
