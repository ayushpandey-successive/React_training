/*Create a list of items (e.g., products, articles) in your application.
Implement dynamic routing to display details for each item when clicked.
Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
Fetch item details based on the route parameter and display them on the detail page.
Add a "Go Back" button on the detail page to return to the list.*/

/*Make a product list */
import React, { useState } from 'react'
import { useParams,useNavigate} from "react-router-dom";

const products = [
  {
    id: 1,
    name: "iPhone 11",
    price: 1000,
    
  },
{
    id: 2,
    name: "iPhone 11 Pro",
    price: 2000,
   
  },
{
    id: 3,
    name: "iPhone 11 Pro Max",
    price: 3000,
    
  },
{
    id: 4,
    name: "iPhone 11 Mini",
    price: 4000,
    
  },
{
    id: 5,
    name: "iPhone 12",
    price: 5000,
    
  },
]


const Products = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    
    
    const toProducts=()=>{
        navigate(`./../../products`)
    }
    const getOnlyArray = (id) => {
      
      return products.filter((product) => product.id === id);
      
    };
    const filteredProducts = getOnlyArray(Number(id))
    
  return (
    
    <div>
        
    

        <h1>{filteredProducts[0].name}</h1>
        <h2>{filteredProducts[0].price}</h2>
        
      

        <button onClick={toProducts }>GO Back</button>

    </div>
  )
}

export default Products
export {products} 

