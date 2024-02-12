import { useState } from "react";


export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items) => 
      items.map((item) => 
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if (confirmed) {
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  )
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;

    const  newItem = {description, quantity, packed: false, id: Date.now()}
    onAddItems(newItem)

    setDescription("");
    setQuantity(1)
  }

  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
      {Array.from({length: 20}, (_,i) => i+1).map
      ((num) => (
        <option value={num} key={num}>
          {num}
        </option>
      ))}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}/>
    <button>Add</button>
  </form>
}

function PackingList({items, onDeleteItem, onToggleItems, onClearList}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) =>( <Item key={item.id } onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} item={item} />))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  )
}

function Item({item, onDeleteItem, onToggleItems}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)}/>
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats({items}) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </p>
    )
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItems) * 100)
  return (
    <footer className="stats">
      <em>
        { precentage === 100 
        ? 'You got everything! Ready to go✈ '
        : `You have ${numItems} items on you list, and you already packed ${numPacked} (${precentage}%)`}
      </em>
    </footer>
  )
}

