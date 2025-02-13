import { useState } from "react";
import { Item } from "./Item.js";

export function PackingList({ items, onDeleteItem, onToggle, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems =
    sortBy === "input"
      ? items
      : sortBy === "description"
      ? items.slice().sort((a, b) => a.description.localeCompare(b.description))
      : items.slice().sort((a, b) => +a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
