export default function Footer({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start by adding some items in your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packedPer = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPer === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed
        ${numPackedItems} (${packedPer}%)`}
      </em>
    </footer>
  );
}
