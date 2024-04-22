import React from 'react'
import { products } from './Products'
import { NavLink } from 'react-router-dom'

const AllProducts = () => {
  return (
    <div>
        
        <h1>List of Products</h1>
        {
            products.map(product => (
                <div key={product.id}>
                    <NavLink to={""+ product.id}><h2>{product.name}</h2></NavLink>
                    <h3>{product.price}</h3>
                </div>
            ))
        }
      
    </div>
  )
}

export default AllProducts
