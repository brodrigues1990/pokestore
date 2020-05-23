import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState();

    return (
        <CartContext.Provider value={{ cartItem, setCartItem }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    const { cartItem, setCartItem } = context;
    return { cartItem, setCartItem };
}

export default CartProvider;