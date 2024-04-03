/*Build a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart.*/

import React, { useContext, useState } from "react";
import { shoppingCartContext } from "./CartContext";

const ShoppingCart = () => {
    const [cart, setCart] = useContext(shoppingCartContext);
    const [total, setTotal] = useState(0);

    const handleRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        setTotal(newCart.reduce((total, item) => total + item.price, 0));
    };

    const handleAdd = (item) => {
        const newCart = [...cart, {id :Date.now().toString(36), ...item}];
        setCart(newCart);
        setTotal(newCart.reduce((total, item) => total + item.price, 0));
    };
    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>

                       {item.name} - {item.price} -{" "}
                        <button onClick={() => handleRemove(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button onClick={() => {setCart([]) 
                setTotal(0)}}>Clear Cart</button>
            
            <button onClick={() => handleAdd({ name: "Pizza", price: 10 })}>
                Add Pizza
            </button>
            <button onClick={() => handleAdd({ name: "Burger", price: 20 })}>
                Add Burger
            </button>
            <button onClick={() => handleAdd({ name: "Chicken", price: 50 })}>
                Add Chicken
            </button>
            <button onClick={() => handleAdd({ name: "Fries", price: 44 })}>
                Add Fries
            </button>
            <button onClick={() => handleAdd({ name: "Soda", price: 56 })}>
                Add Soda
            </button>
            <button onClick={() => handleAdd({ name: "Water", price: 101 })}>
                Add Water
            </button>
            <button onClick={() => handleAdd({ name: "Milk", price: 55 })}>
                Add Milk
            </button>
            <button onClick={() => handleAdd({ name: "Cheese", price: 34 })}>
                Add Cheese
            </button>
            <button onClick={() => handleAdd({ name: "Bread", price: 140 })}>
                Add Bread
            </button>
        </div>
    )}
    export default ShoppingCart;