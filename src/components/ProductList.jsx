import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ filter, AddToCart }) => {
  const filteredProducts = sampleProducts.filter((p) => {

    if (!filter || filter === "all") return true;
    return p.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={AddToCart} />
        ))
      ) : (

        <p>no products available</p>
      )}
    </div>
  );
};

export default ProductList
