export default function Stats({ items }) {
    const packedItems = items.filter((item) => item.packed);
    const totalItems = items.length;
    const packedPercentage = totalItems === 0 ? 0 : (packedItems.length / totalItems) * 100;
  
    return (
      <footer className="stats">
        <em>
          You have {totalItems} items in the list. You already packed {packedItems.length} ({packedPercentage.toFixed(0)}%).
        </em>
        {packedPercentage === 100 && <p>You got everything!</p>} {/* Conditional rendering */}
      </footer>
    );
  }