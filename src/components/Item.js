export default function Item({ items, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => onToggleItems(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => onDeleteItems(items.id)}>❌</button>
    </li>
  );
}
