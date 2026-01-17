import React from 'react'

const Cart = ({ Cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>

        {Cart.map((i, idx) => (
          <li key={idx}>{`${i.name} is in your cart.`}</li>
        ))}
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
      </ul>
    </div>
  )
}

export default Cart
