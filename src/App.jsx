import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [theme, setTheme] = useState("light")
  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])
  // TODO: Implement state for category filtering
  const [filter, setFilter] = useState('')

  const AddItemsToCart = (item) => {
    setCartItems([...cartItems, item])
  }


  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle setTheme={setTheme} theme={theme} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent" style={{ display: 'none' }}>NonExistent</option>
      </select>

      <ProductList filter={filter} AddToCart={AddItemsToCart} />

      {/* TODO: Implement and render Cart component */}

      <Cart Cart={cartItems} />
    </div>
  )
}

export default App
