import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList&Item";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: true },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

// function Logo() {
//   return <h1>My Travel List</h1>;
// }

// function Form({ onAddItem }) {
//   const [description, setDescription] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = {
//       id: Date.now(),
//       description,
//       quantity,
//       packed: false,
//     };

//     onAddItem(newItem); // Call onAddItem with new item

//     setDescription('');
//     setQuantity(1);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>What do you need to pack?</h3>
//       <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>

//       <input
//         type="text"
//         placeholder="Item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />

//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function Item({ item, onDelete, onTogglePacked }) {
//   const itemStyle = {
//     textDecoration: item.packed ? 'line-through' : 'none',
//   };

//   return (
//     <li style={itemStyle}>
//       <input
//         type="checkbox"
//         checked={item.packed} // Controlled element
//         onChange={() => onTogglePacked(item.id)} // Trigger handler on change
//       />
//       {item.description} ({item.quantity}) 
//       <button onClick={() => onDelete(item.id)}>❌</button>
//     </li>
//   );
// }

// function PackingList({ items, onDeleteItem, onTogglePacked, onUpdateItem }) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onDelete={onDeleteItem}
//             onTogglePacked={onTogglePacked} 
//             onUpdateItem={onUpdateItem}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Stats({ items }) {
//   const packedItems = items.filter((item) => item.packed);
//   const totalItems = items.length;
//   const packedPercentage = totalItems === 0 ? 0 : (packedItems.length / totalItems) * 100;

//   return (
//     <footer className="stats">
//       <em>
//         You have {totalItems} items in the list. You already packed {packedItems.length} ({packedPercentage.toFixed(0)}%).
//       </em>
//       {packedPercentage === 100 && <p>You got everything!</p>} {/* Conditional rendering */}
//     </footer>
//   );
// }


function App() {
  const [items, setItems] = useState(initialItems);

  function onAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleUpdateItem(id){
    setItems((prevItems)=> prevItems.map((item)=>
      item.id ===id ?{...item,packed: !item.packed} : item

    ));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={onAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked} // Pass toggle function
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
