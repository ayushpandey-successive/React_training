import React from 'react'
import { products } from './Products'

const AllProducts = () => {
  return (
    <div>
        {console.log(products)}
        <h1>List of Products</h1>
        {
            products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                </div>
            ))
        }
      
    </div>
  )
}

export default AllProducts
