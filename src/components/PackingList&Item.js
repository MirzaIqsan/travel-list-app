
export default function PackingList({ items, onDeleteItem, onTogglePacked, onUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDelete={onDeleteItem}
              onTogglePacked={onTogglePacked} 
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      </div>
    );
  }

  function Item({ item, onDelete, onTogglePacked }) {
    const itemStyle = {
      textDecoration: item.packed ? 'line-through' : 'none',
    };
  
    return (
      <li style={itemStyle}>
        <input
          type="checkbox"
          checked={item.packed} // Controlled element
          onChange={() => onTogglePacked(item.id)} // Trigger handler on change
        />
        {item.description} ({item.quantity}) 
        <button onClick={() => onDelete(item.id)}>❌</button>
      </li>
    );
  }