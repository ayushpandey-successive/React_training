import React,{createContext,useState} from 'react';

const shoppingCartContext= createContext();

const ShoppingCartProvider = ({children}) => {
const [cart, setCart]=useState([]);
return (
    <shoppingCartContext.Provider value={[cart,setCart]}>
        {children}
    </shoppingCartContext.Provider>
)


}

export {shoppingCartContext, ShoppingCartProvider};
